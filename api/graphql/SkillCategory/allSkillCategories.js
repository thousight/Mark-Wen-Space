

import SkillCategory from '../../models/SkillCategory'
import redis, { SKILLCATS, formRedisKeyWithMongoId, checkRedisError } from '../../libs/redis'
import { handleMongoSaveError } from '../../utils/errorHandling'

export default (_, {  }) => new Promise((resolve, reject) => {
    redis.scan('0', 'MATCH', formRedisKeyWithMongoId(SKILLCATS, '*'), 'COUNT', 50, (error, reply) => {
        if (error) {
            reject(error)
        } else if (!reply[1] || reply[1].length <= 0) {
            SkillCategory.find({}).populate('skills').exec((mongoError, result) => {
                if (handleMongoSaveError(mongoError, reject)) {
                    if (!result || result.length <= 0) {
                        resolve(result)
                    } else {
                        result.forEach(skillCat => {
                            redis.set(formRedisKeyWithMongoId(SKILLCATS, skillCat._id), JSON.stringify(skillCat))
                        })
                        resolve(result)
                    }
                }
            })
        } else {
            redis.mget(reply[1], (mGetError, mGetResult) => {
                if (checkRedisError(mGetError, reject)) {
                    resolve(mGetResult.map(result => JSON.parse(result)))
                }
            })
        }
    })
})