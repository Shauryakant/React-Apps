import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/webp;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}