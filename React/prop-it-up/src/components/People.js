import React, { useState } from 'react'

const People = (props) => {
    const [ stateAge, setStateAge] = useState(props.age)
    return (
        // will group jsx
        // parent component required
        <div>
            <h1>{ props.lastName },{ props.firstName }</h1>
            <p>Age : {stateAge}</p>
            <p>Hair Color : {props.hairColor}</p>
            <button onClick = {() => setStateAge(stateAge + 1)}>
                Birthday button for {props.firstName} {props.lastName}
            </button>
        </div>
        
    )
}

// instead of having {props.firstName}, we can deconstruct by writing : 
// const {firstName, lastName, age, hairColor } = props; 
// which then allows us to only have {firstName} {lastName}
// props is immutable, unchangeable. to change, change to state variable. 

export default People; 