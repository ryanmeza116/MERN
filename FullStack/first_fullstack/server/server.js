const express = require('express');
const cors = require('cors') // cross orgin resource sharing 
require('./config/mongoose.config');
const app  = express();
const PORT = 8000; 

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use(cors()) accepts all origin 

app.use (
    cors({
        origin : 'http://localhost:3000'
    }),
);
//Tells server to only allow localhost:3000 to communicate with db, frontend origin 

require('./routes/movie.routes')(app);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

