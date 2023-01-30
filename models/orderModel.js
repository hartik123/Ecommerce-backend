import mongoose from "mongoose";

const orderinfoSchema = mongoose.Schema({
    orderid: {type: String},
    productid: {type: Number},
    count:{type: Number},
    orderamount: {type: Number},
    orderstatus: {type:String, default: "Received"}
    
})

const orderinfoModel = mongoose.model("order", orderinfoSchema)

export {orderinfoModel}