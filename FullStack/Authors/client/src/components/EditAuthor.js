import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditAuthor = (props) => {
const { id } = useParams();
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState('');
const [errors, setErrors] = useState({}); // we use an object because errors is an object with certain keys in browser terminal
const [authorNotFoundError, setAuthorNotFoundError] = useState("");
console.log(id);
const navigate = useNavigate();
useEffect(() => {
axios
    .get(`http://localhost:8000/api/authors/${id}`)
    .then((response) => {
    console.log(response.data);
    setFirstName(response.data.firstName);
    setLastName(response.data.lastName);
    })
    .catch((err) => {
    console.log(err.response);
    setAuthorNotFoundError(`Author not found using that ID`);
    });
}, []);

const submitHandler = (e) => {
e.preventDefault();

axios
    .put(`http://localhost:8000/api/authors/${id}`, {
        firstName,
        lastName 
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
<form onSubmit={submitHandler}>
    {authorNotFoundError ? (
    <h2>
        {authorNotFoundError} <Link to="/new">Click here to add author</Link>
    </h2>
    ) : null}
    <Link to="/">Home</Link>
    <div className="form-group">
    <label>First Name : </label>
    <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
    />
    <label>Last Name : </label>
    <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
    />
    {errors.firstName ? <p>{errors.firstName.message}</p> : null}
    {errors.lastName ? <p>{errors.lastName.message}</p> : null}
    </div>
    <button type="submit" className="btn btn-primary">
    SUBMIT
    </button>
</form>
);
};

export default EditAuthor;