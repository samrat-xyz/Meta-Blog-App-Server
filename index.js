const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const port = process.env.PORT || 3030
const app = express()
app.get('/',(req,res)=>{
    res.send('Meta Blog Server Is Running......')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})