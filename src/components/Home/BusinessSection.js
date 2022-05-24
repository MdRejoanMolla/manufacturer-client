import React from 'react';

const BusinessSection = () => {
      return (
            <div className=' shadow-xl mb-4'>
                  <p className='text-4xl font-bold text-orange-500 text-center '>MILLIONS BUSINESS TRUST US</p>
                  <p className=' text-center'>TRY TO UNDERSTAND USER EXPECTATION</p>

                  <div className="flex flex-row mt-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div className=" m-auto">
                              <img src="https://i.ibb.co/60S5pWL/flag-1381-979195-1.png" alt="" />
                              <p className='font-bold'>50+</p>
                              <p className='text-green-500 font-bold mb-4'>Countries</p>
                        </div>
                        <div className=" m-auto">
                              <img src="https://i.ibb.co/zGb05JN/images-4.png" alt="" />
                              <p className='font-bold'>550+</p>
                              <p className='text-green-500 font-bold  mb-4'>Complete Projects</p>
                        </div>
                        <div className=" m-auto">
                              <img src="https://i.ibb.co/gtBXV7C/download-2.png" alt="" />
                              <p className='font-bold'>250+</p>
                              <p className='text-green-500 font-bold  mb-4'>Happy Clients</p>
                        </div>
                        <div className=' m-auto' >
                              <img src="https://i.ibb.co/HzqJRWK/thumbs-up-1.png" alt="" />
                              <p className='font-bold'>500+</p>
                              <p className='text-green-500 font-bold  mb-4'>Feedbacks</p>
                        </div>
                  </div>
            </div>
      );
};

export default BusinessSection;