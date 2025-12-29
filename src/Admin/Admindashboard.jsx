import React, { useEffect, useState } from 'react'
import Adminsidebar from './Adminsidebar'
import { PiUsersThreeFill } from "react-icons/pi";
import { FaUsersGear } from "react-icons/fa6";
import { AiFillPropertySafety } from "react-icons/ai";
import { ImBlocked } from "react-icons/im";
import { getAdminDashboardCountsAPI } from '../../services/allapi';

function Admindashboard() {

  const [counts, setCounts] = useState(null);

const getDashboardData = async () => {
  try {
    const result = await getAdminDashboardCountsAPI();

    console.log("data is :", result.data);

    if (result.status === 200) {
      setCounts(result.data.data);
    }

  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getDashboardData();
}, []);



  return (
    <>
    
     <div className='grid grid-cols-[1fr_4fr]'>
      <div>
        <Adminsidebar/>
      </div>
      <div className='bg-stone-800' style={{marginLeft:"-26px"}}>
        <h1 className='text-3xl mt-5 ps-20 font-bold text-white'>DASHBOARD</h1>
        <div className='flex gap-15 mt-20 ps-37'>
          <div className='rounded-xl w-60 h-40  bg-zinc-900'>
            <PiUsersThreeFill className='text-6xl mt-1 ms-20 text-emerald-300'/>
            <h1 className='mt-3 ms-18 text-white'>Total Users</h1>
            <h1 className='mt-3 ms-23 text-4xl text-orange-300'>{counts?.totalUsers}</h1>
  
          </div>
          <div className='rounded-xl w-60 h-40  bg-zinc-900'>
            <FaUsersGear className='text-6xl mt-1 ms-20 text-emerald-300'/>
            <h1 className='mt-3 ms-18 text-white'>Total Sellers</h1>
            <h1 className='mt-3 ms-23 text-4xl text-orange-300'>{counts?.totalSellers}</h1>
  
          </div>
          <div className='rounded-xl w-60 h-40  bg-zinc-900'>
           <AiFillPropertySafety className='text-6xl mt-1 ms-20 text-emerald-300'/>
            <h1 className='mt-3 ms-18 text-white'>Total Properties</h1>
            <h1 className='mt-3 ms-23 text-4xl text-orange-300'>{counts?.totalProperties}</h1>
  
          </div>
          
          
          
        </div>
        <div className='w-220 ms-40 flex gap-20 ps-10 h-20  mt-20 rounded bg-zinc-900'>
          <div>
            <h1 className='text-xl mt-3 font-semibold text-white'>Land</h1>
            <h1 className='ms-5 text-xl text-orange-300'>{counts?.land}</h1>
          </div>
          <div>
            <h1 className='text-xl mt-3 font-semibold text-white'>House</h1>
            <h1 className='ms-10 text-xl text-orange-300'>{counts?.house}</h1>
          </div>
          <div>
            <h1 className='text-xl mt-3 font-semibold text-white'>Flat</h1>
            <h1 className='ms-2 text-xl text-orange-300'>{counts?.flat}</h1>
          </div>
          <div>
            <h1 className='text-xl mt-3 font-semibold text-white'>Rental</h1>
            <h1 className='ms-7 text-xl text-orange-300'>{counts?.rental}</h1>
          </div>
          <div>
            <h1 className='text-xl mt-3 font-semibold text-white'>Commercial</h1>
            <h1 className='ms-5 text-xl text-orange-300'>{counts?.commercial}</h1>
          </div>
          <div>
            <h1 className='text-xl mt-3 font-semibold text-white'>Industrial</h1>
            <h1 className='ms-5 text-xl text-orange-300'>{counts?.industrial}</h1>
          </div>
        </div>

      </div>
      

     </div>
    </>
  )
}

export default Admindashboard