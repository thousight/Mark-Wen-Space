import Education from '../../models/Education'
import Style from '../../models/Style'
import redis, { EDU, formRedisKeyWithMongoId } from '../../libs/redis'
import { handleMongoSaveError } from '../../utils/errorHandling'

export default (
  _,
  {
    organization,
    city,
    state,
    degree,
    time,
    order,
    image,
    desc,
    primaryColor,
    secondaryColor,
    bannerImage,
  },
) =>
  new Promise((resolve, reject) => {
    const style = new Style({ primaryColor, secondaryColor, bannerImage })
    style.save((styleError, savedStyle) => {
      if (handleMongoSaveError(styleError, reject)) {
        const edu = new Education({
          organization,
          city,
          state,
          degree,
          time,
          order,
          image,
          desc,
          style: savedStyle._id,
        })
        edu.save((eduError, savedEdu) => {
          if (handleMongoSaveError(eduError, reject)) {
            const result = {
              ...savedEdu._doc,
              style: savedStyle,
            }
            redis.set(
              formRedisKeyWithMongoId(EDU, result._id),
              JSON.stringify(result),
              error => (error ? reject(error) : resolve(result)),
            )
          }
        })
      }
    })
  })
