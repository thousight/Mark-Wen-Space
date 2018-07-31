import parallel from 'async/parallel'

import Education from '../../models/Education'
import Style from '../../models/Style'
import { isMongoId } from '../../libs/mongoose'

export default (_, { _id, styleId }) => new Promise((resolve, reject) => {
    if (isMongoId(_id) && isMongoId(styleId)) {
        parallel({
            edu: callback => Education.findByIdAndRemove(_id, (error, result) => callback(error, result)),
            style: callback => Style.findByIdAndRemove(styleId, (error, result) => callback(error, result))
        }, (error, result) => {
            error || !result || !result.edu || !result.style ? reject(error) : resolve({
                ...result.edu._doc,
                style: result.style
            })
        })
    } else {
        reject({ message: 'Invalid mongo ID' })
    }
})