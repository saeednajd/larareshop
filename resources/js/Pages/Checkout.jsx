import { Head, Link, useForm } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import Topsection from './Componnents/Topsection';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import foxComputer from '../../images/foxComputer.png';
import Footer from './Componnents/Footer';
import Cart from './Componnents/Shapes/Cart';
import Trucksvg from './Componnents/Shapes/Trucksvg';
import Walletsvg from './Componnents/Shapes/Walletsvg';

export default function Checkout({ menu, auth }) {


    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // محاسبه زمان انقضا بر اساس تعداد روزها
        const expires = "expires=" + d.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    const [cartItems, setCartItems] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [finalAmont, setfinalAmont] = useState(0);
    const [formattedString, setFormattedString] = useState('');

    const loadCartItems = () => {
        const items = [];
        let totalAmount = 0;

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('cartItem-')) {
                const item = JSON.parse(localStorage.getItem(key));
                items.push(item);
                const itemTotal = item.price * item.quantity;
                totalAmount += itemTotal;
            }
        }

        setfinalAmont(totalAmount);
        setCartItems(items);
        setItemsInCart(items.length);

        const result = items.map(item => `${item.id}:${item.quantity}`).join('/');
        setFormattedString(result);
        
    };
    const { data, setData, post } = useForm({
        firstname: '',
        lastname: '',
        state: '',
        city: '',
        address: '',
        postcode: '',
        phone: '',
        emailaddress: '',
    });

    useEffect(() => {
        loadCartItems();
    }, []);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Update cartitems with the formatted string before submitting
        const dataToSend = {
            ...data
        };

        console.log(dataToSend); // For debugging
        post('/payment', dataToSend);
    };

    setCookie('items', formattedString , 1);

    return (
        <>
            <Head />
            <section>
                <Topsection auth={auth} menu={menu} />
            </section>
            <section>
                <div className='flex flex-row-reverse justify-between border border-black/10 mt-4 mx-20 rounded-lg items-center py-6 px-4'>
                    <span className='opacity-40'>
                        <div className='flex flex-row-reverse gap-2 items-center'>
                            <Cart />
                            <h3>سبد خرید</h3>
                        </div>
                    </span>
                    <hr className='bg-red-500 w-[15vw] h-[2px]' />
                    <span>
                        <div className='flex flex-row-reverse gap-2 items-center'>
                            <Trucksvg />
                            <h3>تسویه حساب</h3>
                        </div>
                    </span>
                    <hr className='bg-red-500 w-[15vw] h-[2px]' />
                    <span className='opacity-40'>
                        <div className='flex flex-row-reverse gap-2 items-center' >
                            <Walletsvg />
                            <h3>پرداخت</h3>
                        </div>
                    </span>
                </div>
                {!auth.user ? (
                    <div className='flex flex-row-reverse justify-between border border-black/10 mt-4 mx-20 rounded-lg items-center py-6 px-4 bg-pink-200'>
                        <Link href='/login'>
                            <span className='text-blue-900'>
                                قبلا ثبت نام کرده اید ؟ برای ورود کلیک کنید
                            </span>
                        </Link>
                    </div>)
                    : null
                }
            </section>
            <form onSubmit={handleSubmit} >

                <section className='flex flex-row-reverse justify-center mb-10'>
                    <div className='flex flex-col text-right mx-20 mt-10 w-[60%] border border-black/10 rounded-lg justify-center items-end'>
                        <h2 className='mt-6 mr-4 mb-2'>جزئیات صورت حساب</h2>
                        <InputLabel>
                            <div className='flex flex-row-reverse mr-4 my-2'>
                                <span>نام</span>
                                <span className='text-red-500'>*</span>
                            </div>
                        </InputLabel>
                        <TextInput name='firstname' value={data.firstname} onChange={handleChange} className="w-[90%] mr-4 my-2" />
                        <InputLabel>
                            <div className='flex flex-row-reverse mr-4 my-2'>
                                <span>نام خانوادگی</span>
                            </div>
                        </InputLabel>
                        <TextInput name='lastname' value={data.lastname} onChange={handleChange} className="w-[90%] mr-4 my-2" />

                        <InputLabel>
                            <div className='flex flex-row-reverse mr-4 my-2'>
                                <span>استان</span>
                                <span className='text-red-500'>*</span>
                            </div>
                        </InputLabel>
                        <TextInput name='state' value={data.state} onChange={handleChange} className="w-[90%] mr-4 my-2" />
                        <InputLabel>
                            <div className='flex flex-row-reverse mr-4 my-2'>
                                <span>شهر</span>
                                <span className='text-red-500'>*</span>
                            </div>
                        </InputLabel>
                        <TextInput name='city' value={data.city} onChange={handleChange} className="w-[90%] mr-4 my-2" />

                        <InputLabel>
                            <div className='flex flex-row-reverse mr-4 my-2'>
                                <span>آدرس</span>
                                <span className='text-red-500'>*</span>
                            </div>
                        </InputLabel>
                        <TextInput name='address' value={data.address} onChange={handleChange} className="w-[90%] mr-4 my-2" />

                        <InputLabel>
                            <div className='flex flex-row-reverse mr-4 my-2'>
                                <span>کدپستی</span>
                                <span className='text-red-500'>*</span>
                            </div>
                        </InputLabel>
                        <TextInput name='postcode' value={data.postcode} onChange={handleChange} className="w-[90%] mr-4 my-2" />

                        <InputLabel>
                            <div className='flex flex-row-reverse mr-4 my-2'>
                                <span>تلفن همراه</span>
                                <span className='text-red-500'>*</span>
                            </div>
                        </InputLabel>
                        <TextInput name='phone' value={data.phone} onChange={handleChange} className="w-[90%] mr-4 my-2" />

                        <InputLabel>
                            <div className='flex flex-row-reverse mr-4 my-2'>
                                <span>ایمیل</span>
                            </div>
                        </InputLabel>
                        <TextInput name='emailaddress' value={data.emailaddress} onChange={handleChange} className="w-[90%] mr-4 my-2" />

                       
                    </div>
                    <div className='w-[35%] border border-black/10 rounded-lg my-10 ml-10 max-h-[60vh]'>
                        <h3 className='text-center mt-4 text-lg font-bold'>صورت حساب</h3>
                        <hr className='mt-2 w-[90%] mx-auto h-[2px] bg-black/20' />
                        <div className='flex flex-row-reverse items-center justify-between'>
                            <div>
                                <div className='flex flex-row-reverse mt-8 mr-4 gap-1'>
                                    <h4>جمع آیتم ها</h4>
                                    <h4>:</h4>
                                    <h4>{finalAmont}</h4>
                                    <h4>تومان</h4>
                                </div>
                                <div className='flex flex-row-reverse mt-8 mr-4 gap-1'>
                                    <h4>هزینه ارسال</h4>
                                    <h4>:</h4>
                                    <h4>30000</h4>
                                    <h4>تومان</h4>
                                </div>
                                <div className='flex flex-row-reverse mt-8 mr-4 gap-1'>
                                    <h4>هزینه نهایی با مالیات</h4>
                                    <h4>:</h4>
                                    <h4>30000</h4>
                                    <h4>تومان</h4>
                                </div>
                            </div>
                            <div className='w-[35%]'>
                                <img className='w-[90%] ml-8' src={foxComputer} alt="" />
                            </div>
                        </div>
                        <hr className='mt-2 w-[90%] mx-auto h-[2px] bg-black/20' />
                        <p className='text-right mx-4 mt-4 text-sm'>
                            اطلاعات شخصی شما برای پردازش سفارش شما، پشتیبانی از تجربه شما در سراسر این وب سایت و برای اهدافی که در سیاست حفظ حریم خصوصی ذکر شده است استفاده می شود
                        </p>
                        <div className='flex flex-row justify-center'>
                            <PrimaryButton type="submit" className='py-4 w-[70%] flex justify-center items-center mt-8 bg-blue-950 rounded-md text-white cursor-pointer'>
                                ثبت و پرداخت
                            </PrimaryButton>
                        </div>
                    </div>
                </section>
            </form>
            <Footer />
        </>
    );
}
