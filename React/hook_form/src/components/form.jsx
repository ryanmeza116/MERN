import React, { useState } from 'react'; 

// creating variables where user info can be stored and changed : 

const Form = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


// creating object to hold styling options for results table : 

const formStyle = {
    textAlign: 'left',
    width: '450px',
    margin: 'auto'
}

const inputStyle = {
    borderRadius: '5px',
    backgroundColor: '#f2f2f2',
    border: '1px solid darkgrey',
    padding: '0px 10px',
    margin: '5px'
}

return (
    <div>
        <form style = {{ marginTop:'20px'}}>
            <div style = {inputStyle}>
                <label htmlFor = "firstName">First Name: </label>
                <input 
                type = "text"
                name = "firstName"
                onChange = { (e) => setFirstName (e.target.value)}
                />
            </div>
            {firstName.length < 2 ? (
                <p>First Name must be at least 2 characters.</p>
            ) : null}
            <div style = {inputStyle}>
                <label htmlFor = "lastName">Last Name: </label>
                <input 
                type = "text"
                name = "lastName"
                onChange = { (e) => setlastName (e.target.value)}
                />
            </div>
            {lastName.length < 2 ? (
                <p>Last Name must be at least 2 characters.</p>
            ) : null}
            <div style = {inputStyle}>
                <label htmlFor = "email">Email: </label>
                <input 
                type = "text"
                name = "email"
                onChange = { (e) =>{ setEmail (e.target.value)
                console.log(e.target.value)
                }}
                
                
                
                />
            </div>
            {email.length < 5 ? (
                <p>Email must be at least 5 characters.</p>
            ) : null}
            <div style = {inputStyle}>
                <label htmlFor = "password">Password : </label>
                <input 
                type = "password"
                name = "password"
                onChange = { (e) => setPassword (e.target.value)}
                />
            </div>
            {password.length < 8 ? (
                <p>Password must be at least 8 characters.</p>
            ) : null}
            <div style = {inputStyle}>
                <label htmlFor = "confirmPassword">Confirm Password: </label>
                <input 
                type = "password"
                name = "confirmPassword"
                onChange = { (e) => setConfirmPassword (e.target.value)}
                />
            </div>
            {confirmPassword !== password ? <p>Passwords must match</p> : null}
        </form>

        <div style = {formStyle}>
            <h3 style = {{textAlign:'center'}}>Your Form Data</h3>
            <p>
                <label>First Name: </label>{ firstName }
            </p>
            <p>
                <label>Last Name: </label> {lastName}
            </p>
            <p>
                <label>Email: </label> {email}
            </p>
            <p>
                <label> Password: </label> {password}
            </p>
            <p>
                <label> Confirm Password: </label> {confirmPassword}
            </p>
        </div>
    </div>
)
}
export default Form;

// Questions for 1 on 1: 
// 1: How to style? Is styling css or bootstrap? 
// 2: What is e? How does it work, why + when do we use it? 
// 3: Why do we use props but never call it? 