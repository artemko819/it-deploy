const Consult = require("../models/Consult")
module.exports.addConsult = async function(req,res){
    const candidate = await Consult.findOne({ email: req.body.email })
    if (candidate) {
        //polzovatel naiden to oshibka
        res.status(409).json({
            message: 'Такой email уже занят. Попробуйте другой'
        })
    }else{
        const consult = new Consult({
            name:req.body.name,
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
module.exports.getConsult = async function(req,res){
    try {
        const consult = await Consult.find()
        res.status(200).json(consult)
    } catch (error) {
        errorHandler(res, error)
    }
}
module.exports.remove =  async function(req,res){
    try {
      await Consult.remove({_id: req.params.id})
      res.status(200).json({
          message: "Заявка была удалена."
      })
    } catch (error) {
        errorHandler(res,error)
    }
}