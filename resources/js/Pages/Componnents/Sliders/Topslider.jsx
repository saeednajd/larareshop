// TopSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from '../../../../images/banner.webp';
import bannert from '../../../../images/banner3.jpg';
import bannerr from '../../../../images/banner4.jpg';



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
    }
    // Add more products as needed
];

const TopSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />


    };
    return (
        <div className="w-full max-w-3xl mx-auto  ">
            <Slider {...settings}>
                {products.map((product, index) => (
                    <div className=''>

                        <div key={index} className="flex flex-col items-center  bg-white  rounded-lg">

                            <img
                                src={product.image}
                                alt={product.description}
                                className=" object-cover  rounded-lg"
                            />
                            <p className="text-lg font-semibold opacity-0">{product.description}</p>

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
