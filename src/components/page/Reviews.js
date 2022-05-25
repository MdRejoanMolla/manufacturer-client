import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewCard from './ReviewCard';

const Reviews = () => {
      const [reviews, setReviews] = useState([]);
      const navigate = useNavigate();
      const navigateNewReview = event => {
            // event.preventDefault();
            navigate('/dashboard/addReview');
      }
      useEffect(() => {
            fetch("http://localhost:5000/addReview")
                  .then(res => res.json())
                  .then(data => setReviews(data))
      }, [])
      return (
            <div>
                  <p className=' text-center text-5xl font-bold text-orange-500 mt-3'>Reviews</p>

                  <div className="  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 mb-4 ">
                        {
                              reviews.map(data => <ReviewCard key={data._id} review={data}></ReviewCard>)
                        }

                  </div>

                  <div className="flex flex-col space-y-4">
                        <button onClick={() => navigateNewReview()} className="btn bg-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">Add Review</button>
                  </div>


            </div>
      );
};

export default Reviews;