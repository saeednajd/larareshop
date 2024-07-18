// TopSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SinglePageProduct = (props) => {
    // {console.log(props.product.id)}
    let myproduct = props.product[0].gallery;
    const gallery = myproduct.split('|');
    gallery.push(props.product[0].prImage);

    { console.log(gallery[2]) }


    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <div className=''>
                        <img src={gallery[i]} className="" />
                    </div>
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="w-full max-w-lg  mx-auto my-8 ">

            <Slider {...settings}>
                {gallery.map((product, index) => (
                    <div key={index} className=" items-center p-4 bg-white w-20 rounded-lg">
                        <img
                            src={product}
                            className="w-[40vw] h-[40vh]  object-center object-contain mb-4 rounded  "
                        />

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
export default SinglePageProduct;
