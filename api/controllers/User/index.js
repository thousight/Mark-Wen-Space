import { Router } from 'express'

import emailLoginMiddleware from './emailLoginMiddleware'
import emailSignupController from './emailSignupController'

import { protectedRoute } from '../../utils/auth'

const router = Router()

router.post('/login/email', emailLoginMiddleware)
router.post('/signup/email', protectedRoute, emailSignupController)

export default router
