const express = require("express");
const dotenv = require("dotenv")
const cors = require('cors')
const connectDB = require("./config/db");
const studentrouter = require("./Routes/studentRouter");


const app = express();
dotenv.config();

connectDB()
app.use(cors())
app.use(express.json())
app.use("/",studentrouter)

app.get("/",(req,res)=>{
    res.json("api running")
})


app.listen(5000,()=> console.log("Server Is Running..."))   