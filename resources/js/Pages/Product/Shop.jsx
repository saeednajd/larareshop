import React from 'react'
import Topsection from '../Componnents/Topsection'
import { Head, Link } from '@inertiajs/react'
import Footer from '../Componnents/Footer'
import RightBar from './Component/RightBar'
import OrderBy from './Component/OrderBy'
import ProductCard from './Component/ProductCard'
import PaginationShop from './Component/PaginationShop'
function Shop({ auth, menu, categories, products }) {
    const AllProducts = products.data;
    
    return (
        <>
            <Head title="shop" />
            <section>
                <Topsection auth={auth} menu={menu}></Topsection>
            </section>
            <section className=' my-8' id='mainSection'>
                <div className='flex flex-row-reverse'>
                    {/* right bar= */}

                    <RightBar categories={categories} />
                    <div className=' w-[75vw] flex flex-col'>
                        <OrderBy />
                        <div className=' mx-2 flex flex-row-reverse flex-wrap my-6' >
                            {
                                AllProducts.map((product) => {
                                    return (
                                        <ProductCard product={product} />
                                    )
                                })
                            }
                        </div>


                        <div className='mx-4'>
                            <PaginationShop Links={products.links} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </>
    )
}

export default Shop
