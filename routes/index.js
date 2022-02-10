const express = require('express')
const router = express.Router()
const translateController = require('../controller/index')

router.post('/translate', translateController.Translate)

module.exports = router
