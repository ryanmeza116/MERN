import { useState } from 'react'

function Form(props) {
    const [color, setColor] = useState(''); //the open quotes in "useState('')" defines the value of "color" in our array to '' so that color can be updated. 
    const {boxArray, setBoxArray} = props; // props is used to pass data from on component to another. Referenced in Box.js on ln 4
    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxArray([...boxArray, color]) // appends to existing list of boxArray a new color from event value. 
        setColor(''); 
    };
    return (
        <form onSubmit ={handleSubmit}>
            <label>Color</label>
            <input type = 'text' value = {color} onChange = {(e) => setColor(e.target.value)} />
            <input type = "submit" />
        </form>

    );
}
 export default Form; 