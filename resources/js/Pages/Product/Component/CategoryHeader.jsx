import React from 'react'

export default function CategoryHeader(props) {
    return (
        props.prtypes.map((category) => {
            return (
                <div className='bg-red-400 w-[90%] text-right p-1 text-white my-1 shadow-md shadow-red-800'>
                    <h3 className='py-1 pr-4 text-black '>{category.prType}</h3>
                </div>
                
            )
        })
    )
}