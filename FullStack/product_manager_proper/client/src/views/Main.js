import React, {useState, useEffect} from 'react';
import CreateProduct from '../components/CreateProduct';
import DisplayAll from '../components/DisplayAll';




const Main = (props) => {


    const [productList, setProductList] = useState([]);




    return (
        <div>
            <CreateProduct productList = {productList} setProductList = {setProductList}/> 
            <DisplayAll productList = {productList} setProductList = {setProductList}/>
            {/* Why is productList included on components?  */}
        </div>
    )
}
export default Main;