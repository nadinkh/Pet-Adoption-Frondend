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


const SignUp = ({ toggleModal, modalIsOpen }) => {
    return (
        <div>
            {/* <button onClick={toggleModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2>Sign Up</h2>
                {/* <button onClick={toggleModal}>close</button> */}

                <form className="sign-up-container">
                    <div className="first-last-name-container">
                        <div className="first-name-container">
                            <label for="fname">First Name:</label>
                            <input className="first-name" type="text" placeholder="First Name" required />
                        </div>
                        <div className="last-name-container">
                            <label for="lname">Last Name:</label>
                            <input className="last-name" type="text" placeholder="Last Name" required />
                        </div>
                    </div>
                    <label for="email">Email:</label>
                    <input className="sign-up-email" type="email" placeholder="youremail@email.com" required />
                    <label for="password">Password:</label>
                    <input className="sign-up-password" type="password" placeholder="Enter your password" required />
                    <label for="password-confirm">Confirm Password:</label>
                    <input className="sign-up-password-confirm" type="password" placeholder="Enter your password again" required />
                    <label for="phone">Enter your Phone Number:</label>
                    <input className="phone-number" type="tel" placeholder="+927-XXXX-XXXXX" required />
                    <button className="join">Join</button>
                </form>
            </Modal>
        </div >
    );
}

export default SignUp