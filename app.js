const express = require('express')
const app = express()
const model = require('./models')
const bodyParser = require('body-parser')

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const suppliers = require('./routers/suppliers')
const item = require('./routers/item')
// const subject = require('./routers/subject')
// const student = require('./routers/student')

app.use('/suppliers',suppliers)
app.use('/items',item)
// app.use('/subject',subject)
// app.use('/student',student)


app.listen(process.env.PORT || 3000,()=>{
  console.log('i am on port 3000');
})
