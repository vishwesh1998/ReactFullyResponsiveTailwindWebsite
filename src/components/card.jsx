import React from 'react'

export default function Card({data, productData, numberData, offerData, solarBasicsData}) {
  return (
    <>{data ? <>{data.map(e=><div className=' bg-white w-200 cursor-pointer hover:shadow-gray-800 shadow-lg transition-shadow duration-500 border-2 rounded-lg border-amber-500 m-5 p-4'>
    <img src={e.pic} width={150} className='mx-auto'/>
    <p className='text-center text-xl text-amber-600'>{e.title}</p>
    <p className='px-2 text-center'>{e.desc}</p>
  </div>)}</>:<>{productData ? <>{productData.map(e=><div className='p-2 cursor-pointer  m-6 mx-auto border-2 md:w-auto w-32 rounded-xl  border-amber-500 items-center shadow-md shadow-gray-500'>
                <img src={e.pic} width={160}/>
                <p className='text-amber-700 mb-2'>{e.title}</p>
                <div className='bg-amber-600 w-full h-fit'>
                <button className='text-white font-semibold md:text-md text-sm md:p-2 p-1'>View Range</button>
                </div>
            </div>)}</>:<>{numberData ? <>{numberData.map(e=><div className='border p-5 text-center border-amber-600 m-3'>
                <h2 className='text-4xl text-amber-600 mb-1 font-semibold'>{e.value}</h2>
                <p className='text-gray-500 font-semibold'>{e.title}</p>
            </div>)}</>:<>{offerData ? <>{offerData.map(e=><div className='bg-white cursor-pointer hover:shadow-gray-800 shadow-lg transition-shadow duration-500 m-4 p-4 text-center rounded-lg'>
              <img src={e.pic} width={80} className='mx-auto'/>
              <h2 className='text-lg font-bold text-amber-600 mt-1'>{e.title}</h2>
              <p className='text-md text-gray-800 font-semibold'>{e.desc}</p>
            </div>)}</>:<>{solarBasicsData ? <>{solarBasicsData.map(e=><div className='m-4 p-10 border bg-gray-200 border-amber-600 cursor-pointer'>
            <img src={e.pic} className='mx-auto w-full'/>
            <h2 className='mt-5 text-xl text-amber-600 font-bold mb-2'>{e.title}</h2>
            <p className='text-left text-sm mb-4'>{e.date}</p>
            <hr className='h-0.5 bg-black mb-4'/>
            <p className='text-sm'>{e.desc}</p>
        </div>)}</>:<></>}</>}</>}</>}</>}</>
  )
}
