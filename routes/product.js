const router = require('express').Router()
const Controller = require('../controller/productController')
const {authenticate} = require("../middleware/auth")

router.post('/kolak/up',authenticate,function(req,res){
    let count = req.body
    Controller.upKolak(req,res,count)
})
router.post('/kolak/down',authenticate, function(req,res){
    let count = req.body
    Controller.downKolak(req,res,count)
})
router.post('/rujak/up', authenticate,function (req,res){
    let count = req.body
    Controller.upRujak(req,res,count)
})
router.post('/rujak/down',authenticate,function(req,res) {
    let count = req.body
    Controller.downRujak(req,res,count)
})
router.post('/cendol/up',authenticate, function(req,res){
    let count = req.body
    Controller.upCendol(req,res,count)
})
router.post('/cendol/down',authenticate, function(req,res){
    let count = req.body
    Controller.downCendol(req,res,count)
})
router.post('/reset',authenticate,function(req,res){
    let condition = req.body
    Controller.reset(req,res,condition)
})
router.get('/status',authenticate,function(req,res){
    let decodedUser = req.user
    Controller.status(req,res,decodedUser)
})

module.exports = router