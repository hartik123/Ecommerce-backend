import express from 'express';
import { createOrderController } from '../../controllers/order/createOrderController.js';
const router = express.Router()

router.put("/createorder", createOrderController)

export default router