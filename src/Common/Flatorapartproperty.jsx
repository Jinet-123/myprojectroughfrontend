import React, { useState } from 'react'
import { LuChartArea } from 'react-icons/lu'
import { MdOutlineBedroomParent, MdOutlineLocationOn } from 'react-icons/md'
import Swipercarousel from './Swipercarousel'
import { addInterestedApi } from '../../services/allapi'
import { toast } from 'react-toastify'


function Landproperty({property}) {


  const [interested, setInterested] = useState({
      interestedName: "",
      interestedEmail: "",
      interestedPhone: "",
      interestedMessage: ""
    })
  
  const handleSubmit = async () => {
  
    const reqbody = {
      propertyId: property._id,
      sellerEmail: property.usermail,
      interestedName: interested.interestedName,
      interestedEmail: interested.interestedEmail,
      interestedPhone: interested.interestedPhone,
      interestedMessage: interested.interestedMessage
    }
  if(!interested.interestedPhone || !interested.interestedEmail){
    toast.error("fill completely")
  }else{
  
    try {
      const result = await addInterestedApi(reqbody)
      console.log("API RESULT:", result)
  
      setInterested({
        interestedName: "",
        interestedEmail: "",
        interestedPhone: "",
        interestedMessage: ""
      })
   toast.success("Request sent successfully")
  
    } catch (error) {
      toast.error("Error Occurred")
    }
  }
  }


  return (
    <>
<div className=''>

  <Swipercarousel images={property.uploadimages} />
  
        <div className="grid grid-flow-col gap-4 mt-10">
          <div>
            <div className='shadow p-9'>
              <h1 className='text-4xl font-bold'>{property.propertytitle}</h1>
              <h1 className='text-md mt-4'>{property.description}</h1>
            </div>
            <div className='shadow p-9 mt-8'>
              <h1 className='text-2xl'>Overview</h1>
              <hr className='mt-4'/>
              <div className='flex mt-7 gap-10'>
                <div className='flex ms-10'>
                  <MdOutlineBedroomParent className='text-4xl'/>
                  <div className='ms-3'>
                    <h1>Bedrooms</h1>
                    <h1 className='text-xl'>{property.bedrooms}</h1>
                  </div>
    
                </div>
                <div className='flex ms-10'>
                  <MdOutlineLocationOn className='text-4xl'/>
                  <div className='ms-3'>
                    <h1 className=''>Location</h1>
                    <h1 className='text-xl'>{property.location}</h1>
                  </div>
    
                </div>
                <div className='flex ms-10'>
                  <LuChartArea className='text-4xl'/>
                  <div className='ms-3'>
                    <h1>Built-up Area</h1>
                    <h1 className='text-xl'>{property.builtuparea}</h1>
                  </div>
              </div>
  
              </div>
            </div>
            <div className='shadow p-9 mt-5'>
              <h1 className='text-2xl'>Other Details</h1>
              <hr className='mt-4'/>
              <div className='text-lg mt-5'>
                <h1 className='flex mb-1'>Carpet Area : <h1 className='ms-3'>{property.carpetarea}</h1></h1>
                <h1 className='flex mb-1'>Bathrooms : <h1 className='ms-3'>{property.bathrooms}</h1></h1>
                <h1 className='flex mb-1'>Balconies : <h1 className='ms-3'>{property.balconies}</h1></h1>
                <h1 className='flex mb-1'>Floor No : <h1 className='ms-3'>{property.floornumber}</h1></h1>
                <h1 className='flex mb-1'>Total Floor : <h1 className='ms-3'>{property.totalfloor}</h1></h1>
                <h1 className='flex mb-1'>Age of Property : <h1 className='ms-3'>{property.ageofprop}</h1></h1>
                <h1 className='flex mb-1'>Furnishing : <h1 className='ms-3'>{property.furnishing}</h1></h1>
                <h1 className='flex mb-1'>Car Parking : <h1 className='ms-3'>{property.carparking}</h1></h1>
                <h1 className='flex mb-1'>Maintanance Fee : <h1 className='ms-3'>{property.maintanancefee}</h1></h1>
                <h1 className='flex mb-1'>Lift : <h1 className='ms-3'>{property.lift}</h1></h1>
                <h1 className='flex mb-1'>Security : <h1 className='ms-3'>{property.security}</h1></h1>
                <h1 className='flex mb-1'>ClubHouse : <h1 className='ms-3'>{property.clubhouse}</h1></h1>
                <h1 className='flex mb-1'>Address/Landmark: <h1 className='ms-3'>{property.address}</h1></h1>
                
              </div>
            </div>
          </div>
  
  
         <div>
            <div className='shadow p-6 mr-10'>
              <h1 className='text-xl'>Price </h1>
              <h1 className='text-5xl'>₹ {property.price}</h1>
            </div>
            <div className='shadow p-9 mt-5 mr-10'>
              <h1 className='text-xl text-red-500'>Interested ?</h1>
              <div className='p-9'>

                <label htmlFor="" className='block text-lg'>Name :</label>
                <input value={interested.interestedName} onChange={(e) => setInterested({ ...interested, interestedName: e.target.value })} type="text" className='border border-outlined rounded w-60 h-9 mb-3' />
                <label htmlFor="" className='block text-lg'>Email :</label>
                <input value={interested.interestedEmail} onChange={(e) => setInterested({ ...interested, interestedEmail: e.target.value })} type="text" className='border border-outlined rounded w-60 h-9 mb-3' />
                <label htmlFor="" className='block text-lg'>Phone :</label>
                <input value={interested.interestedPhone} onChange={(e) => setInterested({ ...interested, interestedPhone: e.target.value })} type="text" className='border border-outlined rounded w-60 h-9 mb-3' />
                <label htmlFor="" className='block text-lg'>Message(with property title) :</label>
                <textarea value={interested.interestedMessage} onChange={(e) => setInterested({ ...interested, interestedMessage: e.target.value })} rows={3} type="text" className='border border-outlined rounded w-60' />

              </div>
              <button type='button' onClick={handleSubmit} className='border-2 ms-25 border-blue-900 text-blue-900 hover:border-red-500 w-30 h-10 hover:text-red-600'>Submit</button>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Landproperty