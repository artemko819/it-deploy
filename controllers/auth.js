const bcrypt = require('bcryptjs')
const jwt  = require('jsonwebtoken')
const keyes = require('../config/keys')
const User = require('../models/User')
const errorHandler = require('../utils/errorHandller')

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({email:req.body.email})

  if(candidate){
      //proverka parola esli est user
      const passwordResult = bcrypt.compareSync(req.body.password,candidate.password)

      if(passwordResult){
          //Generate token esli parol veren
          const token = jwt.sign({
            email:candidate.email,
            userId:candidate._id
          }, keyes.jwt,{expiresIn: 6000*6000})

          res.status(200).json({
              token:`Bearer ${token}`
          })
      }else{
          //paroli ne sovpali
          res.status(401).json({
              message:"Пароли не совпадают, попробуйте снова"
          })
      }      
  }else{
      //polsovatel not faund
      res.status(404).json({
          message:"Пользователь не найден"
      })
  }
}

module.exports.register = async function (req, res) {
    //poisk polzovatela po email
    const candidate = await User.findOne({ email: req.body.email })

    if (candidate) {
        //polzovatel naiden to oshibka
        res.status(409).json({
            message: 'Такой email уже занят. Попробуйте другой'
        })
    } else {
        //polzovatel ne naiden znachit sozdaem
        const salt = bcrypt.genSaltSync(10)
        password = req.body.password
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password,salt)
        })
        try{
            await user.save()
            res.status(201).json(user) 
        } catch(e){
            //obrabotat oshibky
            errorHandler(res,e)
        }
    }
}