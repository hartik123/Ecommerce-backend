import { addToCartinfoModel } from "../../models/addToCartModel.js";
import { orderinfoModel } from "../../models/orderModel.js"
import { userinfoModel } from "../../models/signupModel.js";

function generateOTP(length) {
          
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < length; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

const createOrderController = async (req, res) =>{
    try{
        const {userid, productid, count, price} = req.body
    // console.log(req.body)

    var output = null
    var orderid;

    while(output == null){
        orderid = generateOTP(7)
        output = orderinfoModel.find({orderid: orderid})
    }

    const result = orderinfoModel({
        orderid: orderid,
        productid: productid,
        count: count,
        orderamount: price
    })
    result.save()


    const result1 = await userinfoModel.findOne({_id:userid})
    result1.orderids.push(orderid)
    result1.save()
    
    const result2 = await addToCartinfoModel.deleteOne({userid, productid})

    res.send("Order Created Successfully")

    }
    catch(err){
        res.send("Failure in placing order")
        console.log(err)
    }

}

export {createOrderController}