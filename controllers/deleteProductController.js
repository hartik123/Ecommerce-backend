import { addToCartinfoModel } from "../models/addToCartModel.js"
import { orderinfoModel } from "../models/orderModel.js"
import { productinfoModel } from "../models/productModel.js"
import { userinfoModel } from "../models/signupModel.js"

const deleteProductController = async (req, res)=>{

    try{

        const result = await userinfoModel.find({}, {orderids:1})
        console.log(result)
        result.map(async user =>{
            user.orderids.map(async orderid =>{
                const result = await orderinfoModel.findOne({orderid, productid: req.body.productid})
                if(result){
                    const innerresult = await userinfoModel.findOne({_id: user._id})
                    console.log(innerresult)
                    const array = innerresult.orderids
                    const index = array.indexOf(orderid)
                    if(index>-1){
                        innerresult.orderids.splice(index, 1)
                    }
                    innerresult.save()
                }
            })
        })

        
        const delProduct = await productinfoModel.deleteOne({productid: req.body.productid})
        console.log(delProduct)

        
        
        const delCartProduct = await addToCartinfoModel.deleteMany({productid: req.body.productid})
        console.log(delCartProduct)
        
        
        
        
        const delOrders = await orderinfoModel.deleteMany({productid:req.body.productid})
        console.log(delOrders)
        
        res.send("success")
//         const result1 = await userinfoModel.find({}, {_id:0, orderids:1})
// console.log(result1)
        // const array = []
        // for(let i=0; i<result1.length ;i++){
        //     array[...array, ]
        // }




        // userinfoModel.find()
        // .then((res1)=>{
        //     res1.mapReduce(async user =>{
        //         user.orderids.map(async orderid=>{
        //             orderinfoModel.deleteOne({orderid: orderid, productid: req.body.productid})
        //             .then(res2 )
        //         })
        //     })
        // })

        // userinfoModel.mapReduce(async user =>{
        //     user.orderids.map(async orderid=>{
        //         const result = await orderinfoModel.find({orderid: orderid})
        //     })
        // })
    }
    catch(err){
        console.log(err)
        res.send(err)
    }

}

export {deleteProductController}