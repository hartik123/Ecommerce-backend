import {userinfoModel} from '../models/signupModel.js';
import bcrypt from 'bcrypt';

const signupController = async (req, res) => {
    console.log(req.file)

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const user = userinfoModel({
        image: req.file.buffer,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
        phone: req.body.phone,
        isadmin: false
    })

    const result = await user.save()
    console.log(result)
    if(result){
        
             res.json({signupStatus: "success"})
    }
    else {
            res.json({signupStatus: error})
        
    }
    
}

const addImageController = (req, res)=>{
    try{
        console.log(req.body)
    const result = userinfoModel({_id: req.userid})
    result.image = req.file.buffer
    result.save()
    res.send()
    }
    catch(e){
        res.status(400).send(e)
    }
    }

export {signupController, addImageController}