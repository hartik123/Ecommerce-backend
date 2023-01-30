import express from 'express'
import { deleteProductController } from '../controllers/deleteProductController.js'
const router = express.Router()

router.post('/deleteproduct', deleteProductController)

export default router