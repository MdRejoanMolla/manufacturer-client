import React from 'react';

const ReviewCard = ({ review }) => {
      const { name, shortdescription, rating } = review
      return (
            <div>
                  <div className="card w-96 bg-base-100 shadow-xl ">
                        <div className="card-body">
                              <h2 className="card-title">{name}</h2>
                              <p>RATING-{rating}</p>
                              <p>{shortdescription}</p>

                        </div>
                  </div>
            </div>
      );
};

export default ReviewCard;