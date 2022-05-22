import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AdoptButton from './AdoptButton'

function Pet() {
const [pet, setPet] = useState({});
const navigate = useNavigate();
const { id } = useParams();
console.log('IDDD', id);
useEffect(() => {
axios
    .get(`http://localhost:8000/api/pets/${id}`)
    .then((res) => {
    console.log('PET', res.data);
    setPet(res.data);
    })
    .catch((err) => {
    console.log(err);
    });
}, []);

return (
<div>
    <h2>{pet.petName}</h2>
    <p>Pet Type: {pet.petType}</p>
    <p>Description: {pet.petDescription}</p>
    <p>Known Tricks : </p>
    <p>{pet.petTricks && pet.petTricks.join(',')}</p>
    <AdoptButton id={pet._id} handleDelete={() => navigate('/')} />
</div>
);
}

export default Pet;
