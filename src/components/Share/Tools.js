import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tools = ({ data }) => {
      const { _id, img, name, shortdescription, price, available, minOrder } = data;
      const navigate = useNavigate();

      const navigateToOrderDetails = id => {
            navigate(`/tool/${id}`);
      }
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
                                    <button onClick={() => navigateToOrderDetails(_id)} className="btn btn-primary">Buy Now</button>

                              </div>
                        </div>
                  </div>
            </div >
      );
};

export default Tools;