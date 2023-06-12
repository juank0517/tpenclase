import React from 'react';
import './Form.css'

const Form = () => {
    return(
        <form>
            <div className='filaFormulario'>
                <h3>Email</h3>
                <input type='email' placeholder='Email Address' required />
            </div>
            <div className='filaFormulario'>
                <h3>Password</h3>
                <input type='password' placeholder='Password'  required />
                <div className='contenidoAdicionalLogin'>
                <div className=''>
                    <input id='checkRecordar' type='checkbox' />
                    <label for='checkRecordar'>Remember me</label>
                </div>
                <a href='#'>Forgot your passowrd?</a>
                </div>
            </div>
            <div className='filaFormulario'>
            <button className='btnLogin'>Login</button>
            </div>
        </form>
    )
}

export { Form }