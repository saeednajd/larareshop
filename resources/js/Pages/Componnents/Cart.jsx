import React, { useState, useEffect } from 'react';
import emptycart from '../../../images/empty-cart.svg';
import { Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
function ShoppingCart() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [finalAmont, setfinalAmont] = useState(0);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const removefromcart = (id) => {
        localStorage.removeItem(`cartItem-${id}`);
        loadCartItems(); // بارگذاری مجدد آیتم‌ها بعد از حذف
    };
    // تابعی برای خواندن محتویات localStorage
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
        if (isOpen) {
            loadCartItems();
        }
    }, [isOpen]);

    return (
        <div>
            <button onClick={toggleCart} className="cart-icon">
                {/* آیکن سبد خرید */}
                <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h18l-1.5 9H6L3 3z"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute left-30 top-16 z-10 bg-white p-4 shadow-xl  rounded-md min-w-[20vw] min-h-[30vh] border border-black/10">
                    {cartItems.length === 0 ? (
                        <div className='flex flex-col '>
                            <div className='flex flex-row-reverse justify-between'>
                                <div className='flex flex-row-reverse text-black/30 text-sm font-bold gap-2'>
                                    <span>0</span>
                                    <span>محصول</span>
                                </div>
                                <Link href='/cart' className='text-red-600 text-sm hover:text-red-300 transition-colors duration-300'>مشاهده سبد خرید </Link>
                            </div>
                            <img className='w-[30%] my-8 mx-auto' src={emptycart} alt="" />
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
                                <Link href='/cart' className='text-red-600 text-sm hover:text-red-300 transition-colors duration-300'>مشاهده سبد خرید </Link>
                            </div>


                            <div className='max-h-[30vh] overflow-auto my-overflow-auto'>
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
                            <div className='flex flex-row-reverse justify-between border-t border-t-black/10 my-4 items-center '>
                                <div className='flex flex-col mt-4 px-2 text-right'>
                                    <h4> : جمع کل</h4>
                                    <div className='flex flex-row-reverse gap-1 '>
                                        <h2>{finalAmont}</h2>
                                        <span>تومان</span>
                                    </div>
                                </div>
                                <div>
                                    <PrimaryButton className='bg-black py-3'> تسویه حساب</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    )

                    }

                </div>
            )}
        </div>
    );
}

export default ShoppingCart;
