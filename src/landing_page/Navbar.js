import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg border-bottom">
                <div class="container">
                    <Link class="navbar-brand " to="/"> <img src='media/images/logo.svg' alt='logo' style={{width:"25%"}}></img></Link>
                   
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item ps-5">
                                <Link class="nav-link active " aria-current="page" to="/Signup">Signup</Link>
                            </li>
                            <li class="nav-item ps-3">
                                <Link class="nav-link active" to="/About">About</Link>
                            </li>
                            <li class="nav-item ps-3">
                                <Link class="nav-link active" to="/Products">Products</Link>
                            </li>
                            <li class="nav-item ps-3">
                                <Link class="nav-link active" to="/Pricing">Pricing</Link>
                            </li>
                            <li class="nav-item ps-3">
                                <Link class="nav-link active" to="/Support">Support</Link>
                            </li>
                            <li class="nav-item ps-3">
                                <Link class="nav-link active" href="#">
                                <i class="fa-solid fa-bars"></i>
                                </Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;