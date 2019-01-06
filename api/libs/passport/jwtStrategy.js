import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'

import User from '../../models/User'

const jwtStrategy = new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JTW_SECRET,
  },
  (jwtPayload, done) => {
    User.findById(jwtPayload._id, (err, user) => {
      if (err) {
        return done(err)
      }
      if (!user) {
        return done(null, false, { message: 'Invalid username in token.' })
      }
      return done(null, user)
    })
  },
)

export default jwtStrategy
