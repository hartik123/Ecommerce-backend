import express from "express";
import { profileController } from "../controllers/profileController.js";
const router = express.Router()

router.get('/profile', profileController)

export default router