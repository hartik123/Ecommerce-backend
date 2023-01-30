import mongoose from "mongoose";

const userinfoSchema = mongoose.Schema({
    image: {type:Buffer},
    firstname: {type: String},
    lastname: {type: String},
    username: {type: String},
    password: {type:String},
    email: {type:String},
    phone: {type:String},
    isadmin: {type: Boolean},
    otp:{type:String, default:"0000"},
    orderids: [String]
})

const userinfoModel = mongoose.model("userinfo", userinfoSchema)

export {userinfoModel}

