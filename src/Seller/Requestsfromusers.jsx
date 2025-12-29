import React, { useEffect, useState } from 'react'
import Sellersidebar from './Sellersidebar'
import { deleteuseraddedrequestsapi, getSellerInterestedApi } from '../../services/allapi'
import { toast } from 'react-toastify'

function Requestsfromusers() {


    const [interestedList, setInterestedList] = useState([])

  const seller = JSON.parse(sessionStorage.getItem("existinguser"))
const sellerEmail = seller?.sellerinfo?.email


  const fetchInterested = async () => {
    try {
      const result = await getSellerInterestedApi(sellerEmail)
      console.log("Result:", result.data)
      setInterestedList(result.data)
    } catch (err) {
      console.error(err)
    }
  }

const handledelete = async (id) =>{
  try {
    const result = await deleteuseraddedrequestsapi(id)
    console.log(result);

    if(result.status == 200){
      toast.success("Book deleted")
      fetchInterested()
    }else{
      toast.error("Something went wrong")
    }
    
  } catch (error) {
    console.log(error);
  }
}


  useEffect(() => {
    if (sellerEmail) {
      fetchInterested()
    }
  }, [sellerEmail])




  return (
  
        <div className='grid grid-cols-[1fr_4fr] bg-stone-800 h-screen flex overflow-hidden'>
          <div>
            <Sellersidebar/>
          </div>
          <div className='overflow-y-auto'>
            <h1 className='text-center text-2xl mt-8 text-white'>All Requests :</h1>
            <div className='grid grid-cols-2 ms-10'>
              {interestedList?.map((list)=>(

              
                <div className='shadow w-110 p-3 bg-gray-300 rounded ms-5 mt-20'>
                   <div className='flex gap-6 mt-2'>
                        <h1>Name :</h1>
                        <h1>{list?.interestedName}</h1>
                   </div>
                   <div className='flex gap-6 mt-2'>
                        <h1>Email :</h1>
                        <h1>{list?.interestedEmail}</h1>
                   </div>
                   <div className='flex gap-6 mt-2'>
                        <h1>Phone :</h1>
                        <h1>{list?.interestedPhone}</h1>
                   </div>
                   <div className='flex gap-6 mt-2'>
                        <h1>Message:</h1>
                        <h1 className='text-justify'>{list?.interestedMessage}</h1>
                   </div>
                   <button onClick={()=>handledelete(list?._id)} className='bg-red-500 text-white border-2 w-15 h-8 hover:bg-white hover:text-red-600 hover:border-red-800 rounded ms-90 mt-3'>Delete</button>
                </div>
              ))}
                
            </div>
    
          </div>
            
           
         
        
   </div>
  )
}

export default Requestsfromusers