
// import React from 'react'
import './Search.css'
import { Link } from "react-router-dom";
import AdvancedSearch from './AdvancedSearch';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DogsCards from './DogsCards';
import axios from '../Home/axios'
import React, { useState, useEffect } from 'react'

const Search = () => {
    const [petList, setPetList] = useState([])
    useEffect(() => {
        const getPetList = async () => {
            const res = await axios.get('/pet')
            setPetList(res.data);
            console.log(petList);
            console.log(res.data)
        }
        getPetList()
    }, [])

    return (
        <div className="search-container">
            <div>
                <input className="search-input" type="search"
                    id="dog-search" name="dog-search" placeholder="Find your future dog" />
                <div >

                    <button className="find-btn">Find</button>
                </div>
                <div className="advanced-search-link">

                    <Link to="/advancedsearch">Advanced Search</Link>
                </div>

            </div>
            <div className="dog-list">
                {petList && petList.length > 0 && petList.map((dog, index) => {
                    return <DogsCards key={index} dog={dog} />
                })}

            </div>
        </div>
    )

}
export default Search