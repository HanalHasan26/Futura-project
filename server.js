const express = require("express");
const dotenv = require("dotenv")
const cors = require('cors')
const connectDB = require("./config/db");
const studentrouter = require("./Routes/studentRouter");


const app = express();
dotenv.config();


app.use(cors())
app.use(express.json())
app.use("/",studentrouter)

app.get("/",(req,res)=>{
    res.json("api running")
})

const PORT = process.env.PORT || 5000

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests"); 
    }) 
})