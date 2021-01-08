import React, { useEffect, useState } from 'react'
import axios from '../Home/axios.js'

const HomeLogin = () => {

    const [infoUser, setInfoUser] = useState("")

    const userInfo = async () => {
        const response = await axios.get("/userinfo", {
            headers: {
                'auth-token': localStorage.getItem('token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        setInfoUser(response.data)
    }
    useEffect(() => {

        console.log('TEST')

        userInfo()

    }, [])

    return (
        <div>
            {infoUser && <header>{` ${infoUser.name} ${infoUser.lastName}, Welcome To Our Site!`}</header>}

            {/* {console.log(infoUser)} */}
        </div>
    )
}
export default HomeLogin;