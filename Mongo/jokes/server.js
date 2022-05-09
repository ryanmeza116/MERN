const { prototype } = require('events');
const express = require('express');
const app = express();
const PORT = 8000;
require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({extended: true}));

const JokeRoutes = require('./server/routes/jokes.routes');
JokeRoutes(app);

app.listen(PORT, () => console.log(`Express running on ${PORT}`));