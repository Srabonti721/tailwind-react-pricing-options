import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feat}) => {
    return (
 <p className='flex mt-2'> <CircleCheckBig className='mr-2'></CircleCheckBig>{feat}</p>
    );
};

export default PricingFeatures;