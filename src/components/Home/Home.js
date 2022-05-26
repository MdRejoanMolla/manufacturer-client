import React from 'react';
import { ToastContainer } from 'react-toastify';

import Company from '../page/Company';
import RelatedProduct from '../page/RelatedProduct';
import Reviews from '../page/Reviews';
import ToolParts from '../page/ToolParts';
import Banner from './Banner';
import Footer from '../Share/Footer';
import BusinessSection from './BusinessSection';

const Home = () => {
      return (
            <div className='slate-50'>
                  <Banner></Banner>
                  <ToolParts></ToolParts>
                  <BusinessSection></BusinessSection>
                  <Reviews></Reviews>
                  <RelatedProduct></RelatedProduct>
                  <Company></Company>
                  <Footer></Footer>
                  <ToastContainer></ToastContainer>
            </div>
      );
};
export default Home;