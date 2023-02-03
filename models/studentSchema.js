const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:{type:String, require:true},
    phone:{type:Number, require:true},
    date: {type: Date,default: Date.now}

},
{
    timestamps: true
} 
)

const  Student = mongoose.model("student", studentSchema)

module.exports= Student;