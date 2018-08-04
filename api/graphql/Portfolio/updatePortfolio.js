import Portfolio from '../../models/Portfolio'
import redis, { PORT, formRedisKeyWithMongoId } from '../../libs/redis'
import { isMongoId } from '../../libs/mongoose'

export default (_, portfolio) => new Promise((resolve, reject) => {
    if (isMongoId(portfolio._id)) {
        Portfolio.findByIdAndUpdate(portfolio._id, portfolio, { new: true }).exec((updateError, result) => {
            if (updateError || !result) {
                reject(updateError)
            } else {
                redis.set(formRedisKeyWithMongoId(PORT, result._id), JSON.stringify(result), (error) => {
                    error ? reject(error) : resolve(result)
                })
            }
        })
    } else {
        reject({ message: 'Invalid mongo ID' })
    }
})