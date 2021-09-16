const Anketa = require("../models/Anketa")
const errorHandler = require("../utils/errorHandller")
module.exports.addTest = async function(req,res){
    console.log('HELLO BACK ANKETA')
        const consult = new Anketa({
            name:req.body.name,          
            tel:req.body.tel,            
            course:req.body.course,
            city:req.body.city,
            date:req.body.date
        })    
        try {
            await consult.save()
            res.status(201).json(consult)
        } catch (error) {
            errorHandler(res, error)
        }
    
   
}
module.exports.getTest = async function(req,res){
    try {
        const test = await Anketa.find()
        res.status(200).json(test)
    } catch (error) {
        errorHandler(res, error)
    }
}
module.exports.remove =  async function(req,res){
    try {
      await Anketa.remove({_id: req.params.id})
      res.status(200).json({
          message: "Заявка была удалена."
      })
    } catch (error) {
        errorHandler(res,error)
    }
}