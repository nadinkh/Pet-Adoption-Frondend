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
                <div className="about">
                    <p>
                        Did you know that over 1,000 people per hour run a search
                        right here looking to adopt a pet? Pet adoption is quickly
                        becoming the preferred way to find a new dog, puppy,
                        cat or kitten. Best of all, there are so many benefits
                        when you adopt a dog or adopt a cat over buying.
                        For instance, pet adoption will almost always be more
                        affordable than buying a puppy for sale from a breeder or finding a
                        kitten for sale from a litter. There are more benefits as well.
                        Since pets in rescues and shelters usually come from a home where
                        the owners ran out of money, got divorced, or had to move,
                        it's common to find that the dogs and cats on our website
                        are already housetrained, good with kids, or do well with other pets.
                        People are finding out that buying a puppy for sale from a breeder
                        isn't all it's cracked up to be, and the dogs and cats don't leave the
                        organization without having their shots and being taken to the vet.
                        That means less stress, and more savings! So what are you waiting for?
                        Go find that perfect pet!
            </p>


                </div>
            </div>
            <LogIn modalIsOpen2={modalIsOpen2} toggleModal2={toggleModal2} />
            <SignUp modalIsOpen={modalIsOpen} toggleModal={toggleModal} />

        </>
    )
}

export default Home
