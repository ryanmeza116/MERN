import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const OneProduct = (props) => {
    const {id} = useParams();

    const [oneProduct, setOneProduct] = useState({});
    // passing through {} because oneProduct will be an object
    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=> {
            console.log(res);
            console.log(res.data);
            setOneProduct(res.data);
        })
        .catch((err) => console.log(err))
    }, [id])



    return (
        <div className = "oneProduct">
            <h2>{oneProduct.title}</h2>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
        </div>
    )
}

export default OneProduct;