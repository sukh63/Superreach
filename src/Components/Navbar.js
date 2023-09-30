import React from 'react'
import Logo from "../Assets/Logo.png"

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light  p-4 ">
  <a className="navbar-brand" href="#"><img src={Logo} alt="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarText">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Why SuperReach <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Use Cases</a>
      </li>
      <li className="nav-item active">
      <a className="nav-link" href="#">About<span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Pricing</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Blog</a>
    </li>
    </ul>
    <span className="navbar-text">
    <ul className="navbar-nav mr-auto">
  
    <li className="nav-item">
      <a className="nav-link" href="#">Login</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id='startbtn' href="#">Start</a>
    </li>
  </ul>
    </span>
  </div>
</nav>
    </div>
  )
}

export default Navbar