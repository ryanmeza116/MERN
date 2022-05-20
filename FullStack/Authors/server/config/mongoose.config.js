// const mongoose = require('mongoose');

// const dbName = "authors";

// mongoose.connect(`mongodb://localhost/${dbName}`, {
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// })
// .then(() => console.log(`connected to ${dbName} database!`))
// .catch((err) => console.log(err));

const mongoose = require('mongoose');
const movieDB = 'authors';

mongoose
.connect(`mongodb://localhost/${movieDB}`, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log(`Connected to MongoDB ${movieDB}`);
})
.catch((err) => {
    console.log('DB CONNECTION ERROR', err);
});