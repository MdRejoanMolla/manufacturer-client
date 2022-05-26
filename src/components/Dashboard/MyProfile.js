import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyProfile = () => {
      const [user, gUser] = useAuthState(auth);
      let { register, handleSubmit } = useForm();
      const onSubmit = data => {
            const url = `http://localhost:5000/addProduct`;
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
                        let register = {}
                  })


      };
      return (
            <div className=' m-10'>
                  <p className='text-3xl font-bold
                  m-2'>NAME:-{(gUser || user).displayName}</p>
                  <p className='text-3xl font-bold
                  m-2'>EMAIL:-{(gUser || user).email}</p>
                  <div className="">
                        <form className=' ' onSubmit={handleSubmit(onSubmit)}>

                              <div className="form-control  w-full max-w-xs">
                                    <label className="label">
                                          <span className="label-text text-xl">Education</span>
                                    </label>
                                    <input className="input input-bordered w-full max-w-xs text-xl" placeholder='Education' {...register("Education", { required: true })} />

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
      );
};

export default MyProfile;
