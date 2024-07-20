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
                    <li onClick={() => filterby("newest")}>جدید ترین</li>

                    <Link href={`shop/${5}`} >
                        <li>جدید ترین</li>
                    </Link>
                    
                </ul>
            </div>
        </div>
    );
}

export default OrderBy;
