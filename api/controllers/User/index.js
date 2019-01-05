import { Router } from 'express'
import passport from 'passport'

import emailSignupController from './emailSignupController'

const router = Router()

router.post('/login/email', passport.authenticate('local'))
router.post('/signup/email', emailSignupController)

export default router
