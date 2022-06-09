const express = require('express')
const fileupload = require('express-fileupload')

const app = express()

app.use(fileupload())

app.get('/',(req,res)=>{
  res.send('Image upload')
})


app.post('/imageupload',(req,res)=>{
  if(req.files){
    console.log(req.files)
    res.send('images upload')
  }
})

app.listen(7000)

