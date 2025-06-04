//Import express for routing
const express = require('express');


//Local Imports
const v1Route = require('./v1/index.js')

const apiRoutes = express.Router()
apiRoutes.use('/v1', v1Route)

module.exports = apiRoutes