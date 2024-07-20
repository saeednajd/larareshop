import React, { useState } from 'react';

function CountButtons(props) {
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    const handleAddToCart = () => {
        const item = {
            id: props.id,
            title: props.title,
            quantity: value
        };
        
        // Save item to localStorage
        localStorage.setItem(`cartItem-${props.id}`, JSON.stringify(item));
        alert(`${props.title} has been added to the cart!`);
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <button
                    className="bg-white hover:bg-gray-300 px-4 py-2 rounded-l-md transition-all duration-300 border-r-2"
                    onClick={handleDecrement}
                >
                    <svg
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18 12H6"
                        />
                    </svg>
                </button>
                <input
                    type="text"
                    className="bg-white py-2 w-[3vw] border-none text-center"
                    value={value}
                    readOnly
                />
                <button
                    className="bg-white hover:bg-gray-300 px-4 py-2 rounded-r-md transition-all duration-300 border-l-2"
                    onClick={handleIncrement}
                >
                    <svg
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                </button>
            </div>
            <button 
                className='bg-black text-white p-2 rounded-lg' 
                onClick={handleAddToCart}
            >
                افزودن به سبد خرید
            </button>
        </>
    );
}

export default CountButtons;