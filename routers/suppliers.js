const express = require('express')
const router = express.Router()
const model = require('../models')

router.get('/',(req,res)=>{
  model.Suppliers.findAll()
  .then((data)=>{
    res.render('suppliers',{data:data,err:false})
     //res.send(data)
  })
})

router.get('/add',(req,res)=>{
  model.Suppliers.findAll().then((data)=>{
    res.render('addsuppliers',{data:data})
    // res.send("halo")
  }).catch((err)=>{
    res.send(err)
  })
})

router.post('/add',(req,res)=>{
  model.Suppliers.create({
    name : req.body.name,
    kota : req.body.kota,
    createAt: new Date(),
    updateAt: new Date()
  }).then(()=>{
    res.redirect('/suppliers')
  }).catch((err)=>{
    res.send(err)
  })
})

router.get('/edit/:id',(req,res)=>{
  model.Suppliers.findById(req.params.id)
  .then((data)=>{
    res.render('editsuppliers',{data:data})
  }).catch((err)=>{
    res.send(err)
  })
})

router.post('/edit/:id',(req,res)=>{
  model.Suppliers.update(
    {
    name: req.body.name,
    kota: req.body.kota,
  },{
    where:{
      id: parseInt(req.params.id)
    }
  }).then((err,data)=>{
    res.redirect('/suppliers')
  })
})

router.get('/delete/:id',(req,res)=>{
  model.Suppliers.destroy({
    where:{
      id: req.params.id
    }
  }).then(()=>{
    res.redirect('/suppliers')
  })
})



module.exports = router
