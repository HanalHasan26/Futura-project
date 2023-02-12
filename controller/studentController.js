const asyncHandler = require("express-async-handler");
const Student = require("../models/studentSchema")


const addStudents =asyncHandler(async(req,res)=>{
    const {name,phone} = req.body;

    try {

        if (!name || !phone) {
            res.status(204).json("Please Enter All The Fields")
            throw new Error("Please Enter All The Feilds")
        }

        const studentsDetails =await Student.create({
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


const studentsDatas=async(req,res)=>{
    try {
        
        const studentsData = await Student.find({})

        if (studentsData) {
            res.status(201).json(studentsData)
        } else {
            res.status(204).json({
                message: "Datas not found",
            }); 
        }
    } catch (error) {
        res.status(400).json({
            message: `can't fetch datas from database. Error:${error}`, 
            isError:true,
        }); 

        throw new Error("Failed") 
    }
   
}

module.exports = {addStudents,studentsDatas}
