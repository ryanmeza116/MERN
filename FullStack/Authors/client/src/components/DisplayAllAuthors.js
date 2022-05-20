import { useEffect, useState} from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from "react-router-dom";


const DisplayAllAuthors = () => {
    const[allAuthors, setAllAuthors] = useState([]); // using a list to append ALL authors, to then display ALL on front end
    
    useEffect(() => {
        axios
        .get('http://localhost:8000/api/authors')
        .then((res) => {
            console.log(`Result from Get all authors : ${res.data}`)
            setAllAuthors(res.data);
        })
        .catch((err) => console.log(`Error in get all authors, response :  ${err.res}, error : ${err}`))
    }, []);

const deleteAuthorHandle = (authorId) => {
    console.log('DELETE BUTTON PUSHED')
    console.log(authorId);
    axios
    .delete(`http://localhost:8000/api/authors/${authorId}`)
    .then((res) => {
        console.log("Successfully deleted author");
        console.log(res);
        const filteredAuthors = allAuthors.filter((author) => {
            return author._id !== authorId;
        });
        setAllAuthors(filteredAuthors);
    })
    .catch((err) => console.log(`Error in delete response, Error : ${err}, Error response : ${err.res}`));
};

return (
    <div className="container">
        <Link to="/new">Add an author</Link>
        <p className="purple-text">We have quotes by:</p>
        <div className='table'>
            <table >
            <thead >
            <tr>
                <th  scope="col">Author</th>
                <th scope="col">Actions Available</th>
            </tr>
            </thead>
            <tbody>
            {allAuthors.map((author, index) => {
                return (
                <tr key={author._id}>
                    <td>{author.firstName} {author.lastName} </td>
                    <td>
                    <Link to={`/edit/${author._id}`}>
                        <button className="edit">Edit</button>
                    </Link>

                    <button
                    onClick={() => deleteAuthorHandle(author._id)}
                    >
                    Delete
                    </button>
                    </td>
                </tr>
                );
                })}
            </tbody>
            </table>
        </div>
        
    </div>
);
};

export default DisplayAllAuthors; 