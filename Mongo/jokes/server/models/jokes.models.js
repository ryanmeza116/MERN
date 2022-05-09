const mongoose = require('mongoose'); 

const JokeSchema = new mongoose.Schema({
    setUp : String, 
    punchLine : String, 

},
{
    timestamps:true
}
);
const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke; 

//postman doesnt show content, only created at and updated at
// camelcase in post man needed to match in vs code