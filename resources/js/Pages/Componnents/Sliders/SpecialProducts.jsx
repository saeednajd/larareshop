// TopSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        <div className="w-full max-w-[76vw] mx-auto my-8">
            {console.log(props.allproducts)}
            <Slider {...settings}>
                {products.map((product, index) => (
                    <div className=''> 
                        <div key={index} className="flex flex-col items-center justify-center p-4 bg-white  rounded-bl-xl
                    rounded-tr-xl rounded-tl-xl  slider-mr" >
                            <img
                                src={product.image}
                                alt={product.description}
                                className="w-32 h-32 object-cover mb-4"
                            />
                            <p className="text-lg font-semibold">{product.description}</p>
                            <p className="text-lg font-bold">{product.price}</p>
                        </div>
                    </div>

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
