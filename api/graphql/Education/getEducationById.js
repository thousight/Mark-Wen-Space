import Promise from 'bluebird'

import Education from '../../models/Education'
import { isMongoId } from '../../libs/mongoose'

export default (_, { _id  }) => new Promise((resolve, reject) => {
    if (isMongoId(_id)) {
        Education.findById(_id).populate('style').exec((error, result) => {
            error || !result ? reject(error) : resolve(result)
        })
    } else {
        reject({ message: 'Invalid mongo ID' })
    }
})