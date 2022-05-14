import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
// The first video had me import reach router. I don't know which dependencies to uninstall and which ones to install. 
// Assume react-router dom was installed. 
const DisplayAll = (props) => {

    const { productList, setProductList} = props; 

    useEffect(() => { 
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data);
                setProductList(res.data)
            })
            .catch((err) => console.log(err));
    }, []); 


    return (
        <div>
            <header>
                All Products:
            </header>
            {
                productList.map((product, index)=> (
                    <div key = {product._id}>
                        <Link to = {`/product/${product._id}`}>
                            {product.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayAll;