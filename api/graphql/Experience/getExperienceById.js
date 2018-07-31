import Promise from 'bluebird'

import Experience from '../../models/Experience'
import { isMongoId } from '../../libs/mongoose'

export default (_, { _id  }) => new Promise((resolve, reject) => {
    if (isMongoId(_id)) {
        Experience.findById(_id).populate('style').exec((error, result) => {
            error || !result ? reject(error) : resolve(result)
        })
    } else {
        reject({ message: 'Invalid mongo ID' })
    }
})