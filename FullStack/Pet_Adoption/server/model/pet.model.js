const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
    {
    petName : {
        type : String,
        required : [
            true, 
            "Pet's name is required"
        ],
        minlength : [3, "Pet's name must be at least 3 characters long"],

    },
    petType : {
        type : String,
        required : [
            true, 
            "Please include the kind of pet you would wish to add. (exe: Dog, Cat, Mouse) "
        ],
        minlength : [3, "Pet's type must be atleast 3 characters long"],

    },
    petDescription : {
        type : String,
        required : [
            true, 
            "Pet's description is required"
        ],
        minlength : [3, "Pet's description requires at least 3 characters"],

    },
    petTricks : {
        type : [String],
        default : 'None',
        maxLength : [3, "Max of three tricks please"],
        
    },
},
{
    timestamps : true
},
);


const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet; 