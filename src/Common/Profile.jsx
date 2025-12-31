import React, { useContext, useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import Editprofile from './Editprofile';
import baseurl from '../../services/baseurl';
import { ProfileContext } from '../../context/ProfileContext';
import { Link } from 'react-router-dom';


function Profile() {

  const { profile } = useContext(ProfileContext);

const handleLogout = () => {
    sessionStorage.removeItem("existinguser");
    sessionStorage.removeItem("token");
    navigate("/login");
  };



  return (
    <>
      <div className='bg-stone-800 h-screen'>
        <h1 className='text-3xl pt-8 ms-170 font-bold text-white'>PROFILE</h1>
        <div className='flex gap-6 ms-260'>
          <Link to={"/becomeseller"}><button className='text-xl p-1 flex w-35 bg-cyan-300 hover:text-cyan-600 hover:bg-white border-2 hover:border-cyan-600 rounded-md h-11'>Become Seller</button></Link>
          <Link to={"/wishlist"}><button className='text-xl p-1 flex w-25 bg-orange-400 hover:text-orange-300 hover:bg-white border-2 hover:border-orange-600 rounded-md h-11'> Wishlist</button></Link>
          <button onClick={handleLogout} className='text-xl p-1 flex w-25 bg-lime-400 hover:text-lime-400 hover:bg-white border-2 hover:border-lime-600 rounded-md h-11'> Logout</button>

        </div>
        <div>
          <div className='ms-160'>
            {profile?.profile ?
              <img src={`${baseurl}/Imguploads/${profile.profile}`} className='mt-8' style={{ width: "200px", height: "200px", borderRadius: "50%" }} alt="" />
              :
              <img style={{ width: "200px", height: "200px", borderRadius: "50%" }} src="https://i.pinimg.com/1200x/4c/85/31/4c8531dbc05c77cb7a5893297977ac89.jpg" alt="" />
}
           <div>
              <h1 className='text-3xl mt-7 ms-7 text-white'>{profile?.username}</h1>
              <h1 className='ms-9 mt-2 text-white'>{profile?.bio}</h1> 
           </div>

          </div>
          <div className='mt-20 ms-160'>
            <div className='flex'>
              <h1 className='text-xl text-white'>Email : </h1>
              <h1 className='ms-10 text-white'>{profile?.email}</h1>
            </div>
            <div className='flex mt-10'>
              <h1 className='text-xl text-white'>Role : </h1>
              <h1 className='ms-15 text-white'>{profile?.role}</h1>
            </div>
            <Editprofile />
          </div>

        </div>
      </div>



    </>
  )
}

export default Profile