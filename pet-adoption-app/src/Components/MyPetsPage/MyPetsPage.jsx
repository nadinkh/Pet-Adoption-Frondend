
import React from 'react'
import './MyPetsPage.css'


const MyPetsPage = () => {
    return (
        <div>
            <h6>Your Currently Do Owned/NOT :</h6>
            <h7>Currently Owned Dogs</h7>
            <label class="saved-container">Saved
  <input type="radio" name="radio" />
                <span class="checkmark"></span>
            </label>
            <label class="owned-container">Owned
  <input type="radio" name="radio" />
                <span class="checkmark"></span>
            </label>



        </div>

    )

}
export default MyPetsPage