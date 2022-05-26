import React from 'react';

const Tools = ({ data, setOrder }) => {
      const { img, _id, name, shortdescription, price, available, minOrder } = data;

      return (
            <div>
                  <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                              <img src={img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                              <h2 className="card-title">{name}</h2>
                              <p>{shortdescription}</p>
                              <p>${price}</p>


                              < p > Available:{available}</p>
                              <p>Minimun Order:{minOrder}</p>

                              <div className="card-actions">

                                    <label htmlFor="order-modal" onClick={() => setOrder(data)} className="btn btn-primary">Buy Now</label>
                              </div>
                        </div>
                  </div>
            </div >
      );
};

export default Tools;