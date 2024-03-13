const express = require('express')
const app = express()
const passport = require('passport')
var session = require('express-session')
require('./auth');
app.set('view engine', 'pug')
app.set('views', './views')
app.use(passport.initialize())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(passport.session())
function isLogged(req,res,next){
    req.user?next():res.status.sendStatus(401)
    }
app.get('/', (req,res)=>{res.render('views')})
app.get('/auth/google',
passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: '/auth/failed' }),
function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/auth/protected');
});
app.get('/auth/failed', (req,res)=>{
    res.send(`Not Authorised`)
})
app.get('/auth/protected', isLogged,(req,res)=>{
    let name =req.user.displayName;
    res.send(`Hello ${name}`)
})
app.get('/logout', (req,res)=>{
    req.session.destroy();
    res.send('See You')
})

app.listen(8080)
