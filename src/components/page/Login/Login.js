import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading';
import useToken from '../../hook/useToken';

const Login = () => {
      const emailRef = useRef('');
      const { register, formState: { errors }, handleSubmit } = useForm();
      const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

      let signInError;
      const navigate = useNavigate();
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";
      const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth, { sendEmailVerification: true });
      const [token] = useToken(user || gUser);


      useEffect(() => {
            if (token) {
                  navigate(from, { replace: true });
            }
      }, [token, from, navigate])

      if (error || gError) {
            signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
      }
      if (gLoading || loading || sending) {
            return <Loading></Loading>
      }

      const resetPassword = async () => {
            const email = emailRef.current.value;
            if (email) {
                  await sendPasswordResetEmail(email);
                  toast.success('Sent email', email);
            }
            else {
                  toast.error('please enter your email address')
            }
      }

      const onSubmit = data => {
            signInWithEmailAndPassword(data.email, data.password);
      }
      return (
            <div className='flex flex h-screen justify-center items-center bg-yellow-500'>
                  <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                              <h2 className="text-center text-2xl font-bold">Login</h2>

                              <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                                <span className="label-text">Email</span>
                                          </label>
                                          <input
                                                ref={emailRef}
                                                type="email"
                                                placeholder="Your Email"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("email", {
                                                      required: {
                                                            value: true,
                                                            message: 'Email is Required'
                                                      },
                                                      pattern: {
                                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                            message: 'Provide a valid Email'
                                                      }
                                                })}
                                          />
                                          <label className="label">
                                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                          </label>
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                                <span className="label-text"> Password</span>
                                          </label>
                                          <input
                                                type="password"
                                                placeholder="Your Password"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("password", {
                                                      required: {
                                                            value: true,
                                                            message: 'Password is Required'
                                                      },
                                                      minLength: {
                                                            value: 6,
                                                            message: 'Must be 6 characters or longer'
                                                      }
                                                })}
                                          />
                                          <label className="label">
                                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                          </label>
                                    </div>

                                    {signInError}
                                    <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                              </form>
                              <p><small>New to Bicycle Hand ?<Link
                                    className='text-primary' to="/register">Please Create New Account</Link></small></p>

                              <p className='mt-5'>Forget Password ? <button className=' btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
                              <div className="divider">OR</div>
                              <button
                                    onClick={() => signInWithGoogle()}
                                    className="btn btn-outline"
                              >Continue with Google</button>
                        </div>
                  </div>
            </div>

      );
};

export default Login;