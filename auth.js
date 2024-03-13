const passport = require('passport')
require('dotenv').config()

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback"
},
function(accessToken, refreshToken, profile, cb) {
cb(null, profile);
}
));
passport.serializeUser((user, done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null, user)
})