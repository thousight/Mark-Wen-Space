import SkillCategory from '../../models/SkillCategory'
import redis, {
  SKILLCATS,
  formRedisKeyWithMongoId,
  checkRedisError,
} from '../../libs/redis'
import { isMongoId } from '../../libs/mongoose'

export default (_, { _id }) =>
  new Promise((resolve, reject) => {
    if (isMongoId(_id)) {
      redis.get(
        formRedisKeyWithMongoId(SKILLCATS, _id),
        (redisError, redisResult) => {
          if (checkRedisError(redisError, reject)) {
            if (redisResult) {
              resolve(JSON.parse(redisResult))
            } else {
              SkillCategory.findById(_id)
                .populate('skills')
                .exec(
                  (error, result) =>
                    error || !result ? reject(error) : resolve(result),
                )
            }
          }
        },
      )
    } else {
      reject({ message: 'Invalid mongo ID' })
    }
  })
