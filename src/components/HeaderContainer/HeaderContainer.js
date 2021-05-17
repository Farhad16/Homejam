import React from 'react';
import './HeaderContainer.scss'
import Navbar from './Navbar/Navbar';

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <div className="container">
        <Navbar />
      </div>
    </div>
  );
};

export default HeaderContainer;