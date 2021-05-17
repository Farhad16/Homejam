import React from 'react';
import './UpcomingShows.scss';
import ShowsData from '../../utils/showsData';

const UpcomingShows = () => {
  return (
    <div className="upcoming-container py-5">
      <div className="container">
        <div className="label">
          <h2>Upcoming Shows</h2>
          <span>View All</span>
        </div>
        <div className="shows my-5 row">
          {
            ShowsData.map((data, i) =>
              <div className="col-md-6 col-sm-12 col-lg-3 showdata" key={i}>
                <div className="card" style={{ width: '250px', height: '380px' }}>
                  <img className="card-img-top" src={data.img} alt="Card image cap" />
                  <div className="card-body">
                    <span className="work_at">
                      {data.work_at}
                    </span>
                    <h3 className="card-text">
                      {data.name}
                    </h3>
                    <div className="more mt-3">
                      <span>More Info &#8594; </span>
                      <img src={data.ticket} alt="" />
                    </div>
                  </div>
                </div>
              </div>)
          }

        </div>
      </div>
    </div >

  );
};

export default UpcomingShows;