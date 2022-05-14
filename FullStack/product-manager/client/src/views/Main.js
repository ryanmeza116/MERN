import React, {useState, useEffect} from 'react';
import CreateProduct from '../components/CreateProduct';
import DisplayAll from '../components/DisplayAll';



const Main = (props) => {

    const [productList, setProductList] = useState([]); //passing an array since our products will be stored in an array





    return (
        <div>
            <CreateProduct productList = {productList} setProductList = {setProductList} />
            <DisplayAll productList = {productList} setProductList = {setProductList}/>
        </div>
    )
}

export default Main; 