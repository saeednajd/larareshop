import React from 'react'
import Amazingp from '../../../../images/Amazings.svg'
import SpecialProducts from '../Sliders/SpecialProducts';
function SpecialProductsSlider(props) {
    return (
        <div className='bg-red-500 w-[90%] mx-auto my-6 rounded-xl h-80'>
            <div className=' flex flex-row-reverse h-full'>
                <div className='flex flex-col  h-full justify-center items-center   px-4'>
                    <img src={Amazingp} alt="" className='mb-6'/>
                    <span className='text-white  mt-20'>
                        <h3> <span>{"<"}</span> مشاهده همه</h3>

                    </span>
                </div>
                <div className=''>
                    <SpecialProducts allproducts={props.allproducts}></SpecialProducts>
                </div>
            </div>
        </div>
    )
}

export default SpecialProductsSlider
