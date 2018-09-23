import Education from '../../models/Education'
import redis, { EDU, formRedisKeyWithMongoId } from '../../libs/redis'
import { isMongoId } from '../../libs/mongoose'

export default (_, edu) =>
  new Promise((resolve, reject) => {
    if (isMongoId(edu._id)) {
      Education.findByIdAndUpdate(edu._id, edu, { new: true }).exec(
        (updateError, result) => {
          if (updateError || !result) {
            reject(updateError)
          } else {
            result.populate('style', (populateError, populatedResult) => {
              if (!populateError) {
                redis.set(
                  formRedisKeyWithMongoId(EDU, populatedResult._id),
                  JSON.stringify(populatedResult),
                  error => (error ? reject(error) : resolve(populatedResult)),
                )
              } else {
                reject(populateError)
              }
            })
          }
        },
      )
    } else {
      reject({ message: 'Invalid mongo ID' })
    }
  })
