import React, { useEffect, useState } from 'react'
import { approvesellerapi, becomesellerrequestinadminapi, rejectsellerapi } from '../../services/allapi'
import baseurl from '../../services/baseurl'

function Allrequests() {

  const [request,setrequest] = useState([])
 

  const getallrequests = async () =>{
    try {
       const token = sessionStorage.getItem("token")
       const headers = { Authorization: `Bearer ${token}` }
       

       const result = await becomesellerrequestinadminapi(headers)
       setrequest(result.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }
console.log(request);

const approveSeller = async (id) => {
  const token = sessionStorage.getItem("token")
       const headers = { Authorization: `Bearer ${token}` }
    await approvesellerapi(id, headers)
    getallrequests()
  }

   const rejectSeller = async (id) => {
     const token = sessionStorage.getItem("token")
       const headers = { Authorization: `Bearer ${token}` }
    await rejectsellerapi(id, headers)
    getallrequests()
  }

  useEffect(()=>{
    getallrequests()
  },[])

  return (
    <>

    <h1 className='text-2xl text-center mt-8 mb-20'>All Requests</h1>

  
      {request?.length > 0 && request.map((details)=>(<div>
        
        <div className='flex shadow gap-30 ps-30'>
          <h1>Name : <p>{details.sellerinfo?.name}</p></h1>
          <h1>Email : <p>{details.sellerinfo?.email}</p></h1>
          <h1>Phone : <p>{details.sellerinfo?.phone}</p></h1>
          <button onClick={()=>approveSeller(details?._id)} className='bg-green-600 text-white h-10 w-20 border-2 hover:bg-white hover:border-green-600 hover:text-green-600 rounded mt-1 ms-50'>Approve</button>
          <button onClick={()=>rejectSeller(details?._id)} className='bg-red-600 text-white h-10 w-20 border-2 hover:bg-white hover:border-red-600 hover:text-red-600 rounded mt-1'>Reject</button>
          
        </div>
        {details.idproof?.map((img)=>(<div className='mt-6'>
          <label className='ms-10' htmlFor="">Id Proof :</label>
            <img style={{width:"350px",height:"250px",marginTop:"20px",marginLeft:"50px",marginBottom:"40px"}} src={`${baseurl}/Imguploads/${img}`} alt="" />
          </div>))}
      </div>))}
  
        {request?.length == 0 && <div>
          <h1 className='text-xl text-center'>No Request Found</h1>
        </div>}
   
    
    </>
  )
}

export default Allrequests