const express=require('express');
const cors=require("cors");
const connect=require('./config/db');
const router = require('./routes/passport.routes');
const app =express();
app.use(express.json());
//cors
app.use(cors())
const passport=require('passport')
// send data properly to database 
app.use(express.urlencoded({extended:true}))
//
app.use(router)


app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.set("views",__dirname+"/views");


app.listen(8081,()=>{
    console.log("Mongodb Is Connected");
    connect()
})
