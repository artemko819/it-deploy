const Test = require("../models/Test")
const errorHandler = require("../utils/errorHandller")
module.exports.addTest = async function(req,res){
    const candidate = await Test.findOne({ email: req.body.email })
    if (candidate) {
        //polzovatel naiden to oshibka
        res.status(409).json({
            message: 'Такой email уже занят. Попробуйте другой'
        })
    }else{
        const consult = new Test({
            name:req.body.name,
            name2:req.body.name2,
            school:req.body.school,
            email:req.body.email,
            tel:req.body.tel,
            city:req.body.city,
            course:req.body.course,
            date:req.body.date
        })
    
        try {
            await consult.save()
            res.status(201).json(consult)
        } catch (error) {
            errorHandler(res, error)
        }
    }
   
}
module.exports.getTest = async function(req,res){
    try {
        const test = await Test.find()
        res.status(200).json(test)
    } catch (error) {
        errorHandler(res, error)
    }
}
module.exports.remove =  async function(req,res){
    try {
      await Test.remove({_id: req.params.id})
      res.status(200).json({
          message: "Заявка была удалена."
      })
    } catch (error) {
        errorHandler(res,error)
    }
}