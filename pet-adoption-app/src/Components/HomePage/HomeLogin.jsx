
import React, { useEffect, useState } from 'react'
import axios from '../Home/axios.js'

const HomeLogin = () => {
    let user = {
        name: 'Nadine',
        last: 'Khamis'
    }
    useEffect(() => {
        const userInfo = async () => {
            const response = await axios.get("/userinfo", {
                headers: {
                    'auth-token': localStorage.getItem('token'),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            // const data = await response.json()
            console.log(response)
        }
        userInfo()
    })

    return (
        <div>
            <header>{`Welcome ${user.name} ${user.last} to our site!`}</header>
        </div>
    )
}
export default HomeLogin;