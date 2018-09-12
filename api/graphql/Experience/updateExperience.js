import Experience from '../../models/Experience'
import redis, { EXP, formRedisKeyWithMongoId } from '../../libs/redis'
import { isMongoId } from '../../libs/mongoose'

export default (_, exp) => new Promise((resolve, reject) => {
    if (isMongoId(exp._id)) {
        Experience.findByIdAndUpdate(exp._id, exp, { new: true }).exec((updateError, result) => {
            if (updateError || !result) {
                reject(updateError)
            } else {
                result.populate('style', (_, populateResult) => {
                    redis.set(formRedisKeyWithMongoId(EXP, populateResult._id), JSON.stringify(populateResult), (error) => {
                        error ? reject(error) : resolve(populateResult)
                    })
                })
            }
        })
    } else {
        reject({ message: 'Invalid mongo ID' })
    }
})