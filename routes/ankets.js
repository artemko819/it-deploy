const express = require('express')
const controller = require('../controllers/ankets') 
const router = express.Router()
const passport = require('passport')

router.post('/add-ankets',controller.addTest)
router.get('/get-ankets',passport.authenticate('jwt',{session:false}),controller.getTest)
router.delete('/:id',passport.authenticate('jwt',{session:false}),controller.remove)
module.exports = router