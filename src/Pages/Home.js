import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Items from '../components/Items'
import Newsletter from '../components/Newsletter'
import Offer from '../components/Offer'
import Products from '../components/Products'

function Home() {
  return (
    <div>
     <Hero/>
     <Items/>
     <Offer/>
     <Products/>
     <Newsletter/>
     <Footer/>
    </div>
  )
}

export default Home