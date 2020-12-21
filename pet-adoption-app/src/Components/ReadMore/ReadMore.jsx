import React from 'react'
import '../Search/DogsCards.css'
import './ReadMore.css'
import { Link } from "react-router-dom";
import {
    FiSearch
} from 'react-icons/fi';
import alvan from '../Search/Images/alvan.jpg'


const ReadMore = () => {
    return (
        <div className="cards-container-readmore">
            <div className="card-one-readmore">
                <img className="first-dog" src={alvan} alt="doggie" />
                <div className="detail-container">
                    <div className="left-side-container">
                        <div className="dog-name-readmore">Name :</div>
                        <div className="dog-type-readmore">Type:</div>
                        <div className="dog-status-readmore">Status:</div>
                        <div className="dog-height-readmore">Height:</div>
                        <div className="dog-weight-readmore">weight:</div>
                    </div>
                    <div className="right-side-container">
                        <div className="dog-color">color:</div>
                        <div className="dog-hypoallergenic">Hypoallergenic:</div>
                        <div className="dog-dietary">Dietary restrictions:</div>
                    </div>
                </div>
                <div className="bio-container">

                    <div className="dog-bio">Bio</div>
                    <p className="bio-paragraph">bla bla bla bla bla</p>
                </div>
                <div className="btns-container">

                    <button className="save-btn">Save</button>
                    <button className="adopt-btn">Adopt</button>
                    <Link to="/search">
                        <button className="search">Search<FiSearch /></button>
                    </Link>
                </div>


            </div>
        </div>
    )
}
export default ReadMore