import './NavBar.css'
import React from 'react'
import {
    FiSearch
} from 'react-icons/fi';
import Logo from './Logo.PNG'
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <div className="upper-navbar">

                <div className="left-up-navbar">
                    <Link to="/" >
                        <button className="home-btn">Home</button>
                    </Link>
                    <Link to="/search">
                        <button className="search">Search<FiSearch /></button>
                    </Link>

                    <Link to="/mypetspage">
                        <button className="my-pets">My Pets</button>
                    </Link>
                </div>

                <Link to="/">
                    <img className="logo" src={Logo} alt="doggie" />
                </Link>

                <div className="right-up-navbar">

                    <Link to="/profilesettings">
                        <button className="settings">Settings</button>
                    </Link>
                    <Link >
                        <button className="logout">Logout</button>
                    </Link>
                </div>
            </div>
        </div>


    )
}

export default NavBar
