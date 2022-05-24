import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
      const [reviews, setReviews] = useState([]);
      useEffect(() => {
            fetch("Reviews.json")
                  .then(res => res.json())
                  .then(data => setReviews(data))
      }, [])
      return (
            <div>
                  <p className=' text-center text-5xl font-bold text-orange-500 mt-3'>Reviews</p>
                  <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 mb-4">
                        {
                              reviews.map(data => <ReviewCard key={data.id} review={data}></ReviewCard>)
                        }
                  </div>
            </div>
      );
};

export default Reviews;