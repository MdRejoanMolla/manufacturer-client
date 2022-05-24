import React from 'react';
import Company from '../page/Company';
import RelatedProduct from '../page/RelatedProduct';
import Reviews from '../page/Reviews';
import ToolParts from '../page/ToolParts';
import Banner from './Banner';
import Footer from '../Share/Footer';
import BusinessSection from './BusinessSection';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <ToolParts></ToolParts>
                  <BusinessSection></BusinessSection>
                  <Reviews></Reviews>
                  <RelatedProduct></RelatedProduct>
                  <Company></Company>
                  <Footer></Footer>

            </div>
      );
};
export default Home;