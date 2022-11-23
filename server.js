const express = require("express");
const app = express()
require("dotenv").config()

const PORT = process.env.PORT


app.get('/' , (rew,res)=>{
    res.send("hello from node")
})

app.listen(PORT,()=>{
    console.log(`server is listening in port ${PORT}`);
})