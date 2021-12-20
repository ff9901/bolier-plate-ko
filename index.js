const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser') //클라이언트 정보를 받아 분석하는 
const config = require('./config/key')

const { User } = require("./models/User")


//body-Parser옵션
//1.폼데이터를 분석해서 가져오게 한다 
app.use(bodyParser.urlencoded({ extended: true }));

//2. json형태의 데이터를 분석해서 가져올 수 있게 해준다.
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,
{ 
   useNewUrlParser: true,
   useUnifiedTopology: true, 
  //  useCreateIndex: true, 
  //  useFindAndModify: true
  }
).then(() => console.log('mongoDB Connected...'))
 .catch( err => console.log(err))
 








app.get('/', function (req, res) {
  res.send('안녕하세요-5000')
})


app.post('/register', ( req, res) => {
  // 회원가입에 필요한 정보들을 클라이언에서 가져오면
  //그것들을 데이터 베이스에 넣어준다
  const user = new User(req.body)
  user.save((err, doc) => {
    if(err) return res.json({ success: false, err })
    return res.status(200).json({
      success: ture
    })
  })

})







app.listen( port,() => console.log(`안녕하세요 ${port}` ))




// 