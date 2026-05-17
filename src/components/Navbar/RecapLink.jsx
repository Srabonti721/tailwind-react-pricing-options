import React from 'react';

const RecapLink = ({route}) => {
    return (
        <div className='hover:bg-amber-400'>
            <li><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default RecapLink;