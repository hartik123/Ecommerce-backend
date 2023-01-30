import { userinfoModel } from "../models/signupModel.js";

const userImageController = async (req, res)=>{

    try{
        if(req.file.buffer){
            const result = await userinfoModel.findOne({_id: req.body.userid})
            if(result!=null)
            {
                result.image = req.file.buffer
                await result.save()
                res.json({imageUpdateStatus:"success1"})
                console.log("sucess1")
            }
            // else{
            //     const person = await userImageinfoModel({
            //         userid: req.body.userid,
            //         image: req.file.buffer
            //     }) 
            //     person.save() 
            //     res.json({imageUpdateStatus:"success2"})
            // }
        }
        else{
                res.json({imageUpdateStatus:"Empty request"})
            }
    }

    catch(err){
        res.json({imageUpdateStatus:"Error occured at server end"})
        console.log(err)
    }
}

export {userImageController}