import React from 'react';
import Branding from './Branding/Branding';
import './HeaderContainer.scss'
import Navbar from './Navbar/Navbar';

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <div className="container">
        <Navbar />
        <Branding />
      </div>
    </div>
  );
};

export default HeaderContainer;