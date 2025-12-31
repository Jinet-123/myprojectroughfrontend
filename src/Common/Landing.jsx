import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { BsArrowRightCircle } from "react-icons/bs";
import { PiFacebookLogoBold } from "react-icons/pi";
import { IoBedOutline, IoLogoInstagram } from "react-icons/io5";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { getlandingPropertiesAPI } from '../../services/allapi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineColumnWidth } from 'react-icons/ai';
import baseurl from '../../services/baseurl';
import { LuBath } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';


function Landing() {

  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHomeProperties = async () => {
      try {
        const res = await getlandingPropertiesAPI();
        setProperties(res.data);
        console.log(res.data);

      } catch (error) {
        console.log(error);
      }
    };


    fetchHomeProperties();
  }, []);

  

  const handleExploreMore = () => {
    const token = sessionStorage.getItem("token"); 
    

    if (token) {
      navigate("/propertyhome");
    } else {
      navigate("/login");
    }
  };



  return (
    <>
      <Navbar />

      <div className='relative'>
        <img className='mt-11 w-full h-120 object-cover object-center' src="https://i.pinimg.com/1200x/8f/fe/cc/8ffecc0aec79bd897be4a2467b94e422.jpg" alt="" />
        <h1 style={{ marginTop: "-20%" }} className='text-white ms-140 text-7xl font-bold'>WELCOME</h1>
        <h1 style={{ marginTop: "-2px" }} className='text-white ms-148'>PropX : Your space. Your future. Your way.</h1>
        <button onClick={handleExploreMore} className='bg-orange-500 hover:bg-white hover:text-orange-500 border-2 hover:border-orange-600 mt-12 ms-170 text-white rounded-md h-12 w-27'>Get Started</button>

      </div>
      <div className='bg-zinc-800 mt-28 h-70 text-slate-200'>
        <h1 className='ms-170 pt-15 text-xl font-bold'>OUR SERVICES</h1>
        <h1 className='mt-5 ms-130 font-bold'>We offer seamless property buying, selling, and renting services,</h1>
        <h1 className='mt-1 ms-120 font-bold'> carefully tailored to match your lifestyle, preferences, and long-term goals.</h1>
        

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
          <div className="grid grid-flow-col gap-4 ms-30">
            <div className='mt-30 text-white'>
              <h1 className='mt-2 text-3xl'>TAKE A LOOK AT OUR</h1>
              <h1 className='mt-2 text-3xl font-bold'>NEW COLLECTIONS</h1>
              <h1 className='mt-3 font-bold'>You Have An Interesting Collections To View</h1>
              
            </div>

            <div>
              <img src="https://i.pinimg.com/1200x/95/5b/43/955b437d7a0a91f60b944abf6a99a544.jpg" style={{ width: "800px", height: "350px" }} alt="" />

            </div>
          </div>
        </div>

      </div>

      <div className='bg-zinc-800 grid grid-cols-3'>
    {properties?.map((props)=>(
        <div>


          <div className='bg-neutral-500 rounded-xl w-90 ms-20 mt-10 shadow-xl'>

            <h1 className='bg-white absolute mt-6 ps-2 ms-9 z-10 w-23 h-8 pt-1 rounded-md text-md'>{props?.sellstatus}</h1>
            <div className='relative'>

              <img className='pt-4' src={`${baseurl}/Imguploads/${props?.uploadimages[0]}`} alt="" style={{ width: "320px", height: "250px", borderRadius: "4%", marginLeft: "20px" }} />
            </div>
            <div className='flex mt-5 ms-3'>
              <MdOutlineLocationOn className=' text-xl' />
              <h1 className='ms-2'>{props?.location}</h1>
            </div>
            <h1 className='text-xl ms-3 font-bold mt-3'>{props?.propertytitle}</h1>
            <div className='flex mt-4 ms-3'>
              <IoBedOutline className='text-2xl' />
              <h1 className='ms-1'>3 bedroom</h1>
              <LuBath className='text-2xl ms-6' />
              <h1 className='ms-1'>3 bath</h1>
              <AiOutlineColumnWidth className='text-2xl ms-6' />
              <h1 className='ms-1'>{props?.plotarea}</h1>
            </div>
            <div className='flex mt-8'>
              <h1 className='text-2xl ms-4'>₹</h1>
              <h1 className='text-2xl ms-1'>{props?.price || props?.rent}</h1>
              <Link to={`/viewproperty/${props?._id}`}> <button className='bg-green-900 mb-10 text-white w-30 h-8 ms-19 hover:text-green-900 rounded-md border-1 hover:border-green-600 hover:bg-green-100'>View Details ➜</button></Link>
            </div>

          </div>
          </div>))}

          

        </div>
        <div className='bg-zinc-800'><button onClick={handleExploreMore} className='mt-7 bg-zinc-900 text-white border-2 border-orange-500 hover:border-white ms-180 h-12 w-27'>Explore More</button></div>

        <div className='bg-zinc-800 h-40 ps-50 flex'>
          <hr className='text-white mt-1' />
          <div className='text-white mt-8'>
            <h1 className='hover:text-orange-500 cursor-pointer'>Home</h1>
            <h1 className='mt-1 hover:text-orange-500 cursor-pointer'>Services</h1>
            <h1 className='mt-1 hover:text-orange-500 cursor-pointer'>Testimonials</h1>
            <h1 className='mt-1 hover:text-orange-500 cursor-pointer'>Contact Us</h1>
          </div>

          <div className='flex gap-15'>
            <PiFacebookLogoBold className='text-4xl text-orange-300 mt-16 ms-100' />
            <IoLogoInstagram className='text-4xl text-orange-300 mt-16' />
            <TiSocialTwitterCircular className='text-5xl text-orange-300 mt-14' />
            <input type="text" className='w-50 h-8 bg-gray-400 rounded-md mt-16 ms-40 ' placeholder='Search Here..' name="" id="" />
            <button style={{ marginLeft: "-50px" }} className='bg-green-800 w-20 h-8 rounded-md mt-16'>Search</button>

          </div>

        </div>
        <div className='bg-zinc-800 ps-140 h-10 pt-2'><h1 className='text-stone-400'>ⓒ 2004-2025 PropX Private Limited.All Rights Reserved</h1></div>

      </>
      )
}

      export default Landing