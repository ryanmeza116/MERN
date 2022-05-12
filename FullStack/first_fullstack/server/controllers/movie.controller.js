const Movie = require('../models/movie.model');

module.exports = {
    getMovies: (req,res) => {
        Movie.find({})
        .then(movies => {
            res.json(movies);
        })
        .catch(err=> {
            res.status(400).json({message: "Something went wrong in findAll", error: err});
        });
    },
    createMovie : (req,res) => {
        Movie.create(req.body)
        .then(newMovie => {
            res.status(201).json(newMovie)
        })
        .catch((err) => {
            res.status(400).json({message: "Something went wrong in create movie "});
        });
    },
    getMovieById : (req,res) => {
        Movie.findOne ({_id:req.params.id}) // why dont i have a ; here
        .then((movie) => {
            res.json(movie);
        }) // why not ; 
        .catch((err) => {
            res.status(400).json({message: "Something went from in findById", error: err});
        });
    },
    deleteMovieById : (req,res) => {
        Movie.deleteOne ({_id:req.params.id}) // why dont i have a ; here
        .then((movie) => {
            res.json(movie);
        }) // why not ; 
        .catch((err) => {
            res.status(400).json({message: "Something went from in deleteOne", error: err});
        });
    },
    updateMovieById : (req,res) => {
        Movie.findByIdAndUpdate (req.params.id, req.body, {new : true, runValidators: true}) // why dont i have a ; here
        .then((movie) => {
            res.json(movie);
        }) // why not ; 
        .catch((err) => {
            res.status(400).json({message: "Something went from in updateOne", error: err});
        });
    },

};
//questions : 
// what is req,res. Parameters? What arguments do they receive? 
// why does Movie.find have "({})"
//what does .then do? 
// what is movies? what is res.json(movies)
// what does .catch mean? where does err come from? what is res.status(400).json({})