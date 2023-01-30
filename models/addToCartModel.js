import mongoose from "mongoose";

const addToCartinfoSchema = mongoose.Schema({
  userid: { type: mongoose.ObjectId },
  productid: { type: Number },
  count: {type: Number},
});


const addToCartinfoModel = mongoose.model("addToCartinfo", addToCartinfoSchema)

export {addToCartinfoModel}
