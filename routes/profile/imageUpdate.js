import express from 'express';
import { userImageController } from '../../controllers/userImageController.js';
import multer from 'multer'
const router = express.Router()

// ************************************
const upload = multer({
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload a valid image file'))
        }
        cb(undefined, true)
    }
})


router.post('/updateimage', upload.single('upload'), userImageController, (error, req, res, next) => {
    res.status(400).send({error: error.message})
    })

export default router