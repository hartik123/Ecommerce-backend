import { addToCartinfoModel } from "../models/addToCartModel.js";


const removeCartProductController = async (req, res) =>{
    
    
    const {userid, productid} = req.body;
    const result = await addToCartinfoModel.findOne({userid, productid});
    if(result){
        const op = await addToCartinfoModel.deleteOne({userid, productid});
        res.json({msg:"Item removed successfully"})

    }
    else{
        res.json({msg:"No product found in cart"})
    }

}

export {removeCartProductController}