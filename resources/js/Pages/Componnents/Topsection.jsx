import React from 'react'
import logo from '../../../images/ladana logo.png';
import {Link} from '@inertiajs/react';
import Topmenu from './Menus/Topmenu';

function Topsection(props) {
    return (
        <div id='top-menu' className='border border-b-2 shadow-sm'>

            <section className='flex flex-col'>
                <section className='text-black flex flex-row-reverse justify-between items-center  h-24 w-[90%] mx-auto'>
                    <div className=' text-white  text-center flex flex-row-reverse  justify-between h-[70%] mr-8 '>
                        <img src={logo} alt="" className='' />
                        <div className=' flex items-center'>
                            <input className='w-[30vw] rounded-lg text-right bg-gray-100 border-none' type="text" placeholder=' .... جستجو' />

                        </div>
                    </div>
                    <nav className=" text-black mx-8 my-4  ">
                        {props.auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                پنل کاربری
                            </Link>
                        ) : (
                            <>
                                <div className='flex flex-row-reverse  px-8 items-center gap-2'>
                                    <div className=' border border-black rounded-lg py-2'>

                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                        >
                                            ورود
                                        </Link>
                                        <span className='font-bold'>|</span>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                        >
                                            ثبت نام
                                        </Link>
                                    </div>
                                    <span>|</span>
                                    <span>cart</span>

                                </div>


                            </>
                        )}
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
