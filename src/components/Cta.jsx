import React from 'react'
import '../App.css'
import sofa from '../Images/sofa.png'
import frame from '../Images/frames-pic.png'
function Cta() {
  return (
    <div className='grid grid-cols-1 mt-20 py-14 sm:grid-cols-2 md:grid-cols-5 sm:gap-4 md:gap-6'>
      <div className='col-span-3 sm:col-span-1 md:col-span-2'>
        <h1 className='text-5xl font-bold text-white poppins'>Furniture that everyone loves</h1>
        <p className='py-4 my-4 text-base text-orange-200 poppins'>
            We have over 20000 customers and with their reviews,it's evident that we sell quality products.
        </p>
        <p className='w-full py-3 mr-5 text-sm text-orange-100 poppins'>
           <a href='/furnitures' className='inline-block px-10 py-3 mt-2 mr-2 text-white rounded-full bg-brown sm:mr-5 bg-back '>Buy Now</a>
           <a href='/furnitures' className='inline-block px-10 py-3 mt-2 text-white bg-transparent border border-orange-100 rounded-full'>Explore</a>
        </p>
      </div>
      <div className=' md:col-span-3 sm:col-span-1'>
        <img src={frame} alt='wooden frames' className='relative w-[200px] mx-auto'/>
        <img src={sofa} alt='sofa' className='relative w-full max-w-[650px] sm:absolute  sm:w-[60%] sm:top-[26rem] sm:right-0 lg:top-[20rem] lg:right-[8rem]' />
      </div>
    </div>
  )
}

export default Cta