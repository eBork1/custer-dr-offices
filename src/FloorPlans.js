import React from 'react'

export default class FloorPlans extends React.Component {
    render() {
        return (
            <div className="container mt-4 floorplans">
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-6 mx-auto mb-3">
                        <h2 className="display-4 text-center text-light fpheader">Floor Plans</h2>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                        <img className="fp" src="https://wcs.smartdraw.com/floor-plan/img/template-floor-plan.png?bn=1510011165"></img>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                        <img className="fp" src="https://wcs.smartdraw.com/floor-plan/img/template-floor-plan.png?bn=1510011165"></img>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                        <img className="fp" src="https://wcs.smartdraw.com/floor-plan/img/template-floor-plan.png?bn=1510011165"></img>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                        <img className="fp" src="https://wcs.smartdraw.com/floor-plan/img/template-floor-plan.png?bn=1510011165"></img>
                    </div>
                </div>

            </div>
        );
    }
}
