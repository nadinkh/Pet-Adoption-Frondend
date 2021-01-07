import React, { useState } from 'react';
import './ProfileSettings.css'
import axios from '../Home/axios'

import { useHistory } from 'react-router-dom'

const ProfileSettings = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confPassword, setConfPassword] = useState('');
    const [userBio, setUserBio] = useState('');
    const history = useHistory();

    const handleName = event => {
        setName(event.target.value)
        console.log('test1')
    }
    const handleLastName = event => {
        setLastName(event.target.value)
        console.log('test2')
    }
    const handlePhone = event => {
        setPhone(event.target.value)
        console.log('test3')
    }
    const handleEmail = event => {
        setEmail(event.target.value)
        console.log('test4')
    }
    const handlePassword = event => {
        setPassword(event.target.value)
        console.log('test5')
    }
    // const handleConfPassword = event => {
    //     setConfPassword(event.target.value)
    // }
    const handleUserBio = event => {
        setUserBio(event.target.value)
        console.log('test6')
    }

    const updateUser = async (event) => {
        event.preventDefault()
        const response = await axios.put(`/userinfo/userinfo/${localStorage.getItem('id')}`, {
            name: name,
            lastName: lastName,
            phone: phone,
            email: email,
            userBio: userBio,
            password: password,
            // confPassword: confPassword,
        })

        history.push('/HomeLogin')
        // const reload = window.location.reload()

    }

    return (
        <div className="settings-container">
            <div className="top-container"><h4>Profile Settings</h4></div>
            <div className="middle-container">
                <form>
                    <div className="first-last-name-profile-container">

                        <div className="first-name-profile-container">
                            <label for="fname">First Name</label>
                            <input className="first-name-profile" type="text"
                                onChange={event => handleName(event)} />
                        </div>
                        <div class="last-name-profile-container">
                            <label for="lname">Last name</label>
                            <input className="first-name-profile" type="text"
                                onChange={event => handleLastName(event)} />
                        </div>
                    </div>
                    <label className="profile-label" for="user-bio">User Bio</label>
                    <input className="user-bio" type="text"
                        onChange={event => handleUserBio(event)} />
                    <label className="profile-label" for="email-profile">Email</label>
                    <input className="email-profile" type="email"
                        onChange={event => handleEmail(event)} />
                    <label className="profile-label" for="password">Password</label>
                    <input className="password-profile" type="password"
                        onChange={event => handlePassword(event)} />
                    <label className="profile-label" for="phone">Phone number</label>
                    <input className="profile-label" className="phone-number-profile" type="tel"
                        onChange={event => handlePhone(event)} placeholder="+927-XXXX-XXXXX" />
                    <button className="save-changes-btn" onClick={updateUser} type="submit">Save Changes</button>

                </form>
            </div>
        </div>
    )

}
export default ProfileSettings