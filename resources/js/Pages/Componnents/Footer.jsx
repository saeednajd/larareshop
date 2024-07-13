import React from 'react'
import logo from '../../../images/ladana logo.png';
function Footer() {
    return (
        <div className='mx-auto flex flex-col border-t border-gray-400 border-opacity-20  ' style={{ boxShadow: '0 -4px 6px -9px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
            <div className='flex flex-row-reverse justify-between items-center  py-2 px-4'>
                <div className='flex flex-row items-center justify-center'>
                    <img className='max-w-[50%]' src={logo} alt="" />

                </div>
                <div>
                    <h3>برگشت به بالا</h3>
                </div>
            </div>
            <div className='bg-green- flex flex-row-reverse py-4 px-6 gap-2 '>
                <h5>تلفن پشتیبانی :668400000</h5>
                <span>|</span>
                <h5>  info@ladana.ir : ایمیل پشتیبانی  </h5>
                <span>|</span>
                <h5>در ساعات اداری پاسخگوی شما هستیم</h5>

            </div>
        </div>
    )
}

export default Footer
