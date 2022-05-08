const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema(
    {
    name: String,
    email: String,
    age: Number,
    currentStack: String,
    isActive: Boolean
    }, 
    {
    timestamp:true, // updated_at, created_at -- must be outside main JS object
    },
    );


const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
