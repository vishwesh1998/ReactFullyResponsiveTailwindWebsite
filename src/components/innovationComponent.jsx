import React from 'react'
import Card from './card'

export default function InnovationComponent() {

    let productData = [
        {pic: 'brand1.png', title : 'Solar Panels'},
        {pic: 'brand2.png', title : 'Solar Panels'},
        {pic: 'brand3.png', title : 'Solar Inverters'},
        {pic: 'brand4.png', title : 'Solar Inverters'},
        {pic: 'brand5.png', title : 'Solar Inverters'},
        {pic: 'brand6.png', title : 'Solar Inverters'},
        {pic: 'brand7.png', title : 'Solar Roof'},
        {pic: 'brand8.png', title : 'Solar Inverters'},
    ]

  return (<div>
    <div className='text-center mt-10 mb-10'>
        <h2 className='font-semibold text-2xl mb-2'>Dedicated to Innovation</h2>
        <p className='text-gray-700  font-semibold mb-5'>We provide the best technology solar solutions from around the world</p>

        <div className='grid md:grid-cols-4 grid-cols-2 max-w-3xl mx-auto'>
            <Card productData={productData}/>
        </div>
    </div>
    </div>
  )
}
