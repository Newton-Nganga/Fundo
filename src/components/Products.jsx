import React from 'react'
import '../App.css'
import stool from '../Images/wood-stool.jpg'
import coach from '../Images/couch.jpg'
import bed from '../Images/bed.png'

function Products() {
  return (
    <div className='block w-full poppins xs:p-10'>
    <div className=''>
        <h2 className='p-2 w-full text-center text-orange-700 text-4xl font-semibold '>Our Products</h2>
        <h2 className='p-4 w-full text-center text-gray-700 text-xl  underline'>Categories</h2>
        <ul className='p-4 text-center md:w-2/3 flex flex-row justify-center mx-auto break-words flex-wrap'>
            <li className='flex-initial mx-3'>
                <a href='/kitchen'>Kitchen</a>
            </li>
            <li className='flex-initial mx-3'>
                <a href='/kitchen'>living room</a>
            </li>
            <li className='flex-initial mx-3'>
                <a href='/kitchen'>schools</a>
            </li>
            <li className='flex-initial mx-3'>
                <a href='/kitchen'>pub</a>
            </li>
            <li className='flex-initial mx-3'>
                <a href='/kitchen'>office</a>
            </li>
            <li className='flex-initial mx-3'>
                <a href='/kitchen'>dining</a>
            </li>
            <li className='flex-initial mx-3'>
                <a href='/kitchen'>beds</a>
            </li>
            <li className='flex-initial mx-3'>
                <a href='/kitchen'>others</a>
            </li>
        </ul>
    </div>
    <div className='shadow mx-10 p-4'>
         <h3 className='text-left p-4 w-full text-slate-700 text-2xl'>Kitchen</h3>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-space'>
                   <div className='cols-span-1 flex-initial w-[280px] h-[300px] sm:h-[400px] bg-orange-50  mx-auto my-3 md:mx-2 lg:mx-auto flex flex-col justify-end' style={{backgroundImage:`url(${stool})`,backgroundSize:'cover'}}>
                        <p className='text-orange-400 drop-shadow-xl text-left p-4'>$350.00</p>
                        <p className='text-center h-auto p-4 '><button className='bg-orange-700 inline-block text-base px-6 py-3 text-orange-50 rounded-full '>Buy now</button></p>
                   </div>
                   <div className='cols-span-1 flex-initial w-[280px] bg-orange-50  mx-auto my-3 md:mx-2 lg:mx-auto flex flex-col justify-end' style={{backgroundImage:`url(${coach})`,backgroundSize:'cover'}}>
                        <p className='text-orange-400 drop-shadow-xl text-left p-4'>$350.00</p>
                        <p className='text-center h-auto p-4 '><button className='bg-orange-700 inline-block text-base px-6 py-3 text-orange-50 rounded-full '>Buy now</button></p>
                   </div>
                   <div className='cols-span-1 flex-initial w-[280px] bg-orange-50  mx-auto my-3 md:mx-2 lg:mx-auto flex flex-col justify-end' style={{backgroundImage:`url(${bed})`,backgroundSize:'cover'}}>
                        <p className='text-orange-400 drop-shadow-xl text-left p-4'>$350.00</p>
                        <p className='text-center h-auto p-4 '><button className='bg-orange-700 inline-block text-base px-6 py-3 text-orange-50 rounded-full '>Buy now</button></p>
                   </div>
         </div>
    </div>
    </div>
  )
}

export default Products
