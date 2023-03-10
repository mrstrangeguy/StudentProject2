const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/studentapp')

const db=mongoose.connection

db.on('err',()=>{console.log("Error occured connecting to db")})

db.once('open',()=>{console.log("db connected successfully")})

module.exports=db