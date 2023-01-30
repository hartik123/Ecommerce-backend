import express from 'express';
import { changeOrderStatusController } from '../../controllers/order/changeOrderStatusController.js';
const router = express.Router()

router.post('/changeorderstatus', changeOrderStatusController)

export default router