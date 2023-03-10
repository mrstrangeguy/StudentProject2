import React, { useEffect, useState } from 'react'
import './table.css'
import axios from 'axios'

function Table() {
  const [studentCollection,setCollection]=useState([])
    useEffect(()=>{
     axios.get('http://localhost:5000/viewdetails').then((response)=>{
        setCollection(response.data.data)
        console.log(studentCollection)
     }).catch((err)=>{
        console.log(err)
     })
    },[])
    const deleteItem=(delete_id)=>{
        axios.post('http://localhost:5000/deletestudent',{delete_id:delete_id}).then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className='table-container'>
      <div className="table">
        <thead className='table-head'>
            <tr className='head-row'>
               <th className='head-column'>Name</th>
               <th className='head-column'>Date of Birth</th>
               <th className='head-column'>Roll No</th>
               <th className='head-column'>Mark</th> 
            </tr>
        </thead>
        <tbody className='table-body'>
        {studentCollection.map((element,index)=>{
            return(
           <tr className='body-row' key={index} >
           <th className="body-column">{element.name}</th>
           <th className="body-column">{element.dateofbirth}</th>
           <th className="body-column">{element.rollno}</th>
           <th className="body-column">
            <div className="options">
            <a href={`/student/${element._id}`}>Edit</a>
             <p className='del' onClick={()=>{deleteItem(element._id)}}>Delete</p>
            </div>
           
            {element.mark}</th>
           </tr>
            )
        })}
         
        </tbody>
      </div>
    </div>
  )
}

export default Table
