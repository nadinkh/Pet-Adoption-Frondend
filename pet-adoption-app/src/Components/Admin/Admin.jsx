import React from 'react'
import '../Search/DogsCards.css'
import './Admin.css'




const Admin = () => {
    return (
        <div className="admin-container">
            <header>Admin page</header>
            <div className="add-pet-container">
                <form className="add-pet-form">
                    <div className="dog-type-container">
                        <form className="add-photo-form" method="post" action="/save-image" enctype="multipart/form-data">
                            <input type="file" name="image" />
                            <button className="submit-photo-btn">Submit</button>
                        </form>
                        <label for="type">Type:</label>
                        <input className="dog-type-input" type="text" required />


                        <label for="type">Name :</label>
                        <input className="dog-name-input" type="text" required />

                        <label for="hypo">Status:</label>
                        <select class="dog-status-input" name="status">
                            <option value="adopted">Adopted</option>
                            <option value="saab">Available</option>
                        </select>

                        <label for="height">Height:</label>
                        <input className="dog-height-input" type="text" required />
                        <label for="weight">Weight:</label>
                        <input className="dog-weight-input" type="text" required />
                        <label for="color">color:</label>
                        <input className="dog-color-input" type="text" required />
                        <label for="bio">bio</label>
                        <input className="dog-bio-input" type="text" required />
                        <label for="dietary">dietary restrictions</label>
                        <input className="dog-dietary-input" type="text" required />

                        <label for="hypo">hypoallergenic:</label>
                        <select className="hypo" name="hypo">
                            <option value="adopted">Yes</option>
                            <option value="saab">No</option>
                        </select>
                        <button className="add-pet-btn">add pet</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Admin