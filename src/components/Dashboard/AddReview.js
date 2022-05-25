import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
      let { register, handleSubmit } = useForm();
      const onSubmit = data => {
            const url = `http://localhost:5000/addReview`;
            fetch(url, {
                  method: "post",
                  headers: {
                        "content-type": "application/json"

                  },
                  body: JSON.stringify(data),
            })
                  .then(res => res.json())
                  .then(result => {
                        toast.success("review add", result)
                        let register = []
                  })


      };
      return (
            <div className='card max-w-full bg-base-100 shadow-xl'>
                  <div className="card-body">
                        <h2 className='text-center text-4xl font-bold'>Please add Item</h2>
                        <form className='m-auto' onSubmit={handleSubmit(onSubmit)}>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="label-text text-xl">Name</span>
                                    </label>
                                    <input className="input input-bordered w-full max-w-xs text-xl" placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />

                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="label-text text-xl">Rating</span>
                                    </label>
                                    <input className="input input-bordered w-full max-w-xs text-xl" placeholder='Rating' {...register("rating", { required: true })} />

                              </div>
                              <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                          <span className="label-text text-xl">Description</span>
                                    </label>
                                    <input className="input input-bordered w-full max-w-xs text-xl" placeholder='Description' {...register("shortdescription", { required: true, maxLength: 20 })} />

                              </div>
                              <input className='btn bg-primary mt-3 w-full max-w-xs text-white' type="submit" value="Add Reviewed" />
                        </form>
                  </div>
            </div>
      );
};

export default AddReview;