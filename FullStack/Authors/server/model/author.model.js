const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName : { 
        type:String,
        required : [
            true, 
            "First Name is required"
        ],
        minlength:[3, "Authors name must be at least 3 characters."],
    },
    lastName : {
    type : String, 
    required : [
        true,
        "Last Name Required"
    ],
    minlength:[3, "Authors name must be at least 3 characters."],
    }
},

{
    timestamps : true
})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;