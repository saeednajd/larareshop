import React from 'react'
import Topmenulink from '../Topmenulink';

function Topmenu(props) {
    return (
        <div>
            <ul className='flex flex-row-reverse  mr-12 my-2'>




                {/* {props.menu.map((item, index) => (
                    <div key={index}>{item}</div>
                ))} */}

                {props.menu.map(item => (
                    <Topmenulink href={item.link} key={item.id}> {item.name}</Topmenulink>

                ))}


            </ul>
        </div>
    )
}

export default Topmenu


