import React from 'react'
import Sellersidebar from './Sellersidebar'
import { PiEmptyFill, PiUsersThreeFill } from 'react-icons/pi'
import { FaUsersGear } from 'react-icons/fa6'
import { AiFillPropertySafety, AiTwotonePropertySafety } from 'react-icons/ai'
import { ImBlocked } from 'react-icons/im'
import { MdAddToPhotos } from 'react-icons/md'
import { BsFillSkipEndCircleFill } from 'react-icons/bs'
import { TbMessageReportFilled } from 'react-icons/tb'

function Sellerdashboard() {
  return (
    <>
     <div className='grid grid-cols-[1fr_4fr]'>
      <div>
        <Sellersidebar/>
      </div>
      <div className='bg-stone-800' style={{marginLeft:"-26px"}}>
        <h1 className='text-3xl mt-5 ps-20 font-bold text-white'>DASHBOARD</h1>
        <div className='flex gap-15 mt-30 ps-17'>
          <div className='rounded-xl w-60 h-40  bg-zinc-900'>
            <AiFillPropertySafety className='text-6xl mt-1 ms-20 text-emerald-300'/>
            <h1 className='mt-3 ms-12 text-white'>TOTAL PROPERTIES</h1>
            <h1 className='mt-3 ms-23 text-4xl text-orange-300'>80</h1>
  
          </div>
          <div className='rounded-xl w-60 h-40  bg-zinc-900'>
            <MdAddToPhotos className='text-6xl mt-1 ms-20 text-emerald-300'/>
            <h1 className='mt-3 ms-12 text-white'>ADDED PROPERTIES</h1>
            <h1 className='mt-3 ms-23 text-4xl text-orange-300'>85</h1>
  
          </div>
          <div className='rounded-xl w-60 h-40  bg-zinc-900'>
           <BsFillSkipEndCircleFill className='text-6xl mt-1 ms-20 text-emerald-300'/>
            <h1 className='mt-3 ms-9 text-white'>PENDING PROPERTIES</h1>
            <h1 className='mt-3 ms-23 text-4xl text-orange-300'>82</h1>
  
          </div>
          <div className='rounded-xl w-60 h-40  bg-zinc-900'>
           <PiEmptyFill className='text-6xl mt-2 ms-23 text-emerald-300'/>
            <h1 className='mt-3 ms-25 text-white'>SOLD</h1>
            <h1 className='mt-3 ms-27 text-4xl text-orange-300'>12</h1>
  
          </div>
          
          
        </div>
         <div className='rounded-xl w-60 h-40 mt-15 ms-110 bg-zinc-900'>
           <TbMessageReportFilled className='text-6xl mt-2 ms-23 text-emerald-300'/>
            <h1 className='mt-3 ms-20 text-white'>ENQUIRIES</h1>
            <h1 className='mt-3 ms-27 text-4xl text-orange-300'>12</h1>
  
          </div>
        
        
      </div>
      

     </div>

    
    </>
  )
}

export default Sellerdashboard