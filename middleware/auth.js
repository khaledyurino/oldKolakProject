const jwts = require('jsonwebtoken');
const secret = "laruku"
module.exports = {
  authenticate(req, res, next) {
      const authHeader = req.headers['authorization']
      const token  = authHeader && authHeader.split(' ')[1]
      if(token == null){
       return res.status(401).json({"status":"failed","message":"please login/sign-up"})
      }
      jwts.verify(token,secret,(err,decoded)=>{
        if(err){
          if(err.message == "jwt expired"){
            res.status(400).json({"status":"failed","message":"token expired"})
          } else{
            res.status(403).json({"status":"failed","message":"token not recognized"})
          }
        }
        req.user = decoded
        next()
      })
  }
}