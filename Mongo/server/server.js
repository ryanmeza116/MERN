const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;
const mongoURI = "mongodb://localhost:27017/mongo-practice";

// body parser
app.use(express.json())
app.use(express.urlencoded({extended:true}));

mongoose
.connect(mongoURI,{ useNewUrlParser : true , useUnifiedTopology : true })
.then(() => {
    console.log('Connected to MongoDb');
})
.catch((err) => {
    console.log('ERROR IN DB CONNECTION', err);
});

const StudentSchema = mongoose.Schema(
    {
    name: String,
    email: String,
    age: Number,
    currentStack: String,
    isActive: Boolean
    }, 
    {
    timestamp:true, // updated_at, created_at -- must be outside main JS object
    },
    );

const Student = mongoose.model('Student', StudentSchema);

app.post("/api/students", (req,res) => {
    Student.create(req.body)
    .then((newStudent) => {
        res.status(201).json(newStudent);
    })
    .catch((err) => {
        res.status(500).json(err); 
    });
});
app.get("/api/students", (req,res) => {
    Student.find({})
    .then((students) => {
        res.json(students);
    })
    .catch((err) => {
        res.status(500).json(err); 
    });
});

app.listen(PORT, () => {
    console.log(`SERVER UP ON ${PORT}`)
})


// Basic template for creating server

// Copied from class repo: 
// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const PORT = 8000;
// // const mongoURI = 'mongodb://localhost/mongo-practice';
// const mongoURI = 'mongodb://localhost:27017/mongo-practice';

// // body parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// mongoose
// .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => {
//     console.log('CONNECTED TO MONGODB');
// })
// .catch((err) => {
//     console.log('ERROR IN DB CONNECTION', err);
// });

// // SCHEMA

// const StudentSchema = mongoose.Schema(
// {
//     //_id is auto created
//     name: String,
//     email: String,
//     age: Number,
//     currentStack: String,
//     isActive: Boolean,
// },
// {
//     timestamp: true,
// },
// );
// const Student = mongoose.model('Student', StudentSchema);

// app.post('/api/students', (req, res) => {
// Student.create(req.body)
//     .then((newStudent) => {
//     res.status(201).json(newStudent);
//     })
//     .catch((err) => {
//     res.status(500).json(err);
//     });
// });
// app.get('/api/students', (req, res) => {
// Student.find({})
//     .then((students) => {
//     res.json(students);
//     })
//     .catch((err) => {
//     res.status(500).json(err);
//     });
// });
// app.listen(PORT, () => {
// console.log(`SERVER UP ON ${PORT}`);
// });

