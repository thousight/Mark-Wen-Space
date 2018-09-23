import Skill from '../../models/Skill'

export default (_, skill) =>
  new Promise((resolve, reject) => {
    const newSkill = new Skill(skill)
    newSkill.save(
      (saveError, savedSkill) =>
        saveError ? reject(saveError) : resolve(savedSkill),
    )
  })
