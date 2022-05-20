import React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
function Movie() {
const [movie, setMovie] = useState({}); // Curly braces inside function since movie is an object
const navigate = useNavigate();
const {id} = useParams(); // destructuring id from app.js

console.log('ID', id)
useEffect(() => {
axios
.get(`http://localhost:8000/api/movies/${id}`)
.then((res) => {
    console.log(`MOVIE : ${res, res.data}` );
    setMovie(res.data);
})
.catch((err) => {
    console.log(err);
});
}, []);


return (
    <div>
        <h2>{movie.title}</h2>
        <p>{movie.genre}</p>
        <img> src = {movie.boxArt}</img>
        <p>{movie.watchLength}</p>
        <p>{movie.rating}</p>
        <p>Actors : </p>
        <p>{movie.actors && movie.actors.join(',')}</p>
        {/* <ul>
            {movie.actors.map((a) => (
                <li key = {a}>{a}</li>
            ))}
        </ul> */}
        <p>{movie.isKidFriendly ? <p>Good for Kids! </p> : <p>Not safe for kids </p>}</p>
        <p>Released year: {movie.releaseYear}</p>
        


    </div>
)
}

export default Movie