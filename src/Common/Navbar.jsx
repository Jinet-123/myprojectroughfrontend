import React, { useContext } from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../context/ProfileContext';



function Navbar() {

  const navigate = useNavigate();
  const { profile } = useContext(ProfileContext);


  const user = JSON.parse(sessionStorage.getItem("existinguser")); 
  

  const handleLogout = () => {
    sessionStorage.removeItem("existinguser");
    sessionStorage.removeItem("token");
    navigate("/login");
  };

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

      <div className='bg-black h-18'>
        <div className='flex pt-5'>
          <FaFacebook className='mt-2 ms-35 text-md text-orange-500' />
          <AiFillTwitterCircle className='mt-2 ms-5 text-md text-orange-500' />
          <FaPinterest className='mt-2 ms-5 text-md text-orange-500' />
          <h1 className='ms-120 text-3xl font-bold text-white'>PROPX</h1>


        </div>
        <hr className='text-zinc-600 mt-3'/>

        <div className='flex bg-black h-12'>
         
          <div className='flex text-white gap-10 ms-160 mt-3'>
            <Link to={"/"}><h1 className='hover:text-orange-500 cursor-pointer'>Home</h1></Link>
            <button onClick={handleExploreMore} style={{marginTop:"-13px"}} className='hover:text-orange-500 cursor-pointer'>Allproperties</button>
          </div>
          {user && 
          <div className='flex gap-5 ms-90 pt-2'>
            
            <Link to={"/profile"}><button className='bg-stone-700 w-17 h-8 text-white rounded border-2 hover:text-stone-900 hover:border-orange-500 hover:bg-stone-400'>Profile</button></Link>
            <button onClick={handleLogout} className='bg-stone-700 w-17 h-8 text-white rounded border-2 hover:text-stone-900 hover:border-orange-500 hover:bg-stone-400'>Logout</button>
          </div>}

        </div>
        
      </div>


    </>
  )
}

export default Navbar