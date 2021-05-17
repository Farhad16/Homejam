import React from 'react';
import './Reviews.scss';
import ReviewsData from '../../utils/reviewData';

const Reviews = () => {
  return (
    <div className="review-container pb-5 ">
      <div className="container">
        <div className="label">
          <h2>Reviews</h2>
          <span>1/12 &#8592; &#8594;</span>
        </div>
        <div className="reviews my-5 row">
          {
            ReviewsData.map((data, i) =>
              <div className="col-md-6 col-sm-12 col-lg-4 review-data" key={i}>
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <img src={data.img} alt="" />
                      <div className="about">
                        <span>{data.name}</span>
                        <div className="location">
                          <img src={data.flag} alt="" />
                          <span>{data.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="card-text">
                      {data.comments}
                    </p>
                  </div>
                </div>
              </div>)
          }

        </div>
      </div>
    </div>
  );
};

export default Reviews;