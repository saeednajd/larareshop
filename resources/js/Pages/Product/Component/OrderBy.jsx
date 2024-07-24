import React from 'react';
import { Link, router } from '@inertiajs/react';

function OrderBy() {


    return (
        <div className='flex flex-row-reverse items-center'>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                    {/* ... */}
                </svg>
            </span>

            <h5> : مرتب سازی</h5>
            <div>
                <ul className='flex flex-row-reverse mx-2 gap-2'>

                    <Link href={'/shop/mostRecent'} >
                        <li className='hover:opacity-80 transition-all duration-300 hover:text-red-300'>جدید ترین</li>
                    </Link>
                    <span>|</span>
                    <Link className='hover:opacity-80 transition-all duration-300 hover:text-red-300'  href={'/shop/oldest'} >
                        <li>قدیمی ترین</li>
                    </Link>
                    <span>|</span>

                    <Link  className='hover:opacity-80 transition-all duration-300 hover:text-red-300' href={'/shop/cheapest'} >
                        <li>ارزان ترین</li>
                    </Link>
                    <span>|</span>

                    <Link  className='hover:opacity-80 transition-all duration-300 hover:text-red-300' href={'/shop/mostExpensive'} >
                        <li>گران ترین</li>
                    </Link>
                    <span>|</span>

                    <Link  className='hover:opacity-80 transition-all duration-300 hover:text-red-300' href={'/shop'} >
                        <li>پیشفرض</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default OrderBy;
