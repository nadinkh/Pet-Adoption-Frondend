import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


const SignUp = ({ toggleModal, modalIsOpen }) => {
    return (
        <div>
            <button onClick={toggleModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2>Sign Up</h2>
                {/* <button onClick={toggleModal}>close</button> */}

                <form className="sign-up-container">
                    <input className="sign-up-email" type="email" placeholder="youremail@email.com" />
                    <input className="sign-up-password" type="password" placeholder="Enter your password" required />
                    <input className="sign-up-password-confirm" type="password" placeholder="Enter your password again" required />
                    <input className="first-name" type="text" placeholder="First Name" required />
                    <input className="last-name" type="text" placeholder="Last Name" required />
                    <h1 className="enter-phone" for="phone">Enter your Phone number</h1>
                    <input className="phone-number" type="tel" placeholder="+927-XXXX-XXXXX" required />
                    <button className="join">Join</button>


                </form>
            </Modal>
        </div >
    );
}

export default SignUp