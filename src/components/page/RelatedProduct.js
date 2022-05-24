import React from 'react';

const RelatedProduct = () => {
      return (
            <div className="card   bg-base-100 shadow-xl mb-4">
                  <h2 className=" m-auto text-5xl font-bold text-orange-500 mt-3">Most Related Products</h2>
                  <div className="card card-side bg-base-100 shadow-xl m-aotu mt-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <figure><img className=' ' src="https://i.ibb.co/WfZQ2z1/maxresdefault-1.jpg" alt="" /></figure>
                        <figure><img className=' mr-4 ml-4' src="https://i.ibb.co/7Swn1gC/download-2-1.jpg" alt="" /></figure>
                        <figure><img className=' ' src="https://i.ibb.co/chfqcMj/download-2.jpg" alt="" /></figure>

                  </div>
            </div>
      );
};

export default RelatedProduct;