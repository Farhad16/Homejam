import React from 'react';
import Branding from './Branding/Branding';
import './HeaderContainer.scss'
import Navbar from './Navbar/Navbar';
import Progressbar from './Progressbar/Progressbar';

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <div className="container">
        <Navbar />
        <Branding />
        <Progressbar />
      </div>
    </div>
  );
};

export default HeaderContainer;