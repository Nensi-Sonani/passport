const mongoose=require('mongoose');
const passportSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String
});
const passportjs=mongoose.model("passportjs",passportSchema);
module.exports=passportjs