import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import login from './routes/login.js'
import signup from './routes/signup.js'
import profile from './routes/profile.js'
import imageUpdate from './routes/profile/imageUpdate.js'

import addToCart from './routes/addToCart.js'
import addProduct from './routes/addProduct.js'
import getProducts from './routes/getProducts.js'
import getCartProducts from './routes/getCartProducts.js'
import emailVerification from './routes/emailVerification.js'
import deleteProduct from './routes/deleteProduct.js'
import getProfileDetails from './routes/getProfileDetails.js'
import removeCartProduct from './routes/removeCartProduct.js'

import createOrder from './routes/order/createOrder.js'
import getOrderDetails from './routes/order/getOrderDetails.js'
import getOrderDetailsAdmin from './routes/order/getOrderDetailsAdmin.js'
import changeOrderStatus from './routes/order/changeOrderStatus.js'
import mongoose from 'mongoose'
import connectDB from './db/connectDB.js'
import fs from "fs";
import path from 'path'
import * as dotenv from 'dotenv'
dotenv.config()


const app = express()
const port = process.env.PORT || '3000'

connectDB()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use('/api', login)
app.use('/api', signup)
app.use('/api', profile)
app.use('/api', imageUpdate)

app.use('/api', addToCart)
app.use('/api', addProduct)
app.use('/api', getProducts)
app.use('/api', getCartProducts)
app.use('/api', emailVerification)
app.use('/api', deleteProduct)
app.use('/api', getProfileDetails)
app.use('/api', createOrder)
app.use('/api', getOrderDetails)
app.use('/api', getOrderDetailsAdmin)
app.use('/api', changeOrderStatus)
app.use('/api', removeCartProduct)





// app.post("/image",
//   bodyParser.raw({type: ["image/jpeg", "image/png"], limit: "5mb"}),
//   (req, res) => {
//     try {
//       console.log(req.body);
//       fs.writeFile("image.jpeg", req.body, (error) => {
//         if (error) {
//           throw error;
//         }
//       });

//       res.sendStatus(200);
//     } catch (error) {
//       res.sendStatus(500);
//     }
//   });



app.listen(port, ()=>{
    console.log(`The server is running at ${port}`)
})