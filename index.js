const express=require('express')
const cors=require('cors')
const app=express()
const bodyparser=require('body-parser')

const router=require('./router')
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/',router)

app.listen(5000,()=>{console.log("Connected to port 5000")})