import express from 'express';
const router = express.Router()
import { getOrderDetailsController } from '../../controllers/order/getOrderDetailsController.js';

router.post('/getorderdetails', getOrderDetailsController)

export default router