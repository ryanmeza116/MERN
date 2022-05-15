import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, Link} from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = (props) => {

    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    useEffect(() =>  {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch((err) => console.log(err))
    }, [])
    
    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res);
            console.log(res.data)
            navigate('/');
            // returns user to home page after update is completed
        })
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
            <div className="form-fields">
                <label>Title</label>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    //We set our value to title here mainly to help us clear out the inputs on submission
                    value={title}
                    name="title"
                    type="text"
                />
            </div>

            <br />

            <div className="form-fields">
                <label>Price</label>
                <input
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    name="price"
                    type="number"
                />
            </div>

            <br />

            <div className="form-fields">
                <label>Description</label>
                <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    name="description"
                    type="text"
                />
            </div>

            <br />
            
            <input className="submit-input" type="submit" value="Update" />
        </form>

        <Link to = {'/'}>Go Home</Link>
        </div>
    )
}

export default UpdateProduct;
