const express = require('express');
const {ServerConfig, Logger} = require('./config/index')

//Local Imports
const apiRoutes = require('./routes/index');
//const serverConfig = require('./config/server-config');

const app = express()

app.use('/api',apiRoutes)

app.listen(ServerConfig.PORT, ()=>{
  console.log(`Server is running https//localhost:${ServerConfig.PORT}`);
  Logger.info("Sucessful running", "root", {});
})