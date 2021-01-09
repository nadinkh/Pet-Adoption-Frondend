import './DogsCards.css'
import {
    BiMessageRoundedDetail
} from 'react-icons/bi';
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Image } from 'cloudinary-react'

const DogsCards = (props) => {

    console.log(props.dog)


    return (

        <div className="cards-container">
            {props.dog &&
                <div className="card-one">
                    <Image
                        style={{ width: 200 }} cloudName="drr6lmpsv" publicId={props.dog.photoUrl} />
                    <div className="detail-container">
                        <div className="dog-name">Name :{props.dog.name}</div>
                        <div className="dog-type">Type:{props.dog.type}</div>
                        <div className="dog-status">Status:{props.dog.adoptionStatus}</div>
                        <div className="dog-height">Height:{props.dog.height}</div>
                        <div className="dog-weight">weight:{props.dog.weight}</div>
                    </div>
                    <Link to={`/readmore/${props.dog._id}`}>

                        <button className="readmore-btn">Read More
                <BiMessageRoundedDetail /></button>
                    </Link>
                </div>

            }

        </div >



    )
}

export default DogsCards
