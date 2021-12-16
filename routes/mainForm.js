const express = require('express')
const controller = require('../controllers/mainForm') 
const router = express.Router()
const passport = require('passport')

router.post('/add-main',controller.addForm)
router.get('/get-main',passport.authenticate('jwt',{session:false}),controller.getForm)
router.delete('/:id',passport.authenticate('jwt',{session:false}),controller.remove)
module.exports = router