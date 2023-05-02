import React from 'react'
import img2 from '../img/img1.jpg'
function Services() {
  return (
    <div className='max-w-[1240px] mx-auto bg-white my-10 p-2 md:grid grid-cols-2' >
        <div className=' md:w-[80%] col-span-1 text-center'><img className='inline' src={img2}></img></div>
        <div className='  col-span-1 flex flex-col justify-center'>
            <h1 className='text-orange-500 font-bold text-4xl'>Services</h1>
            <p className='my-3 text-justify'>
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed.
            </p>
            <button className='bg-black text-white p-3 rounded w-[30%]' >Get Started</button>
        </div>
    </div>
  )
}

export default Services