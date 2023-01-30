import express from 'express'
import { getOrderDetailsAdminController} from '../../controllers/order/getOrderDetailsAdminController.js'
const router = express.Router()

router.get('/getorderdetailsadmin', getOrderDetailsAdminController)

export default router