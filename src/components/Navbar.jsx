import React from 'react';
import Link from './Navbar/Link';
const navigation = [
    {
        "id": 1,
        "name": "Home",
        "path": "/"
    },
    {
        "id": 2,
        "name": "About",
        "path": "/about"
    },
    {
        "id": 3,
        "name": "Services",
        "path": "/services"
    },
    {
        "id": 4,
        "name": "Products",
        "path": "/products"
    },
    {
        "id": 5,
        "name": "Blog",
        "path": "/blog"
    },
    {
        "id": 6,
        "name": "Contact",
        "path": "/contact"
    }
]

const Navbar = () => {
    return (
        <nav>
            {/* dynamic nav */}
            {/* potion 1 */}
            <ul className='flex justify-center gap-6'>
                {
                    navigation.map(route => <li><a key={route.id} href={route.path}>{route.name}</a></li>)
                }
            </ul>
            {/* potion 2 */}

            {
                navigation.map(routes => <Link key={routes.id} route={routes}></Link>)
            }


            {/* static nav */}
            <ul className='flex justify-center gap-6'>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Blog">Blog</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;