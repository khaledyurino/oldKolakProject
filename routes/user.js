const userController = require("../controller/userController")
const router = require('express').Router()


// --------------------LOGIN & REGISTER-----------------------
router.get('/help',userController.help)
router.post('/register',userController.userRegister)
router.post('/login', userController.userLogin);



module.exports = router