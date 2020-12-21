
import React from 'react'
import './Search.css'
import { Link } from "react-router-dom";
import AdvancedSearch from './AdvancedSearch';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Search = () => {
    return (
        <div className="search-container">
            <input className="search-input" type="search"
                id="dog-search" name="dog-search" placeholder="Find your future dog" />
            <button className="find-btn">Find</button>
            <div className="advanced-search-link">

                <Link to="/advancedsearch">Advanced Search</Link>
            </div>
        </div>
    )

}
export default Search