
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const middleware = require('../middlewares/index') 

// middleware function will authenticate if the token if passed into the headers to verify the user in order to let access this route
router.post('/', authenticateToken, (req,res,next) => {
    res.json({
        success:true,
        message:'successfully accessed protected route'
    })
})

function authenticateToken(req, res, next) {
    // get the token from the header
    const authHeader = req.headers['authorization']
    console.log(req.headers)
    // extract the token from the string -- "bearer <token>"
    const token = authHeader.split(' ')[1]
  
    // if the token does not exists within the header of the request
    if (token == null) return res.sendStatus(401)
  
    // try to verify the token
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      
      console.log("jwt token after it is sucessfully decrypted " + user)
      // if the token is successfully verified then assign the user to the req.user
      req.user = user
  
      next()
    })
  }

module.exports = router;