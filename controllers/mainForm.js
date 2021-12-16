const MainForm = require("../models/MainForm")
const errorHandler = require("../utils/errorHandller")
module.exports.addForm = async function(req,res){
        const consult = new MainForm({
            name:req.body.name,
            tel:req.body.tel,
            date:req.body.date
        })   
        try {
            await consult.save()
            res.status(201).json(consult)
        } catch (error) {
            errorHandler(res, error)
        }   
}
module.exports.getForm = async function(req,res){
    try {
        const mainForm = await MainForm.find()
        res.status(200).json(mainForm)
    } catch (error) {
        errorHandler(res, error)
    }
}
module.exports.remove =  async function(req,res){
    try {
      await MainForm.remove({_id: req.params.id})
      res.status(200).json({
          message: "Заявка была удалена."
      })
    } catch (error) {
        errorHandler(res,error)
    }
}