
const statusCode = require('http-status-codes');

const info = (req, res)=>{
  return res.status(statusCode.NOT_IMPLEMENTED).json({
    sucess: true,
    message: "Api working fine state",
    data: {},
    error: {}
  })
}

module.exports = {
  info
}