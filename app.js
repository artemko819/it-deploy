const express  = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require('path')
const morgan = require("morgan")
const mongoose = require("mongoose")
const passport = require("passport")

const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const personRoutes = require('./routes/person')
const consultRoutes = require('./routes/consult')
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

module.exports = app