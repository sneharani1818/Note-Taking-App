import React from 'react'
import logo from '../images/logo.svg'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                            Note Taking App
                    </a>
                    <div className="d-flex ms-auto">
                        <form className="d-flex me-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link text-light" aria-current="page" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Create Account</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
