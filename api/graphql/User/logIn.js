import User from '../../models/User'
import redis, {
  USER,
  formRedisKeyWithMongoId,
  checkRedisError,
} from '../../libs/redis'
import { handleMongoSaveError } from '../../utils/errorHandling'

export default (_, { username, password }) =>
  new Promise((resolve, reject) => {
    
  })
