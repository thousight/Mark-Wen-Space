import Education from '../../models/Education'
import redis, {
  EDU,
  formRedisKeyWithMongoId,
  checkRedisError,
} from '../../libs/redis'
import { handleMongoSaveError } from '../../utils/errorHandling'

export default () =>
  new Promise((resolve, reject) => {
    redis.scan(
      '0',
      'MATCH',
      formRedisKeyWithMongoId(EDU, '*'),
      'COUNT',
      50,
      (error, reply) => {
        if (error) {
          reject(error)
        } else if (!reply[1] || reply[1].length <= 0) {
          Education.find({})
            .populate('style')
            .exec((mongoError, result) => {
              if (handleMongoSaveError(mongoError, reject)) {
                if (!result || result.length <= 0) {
                  resolve(result)
                } else {
                  result.forEach(edu => {
                    redis.set(
                      formRedisKeyWithMongoId(EDU, edu._id),
                      JSON.stringify(edu),
                    )
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
      },
    )
  })
