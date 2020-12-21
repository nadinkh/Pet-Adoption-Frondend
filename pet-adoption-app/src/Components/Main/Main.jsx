import React from 'react'
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

const Main = () => {
    return (
        <Router>
            <div >
                <div>
                    <Navbar />
                </div>
                <Switch>
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

export default Main
