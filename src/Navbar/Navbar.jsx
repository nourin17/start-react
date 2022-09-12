import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg p-4 position-fixed w-100">
  <div className="container">
    <Link to='home' className="navbar-brand ms-5 text-light fw-bold" >START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav  fw-bold w-100 d-flex justify-content-end">
        <li className="nav-item ">
          <Link to='portfolio' className="nav-link text-light " aria-current="page">PORTFOLIO</Link>
        </li>
        <li className="nav-item ">
          <Link to='about' className="nav-link text-light">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to='contact' className="nav-link text-light">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
