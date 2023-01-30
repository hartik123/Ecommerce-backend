import express from 'express';
import { emailVerificationController } from '../controllers/emailVerificationController.js';
import { otpVerificationController } from '../controllers/otpVerificationController.js';
const router = express.Router()

router.post('/emailverification', emailVerificationController)

router.post('/otpverification', otpVerificationController)

export default router