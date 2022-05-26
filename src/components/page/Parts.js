import React, { useEffect, useState } from 'react';
import Tools from '../Share/Tools';


const Parts = () => {
      const [tools, setTools] = useState([]);

      useEffect(() => {
            fetch("`https://infinite-ocean-96242.herokuapp.com/tools")
                  .then(res => res.json())
                  .then(data => setTools(data))
      }, [])

      return (
            <div className='bg-sky-50'>
                  <p className="text-5xl font-bold text-orange-500 text-center">OUR PRODUCTS</p>
                  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 mb-4'>
                        {
                              tools.map(data => <Tools key={data._id} data={data}></Tools>)
                        }
                  </div>


            </div>
      );
};

export default Parts;