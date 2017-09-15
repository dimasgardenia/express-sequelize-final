const express = require('express')
const router = express.Router()
const model = require('../models')

router.get('/',(req,res)=>{
  model.Item.findAll()
  .then((data)=>{
    res.render('items',{data:data,err:false})
    // res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
})

router.get('/add',(req,res)=>{
  model.Item.findAll().then((data)=>{
    res.render('additem',{data:data})
    // res.send("halo")
  }).catch((err)=>{
    res.send(err)
  })
})

router.post('/add',(req,res)=>{
  model.Item.create({
    name : req.body.name,
    kota : req.body.kota,
    createAt: new Date(),
    updateAt: new Date()
  }).then(()=>{
    res.redirect('/items')
  }).catch((err)=>{
    res.send(err)
  })
})

router.get('/edit/:id',(req,res)=>{
  model.Item.findById(req.params.id)
  .then((data)=>{
    res.render('edititem',{data:data})
  }).catch((err)=>{
    res.send(err)
  })
})

router.post('/edit/:id',(req,res)=>{
  model.Item.update(
    {
    name: req.body.name,
    kota: req.body.kota,
  },{
    where:{
      id: parseInt(req.params.id)
    }
  }).then((err,data)=>{
    res.redirect('/items')
  })
})

router.get('/delete/:id',(req,res)=>{
  model.Item.destroy({
    where:{
      id: req.params.id
    }
  }).then(()=>{
    res.redirect('/items')
  })
})

module.exports = router
