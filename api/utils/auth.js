import jwt from 'jsonwebtoken'
import passport from 'passport'

import { authOption } from '../libs/passport'

export const createToken = user =>
  jwt.sign(
    {
      _id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      issuer: process.env.JWT_ISSUER,
      expiresIn: '7d',
    },
  )

export const filterReturningUser = user => ({
  _id: user._id,
  username: user.username,
  firstName: user.firstName,
  lastName: user.lastName,
  image: user.image,
  type: user.type,
  updatedAt: user.updatedAt,
  createdAt: user.createdAt,
})

export const protectedRoute = passport.authenticate('jwt', authOption)
