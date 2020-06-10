import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="container-fluid header">
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-8 mx-auto text-center text-light mt-2 mb-2">
                        <h1 className="pt-2 display-3">3150</h1>
                        <h2 className="display-4">Custer Drive</h2>
                        <div>Lexington, KY 40515</div>
                    </div>
                </div>
            </div>
        );
    }
}