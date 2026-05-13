import React from 'react';

const Link = ({route}) => {
    return (
        <nav>

                <li><a href={route.path}>{route.name}</a></li>

        </nav>
    );
};

export default Link;