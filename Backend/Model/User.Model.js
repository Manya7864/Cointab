const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    count:{type:Number},
    loginDate:{type:Date},
})
const userModel=mongoose.model("user",userSchema)
module.exports=userModel;