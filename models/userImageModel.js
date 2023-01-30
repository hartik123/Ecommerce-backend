import mongoose from "mongoose";

const UserImageinfoSchema = mongoose.Schema({
    userid: {type:mongoose.ObjectId},
    image: {type:Buffer}
})

const userImageinfoModel = mongoose.model("userImageinfo", UserImageinfoSchema)

export {userImageinfoModel}