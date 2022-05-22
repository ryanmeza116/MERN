import React from 'react';
import axios from 'axios';
function AdoptButton(props) {
const { id, handleDelete } = props;
const adoptHandler = () => {
axios
    .delete(`http://localhost:8000/api/pets/${id}`)
    .then((res) => {
    console.log(res);
    handleDelete(id); // dynamic (navigate | filter)
    })
    .catch((err) => {
    console.log(err);
    });
};
return <button className = "Adoptbutton" onClick={adoptHandler}>Adopt! </button>;
}

export default AdoptButton;