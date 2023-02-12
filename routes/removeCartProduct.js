import express from 'express';
import { removeCartProductController } from '../controllers/removeCartProductController.js';
const router = express.Router()

router.post('/removecartproduct', removeCartProductController);

export default router