import React from 'react'

function Topmenulink({ children, href }) {
    return (
        <li className='mr-6'>
            <a href={href}>{children}</a>
        </li>
    )
}

export default Topmenulink