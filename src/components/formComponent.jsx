import React from 'react'

export default function FormComponent() {
  return (
    <div className='md:flex bg-[#FD6348] h-auto'>
        <div className='max-w-xl m-16 text-white md:py-20 pt-5'>
            <h2 className='md:text-2xl text-xl font-semibold mb-4 md:pt-0 pt-5'>Request A Quote</h2>
            <p className='md:text-lg font-semibold'>Our engineers will not only provide you with a <br/> perfect quote but also help you with their <br/> technical expertise 😃 so partner with Ornate to <br/> build better & more efficient Solar projects.</p>
        </div>
        <div className='max-w-5xl mx-auto my-auto md:p-16 pb-12 lg:px-0 px-8 text-gray-700 font-semibold'>
        <form>
            <label className='text-md'>Your Name* : </label><input className='mb-6 w-full mt-1 rounded-lg h-10'/>
            <br/>    
            <label className='text-md'>Phone Number* : </label><input className='mb-6 w-full mt-1 rounded-lg h-10'/>
            <br/>
            <label className='text-md'>Email Address* : </label><input className='mb-6 w-full mt-1 rounded-lg h-10'/>
            <br/>
            <label className='text-md'>Organization : </label><input className='mb-6 w-full mt-1 rounded-lg h-10'/>
            <br/>
            <label className='text-md'>Requirement : </label><input className='mb-8 w-full mt-1 rounded-lg h-10'/>
            <br/>
            <button className='bg-green-700 cursor-pointer text-white p-4'>GET A QUOTE</button>
        </form>
        </div>
    </div>
  )
}
