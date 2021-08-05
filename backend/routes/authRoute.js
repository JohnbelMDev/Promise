const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
require('dotenv').config()

// endpoint for logging in
router.post('/login', (req,res,next) => {
    // take in the user's log in credentials 

    // retrieve username and password from request
    const username = req.body.username;
    const password = req.body.password;
    
    // WILL NEED FUNCTIONALITY TO AUTHENTICATE USER  ( make call to db to check if user exists and password is verified )

    // call to generate token
    const token = generateAccessToken({
        username:username,
        password:password
    })
 
    // send response with JWT in it
    return res.json({
        test:username,
        accessToken:token
    })
})

// function to generate access token
function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn:'15m' });
}

module.exports = router;