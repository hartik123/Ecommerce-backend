import { userinfoModel } from "../models/signupModel.js";
import bcrypt from 'bcrypt'

const loginController = async (req, res) => {
  console.log(req.body);

  const result = await userinfoModel.findOne({username: req.body.username})

  if(result != null && await bcrypt.compare(req.body.password, result.password)){
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
};

export { loginController };
