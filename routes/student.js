var express = require('express')
const UserController = require('../Controller/userController')
var router = express.Router()
router.post('/user/add', UserController.addUser)
router.delete('/user/del', UserController.delUser)
router.put('/user/dep', UserController.putUser)
router.get('/user/ser', UserController.getUser)
 
module.exports = router