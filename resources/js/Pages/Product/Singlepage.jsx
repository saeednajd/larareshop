import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

import SpecialProductsSlider from '../Componnents/Products/SpecialProductsSlider';
import SmallBanners from '../Componnents/Images/SmallBanners';
import Footer from '../Componnents/Footer';
import Topsection from '../Componnents/Topsection';
import Topsliderandbanners from '../Componnents/Topsliderandbanners';
import SinglePageProduct from '../Componnents/Sliders/SinglePageProduct';

export default function Singlepage({ auth, menu, product }) {
    return (
        <>
            {/* <pre>
                {JSON.stringify(auth, undefined, 2)}
            </pre> */}

            <div className=''>
                <section>
                    <Topsection auth={auth} menu={menu} ></Topsection>
                </section>

                <div>
                    {/* محصول و اطلاعات آن */}
                    <section>
                        <div className='flex flex-row-reverse flex-nowrap my-4'>
                            {/* اسلایدر تصاویر سمت راست */}
                            <div className='bg-black'> 
                                <SinglePageProduct product={product} >

                                </SinglePageProduct>
                            </div>

                            <div className='w-[30vw]  bg-red-500'>

                            </div>
                            <div className='w-[30vw]  bg-green-500'>

                            </div>
                        </div>

                    </section>

                </div>
            </div>
        </>
    );
}

