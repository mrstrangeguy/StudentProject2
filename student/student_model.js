const db=require('../dbconnect')

const mongoose=require('mongoose')

const studentSchema=mongoose.Schema({
    name:String,
    dateofbirth:Date,
    rollno:Number,
    mark:Number
})

const student=mongoose.model('student',studentSchema)

module.exports=student