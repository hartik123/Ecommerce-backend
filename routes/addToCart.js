import express from 'express'
import {addToCartController} from '../controllers/addToCartController.js' 
import { updateCartDataController } from '../controllers/updateCartDataController.js'
const router = express.Router()

router.post('/addtocart', addToCartController)
router.post('/updatecartdata', updateCartDataController)


export default router
