import React from 'react'
import Card from './card'

let offerData = [
    {pic : 'offer1.jpeg', title : 'Ornate Solar Plus Partner', desc : 'Partner with Us and benefit from India"s Vast Solar potential'},
    {pic : 'offer2.jpeg', title : 'Ornate Solar Assured', desc : 'Customizable solar accessories for your projects'},
    {pic : 'offer3.jpeg', title : 'Ornate Solar InRoof', desc : 'Turn Panel into the Primary Roof with India"s First Integrated InRoof'},
    {pic : 'offer4.jpeg', title : 'Ornate Solar Finance', desc : 'Now Offering Solar Financing through HDFC Bank'},
    {pic : 'offer5.jpeg', title : 'Ornate Express', desc : 'Fastest Delivery Gurantee With Over 24 Local WareHouses'},
    {pic : 'offer6.jpeg', title : 'Ornate Gurantee', desc : 'Solar industrial most reputated support and service network'},
]

export default function FingerTipsComponent() {
  return (
    <div className='bg-cover bg-center mt-5 opacity-75 lg:p-20 p-5 h-auto' style={{backgroundImage:'url(train.jpg)'}}>
        <h1 className='text-amber-500 lg:text-5xl text-3xl font-bold mb-4'>Happiness at your fingertips</h1>
        <p className='text-lg font-bold text-black'>Brilliant things happens when you choose happiness for yourself and others</p>

        <div className='grid lg:grid-cols-4 grid-cols-1 mt-6 lg:max-w-4xl max-w-xl'>
            <Card offerData={offerData}/>
        </div>
        <button className='bg-white text-amber-600 p-4 text-xl font-semibold mt-14 ml-7'>CONTACT US</button>
    </div>
  )
}
