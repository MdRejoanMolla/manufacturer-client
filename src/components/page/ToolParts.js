import React, { useEffect, useState } from 'react';
import Tools from '../Share/Tools';


const ToolParts = () => {
      const [tools, setTools] = useState([]);

      useEffect(() => {
            fetch("https://agile-ocean-51288.herokuapp.com/tools")
                  .then(res => res.json())
                  .then(data => setTools(data))
      }, [])

      return (
            <div>
                  <p className="text-5xl font-bold text-orange-500 text-center">OUR PRODUCTS</p>
                  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 mb-4'>
                        {
                              tools.map(data => <Tools key={data._id} data={data}></Tools>).slice(0, 6)
                        }
                  </div>

            </div>
      );
};

export default ToolParts;