import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { ImBlocked } from "react-icons/im";

function Adminsidebar() {
  return (
    <>
        <div className='bg-zinc-900 w-70 h-screen pt-10 ps-10'>
            
            <div>
                <img src="https://i.pinimg.com/1200x/54/b3/dc/54b3dccecb31c9fd5f35444a7390533a.jpg" style={{width:"100px",height:"100px",borderRadius:"50%"}} alt="" />
                </div>
                <div className='mt-15'>
                    <h1 className='text-white text-2xl font-bold'>TOOLS</h1>
                </div>
                <div className='flex mt-9'>
                    <MdDashboard className='text-orange-500 text-3xl'/>
                    <h1 className='text-white ms-2 text-md mt-1 hover:text-orange-400 cursor-pointer'>DASHBOARD</h1>
                </div>
                <div className='flex mt-8'>
                    <FaUserSecret className='text-orange-500 text-3xl'/>
                    <h1 className='text-white ms-2 text-md mt-1 hover:text-orange-400 cursor-pointer'>ALL-USERS</h1>
                </div>
                <div className='flex mt-8'>
                    <FaCodePullRequest className='text-orange-500 text-3xl'/>
                    <h1 className='text-white ms-2 text-md mt-1 hover:text-orange-400 cursor-pointer'>REQUESTS</h1>
                </div>
                    
                
</div>
    </>
  )
}

export default Adminsidebar