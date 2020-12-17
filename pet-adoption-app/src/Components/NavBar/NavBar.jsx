import './NavBar.css'
import React from 'react'
import {
    FiSearch
} from 'react-icons/fi';
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <div className="upper-navbar">
                <div className="left-up-navbar">
                    <Link >
                        <button className="home-btn">Home</button>
                    </Link>
                    <Link to="/search">
                        <button className="search">Search<FiSearch /></button>
                    </Link>
                    <Link>
                        <button className="my-pets">My Pets</button>
                    </Link>
                </div>
                <div className="right-up-navbar">
                    <Link>
                        <button className="settings">Settings</button>
                    </Link>
                    <Link >
                        <button className="logout">logout</button>
                    </Link>
                </div>
            </div>
        </div>


    )
}

export default NavBar
