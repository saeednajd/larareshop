import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import logo from '../../images/ladana logo.png';
import Topmenulink from './Componnents/Topmenulink';
import banner from '../../images/banner.webp';
import Topminibanner from './Componnents/Images/Topminibanner';
import Topslider from './Componnents/Sliders/Topslider';
import SpecialProductsSlider from './Componnents/Products/SpecialProductsSlider';
import SmallBanners from './Componnents/Images/SmallBanners';
import Footer from './Componnents/Footer';
export default function Welcome({ auth }) {

    return (
        <>
            <Head title="Welcome" />
            <div className=''>
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
                                {auth.user ? (
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
                            <div>
                                <ul className='flex flex-row-reverse  mr-12 my-2'>
                                    <Topmenulink href='/'>خانه</Topmenulink>
                                    <Topmenulink href='/'>بهداشتی</Topmenulink>


                                </ul>
                            </div>
                        </section>
                    </section>
                    {/* اسلایدر */}

                    <section>

                    </section>
                </div>
                <section className='flex flex-row-reverse justify-center  items-center mt-2'>
                    <div className='my-8 mx-8 '>
                        <Topslider />
                    </div>
                    <div className='ml-10 my-8'>
                        <Topminibanner imgsrc={banner}></Topminibanner>
                        <Topminibanner imgsrc={banner}></Topminibanner>


                    </div>
                </section>
                {/* پیشنهاد ویژه */}
                <section>
                    <SpecialProductsSlider></SpecialProductsSlider>
                </section>

                {/* بنر پایانی */}
                <section>
                    <SmallBanners></SmallBanners>
                </section>
                <Footer></Footer>
                <footer className=''>

                </footer>
            </div>


        </>
    );
}
