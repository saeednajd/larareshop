import React, { useState, useEffect } from 'react';

function ShoppingCart() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    // تابعی برای خواندن محتویات localStorage
    const loadCartItems = () => {
        const items = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('cartItem-')) {
                const item = JSON.parse(localStorage.getItem(key));
                items.push(item);
            }
        }
        setCartItems(items);
    };

    useEffect(() => {
        if (isOpen) {
            loadCartItems();
        }
    }, [isOpen]);

    return (
        <div>
            <button onClick={toggleCart} className="cart-icon">
                {/* آیکن سبد خرید */}
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
                        d="M3 3h18l-1.5 9H6L3 3z"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>سبد خرید</h2>
                        {/* لیست محصولات */}
                        {cartItems.length > 0 ? (
                            <ul>
                                {cartItems.map((item) => (
                                    <li key={item.id}>
                                        {item.title} - تعداد: {item.quantity}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>سبد خرید خالی است.</p>
                        )}
                        <button className="checkout-button">پرداخت</button>
                        <button className="close-button" onClick={closeModal}>بستن</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShoppingCart;