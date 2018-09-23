import parallel from 'async/parallel'

import Portfolio from '../../models/Portfolio'
import Style from '../../models/Style'
import redis, { PORT, formRedisKeyWithMongoId } from '../../libs/redis'
import { isMongoId } from '../../libs/mongoose'

export default (_, { _id, styleId }) =>
  new Promise((resolve, reject) => {
    if (isMongoId(_id) && isMongoId(styleId)) {
      parallel(
        {
          portfolio: callback =>
            Portfolio.findByIdAndRemove(_id, (error, result) =>
              callback(error, result),
            ),
          style: callback =>
            Style.findByIdAndRemove(styleId, (error, result) =>
              callback(error, result),
            ),
        },
        (error, result) => {
          if (error || !result || !result.portfolio || !result.style) {
            reject(error)
          } else {
            redis.del(formRedisKeyWithMongoId(PORT, _id))
            resolve({
              ...result.portfolio._doc,
              style: result.style,
            })
          }
        },
      )
    } else {
      reject({ message: 'Invalid mongo ID' })
    }
  })
