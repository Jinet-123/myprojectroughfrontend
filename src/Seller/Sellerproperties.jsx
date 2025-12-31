import React, { useEffect, useState } from 'react'
import { deletepropertyapi, getselleraddedpropsapi, updatepropertystatusapi } from '../../services/allapi';
import baseurl from '../../services/baseurl';
import { MdOutlineLocationOn } from 'react-icons/md';
import { IoBedOutline } from 'react-icons/io5';
import { AiOutlineColumnWidth } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { LuBath } from 'react-icons/lu';
import EditProperty from '../Common/Editproperty';
import { toast } from 'react-toastify';
import Sellersidebar from './Sellersidebar';


function Sellerproperties() {

  const [selleradded,setselleradded] = useState([])

  //get seller added props
const getselleraddedprops = async () => {
    try {
      const token = sessionStorage.getItem("token")

      const reqheader = {
        Authorization: `Bearer ${token}`
      }

      const result = await getselleraddedpropsapi(reqheader)

      if (result.status === 200) {
        setselleradded(result.data)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const handledeleteproperty = async (id) =>{
  try {
    const result = await deletepropertyapi(id)
    console.log(result);

    if(result.status == 200){
      toast.success("Property deleted successfully !")
      getselleraddedprops()
    }else{
      toast.error("Something went wrong !")
    }
    
  } catch (error) {
    console.log(error);
  }
}

const markassold = async (id) =>{
    console.log(id);
    try {
      const result = await updatepropertystatusapi(id)
      console.log(result);
      getselleraddedprops()
      
      
    } catch (error) {
        console.log(error);
        
    }
    
  }

  useEffect(() => {
    getselleraddedprops()
  }, [])  

  console.log(selleradded)

  return (
    <>
    <div className='grid grid-cols-[1fr_4fr]'>
      <div>
        <Sellersidebar/>
      </div>
    <div style={{marginLeft:"-50px"}} className='bg-zinc-800'>
      
      <h1 className='text-2xl font-bold text-center mt-5 text-white'>My Properties</h1>
  
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-15'>
  
        
  
                  {selleradded?.map((props) => (
  
                      <div>
  
  
                          <div className='bg-white rounded-xl w-90 ms-20 mt-10 shadow-xl'>
  
  
  
                              <h1 className='bg-white absolute mt-6 ps-2 ms-7 z-10 w-23 h-8 pt-1 rounded-md text-md'>{props?.sellstatus}</h1>
                              <div className='relative'>
  
                                  <img className='pt-4' src={`${baseurl}/Imguploads/${props?.uploadimages[0]}`} alt="" style={{ width: "320px", height: "250px", borderRadius: "4%", marginLeft: "20px" }} />
                              </div>
                              <div className='flex mt-5 ms-3'>
                                  <MdOutlineLocationOn className=' text-xl' />
                                  <h1 className='ms-2'>{props?.location}</h1>
                              </div>
                              <h1 className='text-xl ms-3 font-bold mt-3'>{props?.propertytitle}</h1>
                            
                              <div className='flex mt-8'>
                                  <h1 className='text-2xl ms-4'>₹</h1>
                                  <h1 className='text-2xl ms-1'>{props?.price || props?.rent}</h1>
                                  <Link to={`/viewproperty/${props?._id}`}> <button className='bg-green-900 mb-10 text-white w-30 h-8 ms-19 hover:text-green-900 rounded-md border-1 hover:border-green-600 hover:bg-green-100'>View Details ➜</button></Link>
                              </div>
  
                          </div>
  
                        <div className='flex gap-7 ms-31 mt-6'>
                          <EditProperty property={props}/>
                          <button type='button' onClick={()=>handledeleteproperty(props?._id)} className='bg-red-600 w-15 h-8 text-white rounded-md border-2 hover:border-red-800 hover:bg-white hover:text-black'>Delete</button>
                          <button type='button' onClick={()=>markassold(props?._id)} className='bg-orange-600 w-25 h-8 text-white rounded-md border-2 hover:border-orange-800 hover:bg-white hover:text-black'>Mark as Sold</button>
                        </div>
  
  
                      </div>
                  ))}
  
                  {selleradded.length === 0 && (
                      <h1 className="text-center text-gray-500 mt-10">
                          No properties found
                      </h1>
                  )}
  
  
  
              </div>
  
      </div>
    </div>
    </>
  )
}

export default Sellerproperties