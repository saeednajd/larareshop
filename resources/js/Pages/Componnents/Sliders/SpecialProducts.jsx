// TopSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from '@inertiajs/react';

import banner from '../../../../images/banner.webp';

const products = [
    {
        image: banner,
        description: 'Product 1',
        price: '$10'
    },
    {
        image: banner,
        description: 'Product 2',
        price: '$20'
    },
    {
        image: banner,
        description: 'Product 3',
        price: '$30'
    },
    {
        image: banner,
        description: 'Product 2',
        price: '$20'
    },
    {
        image: banner,
        description: 'Product 3',
        price: '$30'
    },
    {
        image: banner,
        description: 'Product 2',
        price: '$20'
    },
    {
        image: banner,
        description: 'Product 3',
        price: '$30'
    },
    {
        image: banner,
        description: 'Product 2',
        price: '$20'
    },
    {
        image: banner,
        description: 'Product 3',
        price: '$30'
    }
    // Add more products as needed
];

const TopSlider = (props) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

    };
    return (
        <div className="w-full max-w-[76vw] mx-auto my-10">
            <Slider {...settings}>
                {props.specialproducts.map((product, index) => (

                    <Link href={route('product.show', { id: product.id })}>
                        <div className=''>
                            <div key={index} className="flex flex-col items-center justify-center p-4 bg-white  rounded-bl-lg
                    rounded-tr-lg rounded-tl-lg  slider-mr h-[39vh] max-h-[40vh] overflow-hidden" >
                                <img
                                    src={product.prImage}
                                    alt={product.prDescription}
                                    className="w-32 h-32 object-cover mb-4 rounded-bl-lg
                    rounded-tr-lg rounded-tl-lg"
                                />
                                <p className="text- font-semibold overflow-hidden">{product.prTitle}</p>


                                {product.offPrice ? (
                                    <div className='flex flex-col items-center '>
                                        <p className="text-sm  line-through text-gray-400">{product.prPrice}</p>

                                        <div className='flex flex-row-reverse justify-center items-center'>

                                            <p className="text-lg font-bold text-red-500">{product.offPrice} </p>
                                            <span className='text-red-500 text-sm'>هزار تومان</span>

                                        </div>
                                    </div>

                                ) :
                                    <div className='flex flex-row-reverse justify-center items-center'>

                                        <p className="text-lg font-bold text-red-500">{product.prPrice} </p>
                                        <span className='text-red-500 text-sm'>هزار تومان</span>

                                    </div>

                                }


                            </div>

                        </div>
                    </Link>
                ))}
            </Slider>

        </div>
    );
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

export default TopSlider;
