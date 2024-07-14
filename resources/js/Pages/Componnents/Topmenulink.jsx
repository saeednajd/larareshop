import React from 'react'

function Topmenulink({ children, href }) {
    return (
        <li className='mr-6  hover:text-red-500 transition-all duration-300 '>
                <a href={href} >
                    {children}
                </a>

        </li >
    )
}


export default Topmenulink