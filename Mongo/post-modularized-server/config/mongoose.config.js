const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/mongo-practice";

mongoose
.connect(mongoURI,{ useNewUrlParser : true , useUnifiedTopology : true })
.then(() => {
    console.log('Connected to MongoDb');
})
.catch((err) => {
    console.log('ERROR IN DB CONNECTION', err);
});