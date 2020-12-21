import React from 'react'
import './AdvancedSearch.css'
import { Link } from "react-router-dom";
import Search from './Search'

const AdvancedSearch = () => {
    return (
        <div className="advanced-search-container">
            {/* <input className="advanced-search-input" type="search"
                    name="dog-search" placeholder="advanced search" />
                <button className="advanced-search-btn">Search</button>
            </div> */}
            <h5>Advanced Search </h5>
            <div className="basic-search-link">
                <Link to="/search">Back to Basic Search</Link>
            </div>

            <div className="options-filter">

                <input className="name-filter" type="search"
                    name="dog-search" placeholder="Filter by Name" />
                <select className="status-filter" id="status" name="status">
                    <option value="adopted">Adopted</option>
                    <option value="saab">Available</option>
                </select>
                {/* <input className="status-filter" type="search"
                    name="dog-search" placeholder="Filter by Status" /> */}

                <input className="type-filter" type="search"
                    name="dog-search" placeholder="Filter by Type" />

                <input className="height-filter" type="search"
                    name="dog-search" placeholder="Filter by Height" />

                <input className="weight-filter" type="search"
                    name="dog-search" placeholder="Filter by Weight" />
            </div>
            <div className="filter-container">
                <button className="filter-btn">Filter</button>
            </div>

        </div>
    )

}
export default AdvancedSearch