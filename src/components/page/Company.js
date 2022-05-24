import React from 'react';

const Company = () => {
      return (
            <div className='max-w-full mb-4'>
                  <div className="card   bg-base-100 shadow-xl">
                        <div className="card-body">
                              <h2 className="card-title m-auto text-5xl font-bold text-orange-500">Company Profile</h2>
                              <p className="m-auto font-bold">Repair for the better ride ! BICYLE HAND was established in 2022. We has been manufacturing bicycle specific tools around world and hold many patents of innovation. .</p>
                        </div>
                        <div className="flex flex-row grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                              <figure><img className='mr-4' src="https://i.ibb.co/7GN68vK/images-5-1.jpg" alt="Shoes" /></figure>
                              <figure><img className='mr-4' src="https://i.ibb.co/MCL6N47/download-1-1.jpg" alt="Shoes" /></figure>
                              <figure><img src="https://i.ibb.co/PZ49Vq8/stock-photo-bicycle-tools-in-the-board-bike-mechanic-garage-with-workshop-tools-wall-repair-concept.jpg" alt="bike" /></figure>
                        </div>
                  </div>
            </div>
      );
};

export default Company;