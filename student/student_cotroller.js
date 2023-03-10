const Student_Model=require('./student_model')

const db=require('../dbconnect')

const add_student=async (req,res)=>{
    const new_student=new Student_Model({
         name:req.body.name,
         dateofbirth:req.body.dateofbirth,
         rollno:req.body.rollno,
         mark:req.body.mark
    })

    await new_student.save()
}
const view_details=async(req,res)=>{
    const student_details=await Student_Model.find()
    console.log(student_details)
    if(student_details){
        res.json({
            data:student_details,
            message:"Data collected successfully"
        })
    }
    else{
        res.json({
            message:"Error occured"
        })
    }
}
const edit_data=async (req,res)=>{
      const student_id=req.body.student_id
      await Student_Model.findByIdAndUpdate({_id:student_id},{name:req.body.name},{dateofbirth:req.body.dateofbirth},{rollno:req.body.rollno},{mark:req.body.mark})
      
}
const find_data=async (req,res)=>{
    const student_id=req.body.student_id
    const existing_data=  await Student_Model.findById({_id:student_id})
    if(existing_data){
    res.json({
        data:existing_data,
        message:"Data finded"
    })
  }
}
const delete_student=async (req,res)=>{
    const delete_id=req.body.delete_id
    await Student_Model.findByIdAndDelete({_id:delete_id})
    res.json({
        status:200,
        message:"Data deleted"
    })
}
module.exports={add_student,view_details,edit_data,find_data,delete_student}