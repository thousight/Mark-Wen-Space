import parallel from 'async/parallel'

import Experience from '../../models/Experience'
import Style from '../../models/Style'
import redis, { EXP, formRedisKeyWithMongoId } from '../../libs/redis'
import { isMongoId } from '../../libs/mongoose'

export default (_, { _id, styleId }) =>
  new Promise((resolve, reject) => {
    if (isMongoId(_id) && isMongoId(styleId)) {
      parallel(
        {
          exp: callback =>
            Experience.findByIdAndRemove(_id, (error, result) =>
              callback(error, result),
            ),
          style: callback =>
            Style.findByIdAndRemove(styleId, (error, result) =>
              callback(error, result),
            ),
        },
        (error, result) => {
          if (error || !result || !result.exp || !result.style) {
            reject(error)
          } else {
            redis.del(formRedisKeyWithMongoId(EXP, _id))
            resolve({
              ...result.exp._doc,
              style: result.style,
            })
          }
        },
      )
    } else {
      reject({ message: 'Invalid mongo ID' })
    }
  })
