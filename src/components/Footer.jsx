import React from 'react'
import '../App.css'
import {FaGooglePlay,FaAppStoreIos} from 'react-icons/fa'

function Footer() {
    const thisYear= new Date().getFullYear()
  return (
    <div className='block poppins'>
      <div className='w-full bg-dark-brown p-4 pt-10'>
                   <h1 className='w-full text-white text-3xl text-left  border-b-orange-800 border-b'>Fundo</h1>
                   <div className='bg-dark-brown py-20  text-orange-50 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5'>
                        <div className='cols-span-1 p-4 text-left'>
                            <h2 className='text-orange-100 underline text-3xl'>Products</h2>
                            <ul>
                                <li>sofas & coaches</li>
                                <li>chairs</li>
                                <li>tables</li>
                                <li>beds</li>
                                <li>wall units</li>
                            </ul>
                        </div>
                        <div className='cols-span-1 p-4 text-left'>
                            <h2 className='text-orange-100 underline text-3xl'>Useful links</h2>
                            <ul>
                                <li>sell to us</li>
                                <li>place an order</li>
                                <li>latest</li>
                                <li>in Stock</li>
                                <li>affiliate</li>
                            </ul>
                        </div>
                        <div className='cols-span-1 p-4 text-left'>
                          <h2 className='text-orange-100 underline text-3xl'>Contact us</h2>
                            <ul>
                                <li>contacts</li>
                                <li>location</li>
                                <li>contacts</li>
                                <li>our contacts</li>
                                <li>our contacts</li>
                            </ul>
                        </div>
                        <div className='cols-span-1 p-4 text-left'>
                            <h2 className='text-orange-100 underline text-3xl'>About us</h2>
                            <ul>
                                <li>Our Blogs</li>
                                <li>Carpenters</li>
                                <li>website</li>
                                <li>applications</li>
                            </ul>
                    </div>
                    <div>
                    <span className='p-3 px-5 bg-orange-50 text-black rounded-lg block w-42 m-3'><FaGooglePlay style={{display:'inline',color:'inherit',fontSize:'2rem'}}/> Googleplay</span>
                    <span className='p-3 px-5 bg-orange-50 text-black rounded-lg block w-42 m-3'><FaAppStoreIos style={{display:'inline',color:'inherit',fontSize:'2rem'}}/> Playstore</span>
                    </div>
       </div>
      </div>
     
       <div className='flex flex-col sm:flex-row justify-between bg-white text-slate-700 p-4 py-0 text-sm  '>
           <p className='flex-initial p-4 '>copyright © {thisYear}</p>
           <p className='flex-initial p-4 '>All rights are reserved</p>
           <p className='flex-initial p-4 '>Tailwind css template</p>
       </div>
    </div>
  )
}

export default Footer