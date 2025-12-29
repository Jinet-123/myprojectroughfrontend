import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";



function Navbar() {
  return (
    <>

      <div className='bg-black h-18'>
        <div className='flex pt-5'>
          <FaFacebook className='mt-2 ms-35 text-md text-orange-500' />
          <AiFillTwitterCircle className='mt-2 ms-5 text-md text-orange-500' />
          <FaPinterest className='mt-2 ms-5 text-md text-orange-500' />
          <h1 className='ms-120 text-3xl font-bold text-white'>PROPX</h1>


        </div>
        <hr className='text-zinc-600 mt-3'/>

        <div className='flex bg-black h-12'>
         <div> <IoReorderThree className='text-2xl text-white ms-40 mt-2'/></div>
          <div className='flex text-white gap-10 ms-90 mt-3'>
            <h1 className='hover:text-orange-500 cursor-pointer'>Home</h1>
            <h1 className='hover:text-orange-500 cursor-pointer'>Services</h1>
            <h1 className='hover:text-orange-500 cursor-pointer'>Testimonials</h1>
            <h1 className='hover:text-orange-500 cursor-pointer'>Contact Us</h1>
          </div>
          <div className='flex gap-5 ms-90 pt-2'>
            <button className='bg-stone-700 w-17 h-8 text-white rounded border-2 hover:text-stone-900 hover:border-orange-500 hover:bg-stone-400'>Profile</button>
            <button className='bg-stone-700 w-17 h-8 text-white rounded border-2 hover:text-stone-900 hover:border-orange-500 hover:bg-stone-400'>Logout</button>
          </div>

        </div>
        
      </div>


    </>
  )
}

export default Navbar