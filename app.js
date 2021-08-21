const express  = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require('path')
const morgan = require("morgan")
const mongoose = require("mongoose")
const passport = require("passport")
const fs = require('fs')
const http = require('http')
const https = require('https')
const port = process.env.PORT || 5000
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const personRoutes = require('./routes/person')
const consultRoutes = require('./routes/consult')
const testsRoutes = require('./routes/tests')
const app = express()

const DB_USER = 'itbd';
const PASSWORD = encodeURIComponent('RsXmAG18YkkEDtuU');
const url = `mongodb+srv://${DB_USER}:${PASSWORD}@cluster0.n7yha.mongodb.net/itbd?retryWrites=true&w=majority`;

app.use(passport.initialize())
require('./middleware/passport')(passport) 

mongoose.connect(url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log('Connected to database !');
  })
  .catch((err)=>{
    console.log('Connection failed !'+ err.message);
  });

app.use(morgan('dev'))
app.use('/uploads',express.static('uploads'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/auth',authRoutes)
app.use('/api/analytics',analyticsRoutes)
app.use('/api/category',categoryRoutes)
app.use('/api/order',orderRoutes)
app.use('/api/position',positionRoutes)
app.use('/api/person',personRoutes)
app.use('/api/consult',consultRoutes)
app.use('/api/test',testsRoutes)
if(process.env.NODE_ENV === 'production'){
 app.use(express.static('client/dist/it-start'))
 app.get('*',(req,res)=>{
   res.sendFile(
     path.resolve(
       __dirname,'client','dist','it-start','index.html'
     )
   )
 })
}
if(process.env.NODE_ENV === 'production'){
  const privateKey = fs.readFileSync(__dirname + "/ssl/itstart_in_ua.key", 'utf-8')
  const setificate = fs.readFileSync(__dirname + "/ssl/itstart_in_ua.crt", 'utf-8')
  const httpsOptions = {
    key:privateKey,
    cert: setificate
  }
  https.createServer(httpsOptions,app).listen(443, ()=>{
    console.log("HTTPS SERVER RUNING 443 port")
  })
  http.createServer( function(req,res){
    res.writeHead(301,{"location":"https://"+req.headers['host']+req.url})
    res.end()
  }).listen(80)
}else if(process.env.NODE_ENV === "developmant"){
  app.listen(port, ()=>{
    console.log(`server starterd on ${port}`)
})
}else{
  app.listen(port, ()=>{
    console.log(`server starterd on ${port}`)
})
}

module.exports = app
