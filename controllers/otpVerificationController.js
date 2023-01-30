import { userinfoModel } from "../models/signupModel.js";

const otpVerificationController = async (req, res)=>{
    const {userid, email, OTP} = req.body;
console.log(req.body)
    try{
        const result = await userinfoModel.findOne({userid})
        console.log(result)
    if(result.otp == OTP){
        console.log("success")
        result.email = email
        result.save()
        res.json({msg:"OTP validated"})
    }
    else{
        res.json({msg:"OTP invalid"})
    }
    }
    catch(err){
        console.log(err)
    }
}

export {otpVerificationController}