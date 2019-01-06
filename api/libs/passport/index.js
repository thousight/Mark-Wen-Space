import passport from 'passport'

import User from '../../models/User'
import localStrategy from './localStrategy'
import jtwStrategy from './jwtStrategy'

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

const usePassport = app => {
  app.use(passport.initialize())
  app.use(passport.session())
  passport.use(localStrategy)
  passport.use(jtwStrategy)
}

export default usePassport
