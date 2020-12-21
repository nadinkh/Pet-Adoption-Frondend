import './DogsCards.css'
import React from 'react'
import {
    BiMessageRoundedDetail
} from 'react-icons/bi';
import alvan from './Images/alvan.jpg'
import edeson from './Images/edeson.jpg'
import james from './Images/james.jpg';
import { Link } from "react-router-dom";
const DogsCards = () => {
    return (

        <div className="cards-container">
            <div className="card-one">
                <img className="first-dog" src={alvan} alt="doggie" />
                <div className="detail-container">
                    <div className="dog-name">Name :</div>
                    <div className="dog-type">Type:</div>
                    <div className="dog-status">Status:</div>
                    <div className="dog-height">Height:</div>
                    <div className="dog-weight">weight:</div>
                </div>
                <Link to="/readmore">

                    <button className="readmore-btn">Read More
                <BiMessageRoundedDetail /></button>
                </Link>
            </div>
            <div className="card-two">
                <img className="second-dog" src={edeson} alt="doggie" />
                <div className="detail-container">
                    <div className="dog-name">Name :</div>
                    <div className="dog-type">Type:</div>
                    <div className="dog-status">Status:</div>
                    <div className="dog-height">Height:</div>
                    <div className="dog-weight">weight:</div>
                </div>
                <button className="readmore-btn">Read More
                <BiMessageRoundedDetail /></button>
            </div>
            <div className="card-three">
                <img className="third-dog" src={james} alt="doggie" />
                <div className="detail-container">
                    <div className="dog-name">Name :</div>
                    <div className="dog-type">Type:</div>
                    <div className="dog-status">Status:</div>
                    <div className="dog-height">Height:</div>
                    <div className="dog-weight">weight:</div>
                </div>
                <button className="readmore-btn">Read More
                <BiMessageRoundedDetail /></button>
            </div>
            <div className="card-one">
                <img className="first-dog" src={alvan} alt="doggie" />
                <div className="detail-container">
                    <div className="dog-name">Name :</div>
                    <div className="dog-type">Type:</div>
                    <div className="dog-status">Status:</div>
                    <div className="dog-height">Height:</div>
                    <div className="dog-weight">weight:</div>
                </div>
                <button className="readmore-btn">Read More
                <BiMessageRoundedDetail /></button>
            </div>
            <div className="card-two">
                <img className="second-dog" src={edeson} alt="doggie" />
                <div className="detail-container">
                    <div className="dog-name">Name :</div>
                    <div className="dog-type">Type:</div>
                    <div className="dog-status">Status:</div>
                    <div className="dog-height">Height:</div>
                    <div className="dog-weight">weight:</div>
                </div>
                <button className="readmore-btn">Read More
                <BiMessageRoundedDetail /></button>
            </div>
            <div className="card-three">
                <img className="third-dog" src={james} alt="doggie" />
                <div className="detail-container">
                    <div className="dog-name">Name :</div>
                    <div className="dog-type">Type:</div>
                    <div className="dog-status">Status:</div>
                    <div className="dog-height">Height:</div>
                    <div className="dog-weight">weight:</div>
                </div>
                <button className="readmore-btn">Read More
                <BiMessageRoundedDetail /></button>
            </div>
        </div >



    )
}

export default DogsCards
