// import {Link} from 'react-router-dom'
import React from 'react';
import { useParams } from 'react-router-dom';

function Param() {
    let {param} = useParams();
    if( isNaN(param)) {
        return <div>The Word is :{param}</div>;
    }
    else {
        return <div> The Number is : {param}</div>
    }
    
}

// const ParamsComponent = (props) => {
//     const {word, color, bgCol} = useParams();



// return (
//     <div>
//     {
//         isNaN(word)?
//         <p style = {
//             color?
//             {color: color, backgroundColor: bgCol}
//             :null
//         }>
//             This is a word: {word}
//         </p>
//         :
//         <p>
//             This is a number : {word}
//         </p>
//     }
//     </div>
// )
// }

export default Param;