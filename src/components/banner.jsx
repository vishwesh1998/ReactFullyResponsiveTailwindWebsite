import React from 'react'

export default function Banner() {
  return (
    <div className='text-white max-w-full flex bg-[#f56b52] justify-between'>
        <div className='my-auto lg:block hidden p-2'>
        <p className='text-2xl font-semibold pb-1'>Our mission is to inspire sustainable communities</p>
        <p className='text-2xl font-semibold pb-2'>by transforming the way solar is purcharsed</p>
        <hr/>
        <h1 className='text-5xl font-bold pt-2'>INDIA'S HAPPIEST SOLAR COMPANY</h1>
        <button className='cursor-pointer text-3xl font-semibold border-2 border-white p-6 mt-14'>REQUEST QUOTE</button>
        </div>
        <img src='banner1.webp' width={500} className='p-5 mx-auto'/>
    </div>
  )
}
