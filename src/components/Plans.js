import React from 'react'

function Plans() {
  return (
    <div className='py-[100px] px-4'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-3 '>
            <div className='shadow-xl my-3  h-[300px] hover:scale-105 duration-100'>first</div>
            <div className='shadow-xl my-3 h-[300px] '>second</div>
            <div className='shadow-xl my-3 h-[300px]'>third</div>
        </div>
    </div>
  )
}

export default Plans