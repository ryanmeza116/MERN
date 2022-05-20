import axios from "axios";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

const AuthorForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errors, setErrors] = useState({}); // Why do we append {}
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/authors',{
            firstName, 
            lastName,
            })
            .then((res) => {
                console.log(`result of create author : ${res}`);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data.error);
                setErrors(err.response.data.error.errors);
                // Uncaught TypeError: can't access property "name" of undefined
            });

    };
    console.log(errors);
    return (
    <div className="container">
        <div className="row">
            <div className="col-4">
                <Link to="/">Home</Link>
                <form onSubmit={handleSubmit}>
                    <div className="form-fields">
                        <label>First Name : </label>
                        <input
                        onChange = {(e) => setFirstName(e.target.value)}
                        value = {firstName}
                        name = "firstName"
                        type = "text"
                        />
                    </div>

                    <div className="form-fields">
                        <label>Last Name : </label>
                        <input
                        onChange = {(e) => setLastName(e.target.value)}
                        value = {lastName}
                        name = "lastName"
                        type = "text"
                        />
                    </div>


                        {/* <label htmlFor="firstName">First Name : </label>
                        <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        />
                        <label htmlFor="lastName"> Last Name : </label>
                        <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        /> */}

                        {errors.firstName ? <p>{errors.firstName.message}</p> : null}
                        {errors.lastName ? <p>{errors.lastName.message}</p> : null}
                    
                <button className="submit" type="submit" value = "Create Author">
                SUBMIT
                </button>
            </form>
        </div>
    </div>
</div>
);
};

export default AuthorForm;
