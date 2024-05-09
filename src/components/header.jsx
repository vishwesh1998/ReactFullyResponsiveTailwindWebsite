import React from 'react'
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";

export default function Header() {
  return (
    <div className='bg-[#FD6348] h-20 text-white flex justify-between px-4 sticky top-0 z-50'>
        <div className='pt-4 cursor-pointer'>
            <img src='./logo.png' alt='logo' width={130}/>
        </div>
            <div className='hidden lg:flex text-lg pt-6 font-semibold space-x-20 cursor-pointer'>
            <p>InRoof Solution</p>
            <p>Our Products</p>
            <p>Partner Brands</p>
            <p className='flex'>About Us <FaSearch className='ml-14 mt-1.5'/></p>
            </div>
            <p className='sm:hidden block pt-6 text-2xl'><FaPhone/></p>
            <p className='lg:hidden text-2xl block pt-6'><TiThMenu/></p>
    </div>
  )
}
