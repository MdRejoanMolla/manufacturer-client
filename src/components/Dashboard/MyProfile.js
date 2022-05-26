import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const MyProfile = () => {
      const [user, gUser] = useAuthState(auth);
      let { register, handleSubmit } = useForm();
      const [info, setInfo] = useState([]);

      useEffect(() => {
            fetch(`https://infinite-ocean-96242.herokuapp.com/information`)
                  .then(res => res.json())
                  .then(data => setInfo(data))
      }, [])
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
                        toast.success("review add", result)
                  })


      };
      return (
            <div className='flex m-10 bg-yellow-500'>
                  <div className="mr-8">
                        <p className='text-3xl font-bold
                  m-2'>NAME:-{(gUser || user).displayName}</p>
                        <p className='text-3xl font-bold
                  m-2'>EMAIL:-{(gUser || user).email}</p>
                        {
                              info.map((data, index) =>
                                    <h1 key={data.index + 1}>
                                          <p className='text-3xl font-bold
                  m-2'>Education:-{data.Education}</p>
                                          <p className='text-3xl font-bold
                  m-2'>Location:-{data.Location}</p>
                                          <p className='text-3xl font-bold
                  m-2'>Phone:-{data.Phone}</p>
                                    </h1>

                              )

                        }
                  </div>
                  <div className="">
                        <p className='text-3xl font-bold
                  '>ADD INFORMATION</p>
                        <form className=' ' onSubmit={handleSubmit(onSubmit)}>


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
