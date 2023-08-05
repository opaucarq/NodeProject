const path = require('path')

const express = require('express')

const rootDir = require('../utils/path')
const router = express.Router()

router.get('/',(req,res)=>{
  res.sendFile(path.join(rootDir,'views','add-product.html'));
})

module.exports = router