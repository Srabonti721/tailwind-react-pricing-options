import React, { use } from 'react';
import PricingCard from './PricingCard';

const PriceingOption = ({pricingPromise}) => {
    const pricing = use (pricingPromise)
//    console.log(pricing);
    return (
        <div>
            <h1 className='md:text-3xl lg:text-5xl '>Get Your MemberShip</h1>
          <div className='grid grid-cols-3 gap-3 px-4 my-4'>
            {
                pricing.map(prices =><PricingCard key={prices.id} prices={prices}></PricingCard>)
            }
          </div>
        </div>
    );
};

export default PriceingOption;