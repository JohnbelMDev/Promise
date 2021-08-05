const jwt = require('jsonwebtoken')


function authenticateToken(req, res, next) {
  // get the token from the header
  const authHeader = req.headers['authorization']
  // extract the token from the string -- "bearer <token>"
  const token = authHeader && authHeader.split(' ')[1]

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

module.exports = authenticateToken