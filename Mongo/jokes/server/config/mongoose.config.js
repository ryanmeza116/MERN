const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokesdb' , {
    useNewUrlParser : true, 
    useUnifiedTopology: true
})
    .then(() =>console.log("CONNECTED TO DB"))
    .catch(err => console.log("Something went wrong when connected to DB", err))