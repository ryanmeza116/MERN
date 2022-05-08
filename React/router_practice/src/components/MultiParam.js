import React from 'react' 
import {useParams } from 'react-router-dom'

function MultiParam() {
    const {word, color, background } = useParams();
    return <div style = {{color,background}}> The word is : {word}</div>

}

export default MultiParam; 