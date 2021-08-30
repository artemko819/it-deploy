const express = require('express')
const controller = require('../controllers/testSchool') 
const router = express.Router()
const passport = require('passport')

router.post('/add-test',controller.addTest)
router.get('/get-test',passport.authenticate('jwt',{session:false}),controller.getTest)
router.delete('/:id',passport.authenticate('jwt',{session:false}),controller.remove)
module.exports = router