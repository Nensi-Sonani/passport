const { Router } = require("express");
const passport = require("passport");
// Corrected the middleware import path
const {
  Login,
  Signup,
  Home,
  getSignup,
  getadmin,
  postlogin,
} = require("../controllers/passport.controllers");
const passportjs = require("../models/passport.schema");

const router = Router();

router.get("/home", Home);

// Place passport.authenticate before other middleware
router.post("/signup", Signup);

router.get("/login", Login);

// Passport authentication middleware before the route handler
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(req.body);
  res.send("checking");
});

router.get("/signup", getSignup);
router.get("/getadmin", getadmin);

module.exports = router;
