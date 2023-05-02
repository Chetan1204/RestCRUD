import React, { useState } from 'react'
import {AiOutlineMenu , AiFillCloseCircle} from "react-icons/ai"
function Header() {
    const [toggle ,setToggle]=useState(false)
  return (
    <div className='bg-indigo-500 p-4' >
        <div className='max-w-[1240px]  mx-auto flex justify-between items-center py-[15px]'>
           <div className='font-bold text-3xl text-white'>Inurum Tech.</div>
           {
            toggle?<AiFillCloseCircle onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block'/>: <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
           }
           
           <ul className='hidden md:flex  text-white gap-10'>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul> 
            {/*responsive*/}
            <ul className={` duration-300 md:hidden block  text-white gap-10 fixed bg-black  top-[97px] w-full h-screen ${toggle?'left-[0]':'left-[100%]'} `}>
                <li className='p-5'>Home</li>
                <li className='p-5'>Services</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Blog</li>
                <li className='p-5'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header