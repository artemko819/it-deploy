const Person = require("../models/Person")
const errorHandler = require("../utils/errorHandller")
module.exports.addPerson = async function(req,res){
    const candidate = await Person.findOne({ email: req.body.email })
    if (candidate) {
        //polzovatel naiden to oshibka
        res.status(409).json({
            message: 'Такой email уже занят. Попробуйте другой'
        })
    }else{
        const person = new Person({
            name:req.body.name,
            email:req.body.email,
            tel:req.body.tel,
            city:req.body.city,
            course:req.body.course,
            date:req.body.date
        })
    
        try {
            await person.save()
            res.status(201).json(person)
        } catch (error) {
            errorHandler(res, error)
        }
    }
   
}
module.exports.getPerson = async function(req,res){
    try {
        const persons = await Person.find()
        res.status(200).json(persons)
    } catch (error) {
        errorHandler(res, error)
    }
}
module.exports.remove =  async function(req,res){
    try {
      await Person.remove({_id: req.params.id})
      res.status(200).json({
          message: "Заявка была удалена."
      })
    } catch (error) {
        errorHandler(res,error)
    }
}