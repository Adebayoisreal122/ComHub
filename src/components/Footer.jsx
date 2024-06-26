import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer p-5 ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit, turpis eget tincidunt tristique, velit eros commodo nulla.</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled d-flex gap-3 ">
            <Link to={"/"} >Home</Link> 
            <Link to={"/aboutus"} >About us</Link> 
            <Link to={"/Ourservice"} >Our Services</Link> 
           
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>123 Main Street</li>
              <li>City, State ZIP</li>
              <li>Email: example@example.com</li>
              <li>Phone: 123-456-7890</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <p>&copy; 2024 ComHub. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer
