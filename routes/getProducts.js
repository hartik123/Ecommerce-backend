import express from "express";
import { getProductsController } from "../controllers/getProductsController.js";
const router = express.Router()

router.get('/getproducts', getProductsController)

export default router