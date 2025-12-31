import React, { useEffect, useState } from 'react'
import { deleteWishlistApi, getWishlistApi } from '../../services/allapi'
import baseurl from '../../services/baseurl'
import { toast } from 'react-toastify'

function Wishlist() {

  const [wishlist, setWishlist] = useState([])

const user = JSON.parse(sessionStorage.getItem("existinguser"))
const userEmail = user?.email


  const fetchWishlist = async () => {
    if (!userEmail) return 

    try {
      const result = await getWishlistApi(userEmail)
      console.log("WISHLIST RESPONSE:", result.data)
      setWishlist(result.data)
    } catch (err) {
      console.error("Wishlist error:", err)
    }
  }

  
useEffect(()=>{
  fetchWishlist()
},[])

const deleteWishlist = async (id) => {
  try {
    await deleteWishlistApi(id)
    toast.success("Removed from wishlist")
    fetchWishlist()

  } catch (err) {
    console.error(err)
    toast.error("Failed to remove from wishlist")
  }
}




  return (
    <>
     <div className='bg-zinc-200 h-screen'>
        <h1 className='text-2xl text-center pt-9'>Wishlist : </h1>
  <div className='grid grid-cols-3'>
    {wishlist?.map((wishdetails)=>(
        <div className='shadow w-110 h-70 ms-10 mt-20'>
          <img src={`${baseurl}/Imguploads/${wishdetails?.propertyImage}`} alt="" style={{width:"300px",height:"200px",marginLeft:"50px",paddingTop:"20px"}}/>
          <h1 className='text-xl ms-5 mt-2'>Title : {wishdetails?.propertyTitle}</h1>
          <h1 className='text-xl ms-5 mt-2'>Price : ₹{wishdetails?.propertyPrice}</h1>
          <button onClick={()=>deleteWishlist(wishdetails?._id)} className='bg-red-500 text-white border-2 w-15 h-8 hover:bg-white hover:text-red-600 hover:border-red-800 rounded ms-90 mt-5'>Delete</button>
        </div>))}
      </div>
     </div>
    </>
  )
}

export default Wishlist