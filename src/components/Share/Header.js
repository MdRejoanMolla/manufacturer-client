import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
      const menuItem = <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="tools">Tools</Link></li>
            <li><Link to="review">Reviews</Link></li>
            <li><Link to="portfolio">My Portfolio</Link></li>
            <li><Link to="blog">Blogs</Link></li>
            <li><Link to="about">About Us</Link></li>
      </>
      return (
            <div className="navbar bg-base-200">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    {menuItem}
                              </ul>
                        </div>
                        <Link to='/' class=" text-violet-600 font-bold normal-case text-2xl ">BICYLE HAND</Link>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                              {menuItem}
                        </ul>
                  </div>

            </div>
      );
};

export default Header;