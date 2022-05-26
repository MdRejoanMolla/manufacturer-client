import React from 'react';
import Loading from '../page/Loading';
import { ToastContainer } from 'react-toastify';
import { useQuery } from 'react-query';
import UserRow from './UseRow';


const Users = () => {
      const { data: users, isLoading, refetch } = useQuery('users', () => fetch('`https://infinite-ocean-96242.herokuapp.com/user', {
            method: 'GET',
            headers: {
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
      }).then(res => res.json()));
      if (isLoading) {
            return <Loading></Loading>
      }
      return (
            <div className='bg-yellow-500'>
                  <h2 className="text-3xl">All Users: {users.length}</h2>
                  <div className="overflow-x-auto">
                        <table className="table w-full">
                              <thead>
                                    <tr>
                                          <th></th>
                                          <th>Name</th>
                                          <th>ADMIN</th>
                                          <th>REMOVE</th>
                                    </tr>
                              </thead>
                              <tbody>

                                    {
                                          users?.map(data => <UserRow
                                                key={data._id}
                                                user={data}
                                                refetch={refetch}
                                          ></UserRow>)
                                    }

                              </tbody>
                        </table>
                  </div>
                  <ToastContainer></ToastContainer>
            </div>
      );
};

export default Users;