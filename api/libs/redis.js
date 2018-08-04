import redisPackage from 'redis'

import config from '../../config'

const redis = redisPackage.createClient(process.env.REDIS_URL ? process.env.REDIS_URL : config.REDIS_URL)

export const EDU = 'EDU'
export const EXP = 'EXP'
export const PORT = 'PORT'
export const SKILLS = 'SKILLS'

export const formRedisKeyWithMongoId = (key, id) => `${key}: ${id}`

export const checkRedisError = (error, reject) => {
    if (error) {
        reject(error)
        return false
    }
    return true
}

export default redis