const jwt = require('jsonwebtoken'); 
const { secret } = require('./secret'); 

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

    console.log(req.body); 
  
    if (token) {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          console.log(token); 
          console.log('token is not valid'); 
          return res.json({
            success: false,
            message: 'Token is not valid'
          });
        } else {
          req.body.userID = decoded;
          next();
        }
      });
    } else {
      console.log('auth token is not supplied'); 
      return res.json({
        success: false,
        message: 'Auth token is not supplied'
      });
    }
  };
  
  module.exports = {
    checkToken: checkToken
  }