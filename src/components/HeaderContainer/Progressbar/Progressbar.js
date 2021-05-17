import React, { useState } from 'react';
import './Progressbar.scss';


import labelData from '../../../utils/labelData';

const Progressbar = () => {
  return (
    <div className="row">
      {
        labelData.map((data, i) => <div className="col-lg-3 col-md-6 col-sm-12 progressbar" key={i}>
          <div className="box">
            <div className="percent">
              <svg>
                <circle cx="90" cy="90" r="90"></circle>
                <circle cx="90" cy="90" r="90" classNam="colored-round"></circle>
              </svg>
              <div className="number">
                <img src={data.icon} alt="" />
                <h2>{data.value}</h2>
                <span className="label">{data.tag}</span>
              </div>
            </div>
          </div>
        </div>)
      }
    </div>

  );
};

export default Progressbar;