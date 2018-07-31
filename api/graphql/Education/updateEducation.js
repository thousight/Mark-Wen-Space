import Education from '../../models/Education'
import { isMongoId } from '../../libs/mongoose'

export default (_, edu) => new Promise((resolve, reject) => {
    if (isMongoId(edu._id)) {
        Education.findByIdAndUpdate(edu._id, edu, { new: true }).exec((error, result) => {
            error || !result ? reject(error) : resolve(result)
        })
    } else {
        reject({ message: 'Invalid mongo ID' })
    }
})