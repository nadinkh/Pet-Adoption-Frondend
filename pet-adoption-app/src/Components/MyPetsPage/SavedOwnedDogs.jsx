import React from 'react'
import '../Search/DogsCards.css'

import {
    BiMessageRoundedDetail
} from 'react-icons/bi';
import alvan from '../Search/Images/alvan.jpg'
import edeson from '../Search/Images/edeson.jpg'


const SavedOwnedDogs = () => {
    return (
        <div className="cards-container">
            <div className="card-one">
                <img className="first-dog" src={alvan} alt="doggie" />
                <div className="detail-container">
                    <div className="dog-name">Name :</div>
                    <div className="dog-type">Type:</div>
                    <div className="dog-status"> Current Status:</div>

                </div>
                <button className="readmore-btn">Read More
            <BiMessageRoundedDetail /></button>
            </div>
            <div className="card-two">
                <img className="second-dog" src={edeson} alt="doggie" />
                <div className="detail-container">
                    <div className="dog-name">Name :</div>
                    <div className="dog-type">Type:</div>
                    <div className="dog-status"> Current Status:</div>

                </div>
                <button className="readmore-btn">Read More
            <BiMessageRoundedDetail /></button>
            </div>
        </div >

    )
}
export default SavedOwnedDogs