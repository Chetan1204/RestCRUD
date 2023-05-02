import React from 'react'

function NewsLetter() {
  return (
    <div className='bg-indigo-500 p-4'>
        <div className='max-w-[1240px] mx-auto md:flex justify-between py-4'>
            <div className=' m-2'>
                <h1 className='font-bold text-[25px] md:text-[40px] text-white'> Join our community.</h1>
                <span className='text-white text-[12px] md:text-[20px] font-bold'>by using our services and grow your business.</span>
            </div>
            <div className='m-2'>
                <input className=' p-2 md:p-3 rounded mr-2 text-slate-100' placeholder='email'></input>
                <button className='bg-black text-white p-3 rounded' >Get Started</button>
                <br/>
                <p className='text-white'>
                We offer great prices and quality service for your business.
                </p>
                </div>
               
         </div>
    </div>
  )
}

export default NewsLetter