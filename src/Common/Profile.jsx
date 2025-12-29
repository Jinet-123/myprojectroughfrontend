import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import Editprofile from './Editprofile';
import baseurl from '../../services/baseurl';


function Profile() {

  // const [modal,setmodal] = useState(false)
  const [profiledetails,setprofiledetails] = useState({
    username : "",
    bio : "",
    email : "",
    role : "",
    profile : ""
  })

  useEffect(()=>{
    const result = JSON.parse(sessionStorage.getItem("existinguser"))
    if(result){
      setprofiledetails({
        username : result.username,
        bio : result.bio,
        email : result.email,
        role : result.role,
        profile : result.profile
        
      })
      console.log(result);
      
      
    }
    
  },[])

  return (
    <>
    <div className='bg-stone-800 h-screen'>
      <h1 className='text-3xl pt-8 ms-170 font-bold text-white'>PROFILE</h1>
      <div className='flex gap-6 ms-260'>
        <button className='text-xl p-1 flex w-35 bg-cyan-300 hover:text-cyan-600 hover:bg-white border-2 hover:border-cyan-600 rounded-md h-11'>Become Seller</button>
        <button className='text-xl p-1 flex w-25 bg-orange-400 hover:text-orange-300 hover:bg-white border-2 hover:border-orange-600 rounded-md h-11'> Wishlist</button>
        <button className='text-xl p-1 flex w-25 bg-lime-400 hover:text-lime-400 hover:bg-white border-2 hover:border-lime-600 rounded-md h-11'> Logout</button>
        
      </div>
      <div>
        <div className='ms-160'>
          <img src={`${baseurl}/Imguploads/${profiledetails.profile}`} className='mt-8' style={{width:"200px",height:"200px",borderRadius:"50%"}} alt="" />
          
            <h1 className='text-3xl mt-7 ms-7 text-white'>{profiledetails.username}</h1>
            <h1 className='ms-9 mt-2 text-white'>{profiledetails.bio}</h1>
          
</div>
          <div className='mt-20 ms-160'>
            <div className='flex'>
              <h1 className='text-xl text-white'>Email : </h1>
              <h1 className='ms-10 text-white'>{profiledetails.email}</h1>
            </div>
            <div className='flex mt-10'>
              <h1 className='text-xl text-white'>Role : </h1>
              <h1 className='ms-15 text-white'>{profiledetails.role}</h1>
            </div>
            <Editprofile/>
          </div>
       
      </div>
    </div>

    
    
    </>
  )
}

export default Profile