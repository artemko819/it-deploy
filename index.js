const app = require('./app')
const port = process.env.PORT || 5000
const https = require('https')
const fs = require('fs')
const path = require('path')
const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname,'ssl','itstart_in_ua.crt')),
    key: fs.readFileSync(path.join(__dirname,'ssl','itstart_in_ua.key'))
  }
  https.createServer(httpsOptions,app).listen(port,()=>{
    console.log(`server starterd on ${port}`)
  })
// app.listen(port, ()=>{
//     console.log(`server starterd on ${port}`)
// })
