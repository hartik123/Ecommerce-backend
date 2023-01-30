import express from 'express'
import { getProfileDetailsController } from '../controllers/getProfileDetailsController.js'
const router = express.Router()

router.post('/getprofiledetails', getProfileDetailsController)

export default router