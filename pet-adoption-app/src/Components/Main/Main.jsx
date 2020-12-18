import React from 'react'
import Home from '../Home/Home'
import Navbar from '../NavBar/NavBar'
import Search from '../Search/Search'
import ProfileSettings from '../ProfileSettings/ProfileSettings'
import DogsCards from '../Search/DogsCards'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Main = () => {
    return (
        <Router>
            <div >
                <div>
                    <Navbar />
                </div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/search">
                        <Search />
                        <DogsCards />
                    </Route>
                    <Route exact path="/profilesettings">
                        <ProfileSettings />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Main
