import SkillCategory from '../../models/SkillCategory'
import redis, { SKILLCATS, formRedisKeyWithMongoId } from '../../libs/redis'
import { isMongoId } from '../../libs/mongoose'

export default (_, skillCat) => new Promise((resolve, reject) => {
    if (isMongoId(skillCat._id)) {
        SkillCategory.findByIdAndUpdate(skillCat._id, skillCat, { new: true }).exec((updateError, result) => {
            if (updateError || !result) {
                reject(updateError)
            } else {
                redis.set(formRedisKeyWithMongoId(SKILLCATS, result._id), JSON.stringify(result), (error) => {
                    error ? reject(error) : resolve(result)
                })
            }
        })
    } else {
        reject({ message: 'Invalid mongo ID' })
    }
})