

import Portfolio from '../../models/Portfolio'
import Style from '../../models/Style'
import redis, { PORT, formRedisKeyWithMongoId } from '../../libs/redis'
import { handleMongoSaveError } from '../../utils/errorHandling'

export default (_, { title,  logo, time, desc, keywords, categories, order, primaryColor, secondaryColor, bannerImage  }) => new Promise((resolve, reject) => {
    let style = new Style({ primaryColor, secondaryColor, bannerImage })
    style.save((styleError, savedStyle) => {
        if (handleMongoSaveError(styleError, reject)) {
            let portfolio = new Portfolio({ title,  logo, time, desc, keywords, categories, order, style: savedStyle._id })
            portfolio.save((portfolioError, savedPortfolio) => {
                if (handleMongoSaveError(portfolioError, reject)) {
                    let result = {
                        ...savedPortfolio._doc,
                        style: savedStyle
                    }
                    redis.set(formRedisKeyWithMongoId(PORT, result._id), JSON.stringify(result), (error) => {
                        error ? reject(error) : resolve(result)
                    })
                }
            })
        }
    })
})