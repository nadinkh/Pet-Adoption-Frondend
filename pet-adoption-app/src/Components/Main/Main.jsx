import React from 'react'
import Home from '../Home/Home'
import Navbar from '../NavBar/NavBar'
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
                    <Route exact path="/profile">

                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Main
