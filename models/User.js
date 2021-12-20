const mongoose = require ('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50

    },
    email:{
        type: String,
        trim: true,
        unique:1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number, // number 0이면 기본 일반유저, 1이면  예를들어 관리자
        default: 0
    },
    image: String,
    token: { //유효성 관리
        type: String
    },
    tokenExp: { //토큰 유효기간
        type: Number
    }

})


const User = mongoose.model('User', userSchema) //model SCHMA를 감싸주는 역할 -제이슨 형식의 위 데이터를 말함

module.exports = { User }