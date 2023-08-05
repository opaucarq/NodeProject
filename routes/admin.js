const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res)=>{
  res.send(`
    <form method="POST" action="/admin/add-product">
      <input type="text" name="product"/>
      <button type="submit">Add</button>
    </form>
  `);
})

router.post('/add-product',(req,res,next) => {
  console.log(req.body);
  res.redirect('/')
})

module.exports = router;