const express = require('express')
const controller = require('../controllers/person') 
const router = express.Router()
const passport = require('passport')

router.post('/add-person',controller.addPerson)
router.get('/get-person',passport.authenticate('jwt',{session:false}),controller.getPerson)
router.delete('/:id',passport.authenticate('jwt',{session:false}),controller.remove)
module.exports = router