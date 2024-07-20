import { Link } from '@inertiajs/react'
import React from 'react'

function PaginationShop({ Links }) {
    return (
        <>
            <nav className='text-center mt-4'>
                {Links.map(link => (
                    <Link
                        className={

                            "inline-block py-2 px-3 rounded-lg text-gray-500 text-xs transition-all duration-500" +
                            (link.active ? "bg-gray-950 " : " ") +
                            (!link.url ? "!text-gray-500 cursor-not-allowed " : "hover:bg-gray-950 hover:text-white ")

                        }
                        href={link.url || ""}
                    >
                        {getLabelText(link.label)}
                    </Link>
                ))}
            </nav>
        </>
    )
}

const getLabelText = (label) => {
    if (label === '&laquo; Previous') {
        return "قبلی";
    } else if (label === "Next &raquo;") {
        return "بعدی";
    } else {
        return label;
    }
};
export default PaginationShop
