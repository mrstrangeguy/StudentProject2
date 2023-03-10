import React, { useEffect, useState } from 'react'
import {useParams,Navigate} from 'react-router-dom'
import './edit.css'
import axios from 'axios'
function Edit() {
   let {student_id}=useParams()
   const [existingData,setED]=useState()
   const [checkSubmit,setSubmit]=useState(true)
   useEffect(()=>{
    axios.post('http://localhost:5000/finddata',{student_id:student_id}).then((response)=>{
         setED(response.data.data)
         console.log(existingData)
    }).catch((err)=>{
        console.log(err+"Error occured in useeffect")
    })
  },[])
   const [changedData,setChangedData]=useState({
    student_id:student_id,
    name:"",
    dateofbirth:0,
    rollno:0,
    mark:0
   })
   
   
  const handleChange=(event)=>{
    setChangedData({
        ...changedData,
        [event.target.name]:event.target.value
    })
  }

  const submitChange=(event)=>{
     event.preventDefault()
     axios.post('http://localhost:5000/editdata',changedData).then((response)=>{
        console.log(response)
        setSubmit(false)
     }).catch((err)=>{
        console.log(err+"Error occured in submit ")
     })
  }
  if(checkSubmit){
  return (
    
    <div className='register-container'>
        <div className="heading">
        <h2>Register</h2>
        </div>
        
      <div className="register-form">
        <div className="name">
        <label >Name</label>
        <input type="text" name='name' value={changedData.name}  onChange={handleChange} required/>
        </div>
        <div className="dateofbirth">
        <label >Date of birth</label>
        <input type="date"  name='dateofbirth' value={changedData.dateofbirth}  onChange={handleChange} required/>
        </div>
        <div className="rollno">
        <label >Roll No</label>
        <input type="number" name='rollno' value={changedData.rollno}  onChange={handleChange} required />
        </div>
        <div className="mark">

        <label >Mark</label>
        
        <input type="number" name='mark' value={changedData.mark}  onChange={handleChange} required/>
        </div>
        <div className='submit-btn'>
            <button className='s-btn' onClick={submitChange}>Submit</button>
        </div>
      </div>
    </div>
  )
  }
  else{
    return(
        <>
        <Navigate to={'/table'}/>
        </>
    )
  }
}

export default Edit
