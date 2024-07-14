// TopSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSlider = (props) => {
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
            {/* {console.log(props.banners)} */}

            <Slider {...settings}>
                {props.banners.map((banner, index) => {
                    if (banner.location == 'topmenu') {
                        return (
                            <div className="">
                                <div key={index} className="flex flex-col items-center bg-white rounded-lg">
                                    <a href={banner.link}>
                                        <img
                                            src={banner.imageurl}
                                            alt={banner.title}
                                            className="object-cover rounded-lg max-h-[50vh]"
                                        />
                                    </a>
                                    <p className="text-lg font-semibold opacity-0">{banner.title}</p>
                                </div>
                            </div>
                        );
                    } 
                })}
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
