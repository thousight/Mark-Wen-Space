import { Router } from 'express'

import emailLoginMiddleware from './emailLoginMiddleware'
import emailSignupController from './emailSignupController'
import tokenLoginMiddleware from './tokenLoginMiddleware'

import { protectedRoute } from '../../utils/auth'

const router = Router()

router.get('/login/token', tokenLoginMiddleware)
router.post('/login/email', emailLoginMiddleware)
router.post('/signup/email', protectedRoute, emailSignupController)

export default router
