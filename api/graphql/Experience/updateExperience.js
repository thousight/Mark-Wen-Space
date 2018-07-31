import Experience from '../../models/Experience'
import { isMongoId } from '../../libs/mongoose'

export default (_, exp) => new Promise((resolve, reject) => {
    if (isMongoId(exp._id)) {
        Experience.findByIdAndUpdate(exp._id, exp, { new: true }).exec((error, result) => {
            error || !result ? reject(error) : resolve(result)
        })
    } else {
        reject({ message: 'Invalid mongo ID' })
    }
})