import Skill from '../../models/Skill'
import { isMongoId } from '../../libs/mongoose'

export default (_, skill) => new Promise((resolve, reject) => {
    if (isMongoId(skill._id)) {
        Skill.findByIdAndUpdate(skill._id, skill, { new: true }).exec((error, result) => {
            error || !result ? reject(error) : resolve(result)
        })
    } else {
        reject({ message: 'Invalid mongo ID' })
    }
})