import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

import Footer from '../Componnents/Footer';
import Topsection from '../Componnents/Topsection';
import SinglePageProduct from '../Componnents/Sliders/SinglePageProduct';
import CategoryHeader from './Component/CategoryHeader';

//images
import freeship from '../../../images/free-shipping.svg';
import shild from '../../../images/shield.png';
import verified from '../../../images/verified.png';


import CountButtons from './Component/CountButtons';
export default function Singlepage({ auth, menu, producwithttype }) {

    var flag = true;
    if (!producwithttype[0].producttype) {
        flag = false;

    }
    ;
    let prtypes = producwithttype[0].producttype;
    let product = producwithttype[0];
    return (
        <>
            <Head title='صفحه محصول' />


            <div className=''>
                <section>
                    <Topsection auth={auth} menu={menu} />
                </section>

                <div>
                    {/* محصول و اطلاعات آن */}
                    <section>
                        <div className='flex flex-row-reverse flex-nowrap justify-between my-4'>
                            {/* اسلایدر تصاویر سمت راست */}
                            <div className='w-[30%] flex flex-col items-center'>
                                {flag ? (
                                    <CategoryHeader prtypes={prtypes} />

                                ) : (
                                    <></>
                                )}
                                <SinglePageProduct product={producwithttype} />
                            </div>

                            <div className='w-[35%]  flex flex-col'>
                                <div className='text-right  text-black my-12 mx-4'>
                                    <h1 className='py-1 text-xl font-bold'>{product.prTitle}</h1>
                                </div>
                                <div className='w-full flex justify-center'>
                                    <div className='border border-gray-300 flex flex-row-reverse p-2 rounded-xl w-[70%]'>
                                        <div className='flex flex-col text-right'>
                                            <h4>ارسال رایگان</h4>
                                            <h5 className='text-sm text-gray-500 py-2'>برای سفارشات بالای 900 هزار تومان</h5>
                                        </div>
                                        <div>
                                            <img src={freeship} alt="" />
                                        </div>


                                    </div>
                                </div>

                            </div>
                            <div className='w-[30%]  flex flex-col items-center'>
                                <div className='border border-gray-400  rounded-xl bg-gray-200 flex flex-col  w-[80%] p-4'>

                                    <div className='flex flex-row-reverse p-1 my-4'>
                                        <img className='ml-4' src={shild} alt="" />
                                        <h4>ضمانت اصالت کالا</h4>

                                    </div>
                                    <hr className='h-[1.5px] bg-gray-300 w-[90%] mx-auto' />
                                    <div className='flex flex-row-reverse p-1 my-4'>
                                        <img className='ml-4' src={verified} alt="" />
                                        <h4>
                                            گارانتی کالای سالم
                                        </h4>

                                    </div>
                                    <hr className='h-[1.5px] bg-gray-300 w-[90%] mx-auto' />
                                    <div>
                                        <div>
                                            {product.offPrice ? (
                                                <div className='text-right mt-4 mr-4'>
                                                    <h4 className='text-black/40 text-xl font-bold line-through'>{product.prOneToFivePrice} تومان
                                                    </h4>
                                                    <h4 className='text-red-500 text-xl font-bold'>{product.offPrice} تومان
                                                    </h4>
                                                </div>
                                            ) : (
                                                <div className='text-right mt-4 mr-4'>
                                                    <h4 className='text-red-500 text-xl font-bold '>{product.prOneToFivePrice} تومان
                                                    </h4>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='flex flex-row-reverse justify-between mt-8 '>
                                        <CountButtons producwithttype={producwithttype} />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[20vh]'>
                            <Footer />

                        </div>
                    </section>

                </div>
            </div>
        </>
    );
}

