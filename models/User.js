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
        type: number, // number 0이면 기본 일반유저, 1이면  예를들어 관리자
        default: 0
    },
    image: String,
    token: { //유효성 관리
        type: String
    },
    tokenExp: { //토큰 유효기간
        type: number
    }

})


const User = mongoose.model('User', userSchema)

module.exports = { User }