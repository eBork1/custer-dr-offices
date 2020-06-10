import React from 'react';

export default class InteriorGallery extends React.Component {
    render() {
        return (
            <div className="container mt-2 gallery">
                <h2 className="display-4 text-center">Proffesional Office Space</h2>
                <div id="carouselExampleControls" className="carousel slide testing" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://images.adsttc.com/media/images/5639/2935/e58e/ce6e/6400/0157/slideshow/Arkitema_Architects_OPS_Gellerup_Nord_int_office.jpg?1446586639" alt="First slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://d4qwptktddc5f.cloudfront.net/hagy-belzberg-grupo-anima-mexico-city-vacant-private-office-porcelain-floor-0617.jpg" alt="Second slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://vrender.com/wp-content/uploads/2019/05/Office-OPEN-AREAS-Renderings.jpg" alt="Third slide"></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}