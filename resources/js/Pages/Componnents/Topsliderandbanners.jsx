import React from 'react'
import Topminibanner from './Images/Topminibanner';
import Topslider from './Sliders/Topslider';
function Topsliderandbanners(props) {
    var counter = 0;

    return (
        <div className='flex flex-row-reverse justify-center  items-center mt-2'>
            <div className='my-8 mx-8 '>
                <Topslider banners={props.banners} />
            </div>
            <div className='ml-10 my-8'>
                {props.banners.map((banner) => {
                    if (counter < 2 && banner.location == 'topbanner') {
                        counter++;
                        return (
                            <Topminibanner imgsrc={banner.imageurl  }></Topminibanner>
                        );

                    }

                })}
        


            </div>
        </div>
    )
}

export default Topsliderandbanners
