import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from './PetForm';
function NewPet() {
const navigate = useNavigate();
const submitHandler = (pet, setErrors) => {
axios
    .post('http://localhost:8000/api/pets', pet)
    .then((res) => {
    navigate('/');
    })
    .catch((err) => {
    console.log('ERROR Response Data', err.response.data);
    setErrors(err.response.data.error.errors);
    });
};
return <Form submitHandler={submitHandler} buttonText={'Add New Pet'} />;
}

export default NewPet;