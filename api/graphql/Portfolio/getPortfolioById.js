

import Portfolio from '../../models/Portfolio'
import redis, { PORT, formRedisKeyWithMongoId, checkRedisError } from '../../libs/redis'
import { isMongoId } from '../../libs/mongoose'

export default (_, { _id  }) => new Promise((resolve, reject) => {
    if (isMongoId(_id)) {
        redis.get(formRedisKeyWithMongoId(PORT, _id), (redisError, redisResult) => {
            if (checkRedisError(redisError, reject)) {
                if (redisResult) {
                    resolve(JSON.parse(redisResult))
                } else {
                    Portfolio.findById(_id).populate('style').exec((error, result) => {
                        error || !result ? reject(error) : resolve(result)
                    })
                }
            }
        })
    } else {
        reject({ message: 'Invalid mongo ID' })
    }
})