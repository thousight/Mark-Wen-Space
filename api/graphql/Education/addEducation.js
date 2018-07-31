import Promise from 'bluebird'

import Education from '../../models/Education'
import Style from '../../models/Style'
import { handleMongoSaveError } from '../../utils/errorHandling'

export default (_, { organization,  city, state, degree, time, order, image, desc, primaryColor, secondaryColor, bannerImage  }) => new Promise((resolve, reject) => {
    let style = new Style({ primaryColor, secondaryColor, bannerImage })
    style.save((styleError, savedStyle) => {
        if (handleMongoSaveError(styleError, reject)) {
            let edu = new Education({ organization,  city, state, degree, time, order, image, desc, style: savedStyle._id })
            edu.save((eduError, savedEdu) => {
                if (handleMongoSaveError(eduError, reject)) {
                    resolve({
                        ...savedEdu._doc,
                        style: savedStyle
                    })
                }
            })
        }
    })
})