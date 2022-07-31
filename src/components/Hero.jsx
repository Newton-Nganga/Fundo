import React from 'react'
import Cta from './Cta'
import Navbar from './Navbar'

function Hero() {
  return (
    <div className='px-10 py-6 bg-orange-700 sm:px-20'>
       <Navbar/>
       <Cta/>
    </div>
  )
}

export default Hero