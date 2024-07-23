import React, { useState } from 'react';

function CountButtons(props) {
    const [showModal, setShowModal] = useState(false);

    const [value, setValue] = useState(0);
    const prodcutDetail = props.producwithttype[0];
    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    const handleAddToCart = () => {
        if (!value == 0) {
            const item = {
                id: prodcutDetail.id,
                title: prodcutDetail.prTitle,
                image: prodcutDetail.prImage,
                price: prodcutDetail.prOneToFivePrice,
                quantity: value
            };
            localStorage.setItem(`cartItem-${prodcutDetail.id}`, JSON.stringify(item));

        }

        setShowModal(true);
        // محو کردن modal بعد از ۲ ثانیه
        setTimeout(() => {
            setShowModal(false);
        }, 2000);
        // Save item to localStorage
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
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
                        <svg
                            className="w-6 h-6 text-green-500 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>محصول با موفقیت اضافه شد</span>
                    </div>
                </div>
            )}
        </>
    );
}

export default CountButtons;