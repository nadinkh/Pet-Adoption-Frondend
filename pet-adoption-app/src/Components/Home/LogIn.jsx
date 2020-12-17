import React from 'react';
import Modal from 'react-modal';
import './Home.css'
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
                    <input className="login-email" type="email" placeholder="Enter your email" required />
                    <label for="password-login">Password:</label>
                    <input className="login-password" type="password" placeholder="Enter your password" required />
                    <button className="login-btn">Log in</button>
                </form>
            </Modal>
        </div >
    );
}

export default LogIn