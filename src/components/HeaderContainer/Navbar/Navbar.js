import React from 'react';
import './Navbar.scss';
import Logo from '../../../assets/images/logo.png';
import SearchIcon from '../../../assets/icons/searchIcon.svg';
import BasketIcon from '../../../assets/icons/basketIcon.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto">
            <a className="nav-link" href="#">
              <img src={SearchIcon} alt="search-icon" className="search-icon" />
              Search
            </a>
            <a className="nav-link" href="#">Help</a>
            <a className="nav-link" href="#">Account</a>
            <a className="nav-link" href="#">
              <img src={BasketIcon} alt="basket" className="basket-icon" />
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;