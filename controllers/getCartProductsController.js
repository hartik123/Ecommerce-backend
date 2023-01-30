import mongoose from 'mongoose';
import {addToCartinfoModel} from "../models/addToCartModel.js"
import { productinfoModel } from '../models/productModel.js';

const getCartProductsController = async (req, res) =>{

    console.log(req.body);

try{
  console.log(req.body);
  const results = await addToCartinfoModel.aggregate([
    {
      $lookup:{
        from: "productinfos",
        localField:"productid",
        foreignField:"productid",
        as:"productdetails"
      }
    },
    {
      $unwind: "$productdetails"
  },
  {
      $match:{
        $and:[
          {"userid": mongoose.Types.ObjectId(req.body.userid)},
        {"productdetails": {
          $ne:[]
        }}
        ]
      }
    },
    {
      $project: {
        _id:0,
        userid: 1,
        productid: 1,
        count: 1,
        productdetails: 1
      }
    }
  ]);

// console.log("results",results)
  if (results != null) {
      res.json({
        result: results,
      });
    } else {
      res.json({ result: "No data" });
    }
}

catch(err){
  console.log("Error in fetching data")
  // res.status(500);
  res.json({result: "Error Occured in fetching data"})
}

}

export {getCartProductsController}