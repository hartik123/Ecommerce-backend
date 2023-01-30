import express from 'express'
import { loginController } from '../controllers/loginController.js'
const router = express.Router()


router.all('/login', loginController )

export default router