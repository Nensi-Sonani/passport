const passportjs = require("../models/passport.schema");
const LocalStrategy = require('passport-local').Strategy;

const localization = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      console.log(username, password);
      try {
        let userdata = await passportjs.findOne({ username: username });
        if (!userdata) {
          return done(null, false);
        }
        if (userdata.password !== password) {
          return done(null, false);
        }
        return done(null, userdata);
      } catch (error) {
        return done(error, false);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      let data = await passportjs.findById(id); // Assuming passportjs has a findById method
      done(null, data);
    } catch (error) {
      done(error, null);
    }
  });
};

module.exports = localization;
