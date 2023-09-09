

import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <>
            <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5 d-block">
                <a href="index.html" className="navbar-brand d-block d-lg-none">
                    <h1 className="font-secondary text-white mb-n2">Jack <span className="text-primary">&</span> Rose</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/story" className="nav-item nav-link">Story</Link>
                        <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
                    </div>
                    <Link className="navbar-brand mx-5 d-none d-lg-block">
                        <h1 className="font-secondary text-white mb-n2">Jack <span className="text-primary">&</span> Rose</h1>
                    </Link>
                    <div className="navbar-nav mr-auto py-0">
                        <Link to="/family"  className="nav-item nav-link">Family</Link>
                        <Link to="/event"  className="nav-item nav-link">Event</Link>
                        <Link to="/rsvp"  className="nav-item nav-link">RSVP</Link>
                        <Link to="contact" className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}