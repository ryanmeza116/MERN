import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

console.log('Accessing edit pet component')

const EditPet = (props) => {
    const { id } = useParams();
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState('');
    const [petDescription, setPetDescription] = useState('');
    const [petTricks, setPetTricks] = useState([]);
    const [errors, setErrors] = useState({}); // we use an object because errors is an object with certain keys in browser terminal
    const [petNotFoundError, setPetNotFoundError] = useState("");
    console.log(id);
    const navigate = useNavigate();
    
    
    useEffect(() => {
    axios
        .get(`http://localhost:8000/api/pets/${id}`)
        .then((response) => {
        console.log(response.data);
        setPetName(response.data.petName);
        setPetType(response.data.petType);
        setPetDescription(response.data.petDescription);
        setPetTricks(response.data.petTricks);
        })
        .catch((err) => {
        console.log("ERROR IN GET" ,err.response);
        setPetNotFoundError(`Pet not found using that ID`);
        });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
    axios
    .put(`http://localhost:8000/api/pets/${id}`, {
        petName,
        petType,
        petDescription,
        petTricks
    })
    .then((response) => {
    console.log(response);
    navigate('/');
    })
    .catch((err) => {
    console.log(err.response.data.error.errors);
    setErrors(err.response.data.error.errors);
    });
};
return (
    <form onSubmit={submitHandler} className = "update_pet">
    {petNotFoundError ? (
    <h2>
        {petNotFoundError} <Link to="/new">Click here to add a new adoption</Link>
    </h2>
    ) : null}
    <Link to="/">Home</Link>


    <div className="form-group">
    <label>Pet's Name</label>
    <input
        type="text"
        id="petName"
        value={petName}
        onChange={(e) => setPetName(e.target.value)}
    />
    <label> Pet type :  </label>
    <input
        type="text"
        id="petType"
        value={petType}
        onChange={(e) => setPetType(e.target.value)}
    />
    <label> Description :  </label>
    <input
        type="text"
        id="petDescription"
        value={petDescription}
        onChange={(e) => setPetDescription(e.target.value)}
    />
    <label>Pet's known Tricks: </label>
    <input
        type="text"
        id="petTricks"
        value={petTricks}
        onChange={(e) => setPetTricks(e.target.value)}
    />
    {errors.petName ? <p>{errors.petName.message}</p> : null}
    {errors.petType ? <p>{errors.petType.message}</p> : null}
    {errors.petDescription ? <p>{errors.petDescription.message}</p> : null}
    {errors.petTricks ? <p>{errors.petTricks.message}</p> : null}
    </div>
    <button type="submit" className="button">
    Update Pet
    </button>
</form>
);
};

export default EditPet;