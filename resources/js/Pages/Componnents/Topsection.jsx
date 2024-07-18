import React from 'react'

import { Link } from '@inertiajs/react';
import Topmenu from './Menus/Topmenu';
import logo from '../../../images/ladana logo.png';


function Topsection(props) {

    return (
        <div id='top-menu' className='border border-b-2 shadow-sm'>

            <section className='flex flex-col'>
                <section className='text-black flex flex-row-reverse justify-between items-center  h-24 w-[90%] mx-auto'>
                    <div className=' text-white  text-center flex flex-row-reverse  justify-between h-[70%] mr-8 '>
                        <div className='flex justify-end text-right'>
                            <Link href={route('Home')}>
                                <img src={logo} alt="" className='w-[50%] ml-auto' />
                            </Link>
                        </div>
                        <div className=' flex items-center'>
                            <input className='w-[30vw] rounded-lg text-right bg-gray-100 border-none' type="text" placeholder=' .... جستجو' />

                        </div>
                    </div>
                    <nav className=" text-black mx-8 my-4 flex flex-row-reverse items-center  ">
                        {props.auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                            >
                                پنل کاربری
                            </Link>

                        ) : (
                            <>
                                <div className='flex flex-row-reverse  px-8 items-center gap-2'>
                                    <div className=' border border-gray-300 rounded-lg py-2'>

                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/20 focus:outline-none focus-visible:ring-[#FF2D20]"
                                        >
                                            ورود
                                        </Link>
                                        <span className='font-bold'>|</span>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/20 focus:outline-none focus-visible:ring-[#FF2D20]"
                                        >
                                            ثبت نام
                                        </Link>
                                    </div>


                                </div>


                            </>
                        )}
                        <span className='text-gray-300 mx-2'>|</span>
                        <span className='mx-2'>cart</span>
                    </nav>
                </section>
                <section className=''>
                    <Topmenu menu={props.menu}></Topmenu>
                </section>
            </section>
            {/* اسلایدر */}

            <section>

            </section>
        </div>
    )
}

export default Topsection
