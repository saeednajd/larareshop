import React from 'react'

function SmallBanners(props) {
  return (
    <div className=' w-[90%] mx-auto rounded-xl mb-4'>
      <div className='flex flex-row-reverse flex-wrap justify-between'>
        {
          props.banners.map((smallBanner, index) => {
            if (smallBanner.location == 'footer') {
              return (
                <a href="">
                  <img className='rounded-xl max-w-[21vw] ' src={smallBanner.imageurl} alt={smallBanner.title} />
                </a>
              )
            }
          })
        }



      </div>

    </div>
  )
}

export default SmallBanners
