import { addToCartinfoModel } from "../../models/addToCartModel.js"
import mongoose from "mongoose";
import { userinfoModel } from "../../models/signupModel.js";
import { orderinfoModel } from "../../models/orderModel.js";
import { productinfoModel } from "../../models/productModel.js";

const getOrderDetailsController = async (req, res) =>{
   const {userid} = req.body

    try{
      const res1 = await userinfoModel.findOne({_id:userid})

      const promises = await res1.orderids.map(async ele => {
        console.log(ele)
        const outputfromorder =  await orderinfoModel.findOne({orderid: ele})
        const outputfromproduct = await productinfoModel.findOne({productid: outputfromorder.productid})
        return {
          outputfromorder, outputfromproduct
        }
      });

      const res2 = await Promise.all(promises).then(function(results){
        console.log(results)
        return results
      })


      // console.log("for loop output", res2[0].outputfromorder)
      res.json({result: res2})

    }

    catch(err){
        res.json("error at server end")
        console.log(err)
    }

}


export {getOrderDetailsController}