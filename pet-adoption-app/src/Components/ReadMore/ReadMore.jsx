import axios from '../Home/axios'
import React, { useState, useEffect } from 'react'
import '../Search/DogsCards.css'
import './ReadMore.css'
import { Link, useParams } from "react-router-dom";
import {
    FiSearch
} from 'react-icons/fi';

import { Image } from 'cloudinary-react'
// import alvan from '../Search/Images/alvan.jpg'


const ReadMore = () => {
    let { id } = useParams()
    console.log(id)
    const [pet, setPet] = useState(null)

    useEffect(() => {
        const petInfo = async () => {
            if (id != "") {
                const petInfo = await axios.get(`/pet/${id}`)
                setPet(petInfo.data.pet)
            }
        }
        petInfo()
    }, [])
    return (

        <div className="cards-container-readmore">
            {pet &&
                <div className="card-one-readmore">
                    {/* <img className="first-dog" src={alvan} alt="doggie" /> */}
                    <div className="detail-container">
                        <Image
                            style={{ width: 200 }} cloudName="drr6lmpsv" publicId={pet.photoUrl} />
                        <div className="left-side-container">
                            <div className="dog-name-readmore">Name :{pet.name}</div>
                            <div className="dog-type-readmore">Type:{pet.type}</div>
                            <div className="dog-status-readmore">Status:{pet.adoptionStatus}</div>
                            <div className="dog-height-readmore">Height:{pet.height}</div>
                            <div className="dog-weight-readmore">weight:{pet.weight}</div>
                        </div>
                        <div className="right-side-container">
                            <div className="dog-color">color:{pet.color}</div>
                            <div className="dog-hypoallergenic">Hypoallergenic:{pet.hypoallergenic}</div>
                            <div className="dog-dietary">Dietary restrictions:{pet.dietary}</div>
                        </div>
                    </div>
                    <div className="bio-container">

                        <div className="dog-bio">Bio</div>
                        <p className="bio-paragraph">{pet.bio}</p>
                    </div>
                    <div className="btns-container">

                        <button className="save-btn">Save</button>
                        <button className="adopt-btn">Adopt</button>
                        <Link to="/search">
                            <button className="search">Search<FiSearch /></button>
                        </Link>
                    </div>


                </div>

            }
        </div>
    )
}
export default ReadMore