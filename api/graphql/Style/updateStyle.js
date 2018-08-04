import Style from '../../models/Style'
import { isMongoId } from '../../libs/mongoose'

export default (_, style) => new Promise((resolve, reject) => {
    if (isMongoId(style._id)) {
        Style.findByIdAndUpdate(style._id, style, { new: true }).exec((error, result) => {
            error || !result ? reject(error) : resolve(result)
        })
    } else {
        reject({ message: 'Invalid mongo ID' })
    }
})