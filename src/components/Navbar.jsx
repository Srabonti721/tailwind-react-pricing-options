import React, { useState } from 'react';
import Link from './Navbar/Link';
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
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
    const [open, setOpen] = useState(false)
    const links = navigation.map(route => <li><a key={route.id} href={route.path}>{route.name}</a></li>)
    return (
        <nav className='flex justify-between mx-6 py-5 '>
            {/* dynamic nav */}
            {/* potion 1 */}
            <span onClick={() => setOpen(!open)} className='flex gap-3'>
                {open ? <IoClose /> : <MdMenu className='md:hidden' />}
                <ul className='md:hidden '>
                    {links}
                </ul>

                <h3>My Navigation</h3>
            </span>

            <ul className='hidden md:flex justify-center gap-6'>
                {
                    links
                }
            </ul>
            <button className='btn'> login</button>
            {/* potion 2 */}
            {/* <ul className='flex'>
                {
                    navigation.map(routes => <Link key={routes.id} route={routes}></Link>)
                }
            </ul> */}
            {/* static nav */}
            {/* <ul className='flex justify-center gap-6'>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Blog">Blog</a></li>
            </ul> */}

        </nav>
    );
};

export default Navbar;