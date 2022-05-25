import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddReview = () => {

      const onSubmit = data => {
            const url = `https://hidden-mountain-97145.herokuapp.com/manageItem`;
            fetch(url, {
                  method: "post",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify(data),
            })
                  .then(res => res.json())
                  .then(result => {
                        toast("Item add", result)

                  })


      };
      return (
            <div>
                  <h2 className='text-3xl font-bold'>Please add Review</h2>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Raring</span>
                                    </label>
                                    <input type="number" placeholder="Raring" className="input input-bordered" />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" placeholder="Description" className="input input-bordered" />
                              </div>

                              <div className="form-control mt-6">
                                    <button className="btn btn-primary">Add Reviewed</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default AddReview;