import React from 'react'
import { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

function NewMovie() {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [boxArt, setBoxArt] = useState('');
    const [watchLength, setWatchLength] = useState('');
    const [rating, setRating] = useState('');
    const [actors, setActors] = useState([]);
    const [isKidFriendly, setisKidFriendly] = useState(false);
    const [releaseYear, setReleaseYear] = useState(0);

    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/movies', {
            title,
            genre,
            boxArt,
            watchLength,
            rating,
            actors,
            isKidFriendly,
            releaseYear
        })
        .then((res) => {
            navigate('/');
        })
        .catch((err) => {
            console.log('ERROR',err);
        });
    };
return (
    <form onSubmit = {submitHandler}>
        <input type = "text" value = {title} onChange = {(e)=> setTitle(e.target.value)} />
        <select onChange={(e) => setGenre(e.target.value)}>
            <option>Select a Genre</option>
            <option value = "Comedy">Comedy</option>
            <option value = "Drama">Drama</option>
            <option value = "Horror">Horror</option>
            <option value = "Sci-Fi">Sci-Fi</option>
            <option value = "Fantasy">Fantasy</option>
            <option value = "Action">Action</option>
            <option value = "Animation">Animation</option>
        </select>
        <input type = "text" value = {boxArt} onChange = {(e)=> setBoxArt(e.target.value)}/>
        <input type = "text" value = {watchLength} onChange = {(e)=> setWatchLength(e.target.value)}/>
        <select onChange={(e) => setRating(e.target.value)}>
            <option>Select a Rating</option>
            <option value = "G">G</option>
            <option value = "PG">PG</option>
            <option value = "PG-13">PG-13</option>
            <option value = "R">R</option>
            <option value = "NC-17">NC-17</option>
        </select>
        <input type = "text" value = {actors} onChange = {(e)=> setActors(e.target.value.split(','))}/>
        <input type = "text" value = {releaseYear} onChange = {(e)=> setReleaseYear(e.target.value)}/>
        <label>isKidFriendly</label>
        <input type = "checkbox" 
        checked = {isKidFriendly}
        onChange = {(e) => setisKidFriendly(e.target.checked)} />

        <input type = "submit" value = "Add Movie" />
    </form>
)
}

export default NewMovie