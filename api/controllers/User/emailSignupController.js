import User from '../../models/User'

import { createToken, filterReturningUser } from '../../utils/auth'
import { validateEmail } from '../../utils/emailTransporter'
import { invalidUsername, invalidPassword } from '../../constants/messages'

const emailSignupController = (req, res) => {
  const { username, password } = req.body

  if (!validateEmail(username)) {
    return res.status(400).json({ message: invalidUsername })
  }

  if (!password || password.length < 8) {
    return res.status(400).json({ message: invalidPassword })
  }

  new User(req.body).save((error, user) => {
    if (error) {
      console.log({ error, user })
      res.status(501).json({
        message: 'Error occurs when creating user.',
        error,
      })
    } else if (!user) {
      res.status(501).json({
        message: 'User could not be created.',
      })
    } else {
      res.set('token', createToken(user))
      res.status(200).json(filterReturningUser(user))
    }
  })
}

export default emailSignupController
