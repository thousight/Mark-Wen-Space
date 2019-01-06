import { Strategy as LocalStrategy } from 'passport-local'

import User from '../../models/User'

const localStrategy = new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) {
      console.log(err)
      return done(err)
    }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' })
    }
    if (!user.comparePassword(password)) {
      return done(null, false, { message: 'Incorrect password.' })
    }
    return done(null, user)
  })
})

export default localStrategy
