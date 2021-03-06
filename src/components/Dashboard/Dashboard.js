import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer } from 'react-toastify';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hook/useAdmin';


const Dashboard = () => {
      const [user] = useAuthState(auth);
      const [admin] = useAdmin(user);
      return (
            <div className="drawer drawer-mobile">
                  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content">
                        <h2 className='text-2xl font-bold text-purple-500 m-4'>Welcome to your Dashboard</h2>
                        <Outlet></Outlet>
                  </div>
                  <div className="drawer-side">
                        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

                              <li><Link to="/dashboard">My Profile</Link></li>
                              <li><Link to="/dashboard/addReview">Add Reviews</Link></li>
                              <li><Link to="/dashboard/myOrder">My Order</Link></li>

                              {admin && <>
                                    <li><Link to="/dashboard/users">All Users</Link></li>
                                    <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                              </>}

                              {/* {admin && <>
                                    
                                    <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                                    <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                              </>} */}
                        </ul>

                  </div>
                  <ToastContainer></ToastContainer>
            </div>
      );
};

export default Dashboard;