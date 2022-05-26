import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';


const OrderParts = () => {
      const [user] = useAuthState(auth);
      let { register, handleSubmit } = useForm();
      const onSubmit = data => {
            const url = `https://infinite-ocean-96242.herokuapp.com/information`;
            fetch(url, {
                  method: "post",
                  headers: {
                        "content-type": "application/json"

                  },
                  body: JSON.stringify(data),
            })
                  .then(res => res.json())
                  .then(result => {
                        toast.success("information", result)
                        register = ''
                  })


      };

      return (
            <div className=" m-8">

                  <div class=" flex flex-row card w-auto h-3/4 bg-yellow-500 shadow-xl  p-8 justify-center items-center">
                        <div class="card-body m-8">
                              <h2 class="card-title text-4xl font-bold">NAME={user.displayName}</h2>
                              <p className='text-4xl font-bold'>EMAIL={user.email}</p>

                        </div>
                        <div className="">
                              <p className='text-3xl font-bold
                  '>ADD INFORMATION</p>
                              <form className='m-8 ' onSubmit={handleSubmit(onSubmit)}>


                                    <div className="form-control  w-full max-w-xs">
                                          <label className="label">
                                                <span className="label-text text-xl">Name</span>
                                          </label>
                                          <input className="input input-bordered w-full max-w-xs text-xl" value={user.displayName} />

                                    </div>
                                    <div className="form-control  w-full max-w-xs">
                                          <label className="label">
                                                <span className="label-text text-xl">Email</span>
                                          </label>
                                          <input className="input input-bordered w-full max-w-xs text-xl" value={user.email} />

                                    </div>
                                    <div className="form-control  w-full max-w-xs">
                                          <label className="label">
                                                <span className="label-text text-xl">Education</span>
                                          </label>
                                          <input className="input input-bordered w-full max-w-xs text-xl" placeholder='Education'  {...register("Education", { required: true })} />

                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                                <span className="label-text text-xl">Location</span>
                                          </label>
                                          <input className="input input-bordered w-full max-w-xs text-xl" placeholder='Location' {...register("Location", { required: true })} />

                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                                <span className="label-text text-xl">Phone</span>
                                          </label>
                                          <input className="input input-bordered w-full max-w-xs text-xl" placeholder='Phone' {...register("Phone", { required: true, maxLength: 20 })} />

                                    </div>


                                    <input className='btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-3 w-full max-w-xs text-white' type="submit" value="Add Info" />
                              </form>
                        </div>
                  </div>


            </div>
      );
};

export default OrderParts;