import React from 'react'
import Typed from 'react-typed';
function Banner() {
  return (
    <div className='bg-indigo-500 w-full py-[100px]'>
        <div className='max-w-[1240px] mx-auto text-center font-bold my-[100px]'>
            <div className='text-xl md:text-3xl pt-[30px]'>  
                Execute your Ideas with
            </div>
            <h2  className='text-white text-3xl md:text-[50px] md:pt-5'>Inurum Technology</h2>
            <div className='text-[20px] md:text-[50px]'>Inurum Technology delivered the quality of service in <Typed
                    strings={['Mobile Development', 'IoT', 'Web and Hardware Industry']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={120}
                /></div>
                            <button className='bg-black text-white p-3 rounded' >Get Started</button>

        </div>
    </div>
  )
}

export default Banner