import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate} from "react-router-dom";
function Form(props) {
console.log('OLD PET', props.oldPet);
// const [pet, setPet] = useState({
//     petName: '',
//     petType: '',
//     petDescription: '',
//     petTricks: "",
// });

const [petName, setPetName] = useState('');
const [petType, setPetType] = useState('');
const [petDescription, setPetDescription] = useState('');
const [petTricks, setPetTricks] = useState([]);
const navigate = useNavigate();


// useEffect(() => {
//     if (props.oldPet) {
//     setPet(props.oldPet);
//     }
// }, [props.oldPet]);

const [errors, setErrors] = useState({});
// const submitHandler = (e) => {
//     e.preventDefault();
//     props.submitHandler(pet, setErrors);
// };

// const handleChange = (e) => {
//     if (e.target.name === 'isKidFriendly') {
//     setMovie({ ...movie, [e.target.name]: e.target.checked });
//     } else if (e.target.name === 'actors') {
//     setMovie({ ...movie, [e.target.name]: e.target.value.split(',') });
//     } else {
//     setMovie({ ...movie, [e.target.name]: e.target.value });
//     }
// };

const submitHandler = (e) => {
    e.preventDefault();
    axios
        .post('http://localhost:8000/api/pets',{
        petName,
        petType,
        petDescription,
        petTricks
        })
        .then((res) => {
            console.log(`result of create Pet : ${res}`);
            navigate('/');
        })
        .catch((err) => {
            console.log(err.response.data.error);
            setErrors(err.response.data.error.errors);
            // Uncaught TypeError: can't access property "name" of undefined
        });

};

return (
    <form className='update_pet' onSubmit = {submitHandler}>
        <h3>Know a pet needing a home?</h3>
        <label>Pet's Name : </label>
        <input type = "text" value = {petName} name = "petName" 
        onChange = {(e) => setPetName(e.target.value)}  />
        {errors.petName && <p className = "text-danger"> {errors.petName.message}</p>}
        <br />
        <label>Pet Type : </label>
        <input type = "text" value = {petType} name = "petType" 
        onChange = {(e) => setPetType(e.target.value)}  />
        {errors.petType && <p className = "text-danger"> {errors.petType.message}</p>}
        <br />
        <label>Pet Description : </label>
        <input type = "text" value = {petDescription} name = "petDescription" 
        onChange = {(e) => setPetDescription(e.target.value)}  />
        {errors.petDescription && <p className = "text-danger"> {errors.petDescription.message}</p>}
        <br />
        <label>Pet Tricks : </label>
        <input type = "text" value = {petTricks} name = "petTricks"
        onChange = {(e) => setPetTricks(e.target.value)}  />
        {errors.petTricks && <p className = "text-danger"> {errors.petTricks.message}</p>}
        <br />
        <input type = "submit" value = {props.buttonText} />
    </form>
)



}

export default Form;