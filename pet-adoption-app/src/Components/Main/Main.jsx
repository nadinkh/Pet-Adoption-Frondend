import React, { useEffect, useState } from 'react'
import Home from '../Home/Home'
import Navbar from '../NavBar/NavBar'
import Search from '../Search/Search'
import ProfileSettings from '../ProfileSettings/ProfileSettings'
import DogsCards from '../Search/DogsCards'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdvancedSearch from '../Search/AdvancedSearch'
import MyPetsPage from '../MyPetsPage/MyPetsPage'
import SavedOwnedDogs from '../MyPetsPage/SavedOwnedDogs'
import ReadMore from '../ReadMore/ReadMore'
import Admin from '../Admin/Admin'
import HomeLogin from '../HomePage/HomeLogin'
import NavLogout from '../NavBar/NavLogout'
import NavBar from '../NavBar/NavBar'

const Main = () => {
    const [token, setToken] = useState("")
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    if (!token) {
        return (
            <Router>
                <div >
                    <div>
                        <NavLogout />
                    </div>
                    <Switch>
                        <Route exact path="/admin">
                            <Admin />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        {/* <Route exact path="/mypetspage">
                            <MyPetsPage />
                            <SavedOwnedDogs />
                        </Route> */}
                        <Route exact path="/advancedsearch">
                            <AdvancedSearch />
                        </Route>
                        <Route exact path="/search">
                            <Search />
                            <DogsCards />

                        </Route>
                        <Route exact path="/readmore">
                            <ReadMore />
                        </Route>
                        {/* <Route exact path="/profilesettings">
                            <ProfileSettings />
                        </Route> */}
                    </Switch>
                </div>
            </Router>
        )
    }
    else {
        return (
            <Router>
                <div>

                    <div>
                        <NavBar />
                    </div>
                    <Switch>
                        <Route exact path="/homelogin">
                            <HomeLogin />
                        </Route>
                        <Route exact path="/admin">
                            <Admin />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/mypetspage">
                            <MyPetsPage />
                            <SavedOwnedDogs />
                        </Route>
                        <Route exact path="/advancedsearch">
                            <AdvancedSearch />
                        </Route>
                        <Route exact path="/search">
                            <Search />
                            <DogsCards />

                        </Route>
                        <Route exact path="/readmore">
                            <ReadMore />
                        </Route>
                        <Route exact path="/profilesettings">
                            <ProfileSettings />
                        </Route>
                    </Switch>

                </div>
            </Router>

        )
    }
}

export default Main
