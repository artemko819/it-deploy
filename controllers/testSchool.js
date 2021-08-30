const TestSchool = require("../models/TestSchool")
const errorHandler = require("../utils/errorHandller")
module.exports.addTest = async function(req,res){
        const consult = new TestSchool({
            school:req.body.school,
            city:req.body.city,
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
        const test = await TestSchool.find()
        res.status(200).json(test)
    } catch (error) {
        errorHandler(res, error)
    }
}
module.exports.remove =  async function(req,res){
    try {
      await TestSchool.remove({_id: req.params.id})
      res.status(200).json({
          message: "Заявка была удалена."
      })
    } catch (error) {
        errorHandler(res,error)
    }
}