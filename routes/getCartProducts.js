import express from 'express';
const router = express.Router()
import { getCartProductsController } from '../controllers/getCartProductsController.js';

router.post('/getcartproducts', getCartProductsController)

export default router