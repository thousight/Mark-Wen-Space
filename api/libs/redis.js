import redisPackage from 'redis'

import config from '../../config'

const redis = redisPackage.createClient(process.env.REDIS_URL ? process.env.REDIS_URL : config.REDIS_URL)

export const ALL_STATIC_CONTENT = 'ALL_STATIC_CONTENT'
export const EDU = 'EDU'
export const EXP = 'EXP'
export const PORT = 'PORT'
export const SKILLS = 'SKILLS'

export const checkRedisError = (key, error, res) => {
    if (error) {
        res.status(500).json({ message: `Something is wrong when fetching ${key} from redis` })
        return false
    }
    return true
}

export default redis