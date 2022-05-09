const mongoose = require('mongoose');
const movieDB = "movieDB"

mongoose
.connect(`mongodb://localhost/${movieDB}`, {useNewUrlParser: true , useUnifiedTopology: true})
.then(() => {
    console.log(`CONNECTED TO MONGODB ${movieDB}`); //to let user know connection is successful
}) .catch((err) => {
    console.log('DB CONNECTION ERROR', err)
});