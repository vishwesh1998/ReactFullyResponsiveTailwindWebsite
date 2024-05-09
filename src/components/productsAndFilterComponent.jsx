import React from 'react'
import { FaSearch } from "react-icons/fa";
import Card from './card';

export default function ProductsAndFilterComponent() {

  let data = [
    {pic : 'container1A.webp', title : 'Solar Panels' , desc : 'High performance panels from world"s best brand"s'},
    {pic : 'container1B.jpg', title : 'Solar Inverters' , desc : 'Cutting edge inverters to accelerate power generation'},
    {pic : 'container1C.webp', title : 'Solar InRoof' , desc : 'India"s first roof integrated solar system'}
]

  return (
    <div className='bg-[#E8E8E8] mb-4'>

      <section className='product section'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 pt-8'>
        <Card data={data}/>
      </div>
      <div className='mt-5 mx-5'>
        <img src='25-y.png' className='mx-auto'/>
        <h2 className='text-2xl font-semibold text-amber-600 text-center mt-5 pb-8'>Celebrating 25 Years of Trust and Gratitude</h2>
      </div>
      </section>

      <section className='filter section'>
      <div class="fill-[#FD6348] w-full h-full mt-2 transform origin-center rotate-180">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill fill-[#FD6348]"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
<div className='bg-[#FD6348] text-center text-white lg:h-64 h-80 pt-14 px-auto'>
<h1 className='md:text-4xl sm:text-2xl font-bold lg:mb-3 mb-7'>Add Happiness to Every Dream</h1>
<p className='md:text-lg sm:text-sm font-bold lg:mb-3 mb-8'>We have everything you require to make your solar project more efficient, reliable and profitable. So go <br/>ahead search for anything solar.</p>
<div className='rounded-lg border border-black flex justify-center lg:w-1/2 w-2/3 mx-auto lg:mb-2'>
<button className='bg-white cursor-pointer text-black lg:text-xl text-lg p-1.5 rounded-l-lg'><FaSearch/></button>
<input className='w-full lg:h-10 h-8 pl-5 text-gray-900 font-semibold rounded-r-lg' placeholder='Brand, Model Number or Rating ...'/>
</div>
</div>
</section>

    </div>
  )
}
