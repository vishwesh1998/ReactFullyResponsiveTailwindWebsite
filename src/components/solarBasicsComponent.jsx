import React from 'react'
import Card from './card'

let solarBasicsData = [
    {pic : 'solarBasics1.webp', title : 'Nagpur District Leads Maharashtra’s Solar Revolution', date : 'May 7th, 2024', desc : 'Highlights: Nagpur district alone generates 251MW of electricity, contributing significantly to the state"s solar energy capacity. Over the span of'},
    {pic : 'solarBasics2.webp', title : 'IOC’s Initiative: Allocating Rs 5,215 Crore to Build 1 GW Renewable Energy Capacity', date : 'May 1st, 2024', desc : 'Highlights: Indian Oil Corporation Ltd is gearing up to boost its commitment to RE by injecting more than Rs.'},
    {pic : 'solarBasics3.webp', title : 'Ten Key Factors to Consider Before Installing Solar Panels on Your Roof', date : 'April 25th, 2024', desc : 'With the advancement and increasing cost-effectiveness of solar technology, people around the globe are inclined towards adopting it as'},
]

export default function SolarBasicsComponent() {
  return (
    <div className='mt-12 border-b border-amber-600'>
        <h1 className='text-3xl font-medium text-center mb-2'>Solar Basics</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 max-w-6xl mx-auto'>
        <Card solarBasicsData={solarBasicsData}/>
        </div>
        <div className=' flex justify-center'>
        <button className='bg-green-600 cursor-pointer text-sm text-white p-2 mb-10 mt-4'>VIEW ALL</button>
        </div>
    </div>
  )
}
