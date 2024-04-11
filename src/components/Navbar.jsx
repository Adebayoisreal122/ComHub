import React, { useState }  from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <>
    <nav className="navbar px-4 navbar-expand-lg " style={{boxShadow: '1px 2px 20px rgba(10, 0, 10, 0.1)'}}>
  <div className="container-fluid">
    <img src="/public/extreme.png" alt="" className="navbar-brand" style={{height:64, width:64}} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse cola  justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <Link to={"/"} className="nav-link text-light mx-4 active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
        <Link to={"/Ourservice"} className="nav-link mx-4 text-light"   href="#">Our services</Link>
        </li>
        <li className="nav-item">
        <Link to={"/aboutus"} className="nav-link mx-4 text-light"   href="#">About Us</Link>
        </li>
        <li className="nav-item">
        <Link to={"/aboutus"} className="nav-link mx-4 text-light"   href="#">Contact</Link>
        </li>
      </ul>
    </div>
     
  </div>
</nav>
    </>
  )
}

export default Navbar
