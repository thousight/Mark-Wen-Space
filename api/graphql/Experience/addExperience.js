import Promise from 'bluebird'

import Experience from '../../models/Experience'
import Style from '../../models/Style'
import { handleMongoSaveError } from '../../utils/errorHandling'

export default (_, { organization,  city, state, title, time, order, image, desc, primaryColor, secondaryColor, bannerImage  }) => new Promise((resolve, reject) => {
    let style = new Style({ primaryColor, secondaryColor, bannerImage })
    style.save((styleError, savedStyle) => {
        if (handleMongoSaveError(styleError, reject)) {
            let exp = new Experience({ organization,  city, state, title, time, order, image, desc, style: savedStyle._id })
            exp.save((expError, savedExp) => {
                if (handleMongoSaveError(expError, reject)) {
                    resolve({
                        ...savedExp._doc,
                        style: savedStyle
                    })
                }
            })
        }
    })
})