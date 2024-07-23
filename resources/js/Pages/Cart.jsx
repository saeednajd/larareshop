import { Head, Link } from '@inertiajs/react'
import { useState, useEffect } from 'react'
import emptycart from '../../images/empty-cart.svg'
import React from 'react'
import Topsection from './Componnents/Topsection'
import fox from '../../images/template.jpg'
import PrimaryButton from '@/Components/PrimaryButton'
import Footer from './Componnents/Footer'
function Cart({ auth, menu }) {

    const [cartItems, setCartItems] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [finalAmont, setfinalAmont] = useState(0);
    const loadCartItems = () => {
        const items = [];
        let totalAmount = 0; // تغییر نام متغیر به totalAmount

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('cartItem-')) {
                const item = JSON.parse(localStorage.getItem(key));
                items.push(item);

                // محاسبه مقدار هر مورد و اضافه کردن به totalAmount
                const itemTotal = item.price * item.quantity;
                totalAmount += itemTotal; // جمع کردن به totalAmount
            }
        }

        setfinalAmont(totalAmount); // ثبت مقدار کل
        setCartItems(items);
        setItemsInCart(items.length);
    };
    useEffect(() => {
        loadCartItems();
    }, []);

    return (
        <>
            <Head title='صفحه سبد خرید' />
            <div className=''>
                <section>
                    <Topsection auth={auth} menu={menu} />
                </section>
                <section>
                    <div className='flex flex-col mx-20 mt-10 text-right text-black/30 text-lg gap-y-2'>
                        <h2 className=''>سبد خرید</h2>
                        <hr className='' />
                    </div>
                </section>
                <section className='flex flex-row-reverse justify-center '>

                    <div className='flex flex-col text-right mx-20 mt-10 w-[60%] border border-black/10 rounded-lg'>
                        {cartItems.length === 0 ? (
                            <div className='flex flex-col '>
                                <div className='flex flex-row-reverse justify-between'>
                                    <div className='flex flex-row-reverse text-black/30 text-sm font-bold gap-2 mx-10 mt-4'>
                                        <span>0</span>
                                        <span>محصول</span>
                                    </div>
                                </div>
                                <img className='w-[10%] my-8 mx-auto' src={emptycart} alt="" />
                                <h3 className='text-center'>هیچ محصولی در سبد خرید نیست
                                </h3>
                            </div>
                        ) : (
                            <div className='' >
                                <div className='flex flex-row-reverse justify-between'>
                                    <div className='flex flex-row-reverse text-black/30 text-sm font-bold gap-2'>
                                        <span>{itemsInCart}</span>
                                        <span>محصول</span>
                                    </div>
                                </div>


                                <div className=''>
                                    {

                                        cartItems.map((item, index) => (
                                            <div className='flex flex-row-reverse p-2' key={index}>
                                                <div className='p-4'>
                                                    <img className='max-w-[5vw]' src={item.image} alt="" />
                                                </div>
                                                <div className='text-right flex flex-col'>
                                                    <h4 >{item.title}</h4>

                                                    <div className='flex flex-row-reverse gap-1'>
                                                        <span>{item.quantity}</span>
                                                        <span>x</span>
                                                        <span>{item.price}</span>
                                                        <span>تومان</span>
                                                    </div>
                                                    <div className='flex flex-row-reverse text-xs text-red-500 gap-1 my-2 cursor-pointer' onClick={() => removefromcart(item.id)} >
                                                        <span>X</span>
                                                        <span > حذف آیتم</span>
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                        )}
                                </div>

                            </div>
                        )

                        }
                    </div>
                    <div className='w-[35%] border border-black/10 rounded-lg my-10 ml-10 '>
                        <div className='flex flex-row-reverse'>
                            <div className='flex flex-col items-end px-4 pt-4'>
                                <h3 className='text-sm font-bold'>جمع کل</h3>
                                <div className='flex flex-row-reverse gap-1 mt-2'>
                                    <span>
                                        {finalAmont}
                                    </span>
                                    <span>
                                        تومان
                                    </span>
                                </div>
                                <hr className='h-1 text-red-300 w-[10vw] bg-red-500 my-1 ' />
                                <h3 className='text-sm font-bold'>هزینه ارسال</h3>
                                <div className='flex flex-row-reverse gap-1 mt-2'>
                                    <span>
                                        30000
                                    </span>
                                    <span>
                                        تومان
                                    </span>
                                </div>
                                <hr className='h-1 text-red-300 w-[10vw] bg-red-500 my-1' />

                                <h2 className='text-sm font-bold'>مجموع</h2>
                                <div className='flex flex-row-reverse gap-1 mt-2'>
                                    <span>
                                        30000
                                    </span>
                                    <span>
                                        تومان
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img src={fox} alt="" className='w-[50%]' />
                            </div>
                        </div>
                        <div className='ml-4 mb-4'>
                            <Link href='/checkout'>
                                <PrimaryButton>تسویه حساب</PrimaryButton>

                            </Link>

                        </div>
                    </div>

                </section>
                <section className='mt-8'>
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default Cart
