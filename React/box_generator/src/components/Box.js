import React from 'react'

function Box(props) {
    const {color, index, boxArray, setBoxArray} = props; 
    const handleClick = () => {
        const newArray = []; // we will append the colors a user chooses to this array. 
        for (let i = 0; i < box.length; i++) {
            // will iterate over all the indexes in our boxArray
            if( i !== index) {
                newArray.push(boxArray[i]);
            }
        }
        setBoxArray(newArray);
    };
    return (
        <div style = {{backGroundColor : color, height : '100px', width: '100px'}}>
            Box
            <button onClick = {handleClick}>Delete</button>
        </div>
    );
}

export default Box; 