import React, { useState } from 'react' ;

const People = (props) => {
    const { firstName, lastName, age, hairColor } = props; 
    const [ stateAge, setStateAge] = useState(age) 
    return (
        <div>
            <h2>
                {lastName}, {firstName}
            </h2>
            <p>Age:{stateAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={( setStateAge(stateAge +1))}>
                Increase age for {firstName} {lastName}
            </button>
        </div>
    );
};
export default People;