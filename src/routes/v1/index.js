// Import Package
const express = require('express');

//Local Files
const {infoController} = require('../../controllers/index.js')

const router = express.Router()

router.get('/info', infoController.info)

module.exports = router