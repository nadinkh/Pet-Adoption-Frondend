import React from 'react'
import './ProfileSettings.css'

const ProfileSettings = () => {
    return (
        <div className="settings-container">
            <div className="top-container"><h4>Profile Settings</h4></div>
            <div className="middle-container">
                <form>
                    <div className="first-last-name-profile-container">

                        <div className="first-name-profile-container">
                            <label for="fname">First Name</label>
                            <input className="first-name-profile" type="text" />
                        </div>
                        <div class="last-name-profile-container">
                            <label for="lname">Last name</label>
                            <input className="first-name-profile" type="text" />
                        </div>
                    </div>
                    <label className="profile-label" for="user-bio">User Bio</label>
                    <input className="user-bio" type="text" />
                    <label className="profile-label" for="email-profile">Email</label>
                    <input className="email-profile" type="email" />
                    <label className="profile-label" for="password">Password</label>
                    <input className="password-profile" type="password" />
                    <label className="profile-label" for="phone">Phone number</label>
                    <input className="profile-label" className="phone-number-profile" type="tel" placeholder="+927-XXXX-XXXXX" />
                    <button className="save-changes-btn">Save Changes</button>

                </form>
            </div>
        </div>
    )

}
export default ProfileSettings