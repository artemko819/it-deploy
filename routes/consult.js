const express = require('express')
const controller = require('../controllers/consult') 
const router = express.Router()
const passport = require('passport')

router.post('/add-consult',controller.addConsult)
router.get('/get-consult',passport.authenticate('jwt',{session:false}),controller.getConsult)
router.delete('/:id',passport.authenticate('jwt',{session:false}),controller.remove)
module.exports = router