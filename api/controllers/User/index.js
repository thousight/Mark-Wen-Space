import { Router } from 'express'
import passport from 'passport'

import emailLoginMiddleware from './emailLoginMiddleware'
import emailSignupController from './emailSignupController'

const router = Router()

router.post('/login/email', emailLoginMiddleware)
router.post(
  '/signup/email',
  passport.authenticate('jwt', { session: false }),
  emailSignupController,
)

export default router
