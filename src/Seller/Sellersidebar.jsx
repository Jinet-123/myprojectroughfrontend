import React from 'react'
import { FaUserSecret } from 'react-icons/fa'
import { FaCodePullRequest } from 'react-icons/fa6'
import { ImBlocked } from 'react-icons/im'
import { MdAppBlocking, MdDashboard, MdOutlineDomainAdd } from 'react-icons/md'
import { AiFillPropertySafety } from "react-icons/ai";
import { MdApproval } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { FaStreetView } from "react-icons/fa6";

function Sellersidebar() {
  return (
    <>
    <div className='bg-zinc-900 w-70 h-screen pt-18 ps-10'>
                
                <div>
                    <img src="https://i.pinimg.com/1200x/4c/85/31/4c8531dbc05c77cb7a5893297977ac89.jpg" className='ms-7' style={{width:"80px",height:"80px",borderRadius:"50%"}} alt="" />
                    <h1 className='text-white text-xl ms-4 mt-5'>Seller Name</h1>
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-white text-2xl font-bold'>TOOLS</h1>
                    </div>
                    <div className='flex mt-7'>
                        <MdDashboard className='text-orange-500 text-3xl'/>
                        <h1 className='text-white ms-2 text-md mt-1 hover:text-orange-400 cursor-pointer'>DASHBOARD</h1>
                    </div>
                    <div className='flex mt-5'>
                        <AiFillPropertySafety className='text-orange-500 text-3xl'/>
                        <h1 className='text-white ms-2 text-md mt-1 hover:text-orange-400 cursor-pointer'>MY PROPERTIES</h1>
                    </div>
                    <div className='flex mt-7'>
                            <MdOutlineDomainAdd className='text-orange-500 text-3xl'/>
                            <h1 className='text-white ms-2 text-md mt-1 hover:text-orange-400 cursor-pointer'>ADD PROPERTIES</h1>
                        </div>
                    <div className='flex mt-5'>
                        <MdApproval className='text-orange-500 text-3xl'/>
                        <h1 className='text-white ms-2 text-md mt-1 hover:text-orange-400 cursor-pointer'>USER REQUESTS</h1>
                    </div>
                        <div className='mt-10 font-bold'>
                            <h1 className='text-white text-2xl'>OTHERS</h1>
                        </div>
                        <div className='flex mt-7'>
                            <FaStreetView className='text-orange-500 text-3xl'/>
                            <h1 className='text-white ms-2 text-md mt-1 hover:text-orange-400 cursor-pointer'>VIEW PROFILE</h1>
                        </div>
                        
                    
    </div>
    
    </>
  )
}

export default Sellersidebar