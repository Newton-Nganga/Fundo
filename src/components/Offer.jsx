import React from 'react'
import '../App.css'
import offer from '../Images/chairs-n-tables.png'


function Offer() {
  return (
    <div className='block my-10 poppins w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 shadow-5xl md:mx-10 w-full'>
         <div className='col-span-1 bg-orange-700 p-10 sm:p-16 md:pl-20 md:py-20 m-4 md:m-0'><p className='text-6xl font-bold text-white '>Get up to 50%  off</p>
         <button className='bg-orange-50 py-3 px-8 my-4 rounded-full text-orange-700'>Buy Now</button></div>
         <div className='hidden md:flex md:flex-row md:col-span-1 '>
            <img src={offer} alt='...' className='w-full'/>
         </div>
      </div>
    </div>
  )
}

export default Offer