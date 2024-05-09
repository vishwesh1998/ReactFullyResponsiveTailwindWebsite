import React from 'react'
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";

export default function Footer() {
  return (<div className='h-auto bg-black text-gray-300'>

<section className='upperFooter'>
    <div className='lg:flex justify-around  p-4 pt-16'>
        <div className='space-y-2 lg:pb-0 pb-8'>
            <h2 className='text-xl text-white font-bold mb-6'>Company</h2>
            <p className='hover:text-amber-600 cursor-pointer'>About Ornate</p>
            <p className='hover:text-amber-600 cursor-pointer'>Our Team</p>
            <p className='hover:text-amber-600 cursor-pointer'>Careers</p>
            <p className='hover:text-amber-600 cursor-pointer'>Partner with Us</p>
            <p className='hover:text-amber-600 cursor-pointer'>Contact Us</p>
            <p className='hover:text-amber-600 cursor-pointer'>Our Presence</p>
            <p className='hover:text-amber-600 cursor-pointer'>FAQs</p>
        </div>
        <div className='space-y-2 lg:pb-0 pb-8'>
        <h2 className='text-xl font-bold mb-6 text-white'>Partner Brands</h2>
            <p className='hover:text-amber-600 cursor-pointer'>Canadian Solar</p>
            <p className='hover:text-amber-600 cursor-pointer'>SolarEdge</p>
            <p className='hover:text-amber-600 cursor-pointer'>Fronius</p>
            <p className='hover:text-amber-600 cursor-pointer'>Enphase</p>
            <p className='hover:text-amber-600 cursor-pointer'>Renewsys</p>
            <p className='hover:text-amber-600 cursor-pointer'>Havells</p>
            <p className='hover:text-amber-600 cursor-pointer'>Inverted</p>
        </div>
        <div className='space-y-2 lg:pb-0 pb-8'>
        <h2 className='text-xl font-bold mb-6 text-white'>Resources</h2>
            <p className='hover:text-amber-600 cursor-pointer'>Blog</p>
            <p className='hover:text-amber-600 cursor-pointer'>News</p>
            <p className='hover:text-amber-600 cursor-pointer'>Case Studies</p>
            <p className='hover:text-amber-600 cursor-pointer'>Videos</p>
            <p className='hover:text-amber-600 cursor-pointer'>State Solar Policies</p>
        </div>
        <div className='space-y-2 lg:pb-0 pb-8'>
        <h2 className='text-xl font-bold mb-6 text-white'>Our Products</h2>
            <p className='hover:text-amber-600 cursor-pointer'>InRoof Solution</p>
            <p className='hover:text-amber-600 cursor-pointer'>Umang Solar Inverter</p>
            <p className='hover:text-amber-600 cursor-pointer'>Ornate Assured</p>
            <p className='hover:text-amber-600 cursor-pointer'>Ojas</p>
        </div>
        <div className='space-y-2 lg:pb-0 pb-8'>
        <h2 className='text-xl font-bold mb-6 text-white'>Contact Us</h2>
            <p className='flex items-center gap-1 hover:text-amber-600 cursor-pointer'><MdLocalPhone className=''/> +91-11-4353-6666</p>
            <p className='flex items-center gap-1 hover:text-amber-600 cursor-pointer'><MdOutlineMail/> info@ornatesolar.com</p>
            <p className='flex items-center gap-1 hover:text-amber-600 cursor-pointer'><IoLocationSharp/> A-87, Okhla Phase – II
New Delhi</p>
            </div>

    </div>

            <div className='text-2xl max-w-sm lg:ml-auto pb-8'>
                <p className='flex justify-around'><FaLinkedin/><FaYoutube/><FaInstagram/><FaFacebookF/><FaXTwitter/><FaWhatsapp/></p>
            </div>
</section>

<section className='lowerFooter'>
            <div className='bg-[#2B2B2B] pb-16 text-center p-4 font-bold text-white'>
                <h5 className='hover:text-amber-600 cursor-pointer'>Privacy Policy</h5>
                <h5 className='hover:text-amber-600'>© Copyright 2014 - 2023 | Ornate Agencies Pvt. Limited | All Rights Reserved</h5>
            </div>
</section>

<section className='fixedFooter'>
            <img src='whatsapp.svg' className='w-14 bg-green-500 border-4 p-2 border-green-500 rounded-full fixed md:bottom-6 z-10 right-8 bottom-3 cursor-pointer'/>
            
            <div className='md:flex hidden md:fixed md:w-full md:bottom-0 justify-around bg-white text-black h-10'>
                <div className='mt-2'>
                <p className='flex items-center gap-1 text-xl cursor-pointer'><MdEmail/> info@ornatesolar.com</p>
                </div>
                <div className='mt-2'>
                    <p className='flex text-2xl gap-2 cursor-pointer'><FaLinkedin/><FaYoutube/></p>
                </div>
                <div className='mt-2'>
                <p className='flex text-xl items-center gap-1 cursor-pointer'><FaPhoneVolume className=''/> +91-11-4353-6666</p>
                </div>
            </div>
</section>

    </div>
  )
}
