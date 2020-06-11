import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'jquery';
import 'popper.js';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Header from './Header';
import Nav from './Nav';
import InteriorGallery from './InteriorGallery';
import FloorPlans from './FloorPlans';
import LandlordBlurb from './LandlordBlurb';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Nav />
                        <InteriorGallery />
                        <div className="secondsection">
                            <FloorPlans />
                        </div>
                        <LandlordBlurb />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
