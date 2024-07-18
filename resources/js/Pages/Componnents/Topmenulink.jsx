import React from 'react'
import { Link } from '@inertiajs/react';

function Topmenulink({ children, href }) {
    return (
        <li className='mr-6  hover:text-red-500 transition-all duration-300 '>
                <Link href={href} >
                    {children}
                </Link>

        </li >
    )
}


export default Topmenulink