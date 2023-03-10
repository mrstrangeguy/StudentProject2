
const express=require('express')
const db=require('./dbconnect')
const router=express.Router()
const student_controller=require('./student/student_cotroller')
router.post('/addstudent',student_controller.add_student)
router.get('/viewdetails',student_controller.view_details)
router.post('/editdata',student_controller.edit_data)
router.post('/finddata',student_controller.find_data)
router.post('/deletestudent',student_controller.delete_student)
module.exports=router


