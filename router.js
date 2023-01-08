const Router = require('express')
const router = new Router()
const controller = require('./controller.js')

router.post('/setIP', controller.setIP)
router.post('/getIP', controller.getIP)

module.exports = router