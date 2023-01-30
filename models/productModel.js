import mongoose from "mongoose";

const productinfoSchema = mongoose.Schema({
    productimage: {type:Buffer},
    productid: {type: Number},
    productname: {type: String},
    productprice:{type: Number}
})

const productinfoModel = mongoose.model("productinfo", productinfoSchema)

export {productinfoModel}