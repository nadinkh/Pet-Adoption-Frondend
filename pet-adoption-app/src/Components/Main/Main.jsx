import React from 'react'
import Home from '../Home/Home'
import Navbar from '../NavBar/NavBar'
import Search from '../Search/Search'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Main
