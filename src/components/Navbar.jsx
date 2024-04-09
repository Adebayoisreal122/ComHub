import React, { useState }  from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleDropdownClose = () => {
      setIsDropdownOpen(false);
    };
  


  return (
    <>
    <nav className="navbar px-4 navbar-expand-lg " style={{boxShadow: '10px 2px 24px rgba(100, 300, 900, 0.9)'}}>
  <div className="container-fluid">
    <img src="/public/extreme.png" alt="" className="navbar-brand" style={{height:64, width:64}} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
        <Link to={"/Ourservice"} className="nav-link"   href="#">Our services</Link>
        </li>
        <li className="nav-item">
        <Link to={"/aboutus"} className="nav-link"   href="#">About Us</Link>
        </li>
      </ul>
    </div>
      <ul className="navbar-nav mx-5">
      <li className="nav-item dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownClose}>
          <a className="nav-link dropdown-toggle" href="#" role="button" aria-expanded={isDropdownOpen ? 'true' : 'false'}>
            Become a seller
          </a>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li><Link to={"/"} className="dropdown-item " href="#">Students</Link></li>
            <li><Link to={"/"} className="dropdown-item " href="#">Admin</Link></li>
          </ul>
        </li>
      </ul>
      <button class="btn btn-outline-success" type="submit">Search</button>
  </div>
</nav>
    </>
  )
}

export default Navbar
