import React, { useState } from 'react'
import'./register.css'
import axios from 'axios'
function Register() {
   
    
   
   const submitData=(event)=>{
     event.preventDefault()
     axios.post('http://localhost:5000/addstudent',studentData).then((response)=>{
        console.log(response.data.data)
        alert("Data saved")
     }).catch((err)=>{
        console.log(err)
     })
   }
   const [studentData,setStudent]=useState({
    name:"",
    dateofbirth:0,
    rollno:0,
    mark:0
   })
   const handleChange=(event)=>{
    setStudent({
        ...studentData,
        [event.target.name]:event.target.value
    })
   
   }

  return (
    <div className='register-container'>
        <div className="heading">
        <h2>Register</h2>
        </div>
        
      <div className="register-form">
        <div className="name">
        <label >Name</label>
        <input type="text" name='name' value={studentData.name} onChange={handleChange} required/>
        </div>
        <div className="dateofbirth">
        <label >Date of birth</label>
        <input type="date"  name='dateofbirth' value={studentData.dateofbirth} onChange={handleChange} required/>
        </div>
        <div className="rollno">
        <label >Roll No</label>
        <input type="number" name='rollno' value={studentData.rollno} onChange={handleChange} required />
        </div>
        <div className="mark">

        <label >Mark</label>
        
        <input type="number" name='mark' value={studentData.mark} onChange={handleChange} required/>
        </div>
        <div className='submit-btn'>
            <button className='s-btn' onClick={submitData}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Register
