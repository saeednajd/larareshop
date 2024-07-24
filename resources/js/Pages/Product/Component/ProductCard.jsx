import { Link } from '@inertiajs/react';
import React from 'react'

function ProductCard(pr) {
    const product = pr.product;
    return (
        <>
            <div className=' border border-black/10 w-[25%] h-[50vh] hover:shadow-lg hover:shadow-black/10 transition-all duration-300'>
                <Link href={`/product/${product.id}`}>
                    <div className=' p-4'>
                        <img className='max-w-[70%] mx-auto' src={product.prImage} alt="" />
                        <p className='text-right mx-2 my-2 whitespace-normal text-sm'>
                            {product.prTitle}
                        </p>
                    </div>
                    <div className='mx-4 flex flex-row-reverse items-center gap-2' >
                        <svg className='text-red-500 fill-current' xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" /></svg>
                        <h5 className='text-sm'>موجود در انبار</h5>

                    </div>
                    <div className='flex flex-row-reverse mx-4 my-3 gap-1 items-center'>
                        <span>{product.prBuyPrice}</span>
                        <span className='text-sm'>تومان</span>

                    </div>

                </Link>
            </div>
        </>
    )
}

export default ProductCard
