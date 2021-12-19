const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://wcd-database-user:123456qwe@wcd.prbgl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}).then(() => console.log('mongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', function (req, res) {
  res.send('hello world-5000')
})

app.listen( port,() => console.log(`sdgfhjh ${port}` ))


// 