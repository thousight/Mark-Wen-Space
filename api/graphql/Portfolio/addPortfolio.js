import Portfolio from '../../models/Portfolio'
import Style from '../../models/Style'
import redis, { PORT, formRedisKeyWithMongoId } from '../../libs/redis'
import { handleMongoSaveError } from '../../utils/errorHandling'

export default (
  _,
  {
    title,
    logo,
    time,
    desc,
    keywords,
    categories,
    order,
    primaryColor,
    secondaryColor,
    bannerImage,
  },
) =>
  new Promise((resolve, reject) => {
    const style = new Style({ primaryColor, secondaryColor, bannerImage })
    style.save((styleError, savedStyle) => {
      if (handleMongoSaveError(styleError, reject)) {
        const portfolio = new Portfolio({
          title,
          logo,
          time,
          desc,
          keywords,
          categories,
          order,
          style: savedStyle._id,
        })
        portfolio.save((portfolioError, savedPortfolio) => {
          if (handleMongoSaveError(portfolioError, reject)) {
            const result = {
              ...savedPortfolio._doc,
              style: savedStyle,
            }
            redis.set(
              formRedisKeyWithMongoId(PORT, result._id),
              JSON.stringify(result),
              error => (error ? reject(error) : resolve(result)),
            )
          }
        })
      }
    })
  })
