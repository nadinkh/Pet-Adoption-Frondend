import './Home.css'
import React from 'react'
import dog1 from './dog1.png'
import bulldog from './bulldog.png'
import puppy from './puppy.png'
import LogIn from './LogIn'
import Modal from 'react-modal';
import SignUp from './SignUp'


Modal.setAppElement('#root')
const Home = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpen2, setIsOpen2] = React.useState(false);

    function toggleModal() {
        setIsOpen(!modalIsOpen)

    }
    function toggleModal2() {
        setIsOpen2(!modalIsOpen2)

    }
    return (
        <>
            <div className="home">
                {/* <h1><FcHome /></h1> */}
                <div className="middle-navbar">
                    <button className="login" onClick={toggleModal2}>Log In</button>
                    <button className="sign-up" onClick={toggleModal}>Sign Up</button>
                </div>
                <h2>Our Dogs Need Your Help</h2>
                <div className="home-page-images">
                    <img className="bulldog" src={bulldog} alt="doggie" />
                    <img className="dog-pic1" src={dog1} alt="doggie" />
                    <img className="puppy" src={puppy} alt="doggie" />
                </div>
                <h3>
                    Welcome to Our Site !
            </h3>
            </div>
            <LogIn modalIsOpen2={modalIsOpen2} toggleModal2={toggleModal2} />
            <SignUp modalIsOpen={modalIsOpen} toggleModal={toggleModal} />

        </>
    )
}

export default Home
