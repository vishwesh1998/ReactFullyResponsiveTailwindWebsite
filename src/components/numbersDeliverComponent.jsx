import React from 'react'
import Card from './card'

export default function NumbersDeliveredComponent() {

    let numberData = [
        {value : '1728 Crore', title : 'Revenue'},
        {value : '820 MW', title : 'Delivered'},
        {value : '5138', title : 'Satisfied Costumer'}
    ]

  return (
    <div className='p-5 max-w-6xl mx-auto'>
    <h1 className='text-center mb-3 mt-3 text-2xl font-semibold'>Our Numbers Do The Talking</h1>
    <p className='text-center text-gray-700'>Due to our commitment to customer satisfaction and on-time delivery of top-notch solar equipment, we have emerged as the leading solar company in India.</p>
    <br/>
    <div className='grid lg:grid-cols-3 grid-cols-1'>
        <Card numberData={numberData}/>
    </div>
</div>
  )
}
