import React, { useState, useReducer } from 'react';

const initialState = {
    email : {
        value:'',
        error:''
    },
    password: {
        value: '',
        error:''
    },
    hasBeenSubmitted: false
}

const reducer = (state,action) => {
    switch(action.type) {
        case "SET_EMAIL_VALUE":
            return {
                ...state,
                email: {
                    ...state.email,
                    value: action.payload
                }
            }
        case "SET_PASSWORD_VALUE":
            return {
                ...state,
                password: {
                    ...state.password,
                    value: action.payload
                }
            }
        case "SET_PASSWORD_ERROR":
            return {
                ...state,
                password :{
                    ...state.password,
                    error:action.payload
                }
            }
        case "  SET_SUBMITTED_BOOLEAN":
            return {
                ...state,
                hasBeenSubmitted: action.payload
            }
        default:
            return state;
    }
}

export default () => {
    const [state,dispatch] = useReducer(reducer,initialState);

    const handleEmailChange = (e) => {
        if(e.target.value.length < 5){
            dispatch({
                type: 'SET_EMAIL_ERROR',
                payload: 'Email must be at least 5 characters'
            });
        } else {
            dispatch ({
                type: 'SET_EMAIL_ERROR',
                payload : ''
            });
        }
        dispatch({
            type: 'SET_EMAIL_VALUE',
            payload: e.target.value
        });
    }
        const handlePasswordChange = (e) => {
            if (e.target.value.length < 8){
                dispatch({
                    type: 'SET_PASSWORD_ERROR',
                    payload: 'Password must be 8 characters long'
                });
            } else {
                dispatch ({
                    type: 'SET_PASSWORD_ERROR',
                    payload: ''
                });
            }
            dispatch({
                type: 'SET_PASSWORD_VALUE',
                payload: e.target.value
            })
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            dispatch ({
                type: 'SET_SUBMITTED_BOOLEAN',
                payload: true
            })
        }


    //     }
    //     dispatch({
    //         type:'SET_EMAIL',
    //         payload: e.target.value
    //     });
    // }
    // const handlePasswordChange = (e) => {
    //     dispatch({
    //         type:'SET_PASSWORD',
    //         payload: e.target.value
    //     })
    // }


return (
<div>
            <h1>{
            JSON.stringify(state)}
            </h1> {/* display current value of state */}


            {/* {state.hasBeenSubmitted <font color="#f92672">?</font>   */}
            {/* <h3>Form has been submitted!</h3> : null}  */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Email</label>
                    <input
                        id="name"
                        value={state.email}
                        onChange={(e) => handleEmailChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        value={state.password}
                        onChange= {handlePasswordChange} 
                    />
                </div>
            </form>
        </div>
    );
}