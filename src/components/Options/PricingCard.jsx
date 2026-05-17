import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({ prices }) => {
    console.log(prices);

    const { price, plan, description, features } = prices

    return (
        <div className='bg-amber-600 rounded-xl p-4'>
            {/* card header */}
            <div>
                <h2 className='text-4xl'>{plan}</h2>
                <h2 className='text-2xl'>{price}</h2>
            </div>
            {/* card body */}
            <div className='bg-amber-400  my-4 p-2 rounded-xl'>
                <p>{description}</p>
                {
                    features.map((feat, index) => <PricingFeatures key={index} feat={feat}></PricingFeatures>)
                }
            </div>
        </div>
    );
};

export default PricingCard;