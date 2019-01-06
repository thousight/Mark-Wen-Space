import passport from 'passport'

import { createToken, filterReturningUser } from '../../utils/auth'
import { mongoErrorMsg, mongoNotFoundMsg } from '../../constants/messages'

const emailLoginMiddleware = (req, res) =>
  passport.authenticate('local', { session: false }, (error, user) => {
    if (error) {
      console.log({ error })
      return res.status(400).json({
        message: mongoErrorMsg('User'),
        error,
      })
    }
    if (!user) {
      return res.status(404).json({ message: mongoNotFoundMsg('User') })
    }
    req.login(user, { session: false }, error => {
      if (error) {
        res.send(error)
      }
      res.set('token', createToken(user))
      return res.status(200).json(filterReturningUser(user))
    })
  })(req, res)

export default emailLoginMiddleware
