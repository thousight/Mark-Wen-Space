import { Router } from 'express'

import emailSignupController from './emailSignupController'
import passportLoginController from './passportLoginController'

import { protectedRoute } from '../../utils/auth'

const router = Router()

router.get('/login/token', passportLoginController('jwt'))
router.post('/login/email', passportLoginController('local'))
router.post('/signup/email', protectedRoute, emailSignupController)

export default router
