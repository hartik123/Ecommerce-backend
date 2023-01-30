import {addProductController} from '../controllers/addProductController.js';
import express from 'express'
import multer from 'multer';
const router = express.Router()


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

router.post('/addproduct', upload.single('upload'), addProductController, (error, req, res, next) => {
    res.status(400).send({error: error.message})
    })


// router.post('/addproduct', (req, res)=>{
//     res.json({ addProductStatus: "success" })
// }
//     )

export default router
