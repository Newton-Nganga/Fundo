import React from 'react'
import '../App.css'
import {AiOutlineRight} from 'react-icons/ai'
import stool from '../Images/stool.jpg'
import chair from '../Images/chair.png'
import barStool from '../Images/bar-stool.jpeg'

function Items() {
  return (
    <div
    className='px-10 py-10 bg-white sm:px-20 mt-28 poppins'>
        <div className='flex flex-wrap gap-2'>
            <div className='flex-initial w-56'>
                <h2 className='text-4xl font-extrabold text-black poppins'>Why Fundo is the best in Kenya</h2>
                <p className='py-8 text-base poppins'>We have over 20000 customers across the country with an average rating of 4.8/5.0. We are inarguably the best and most trusted plug for your furnitures</p>
                <p className='w-full h-auto text-center'><span className='p-4 mx-auto text-white bg-orange-700 rounded-full w-fit text-xl'><AiOutlineRight style={{display:'inline',color:'inherit'}}/></span></p>
            </div>
            <div className='flex-initial flex flex-col justify-between my-8 h-96 w-60' style={{backgroundImage:`url(${chair})` ,backgroundSize:'cover'}}>
            <p className='text-orange-600 px-4 m-3'>$450</p>
               <div className='px-4 bg-transparent  m-4 '>
                       <p className='p-5 bg-[#d9a6816f] text-center'>Outdoor wooden chair</p>
               </div>
            </div>
            <div className='flex-initial flex flex-col justify-between my-8 h-96 w-60' style={{backgroundImage:`url(${stool})` ,backgroundSize:'cover'}}>
            <p className='text-orange-600 px-4 m-3'>$450</p>
               <div className='px-4 bg-transparent  m-4 '>
                       <p className='p-5 bg-[#d9a6816f] text-center'>Pub stool</p>
               </div>
            </div>
            <div className='flex-initial flex flex-col justify-between my-8 h-96 w-60' style={{backgroundImage:`url(${barStool})` ,backgroundSize:'cover'}}>
            <p className='text-orange-600 px-4 m-3'>$450</p>
               <div className='px-4 bg-transparent  m-4 '>
                       <p className='p-5 bg-[#d9a6816f] text-center'>Cafe fancy stool</p>
               </div>
            </div>
        </div>
        <div className='flex flex-row justify-center w-full my-4'>
            <a href='/furnitures' className='p-4 text-lg text-zinc-700 poppins'>see more</a>
        </div>
    </div>
  )
}

export default Items