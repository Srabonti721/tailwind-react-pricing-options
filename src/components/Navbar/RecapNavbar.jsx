import React, { useState } from 'react';
import RecapLink from './RecapLink';
import { TextAlignJustify, X } from 'lucide-react';
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
const RecapNavbar = () => {
    const [open, setOpen] = useState(false)
    const links =  navigation.map(route => <RecapLink key={route.id} route={route}></RecapLink>)
    return (
        <nav className=' container mx-auto flex justify-between px-8 my-5 shadow'>
            <div className='flex gap-3' onClick={()=>setOpen(!open)}>
                {open?<X className='md:hidden'></X>:<TextAlignJustify className='md:hidden'></TextAlignJustify>}
            <ul className={`md:hidden absolute bg-amber-200 p-3 duration-1000 ${open?"top-8":"-top-50"}`}>
                {links}
            </ul>
                  <h2>My responsive navigation</h2>
            </div>
          
            <ul className='md:flex hidden gap-6'>
                {
                   links
                }
            </ul>
            <button className='btn'>login</button>
        </nav>
    );
};

export default RecapNavbar;