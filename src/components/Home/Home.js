import React from 'react';
import Company from '../page/Company';
import RelatedProduct from '../page/RelatedProduct';
import Banner from './Banner';
import BusinessSection from './BusinessSection';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <BusinessSection></BusinessSection>
                  <RelatedProduct></RelatedProduct>
                  <Company></Company>

            </div>
      );
};
export default Home;