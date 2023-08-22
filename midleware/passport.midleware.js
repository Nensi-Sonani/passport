const check=(req,res,next)=>{
    let {username,email,password}=req.body;
    if(username && email && password){
        next();
    }
    else{
        res.send("details is invalid");
    }
}
module.exports={check}