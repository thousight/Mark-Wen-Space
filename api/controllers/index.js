import { Router } from 'express'

import userRouter from './User'

const router = Router()

router.get('/', (_, res) => {
  res.status(200).send({
    success: true,
    message: 'Mark Wen Space server API reached successfully',
  })
})

router.use('/user', userRouter)

const useAPI = app => {
  app.use('/api', router)
}

export default useAPI
