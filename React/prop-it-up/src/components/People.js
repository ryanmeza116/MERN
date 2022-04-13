import React from 'react'

const People = (props) => {
    return (
        // will group jsx
        // parent component required
        <div>
            <h1>{ props.lastName },{ props.firstName }</h1>
            <p>Age : {props.age}</p>
            <p>Hair Color : {props.hairColor}</p>
        </div>
        
    )
}

export default People; 