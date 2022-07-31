import React from 'react'
import '../App.css'


function Newsletter() {
  return (
    <div className='block w-full px-10 py-4 poppins mb-20'>
    <h2 className='w-full text-center text-slate-700 text-2xl py-10'>Subscribe to our newsletter</h2>
      <div className=' text-lg max-w-[600px] mx-auto rounded-full sm:shadow'>
          <input type='email' placeholder='your-email@example.com' className='focus:border-orange-500 focus:outline-none hover:border-r-0 mx-auto sm:rounded-full sm:rounded-r-none border border-orange-700 sm:border-r-0 p-2 py-4 w-full sm:w-3/4 block sm:inline-block'/>
          <button className='w-full sm:w-1/4 block sm:inline-block px-8 sm:px-2 py-4 bg-orange-700 rounded-full shadow sm:rounded-l-none mx-auto my-3 sm:my-0 text-orange-50 text-lg'>subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter