import React from 'react';

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav text-center mx-auto">
                            <a className="nav-item nav-link px-4" href="#gallery">Gallery</a>
                            <a className="nav-item nav-link px-4" href="#floorplans">Floor Plans</a>
                            <a className="nav-item nav-link px-4" href="#about">About</a>
                            <a className="nav-item nav-link px-4" href="#landlord">Landlord</a>
                            <a className="nav-item nav-link px-4" href="#contact">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}