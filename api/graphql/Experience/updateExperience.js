import Experience from '../../models/Experience'
import redis, { EXP, formRedisKeyWithMongoId } from '../../libs/redis'
import { isMongoId } from '../../libs/mongoose'

export default (_, exp) => new Promise((resolve, reject) => {
    if (isMongoId(exp._id)) {
        Experience.findByIdAndUpdate(exp._id, exp, { new: true }).exec((updateError, result) => {
            if (updateError || !result) {
                reject(updateError)
            } else {
                redis.set(formRedisKeyWithMongoId(EXP, result._id), JSON.stringify(result), (error) => {
                    error ? reject(error) : resolve(result)
                })
            }
        })
    } else {
        reject({ message: 'Invalid mongo ID' })
    }
})