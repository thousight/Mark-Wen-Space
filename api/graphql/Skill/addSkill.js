import Skill from '../../models/Skill'
import { isMongoId } from '../../libs/mongoose'

export default (_, skill) => new Promise((resolve, reject) => {
    let newSkill = new Skill(skill)
    newSkill.save((saveError, savedSkill) => {
        saveError ? reject(saveError) : resolve(savedSkill)
    })
})