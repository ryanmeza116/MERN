import React from 'react'

const Person = (props) => {
    return (
        // will group jsx
        // parent component required
        <div>
            <h2>Hello my name is { props.firstName } { props.lastName }</h2>
        </div>
    )
}

export default Person; 