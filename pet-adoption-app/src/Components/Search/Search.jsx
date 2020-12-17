
import React from 'react'
import './Search.css'

const Search = () => {
    return (
        <div className="search-container">

            <input className="search-input" type="search" id="dog-search" name="dog-search" />
            <button className="find-btn">Find</button>

        </div>
    )

}
export default Search