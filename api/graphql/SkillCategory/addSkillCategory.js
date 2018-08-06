
import parallel from 'async/parallel'

import SkillCategory from '../../models/SkillCategory'
import Skill from '../../models/Skill'
import redis, { SKILLCATS, formRedisKeyWithMongoId } from '../../libs/redis'
import { handleMongoSaveError } from '../../utils/errorHandling'

export default (_, { categoryTitle,  order, color, skills  }) => new Promise((resolve, reject) => {
    parallel(skills.map(skill => callback => {
        let newSkill = new Skill(skill)
        newSkill.save((skillError, savedSkill) => callback(skillError, savedSkill))
    }), (parallelError, parallelResults) => {
        if (handleMongoSaveError(parallelError, reject)) {
            let skillCat = new SkillCategory({ categoryTitle,  order, color, skills: parallelResults.map(skill => skill._id) })
            skillCat.save((skillCatError, savedSkillCategory) => {
                if (handleMongoSaveError(skillCatError, reject)) {
                    let result = {
                        ...savedSkillCategory._doc,
                        skills: parallelResults
                    }
                    redis.set(formRedisKeyWithMongoId(SKILLCATS, result._id), JSON.stringify(result), (error) => {
                        error ? reject(error) : resolve(result)
                    })
                }
            })
        }
    })
})