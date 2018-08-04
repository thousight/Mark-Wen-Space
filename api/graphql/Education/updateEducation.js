import Education from '../../models/Education'
import redis, { EDU, formRedisKeyWithMongoId } from '../../libs/redis'
import { isMongoId } from '../../libs/mongoose'

export default (_, edu) => new Promise((resolve, reject) => {
    if (isMongoId(edu._id)) {
        Education.findByIdAndUpdate(edu._id, edu, { new: true }).exec((updateError, result) => {
            if (updateError || !result) {
                reject(updateError)
            } else {
                redis.set(formRedisKeyWithMongoId(EDU, result._id), JSON.stringify(result), (error) => {
                    error ? reject(error) : resolve(result)
                })
            }
        })
    } else {
        reject({ message: 'Invalid mongo ID' })
    }
})