const express = require('express')

const app = express()

app.use('/add-product',(req,res)=>{
  res.send('<h1>The add product page</h1>');
})

app.use('/',(req,res)=>{
  res.send('<h1>Main Page</h1>');
})

app.listen(3000)