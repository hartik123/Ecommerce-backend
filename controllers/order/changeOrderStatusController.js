import { orderinfoModel } from "../../models/orderModel.js"

const changeOrderStatusController = async (req, res) =>{
    try{
        const result = await orderinfoModel.findOne({orderid: req.body.orderid})
        // console.log(result)
    if(result!=null){
        result.orderstatus = "Dispatched"
        result.save()
        res.send("order changed successfully")
    }
    else{
        res.send("Order cannot be found")
    }
    }
    catch(err){
        res.send("error at server end")
        console.log(err)
    }
}

export {changeOrderStatusController}