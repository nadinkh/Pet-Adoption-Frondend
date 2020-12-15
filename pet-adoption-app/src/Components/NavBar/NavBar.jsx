import './NavBar.css'
import React from 'react'
import { FcHome } from 'react-icons/fc';
import {
    FiSearch
} from 'react-icons/fi';
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <div className="upper-navbar">
                <Link to="/search">
                    <button className="search">Search<FiSearch /></button>
                </Link>
                <Link>
                    <button className="my-pets">My Pets</button>
                </Link>
                <Link>
                    <button className="settings">Settings</button>
                </Link>

            </div>
        </div>


    )
}

export default NavBar
