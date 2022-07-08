import React from 'react';
import Image from "next/image"
import {
    HiUserCircle,HiOutlineMenu,HiAnnotation,HiBell
} from "react-icons/hi"

const Header = () => {
    return (
        <header className="sticky top-0 h-16 py-2 px-2 md:px-6  grid grid-cols-2 bg-gray-50 items-center
         text-white shadow-sm z-50">
            <div className="h-4 w-20 md:h-12 md:w-32 relative cursor-pointer">
                <Image src="/logo512.svg" layout='fill' objectFit="cover"
                 />
            </div>

            <div className="flex justify-end items-center md:gap-3">
                <HiAnnotation  className="h-5 w-7 md:h-6 md:w-8 text-gray-900 hover:text-amber-600"/>
                <HiBell className="h-5 w-7 md:h-6 md:w-8 text-gray-900 hover:text-amber-600" />
                <div className="flex items-center p-1 bg-gray-300 rounded-full space-x-0 text-gray-900
                shadow hover:text-amber-600">
                    <HiOutlineMenu className="h-5 w-7 md:h-6 md:w-8   " />
                    <HiUserCircle className="h-5 w-7 md:h-6 md:w-8  " />
                </div>
            </div>

        </header>
    );
}

export default Header;
