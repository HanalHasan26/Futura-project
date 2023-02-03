const asyncHandler = require("express-async-handler");
const Student = require("../models/studentSchema")


const addStudents =asyncHandler(async(req,res)=>{
    const {name,phone} = req.body;

    try {

        if (!name || !phone) {
            res.status(404).json("Please Enter All The Fields")
            throw new Error("Please Enter All The Feilds")
        }

        const studentsDetails = Student.create({
            name,
            phone
        })

        res.status(201).json({
            name:studentsDetails.name,
            phone:studentsDetails.phone,
            message:"success",
            isError:false
        })
        
        
    } catch (error) {
        res.status(400).json({
            message: "failed", 
            isError:true,
        });  
        throw new Error("Failed") 
    }

})

const test =(req,res)=>{
    res.json("molakka my")
}

module.exports = {addStudents,test}
