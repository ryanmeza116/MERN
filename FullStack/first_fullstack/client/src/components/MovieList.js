import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function MovieList() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/movies') .then((res) => {
            setMovies(res.data);
        })
        .catch ((err) => {
            console.log("Error in Get All", err)
        });
    }, []); // the empty array prevents useEffect from running all day
return (
    <div>
        {movies.map(movie => (
            <div key = {movie.id}>
                <h2>{movie.title}</h2>
                <img src = {movie.boxArt} alt = "" />
                <br />
                <Link to={`/movie/${movie.id}`}></Link>
            </div>
        ))
            
        }
    </div>
)
}

export default MovieList