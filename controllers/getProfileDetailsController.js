import { userinfoModel } from "../models/signupModel.js"

const getProfileDetailsController =  async (req, res)=>{
    const result = await userinfoModel.findOne({_id: req.body.userid})
    if(result != null){
        // res.set('Content-Type', 'image/png')
        res.send({
          userid: result._id.toString(),
          loginStatus: "success",
          image: result.image,
          firstname: result.firstname,
          lastname: result.lastname,
          username: result.username,
          password: result.password,
          email: result.email,
          phone: result.phone,
          isadmin: result.isadmin
        })
      }
      else{
      res.json({ loginStatus: "failure" });
      }
}

export {getProfileDetailsController}