import parallel from 'async/parallel'

import SkillCategory from '../../models/SkillCategory'
import Skill from '../../models/Skill'
import redis, { SKILLCATS, formRedisKeyWithMongoId } from '../../libs/redis'
import { isMongoId } from '../../libs/mongoose'

export default (_, { _id }) => new Promise((resolve, reject) => {
    if (isMongoId(_id)) {
        SkillCategory.findById(_id)
        .populate('skills')
        .exec((error, skillCat) => {
            if (error) {
                reject(error)
            } else {
                let { skills } = skillCat

                parallel({
                    skillCat: callback => skillCat.remove((error, removed) => callback(error, removed)),
                    skills: callback => Skill.remove({ _id: { $in: skills.map(skill => skill._id)} }, (error, result) => callback(error, result))
                }, (error, result) => {
                    if (error || !result || !result.skillCat || !result.style) {
                        reject(error)
                    } else {
                        redis.del(formRedisKeyWithMongoId(SKILLCATS, _id))
                        resolve({
                            ...result.skillCat._doc,
                            skills: result.skills
                        })
                    }
                })
            }
        })
    } else {
        reject({ message: 'Invalid mongo ID' })
    }
})