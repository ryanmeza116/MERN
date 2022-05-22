import { useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdoptButton from './AdoptButton';

function PetList() {
    const [pets, setPets] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/pets')
            .then((res) => {
                setPets(res.data);
            })
            .catch((err) => {
                console.log('ERROR IN GET ALL PETS', err);
            });
    }, []);
    const handleDelete = (deletedId) => {
        setPets(pets.filter((pet) => pet._id !== deletedId));
    };

    return (
    // <div className="container">
    // {pets.map((pet) => (
    // <div className="pet" key={pet._id}>
    //     <h2>{pet.petName}</h2>
    //     <h4>{pet.petType}</h4>
    //     <p>{pet.petDescription}</p>
    //     <br />
    //     <Link className="link" to={`/pet/${pet._id}`}> Pet Details</Link>
    //     <span> | </span>
    //     <Link  className="link" to={`/pet/edit/${pet._id}`} state={pet}>
    //         {console.log("pet id : ", pet._id)}
    //     Update
    //     </Link>
    //     <br />
    //     <AdoptButton id={pet._id} handleDelete={handleDelete} />
    // </div>
    // ))}

<table class="styled-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions </th>
        </tr>
    </thead>
    <tbody>
        {pets.map((pet, index) => {
            return (
            <tr key = {pet._id}>
                <td>{pet.petName}</td>
                <td>{pet.petType}</td>
                <td>
                    <Link className="link" to={`/pet/${pet._id}`}>
                    Pet Details
                    </Link>
                    <span> | </span>
                    <Link  className="link" to={`/pet/edit/${pet._id}`} state={pet}>
                    Update
                    </Link>
                </td>
                
            </tr>
            );
        })}
        
    </tbody>
</table>


    )
}

export default PetList;