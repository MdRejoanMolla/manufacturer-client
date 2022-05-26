import React from 'react';

const Order = ({ order }) => {
      const { name, price, shortdescription, available, minOrder, img } = order
      return (
            <div>
                  <input type="checkbox" id="order-modal" className="modal-toggle" />
                  <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                              <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                              <img src={img} alt=''></img>
                              <h3 className="font-bold text-lg">Name{name}</h3>
                              <p className="py-4">{shortdescription}</p>
                              <p className="py-4">Price ${price}</p>
                              <p className="py-4">Available{available}</p>
                              <p className="py-4">Minmum Order{minOrder}</p>

                              <div className="modal-action">
                                    <label htmlFor="order-modal" className="btn">Yay!</label>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Order;