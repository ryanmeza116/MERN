const mongoose = require("mongoose"); 

const MovieSchema = new mongoose.Schema (
    {
        title: {
            type:String,
            required:[true, "Movie Title is needed!"],
            maxlength:[40, "Title can't exceed 40 characters!"],
        },
        genre: {
            type: String,
            required: [true, "Movie Genre needed!"],
            enum: [// anything inside enum array is acceptable as input
                "Comedy",
                "Drama",
                "Horror",
                "Sci-Fi",
                "Fantasy",
                "Action",
                "Animation",
            ]
        },
        boxArt : {
            type : String,
            required:[true,"Movie image required"],
        },
        watchLength: {
            type:String,
            default: 'N/A',

        },
        rating : {
            type: String, 
            enum : ["G",'PG','PG-13','R','NC-17'],
            required: [true, "Movie Rating is required"]
        },
        actors : {
            type:[String],

        },
        isKidFriendly: {
            type: Boolean,
            default : false, 

        },
        releaseYear: {
            type : Number, 
            min : [1920, "Nothing older than 1920"]
        },
        
    },
    {
        timestamps: true,
    },
);

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie; 