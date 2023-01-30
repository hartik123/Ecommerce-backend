import express from 'express'
import multer from 'multer'
import { signupController } from '../controllers/signupController.js'
const router = express.Router()


// ************************************
const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload a valid image file'))
        }
        cb(undefined, true)
    }
})


router.post('/signup', upload.single('upload'), signupController, (error, req, res, next) => {
    res.status(400).send({error: error.message})
    })

export default router