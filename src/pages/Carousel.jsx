
export default function Carousel() {
    return (
        <>                 
           <div className="container-fluid p-0 mb-5 pb-5" id="home">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item position-relative active">
                            <img className="position-absolute w-100 h-100" src="assets/img/carousel-1.jpg" alt="" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3">
                                    <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">Sid & Kiara</h1>
                                    <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                                        <h3 className="text-uppercase font-weight-normal text-white m-0" >We're getting married</h3>
                                    </div>
                                    <button type="button" className="btn-play mx-auto" data-toggle="modal"
                                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item position-relative"/>
                            <img className="position-absolute w-100 h-100" src="assets/img/carousel-2.jpg" alt="" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3">
                                    <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">Sid & Kiara</h1>
                                    <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                                        <h3 className="text-uppercase font-weight-normal text-white m-0" >We're getting married</h3>
                                    </div>
                                    <button type="button" className="btn-play mx-auto" data-toggle="modal"
                                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev justify-content-start" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-primary px-0" >
                            <span className="carousel-control-prev-icon mt-3"></span>
                        </div>
                    </a>
                    <a className="carousel-control-next justify-content-end" href="#header-carousel" data-slide="next">
                        <div className="btn btn-primary px-0">
                            <span className="carousel-control-next-icon mt-3"></span>
                        </div>
                    </a>
            </div>
        </>
    )
}   