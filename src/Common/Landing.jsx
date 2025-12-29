import React from 'react'
import Navbar from './Navbar'
import { BsArrowRightCircle } from "react-icons/bs";
import { FaPhoneSquareAlt, FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { RiMessage2Fill } from 'react-icons/ri';
import { FaLocationDot } from 'react-icons/fa6';
import { PiFacebookLogoBold } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialTwitterCircular } from "react-icons/ti";


function Landing() {
  return (
    <>
      <Navbar />

      <div className='relative'>
        <img className='mt-11 w-full h-120 object-cover object-center' src="https://i.pinimg.com/1200x/8f/fe/cc/8ffecc0aec79bd897be4a2467b94e422.jpg" alt="" />
        <h1 style={{ marginTop: "-20%" }} className='text-white ms-140 text-7xl font-bold'>WELCOME</h1>
        <h1 style={{ marginTop: "-2px" }} className='text-white ms-148'>PropX : Your space. Your future. Your way.</h1>
        <button className='bg-orange-500 hover:bg-white hover:text-orange-500 border-2 hover:border-orange-600 mt-12 ms-170 text-white rounded-md h-12 w-27'>Get Started</button>

      </div>
      <div className='bg-zinc-800 mt-28 h-70 text-slate-200'>
        <h1 className='ms-170 pt-15 text-xl font-bold'>OUR SERVICES</h1>
        <h1 className='mt-5 ms-130 font-bold'>We offer seamless property buying, selling, and renting services,</h1>
        <h1 className='mt-1 ms-120 font-bold'> carefully tailored to match your lifestyle, preferences, and long-term goals.</h1>
        <button className='bg-zinc-900 text-white border-2 border-orange-500 hover:border-white h-12 w-27 ms-170 mt-8'>Explore</button>

      </div>

      <div className='bg-zinc-900 pt-30 h-110'>
        <div className='flex ms-4'>

          <img src="https://i.pinimg.com/1200x/72/99/1d/72991d0fec871743deac1166ad4076ad.jpg" style={{ width: "300px", height: "250px" }} alt="" />
          <div>
            <h1 className='text-black-500 text-2xl font-bold' style={{ marginLeft: "-150px" }}>Industrial</h1>
            <BsArrowRightCircle style={{ marginLeft: "-180px" }} className='text-5xl hover:text-orange-500 mt-20' />
          </div>
          <img src="https://i.pinimg.com/736x/f2/f9/bb/f2f9bb9cebbd995fbb31c77a25a4fedc.jpg" style={{ width: "300px", height: "250px" }} alt="" />
          <div>
            <h1 className='text-black-500 text-2xl font-bold' style={{ marginLeft: "-100px" }}>Special</h1>
            <BsArrowRightCircle style={{ marginLeft: "-160px" }} className='text-5xl hover:text-orange-500 mt-20' />
          </div>
          <img src="https://i.pinimg.com/736x/81/2c/38/812c38f4ecbd2619f7648b6eb381b892.jpg" style={{ width: "300px", height: "250px" }} alt="" />
          <div>
            <h1 className='text-black-500 text-2xl font-bold' style={{ marginLeft: "-150px" }}>Commercial</h1>
            <BsArrowRightCircle style={{ marginLeft: "-160px" }} className='text-5xl hover:text-orange-500 mt-20' />
          </div>
          <img src="https://i.pinimg.com/1200x/22/23/ad/2223ad0d09f56f8a2ebc4b6e8c79a952.jpg" style={{ width: "300px", height: "250px" }} alt="" />
          <div>
            <h1 className='text-black-500 text-2xl font-bold' style={{ marginLeft: "-140px" }}>Residential</h1>
            <BsArrowRightCircle style={{ marginLeft: "-160px" }} className='text-5xl hover:text-orange-500 mt-20' />
          </div>
          <img src="https://i.pinimg.com/736x/fc/4a/d8/fc4ad84c786edce3174033af4d722e4a.jpg" style={{ width: "300px", height: "250px" }} alt="" />
          <div>
            <h1 className='text-black-500 text-2xl font-bold' style={{ marginLeft: "-100px" }}>Land</h1>
            <BsArrowRightCircle style={{ marginLeft: "-160px" }} className='text-5xl hover:text-orange-500 mt-20' />
          </div>


        </div>
      </div>
      <div className='bg-zinc-800 h-45'>
        <h1 className='text-2xl font-bold ms-155 pt-15 text-white'>OUR COLLECTIONS</h1>
        <h1 className='text-md font-bold ms-130 mt-3 text-white'>We Provide Multiple Collection Of Properties That You Need</h1>
      </div>

      <div className='pt-30 bg-zinc-900 h-140'>
        <div className='shadow bg-stone-800 ms-20 me-20'>
          <div class="grid grid-flow-col gap-4 ms-30">
            <div className='mt-30 text-white'>
              <h1 className='mt-2 text-3xl'>TAKE A LOOK AT OUR</h1>
              <h1 className='mt-2 text-3xl font-bold'>NEW COLLECTIONS</h1>
              <h1 className='mt-3 font-bold'>You Have An Interesting Collections To View</h1>
              <button className='mt-7 bg-zinc-900 text-white border-2 border-orange-500 hover:border-white h-12 w-27'>Explore</button>
            </div>

            <div>
              <img src="https://i.pinimg.com/1200x/95/5b/43/955b437d7a0a91f60b944abf6a99a544.jpg" style={{ width: "800px", height: "350px" }} alt="" />

            </div>
          </div>
        </div>

      </div>

      <div className='bg-zinc-800 h-95'>
        <div className="bg-[url('https://i.pinimg.com/1200x/06/fc/f8/06fcf8bb871356b7f013ee84d90b77cf.jpg')]">
          <h1 className='ms-170 text-2xl pt-20 font-bold text-white'>TESTIMONIALS</h1>
          <FaQuoteLeft className='text-orange-500 text-2xl ms-90 mt-8' />

          <h1 className='text-xl font-bold ms-140 text-white'>I found exactly what I was looking for with Propx.</h1>
          <h1 className='text-xl font-bold ms-110 text-white'> Their listings were accurate, and the support team was patient and helpful </h1>
          <h1 className='text-xl font-bold ms-150 text-white'>throughout the entire process.</h1>
          <FaQuoteRight className='text-orange-500 text-2xl mt-7 ms-290' />

          <h1 className='font-bold ms-178 text-white'> - PAUL CORE</h1>
        </div>
      </div>

      <div className='flex justify-evenly bg-zinc-900 pt-17 h-55'>

        <div>
          <FaPhoneSquareAlt className='text-orange-500 ms-20 text-4xl' />
          <h1 className='text-md ms-10 text-white mt-5'>+91 9605361315</h1>
        </div>
        <div>
          <RiMessage2Fill className='text-orange-500 text-4xl ms-20'/>
          <h1 className='text-md ms-10 text-white mt-5'>jinetkl1@gmail.com</h1>
        </div>
        <div>
          <FaLocationDot className='text-orange-500 text-4xl ms-20'/>
          <h1 className='text-md text-white mt-5'>One Neil Road Kannur,670673</h1>
        </div>

      </div>
      
<div className='bg-zinc-800 h-40 ps-50 flex'>
  <hr className='text-white mt-1'/>
     <div className='text-white mt-8'>
        <h1 className='hover:text-orange-500 cursor-pointer'>Home</h1>
        <h1 className='mt-1 hover:text-orange-500 cursor-pointer'>Services</h1>
        <h1 className='mt-1 hover:text-orange-500 cursor-pointer'>Testimonials</h1>
        <h1 className='mt-1 hover:text-orange-500 cursor-pointer'>Contact Us</h1>
     </div>

    <div className='flex gap-15'>
      <PiFacebookLogoBold className='text-4xl text-orange-300 mt-16 ms-100'/>
      <IoLogoInstagram className='text-4xl text-orange-300 mt-16'/>
      <TiSocialTwitterCircular className='text-5xl text-orange-300 mt-14'/>
      <input type="text" className='w-50 h-8 bg-gray-400 rounded-md mt-16 ms-40 ' placeholder='Search Here..' name="" id="" />
      <button style={{marginLeft:"-50px"}} className='bg-green-800 w-20 h-8 rounded-md mt-16'>Search</button>
      
    </div>
    
</div>
<div className='bg-zinc-800 ps-140 h-10 pt-2'><h1 className='text-stone-400'>ⓒ 2004-2025 PropX Private Limited.All Rights Reserved</h1></div>

    </>
  )
}

export default Landing