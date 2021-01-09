import React, { useState } from 'react'
import axios from '../Home/axios'
import { useHistory } from 'react-router-dom'
import '../Search/DogsCards.css'
import './Admin.css'
import Cloudinary from './Cloudinary';


const Admin = () => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [adoptionStatus, setAdoptionStatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [color, setColor] = useState('');
    const [hypoallergenic, setHypoallergenic] = useState('');
    const [dietary, setDietary] = useState('');
    const [bio, setBio] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const history = useHistory();

    const handleType = event => {
        setType(event.target.value)
        console.log('test1')
    }
    const handleName = event => {
        setName(event.target.value)
        console.log('test2')
    }
    const handleAdoptionStatus = event => {
        setAdoptionStatus(event.target.value)
        console.log('test3')
    }
    const handleHeight = event => {
        setHeight(event.target.value)
        console.log('test4')
    }
    const handleWeight = event => {
        setWeight(event.target.value)
        console.log('test5')
    }
    const handleColor = event => {
        setColor(event.target.value)
        console.log('test6')
    }
    const handleHypoallergenic = event => {
        setHypoallergenic(event.target.value)
        console.log('test7')
    }
    const handleDietary = event => {
        setDietary(event.target.value)
        console.log('test5')
    }
    const handleBio = event => {
        setBio(event.target.value)
        console.log('test8')
    }

    const uploadImg = (img) => {
        let photoURL = img.info.url;
        setPhotoURL(photoURL);
    }

    const addPet = async (event) => {
        event.preventDefault()
        const response = await axios.post(`pet/new-pet`, {
            name: name,
            type: type,
            adoptionStatus: adoptionStatus,
            height: height,
            weight: weight,
            color: color,
            hypoallergenic: hypoallergenic,
            dietary: dietary,
            bio: bio,
            photoUrl: photoURL
        })
        history.push('/admin')
        // const reload = window.location.reload()

    }
    return (
        <div className="admin-container">
            <header>Admin page</header>
            <div className="add-pet-container">
                <form className="add-pet-form">
                    <div className="dog-type-container">
                        <div className="cloudinary-container">
                            <p className="add-photo-text">add Photo</p>
                            <Cloudinary uploadImg={uploadImg} />
                        </div>
                        {/* <form className="add-photo-form">
                            <input type="file" />
                        </form>
                        <button className="submit-photo-btn" >Submit</button> */}
                        <label for="type">Type:</label>
                        <input className="dog-type-input" type="text"
                            onChange={event => handleType(event)} required />


                        <label for="type">Name :</label>
                        <input className="dog-name-input" type="text"
                            onChange={event => handleName(event)} required />

                        <label for="hypo">Status:</label>
                        <select class="dog-status-input" name="status"
                            onChange={event => handleAdoptionStatus(event)}>
                            <option value="adopted">Adopted</option>
                            <option value="available">Available</option>
                        </select>

                        <label for="height">Height:</label>
                        <input className="dog-height-input" type="text"
                            onChange={event => handleHeight(event)} required />
                        <label for="weight">Weight:</label>
                        <input className="dog-weight-input" type="text"
                            onChange={event => handleWeight(event)} required />
                        <label for="color">color:</label>
                        <input className="dog-color-input" type="text"
                            onChange={event => handleColor(event)} required />
                        <label for="bio">bio</label>
                        <input className="dog-bio-input" type="text"
                            onChange={event => handleBio(event)} required />
                        <label for="dietary">dietary restrictions</label>
                        <input className="dog-dietary-input" type="text"
                            onChange={event => handleDietary(event)} required />

                        <label for="hypo">hypoallergenic:</label>
                        <select className="hypo" name="hypo"
                            onChange={event => handleHypoallergenic(event)}>
                            <option value="yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <button className="add-pet-btn" onClick={addPet} type="submit">add pet</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Admin