import React from 'react';
import Container from '../ui/Container';
import { CiDeliveryTruck } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';

const TopHeader = () => {
    return (
        <div className='bg-black hidden md:block'>
            <Container className='flex flex-col sm:flex-row justify-between items-center py-2 sm:py-1'>
                <h1 className='flex text-white gap-2 items-center text-center sm:text-left text-[12px] sm:text-[14px]'>
                    <CiDeliveryTruck className='text-[#ffb342] cursor-pointer' size={20} />
                    FREE Express Shipping On Orders $570+
                </h1>
                <ul className='flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-4 text-white mt-2 sm:mt-0'>
                    <li className='menu-icon-style flex items-center gap-1 text-[12px] sm:text-[14px]'>
                        English
                        <IoIosArrowDown />
                    </li>
                    <li className='menu-icon-style flex items-center gap-1 text-[12px] sm:text-[14px]'>
                        USD
                        <IoIosArrowDown />
                    </li>
                    <li className='menu-icon-style flex items-center gap-1 text-[12px] sm:text-[14px]'>
                        Settings
                        <IoIosArrowDown />
                    </li>
                </ul>
            </Container>
        </div>
    );
};

export default TopHeader;
