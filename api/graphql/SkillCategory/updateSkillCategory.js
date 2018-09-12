import SkillCategory from '../../models/SkillCategory'
import redis, { SKILLCATS, formRedisKeyWithMongoId } from '../../libs/redis'
import { isMongoId } from '../../libs/mongoose'

export default (_, skillCat) => new Promise((resolve, reject) => {
    if (isMongoId(skillCat._id)) {
        SkillCategory.findByIdAndUpdate(skillCat._id, skillCat, { new: true }).exec((updateError, result) => {
            if (updateError || !result) {
                reject(updateError)
            } else {
                result.populate('skills', (_, populateResult) => {
                    redis.set(formRedisKeyWithMongoId(SKILLCATS, populateResult._id), JSON.stringify(populateResult), (error) => {
                        error ? reject(error) : resolve(populateResult)
                    })
                })
            }
        })
    } else {
        reject({ message: 'Invalid mongo ID' })
    }
})