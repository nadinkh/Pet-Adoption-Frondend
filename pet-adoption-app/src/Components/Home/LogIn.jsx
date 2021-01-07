import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Modal from 'react-modal';
import './Home.css'
import axios from './axios.js'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'coral'
    }
};

Modal.setAppElement('#root')

const LogIn = ({ toggleModal2, modalIsOpen2 }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const logIn = async (event) => {
        event.preventDefault()
        const response = await axios.post("/user/login", {
            email: email,
            password: password
        })
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
        }
        history.push('/HomeLogin')
        const reload = window.location.reload()
    }
    return (
        <div>
            {/* <button onClick={toggleModal2}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen2}
                onRequestClose={toggleModal2}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2>LogIn</h2>
                {/* <button onClick={toggleModal2}>close</button> */}
                <form className="login-container">
                    <label for="email-login">Email:</label>
                    <input className="login-email" onChange={event => handleEmail(event)}
                        type="email" placeholder="Enter your email" required />
                    <label for="password-login">Password:</label>
                    <input className="login-password" onChange={event => handlePassword(event)}
                        type="password" placeholder="Enter your password" required />
                    <button className="login-btn" onClick={logIn} type="submit">Log in</button>
                </form>
            </Modal>
        </div >
    );
}

export default LogIn