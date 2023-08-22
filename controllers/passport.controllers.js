const passportjs = require("../models/passport.schema");

const Home = (req, res) => {
  res.render("nav");
};
const Signup = async (req, res) => {
  await passportjs.create(req.body);
  res.send("done");
};
const getSignup = (req, res) => {
  res.render("signup");
};
const Login = (req, res) => {
  res.render("login");
};
const getadmin = (req, res) => {
  res.render("index");
};
const postlogin=(req,res)=>{
  res.send("done")
}

module.exports = {Home,Signup,getSignup, Login, getadmin,postlogin };
