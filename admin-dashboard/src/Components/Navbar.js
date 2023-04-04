import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './Home'
function Navbar() {
  return (

    
    <div>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand mx-2" href="/">Profile</a>
      <button className="navbar-toggler mx-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to='./home'>Home</Link>
          </li>
         
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" style={{width:"55vw"}} type="search" placeholder="Search" aria-label="Search"/>
          <button style={{marginRight:"130px"}} className="btn btn-outline-success mx-5" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
