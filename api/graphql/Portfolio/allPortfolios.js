import Portfolio from '../../models/Portfolio'
import redis, { PORT, formRedisKeyWithMongoId, checkRedisError } from '../../libs/redis'
import { handleMongoSaveError } from '../../utils/errorHandling'

export default (_, {  }) => new Promise((resolve, reject) => {
    redis.scan('0', 'MATCH', formRedisKeyWithMongoId(PORT, '*'), 'COUNT', 50, (error, reply) => {
        if (error) {
            reject(error)
        } else if (!reply[1] || reply[1].length <= 0) {
            Portfolio.find({}).populate('style').exec((mongoError, result) => {
                if (handleMongoSaveError(mongoError, reject)) {
                    if (!result || result.length <= 0) {
                        resolve(result)
                    } else {
                        result.forEach(portfolio => {
                            redis.set(formRedisKeyWithMongoId(PORT, portfolio._id), JSON.stringify(portfolio))
                        })
                        resolve(result)
                    }
                }
            })
        } else {
            redis.mget(reply[1], (mGetError, mGetResult) => {
                if (checkRedisError(mGetError, reject)) {
                    resolve(mGetResult.map(result => JSON.parse(result)))
                }
            })
        }
    })
})