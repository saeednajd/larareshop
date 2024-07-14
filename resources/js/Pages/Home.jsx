import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

import SpecialProductsSlider from './Componnents/Products/SpecialProductsSlider';
import SmallBanners from './Componnents/Images/SmallBanners';
import Footer from './Componnents/Footer';
import Topsection from './Componnents/Topsection';
import Topsliderandbanners from './Componnents/Topsliderandbanners';

export default function Welcome({ auth, menu, banners, products }) {

    return (
        <>
            <Head title="Welcome" />
            <div className=''>
                <section>
                    <Topsection auth={auth} menu={menu}></Topsection>
                </section>

                <section>
                    <Topsliderandbanners banners={banners}></Topsliderandbanners>
                </section>
                {/* پیشنهاد ویژه */}
                <section>
                    <SpecialProductsSlider allproducts={products} ></SpecialProductsSlider>
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
