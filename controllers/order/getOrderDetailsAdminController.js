import { orderinfoModel } from "../../models/orderModel.js"
import { productinfoModel } from "../../models/productModel.js";

const getOrderDetailsAdminController = async (req, res) =>{

         try{
           const res1 = await orderinfoModel.find({})
     
     
           const promises = await res1.map(async order =>{
            const outputfromproduct = await productinfoModel.findOne({productid:order.productid})
            return {
                outputfromorder: order,
                outputfromproduct
            }
           })

           const res2 = await Promise.all(promises).then(function(results){
             console.log(results)
             return results
           })
     
     
        //    console.log("for loop output", res2[0].outputfromorder)
           res.json({result: res2})
     
         }
     
         catch(err){
             res.json("error at server end")
             console.log(err)
         }

}

export {getOrderDetailsAdminController}