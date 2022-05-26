import React, { useEffect, useState } from 'react';
import Tools from '../Share/Tools';
import Order from './Order';

const Parts = () => {
      const [tools, setTools] = useState([]);
      const [order, setOrder] = useState(null);
      useEffect(() => {
            fetch("http://localhost:5000/tools")
                  .then(res => res.json())
                  .then(data => setTools(data))
      }, [])

      return (
            <div>
                  <p className="text-5xl font-bold text-orange-500 text-center">OUR PRODUCTS</p>
                  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 mb-4'>
                        {
                              tools.map(data => <Tools key={data._id} setOrder={setOrder} data={data}></Tools>)
                        }
                  </div>
                  {order && <Order order={order}></Order>}

            </div>
      );
};

export default Parts;