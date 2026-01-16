const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const port = process.env.PORT || 3030
const app = express()


async function main() {
  await mongoose.connect(process.env.DB_URI);
}

main().then(()=>console.log(`server is connected with mongoose successfully`)).catch(err => console.log(err));



app.get('/',(req,res)=>{
    res.send('Meta Blog Server Is Running......')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})