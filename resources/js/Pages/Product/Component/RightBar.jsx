import React from 'react'
import { Link } from '@inertiajs/react'

function RightBar(props) {
    return (
        <>
            <div className='w-[25vw]  flex flex-col'>

                <div className=' w-[90%] mx-auto rounded-lg border border-gray-300 '>
                    <div className='flex flex-row-reverse justify-between my-4 mx-8'>
                        <h1 className='border-b-2 border-b-red-600 pb-2'>دسته های محصولات</h1>
                        <span> ^</span>
                    </div>
                    <div className='text-right mx-4 h-[30vh] overflow-auto my-overflow-auto my-4 '>
                        <ul>
                            {props.categories.map((category) => {
                                return (
                                    <>
                                        <Link href='#'>
                                            <li className='border-b border-b-black/10 pb-2'>{category.title}</li>
                                        </Link>
                                    </>
                                )
                            })}


                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightBar
