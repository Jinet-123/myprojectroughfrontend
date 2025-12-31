import React, { useEffect, useState } from 'react'
import { FaFileUpload } from "react-icons/fa";
import { HiOfficeBuilding } from 'react-icons/hi';
import { MdFactory, MdLandscape } from 'react-icons/md';
import { PiBuildingApartmentFill, PiHouseFill } from 'react-icons/pi';
import { RiBuilding2Fill } from 'react-icons/ri';
import { addpropertyapi } from '../../services/allapi';
import { toast } from 'react-toastify';
import Sellersidebar from './Sellersidebar';

function Addprops() {

    const [land, setland] = useState(true)
    const [house, sethouse] = useState(false)
    const [flat, setflat] = useState(false)
    const [rental, setrental] = useState(false)
    const [commercial, setcommercial] = useState(false)
    const [industrial, setindustrial] = useState(false)
    const [preview,setpreview] = useState("")
  const [alluploadimages,setalluploadimages] = useState([])
  const [token,settoken] = useState("")

    const [propertydetails, setpropertydetails] = useState({ propertytitle: "", propertytype: "", description: "", selecttype: "", area: "", plotwidth: "", plotlength: "", facingdirection: "", roadwidth: "", price: "", priceperunit: "", location: "", wateravailability: "", electricity: "", fencing: "", address: "", bhk: "", builtuparea: "", carpetarea: "", plotarea: "", bedrooms: "", bathrooms: "", balconies: "", floors: "", ageofprop: "", furnishing: "", carparking: "", totalfloor: "", floornumber: "", maintanancefee: "", lift: "", security: "", clubhouse: "", rent: "", deposit: "", preferredtenant: "", availablefrom: "", foodfacility: "", washrooms: "", electricityloadcapacity: "", loadingorunloadingzone: "", ceilingheight: "", flooringtype: "", cranefacility: "", noofrooms: "", firesafety: "", negotiable: "", uploadimages: [] })
    console.log(propertydetails);

    //handlfiles
    const handlefile = (e) =>{
  console.log(e.target.files[0]);
  const filearray = propertydetails.uploadimages
  filearray.push(e.target.files[0])
  setpropertydetails({...propertydetails,uploadimages : filearray})
 
  //convert files to url
  const url = URL.createObjectURL(e.target.files[0])
  setpreview(url)
  let images = alluploadimages
  images.push(url)
  setalluploadimages([...images])
  
}
console.log(alluploadimages);

    //add props
    const handleaddproperty = async () => {
        const { propertytitle,propertytype,description,selecttype,area,plotwidth,plotlength,facingdirection,roadwidth,price,priceperunit,location,wateravailability,electricity,fencing,address,bhk,builtuparea,carpetarea,plotarea,bedrooms,bathrooms,balconies,floors,ageofprop,furnishing,carparking,totalfloor,floornumber,maintanancefee,lift,security,clubhouse,rent,deposit,preferredtenant,availablefrom,foodfacility,washrooms,electricityloadcapacity,loadingorunloadingzone,ceilingheight,flooringtype,cranefacility,noofrooms,firesafety,negotiable,uploadimages } = propertydetails
        if (!propertytitle || !selecttype || !description || uploadimages.length == 0) {
            toast.info("fill completely")
        } else {
            //reqheader
            const reqheader = {
                "Authorization": `Bearer ${token}`
            }

            const reqbody = new FormData()

            for (let key in propertydetails) {
                if (key != "uploadimages") {
                    reqbody.append(key, propertydetails[key])
                } else {
                    propertydetails.uploadimages.forEach(img => {
                        reqbody.append("uploadimages", img)
                    })
                }
            }
            try {
                const result = await addpropertyapi(reqbody, reqheader)
                console.log(result);
                if (result.status == 200) {
                    toast.success("property added")
                    
                } else if (result.status == 401) {
                    toast.warning(result.response.data)
                } else {
                    toast.error("Error Occurred")
                    
                }

            } catch (error) {
                toast.error("something went wrong")
            }
        }
    }

    useEffect(()=>{
  if(sessionStorage.getItem("token")){
    settoken(sessionStorage.getItem("token"))
  }
})

    return (
        <>

            <div className='pt-10 bg-zinc-900'>

                <div className='flex bg-stone-800 w-210 h-13 rounded-xl ms-90 border-2 border-white'>
                    <div className='ps-11 pt-1'>
                        <h1 onClick={() => { setland(true), sethouse(false), setflat(false), setrental(false), setcommercial(false), setindustrial(false) }} className={land ? "text-orange-500 cursor-pointer" : 'text-white cursor-pointer'}>Land/plots</h1>
                        <MdLandscape className='ms-7 text-orange-500' />
                    </div>
                    <div className='ps-15 pt-1'>
                        <h1 onClick={() => { setland(false), sethouse(true), setflat(false), setrental(false), setcommercial(false), setindustrial(false) }} className={house ? "text-orange-500 cursor-pointer" : 'text-white cursor-pointer'}>Houses</h1>
                        <PiHouseFill className='ms-4 text-orange-500' />
                    </div>
                    <div className='ps-15 pt-1'>
                        <h1 onClick={() => { setland(false), sethouse(false), setflat(true), setrental(false), setcommercial(false), setindustrial(false) }} className={flat ? "text-orange-500 cursor-pointer" : 'text-white cursor-pointer'}>Flats/Apartments</h1>
                        <RiBuilding2Fill className='ms-12 text-orange-500' />
                    </div>
                    <div className='ps-15 pt-1'>
                        <h1 onClick={() => { setland(false), sethouse(false), setflat(false), setrental(true), setcommercial(false), setindustrial(false) }} className={rental ? "text-orange-500 cursor-pointer" : 'text-white cursor-pointer'}>Rental</h1>
                        <PiBuildingApartmentFill className='ms-4 text-orange-500' />
                    </div>
                    <div className='ps-15 pt-1'>
                        <h1 onClick={() => { setland(false), sethouse(false), setflat(false), setrental(false), setcommercial(true), setindustrial(false) }} className={commercial ? "text-orange-500 cursor-pointer" : 'text-white cursor-pointer'}>Commercial</h1>
                        <HiOfficeBuilding className='ms-7 text-orange-500' />
                    </div>
                    <div className='ps-15 pt-1'>
                        <h1 onClick={() => { setland(false), sethouse(false), setflat(false), setrental(false), setcommercial(false), setindustrial(true) }} className={industrial ? "text-orange-500 cursor-pointer" : 'text-white cursor-pointer'}>Industrial</h1>
                        <MdFactory className='ms-6 text-orange-500' />
                    </div>
                </div>


                {land && 
                <div>
                    <div className='ms-150 mt-10'>
                        <label htmlFor="" className='block mb-3 text-white'>Property Type :</label>
                            <select value={propertydetails.propertytype} onChange={(e)=>setpropertydetails({...propertydetails,propertytype:e.target.value})} className='bg-gray-300 border-2 border-orange-500 w-60 h-8 rounded mb-3' name="" id="">
                                <option value="0" className='text-white'>Select Type</option>
                                <option value="Land" className='text-orange-500'>Land</option>
                                <option value="House" className='text-orange-500'>House</option>
                                <option value="Rental" className='text-orange-500'>Rental</option>
                                <option value="Flat" className='text-orange-500'>Flat/Apartment</option>
                                <option value="Commercial" className='text-orange-500'>Commercial</option>
                                <option value="Industrial" className='text-orange-500'>Industrial</option>
                            </select>
                    </div>
                    <div className='ms-120 pt-20'>
                        <label htmlFor="" className='block mb-3 text-white'>Property Title :</label>
                        <input value={propertydetails.propertytitle} onChange={(e)=>setpropertydetails({...propertydetails,propertytitle:e.target.value})} type="text" className='w-150 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter title' />
                    </div>
                    
                    <div className='ms-120'>
                        <label htmlFor="" className='block mt-5 mb-3 text-white'>Description :</label>
                        <textarea value={propertydetails.description} onChange={(e)=>setpropertydetails({...propertydetails,description:e.target.value})} rows={"4"} type="text" className='w-150 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter description' />
                    </div>
                    <div className='flex mt-20'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Land Type :</label>
                            <select value={propertydetails.selecttype} onChange={(e)=>setpropertydetails({...propertydetails,selecttype:e.target.value})} className='bg-gray-300 border-2 border-orange-500 w-60 h-8 rounded mb-3' name="" id="">
                                <option value="0" className='text-white'>Select Type</option>
                                <option value="residential" className='text-orange-500'>Residential</option>
                                <option value="commercial" className='text-orange-500'>Commercial</option>
                                <option value="agricultural" className='text-orange-500'>Agricultural</option>
                            </select>
                        </div>
                        <div className='ms-50'>
                            <label htmlFor="" className='block mb-3 text-white'>Area (Cent / Sqft / Acre / Hectare) :</label>
                            <input value={propertydetails.area} onChange={(e)=>setpropertydetails({...propertydetails,area:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Plot Width (ft) :</label>
                            <input value={propertydetails.plotwidth} onChange={(e)=>setpropertydetails({...propertydetails,plotwidth:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Plot Length (ft) :</label>
                            <input value={propertydetails.plotlength} onChange={(e)=>setpropertydetails({...propertydetails,plotlength:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Facing Direction (East, West, North, South) :</label>
                            <input value={propertydetails.facingdirection} onChange={(e)=>setpropertydetails({...propertydetails,facingdirection:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter direction' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Road Width (ft) :</label>
                            <input value={propertydetails.roadwidth} onChange={(e)=>setpropertydetails({...propertydetails,roadwidth:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border rounded-2 border-orange-500' placeholder='Enter value' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Price :</label>
                            <input value={propertydetails.price} onChange={(e)=>setpropertydetails({...propertydetails,price:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Price Unit (Per cent / total price) :</label>
                            <input value={propertydetails.priceperunit} onChange={(e)=>setpropertydetails({...propertydetails,priceperunit:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Location (city, district, state) :</label>
                            <input value={propertydetails.location} onChange={(e)=>setpropertydetails({...propertydetails,location:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Water Availability(y/n) :</label>
                            <input value={propertydetails.wateravailability} onChange={(e)=>setpropertydetails({...propertydetails,wateravailability:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Electricity (y/n) :</label>
                            <input value={propertydetails.electricity} onChange={(e)=>setpropertydetails({...propertydetails,electricity:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Fencing (y/n) :</label>
                            <input value={propertydetails.fencing} onChange={(e)=>setpropertydetails({...propertydetails,fencing:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='ms-120 mt-15'>
                            <label htmlFor="" className='block mb-3 text-white'>Address / Land Mark :</label>
                            <textarea value={propertydetails.address} onChange={(e)=>setpropertydetails({...propertydetails,address:e.target.value})} rows={"3"} type="text" className='w-150 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />

                        </div>
                        <div>
          {preview ? <img src={preview} alt="" style={{width:"200px",height:"200px"}}/>
          :
          <label htmlFor="uploadbookimg">
            <input onChange={(e)=>handlefile(e)} id='uploadbookimg' type="file" style={{display:"none"}}/>
            <img src="https://i.pinimg.com/736x/db/1c/88/db1c886cdd05cbdc5dff9716d6794e81.jpg" alt="" style={{width:"100px",height:"100px",marginLeft:"50px",marginTop:"90px"}}/>
          </label>}

          {preview && 
          <div className='mt-10 flex items-center gap-5'>
            { 
              alluploadimages.map((item)=>(
                <img src={item} alt="" style={{width:"50px",height:"50px"}}/>
              )
            )
            }
            {alluploadimages.length < 6 && 
                <label htmlFor="uploadbookimg" className='ms-4'>
                  <input onChange={(e)=>handlefile(e)} id='uploadbookimg' type="file" style={{display:"none"}} />
                  <img src="https://i.pinimg.com/736x/db/1c/88/db1c886cdd05cbdc5dff9716d6794e81.jpg" alt="" style={{width:"50px",height:"50px"}}/>
                </label>}


          </div>}
        </div>
                    </div>
                    <div>
                        <button onClick={handleaddproperty} className='bg-green-600 text-white border-2 hover:bg-green-100 hover:text-green-900 w-40 h-10 rounded-xl mb-20 mt-15 ms-175 hover:border-green-800'>Submit</button>
                    </div>


                </div>}
            </div>



            <div>
                {house && <div className='pt-20 bg-zinc-900'>
                    <div className='ms-150'>
                        <label htmlFor="" className='block mb-3 text-white'>Property Type :</label>
                            <select value={propertydetails.propertytype} onChange={(e)=>setpropertydetails({...propertydetails,propertytype:e.target.value})} className='bg-gray-300 border-2 border-orange-500 w-60 h-8 rounded mb-3' name="" id="">
                                <option value="0" className='text-white'>Select Type</option>
                                <option value="Land" className='text-orange-500'>Land</option>
                                <option value="House" className='text-orange-500'>House</option>
                                <option value="Rental" className='text-orange-500'>Rental</option>
                                <option value="Flat" className='text-orange-500'>Flat/Apartment</option>
                                <option value="Commercial" className='text-orange-500'>Commercial</option>
                                <option value="Industrial" className='text-orange-500'>Industrial</option>
                            </select>
                    </div>
                    <div className='ms-120'>
                        <label htmlFor="" className='block mb-3 text-white'>Property Title :</label>
                        <input value={propertydetails.propertytitle} onChange={(e)=>setpropertydetails({...propertydetails,propertytitle:e.target.value})} type="text" className='w-150 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter title' />
                    </div>
                    <div className='ms-120'>
                        <label htmlFor="" className='block mt-5 mb-3 text-white'>Description :</label>
                        <textarea value={propertydetails.description} onChange={(e)=>setpropertydetails({...propertydetails,description:e.target.value})} rows={"4"} type="text" className='w-150 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter description' />
                    </div>
                    <div className='flex mt-20'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Property Type :</label>
                            <select value={propertydetails.selecttype} onChange={(e)=>setpropertydetails({...propertydetails,selecttype:e.target.value})} className='bg-gray-300 border-2 border-orange-500 w-60 h-8 rounded mb-3' name="" id="">
                                <option value="0" className='text-white'>Select Type</option>
                                <option value="villa" className='text-orange-500'>Villa</option>
                                <option value="independenthouse" className='text-orange-500'>Independent House</option>
                                <option value="duplex" className='text-orange-500'>Duplex</option>
                            </select>
                        </div>
                        <div className='ms-50'>
                            <label htmlFor="" className='block mb-3 text-white'>BHK (1, 2, 3, 4…) :</label>
                            <input value={propertydetails.bhk} onChange={(e)=>setpropertydetails({...propertydetails,bhk:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Built-up Area (sqft) :</label>
                            <input value={propertydetails.builtuparea} onChange={(e)=>setpropertydetails({...propertydetails,builtuparea:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Carpet Area (sqft) :</label>
                            <input value={propertydetails.carpetarea} onChange={(e)=>setpropertydetails({...propertydetails,carpetarea:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Plot Area (cent/sqft) :</label>
                            <input value={propertydetails.plotarea} onChange={(e)=>setpropertydetails({...propertydetails,plotarea:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter direction' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Bedrooms :</label>
                            <input value={propertydetails.bedrooms} onChange={(e)=>setpropertydetails({...propertydetails,bedrooms:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border rounded-2 border-orange-500' placeholder='Enter value' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Bathrooms :</label>
                            <input value={propertydetails.bathrooms} onChange={(e)=>setpropertydetails({...propertydetails,bathrooms:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Balconies :</label>
                            <input value={propertydetails.balconies} onChange={(e)=>setpropertydetails({...propertydetails,balconies:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Floors (Ground + 1 etc.) :</label>
                            <input value={propertydetails.floors} onChange={(e)=>setpropertydetails({...propertydetails,floors:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Age of Property :</label>
                            <input value={propertydetails.ageofprop} onChange={(e)=>setpropertydetails({...propertydetails,ageofprop:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Furnishing (Fully, Semi, Unfurnished) :</label>
                            <input value={propertydetails.furnishing} onChange={(e)=>setpropertydetails({...propertydetails,furnishing:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Car Parking (Yes/No) :</label>
                            <input value={propertydetails.carparking} onChange={(e)=>setpropertydetails({...propertydetails,carparking:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Price :</label>
                            <input value={propertydetails.price} onChange={(e)=>setpropertydetails({...propertydetails,price:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Location (city, district, state) :</label>
                            <input value={propertydetails.location} onChange={(e)=>setpropertydetails({...propertydetails,location:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Water Availability :</label>
                            <input value={propertydetails.wateravailability} onChange={(e)=>setpropertydetails({...propertydetails,wateravailability:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='ms-120 mt-15'>
                            <label htmlFor="" className='block mb-3 text-white'>Address / Land Mark :</label>
                            <textarea value={propertydetails.address} onChange={(e)=>setpropertydetails({...propertydetails,address:e.target.value})} rows={"3"} type="text" className='w-150 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />

                        </div>
                        <div>
          {preview ? <img src={preview} alt="" style={{width:"200px",height:"200px"}}/>
          :
          <label htmlFor="uploadbookimg">
            <input onChange={(e)=>handlefile(e)} id='uploadbookimg' type="file" style={{display:"none"}}/>
            <img src="https://i.pinimg.com/736x/db/1c/88/db1c886cdd05cbdc5dff9716d6794e81.jpg" alt="" style={{width:"100px",height:"100px",marginLeft:"50px",marginTop:"90px"}}/>
          </label>}

          {preview && 
          <div className='mt-10 flex items-center gap-5'>
            { 
              alluploadimages.map((item)=>(
                <img src={item} alt="" style={{width:"50px",height:"50px"}}/>
              )
            )
            }
            {alluploadimages.length < 6 && 
                <label htmlFor="uploadbookimg" className='ms-4'>
                  <input onChange={(e)=>handlefile(e)} id='uploadbookimg' type="file" style={{display:"none"}} />
                  <img src="https://i.pinimg.com/736x/db/1c/88/db1c886cdd05cbdc5dff9716d6794e81.jpg" alt="" style={{width:"50px",height:"50px"}}/>
                </label>}


          </div>}
        </div>
                    </div>
                    <div>
                        <button onClick={handleaddproperty} className='bg-green-600 text-white border-2 hover:bg-green-100 hover:text-green-900 w-40 h-10 rounded-xl mb-20 mt-15 ms-175 hover:border-green-800'>Submit</button>
                    </div>


                </div>}
            </div>




            <div>
                {flat && 
                <div className='pt-20 bg-zinc-900'>
                    <div className='ms-150'>
                        <label htmlFor="" className='block mb-3 text-white'>Property Type :</label>
                            <select value={propertydetails.propertytype} onChange={(e)=>setpropertydetails({...propertydetails,propertytype:e.target.value})} className='bg-gray-300 border-2 border-orange-500 w-60 h-8 rounded mb-3' name="" id="">
                                <option value="0" className='text-white'>Select Type</option>
                                <option value="Land" className='text-orange-500'>Land</option>
                                <option value="House" className='text-orange-500'>House</option>
                                <option value="Rental" className='text-orange-500'>Rental</option>
                                <option value="Flat" className='text-orange-500'>Flat/Apartment</option>
                                <option value="Commercial" className='text-orange-500'>Commercial</option>
                                <option value="Industrial" className='text-orange-500'>Industrial</option>
                            </select>
                    </div>
                    <div className='ms-120'>
                        <label htmlFor="" className='block mb-3 text-white'>Property Title :</label>
                        <input value={propertydetails.propertytitle} onChange={(e)=>setpropertydetails({...propertydetails,propertytitle:e.target.value})} type="text" className='w-150 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter title' />
                    </div>
                    <div className='ms-120'>
                        <label htmlFor="" className='block mt-5 mb-3 text-white'>Description :</label>
                        <textarea value={propertydetails.description} onChange={(e)=>setpropertydetails({...propertydetails,description:e.target.value})} rows={"4"} type="text" className='w-150 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter description' />
                    </div>
                    <div className='flex mt-20'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Property Type :</label>
                            <select value={propertydetails.selecttype} onChange={(e)=>setpropertydetails({...propertydetails,selecttype:e.target.value})} className='bg-gray-300 border-2 border-orange-500 w-60 h-8 rounded mb-3' name="" id="">
                                <option value="0" className='text-white'>Select Type</option>
                                <option value="1BHK" className='text-orange-500'>1BHK</option>
                                <option value="2BHK" className='text-orange-500'>2BHK</option>
                                <option value="3BHK" className='text-orange-500'>3BHK</option>
                                <option value="4BHK" className='text-orange-500'>4BHK+</option>
                            </select>
                        </div>
                        <div className='ms-50'>
                            <label htmlFor="" className='block mb-3 text-white'>BHK (1, 2, 3, 4…) :</label>
                            <input value={propertydetails.bhk} onChange={(e)=>setpropertydetails({...propertydetails,bhk:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Built-up Area (sqft) :</label>
                            <input value={propertydetails.builtuparea} onChange={(e)=>setpropertydetails({...propertydetails,builtuparea:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Carpet Area (sqft) :</label>
                            <input value={propertydetails.carpetarea} onChange={(e)=>setpropertydetails({...propertydetails,carpetarea:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Bedrooms :</label>
                            <input value={propertydetails.bedrooms} onChange={(e)=>setpropertydetails({...propertydetails,bedrooms:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter number' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Bathrooms :</label>
                            <input value={propertydetails.bathrooms} onChange={(e)=>setpropertydetails({...propertydetails,bathrooms:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border rounded-2 border-orange-500' placeholder='Enter number' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Balconies :</label>
                            <input value={propertydetails.balconies} onChange={(e)=>setpropertydetails({...propertydetails,balconies:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter number' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Floor Number :</label>
                            <input value={propertydetails.floornumber} onChange={(e)=>setpropertydetails({...propertydetails,floornumber:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Total Floors :</label>
                            <input value={propertydetails.totalfloor} onChange={(e)=>setpropertydetails({...propertydetails,totalfloor:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter number' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Furnishing (Fully, Semi, Unfurnished) :</label>
                            <input value={propertydetails.furnishing} onChange={(e)=>setpropertydetails({...propertydetails,furnishing:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Age of Building :</label>
                            <input value={propertydetails.ageofprop} onChange={(e)=>setpropertydetails({...propertydetails,ageofprop:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Car Parking (Yes/No) :</label>
                            <input value={propertydetails.carparking} onChange={(e)=>setpropertydetails({...propertydetails,carparking:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Price :</label>
                            <input value={propertydetails.price} onChange={(e)=>setpropertydetails({...propertydetails,price:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Maintenance Fee :</label>
                            <input value={propertydetails.maintanancefee} onChange={(e)=>setpropertydetails({...propertydetails,maintanancefee:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Location (city, district, state) :</label>
                            <input value={propertydetails.location} onChange={(e)=>setpropertydetails({...propertydetails,location:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Lift (Yes/No) :</label>
                            <input value={propertydetails.lift} onChange={(e)=>setpropertydetails({...propertydetails,lift:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Security (Yes/No) :</label>
                            <input value={propertydetails.security} onChange={(e)=>setpropertydetails({...propertydetails,security:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Clubhouse (Yes/No) :</label>
                            <input value={propertydetails.clubhouse} onChange={(e)=>setpropertydetails({...propertydetails,clubhouse:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='ms-120 mt-15'>
                            <label htmlFor="" className='block mb-3 text-white'>Address / Land Mark :</label>
                            <textarea value={propertydetails.address} onChange={(e)=>setpropertydetails({...propertydetails,address:e.target.value})} rows={"3"} type="text" className='w-150 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />

                        </div>
                        <div>
          {preview ? <img src={preview} alt="" style={{width:"200px",height:"200px"}}/>
          :
          <label htmlFor="uploadbookimg">
            <input onChange={(e)=>handlefile(e)} id='uploadbookimg' type="file" style={{display:"none"}}/>
            <img src="https://i.pinimg.com/736x/db/1c/88/db1c886cdd05cbdc5dff9716d6794e81.jpg" alt="" style={{width:"100px",height:"100px",marginLeft:"50px",marginTop:"90px"}}/>
          </label>}

          {preview && 
          <div className='mt-10 flex items-center gap-5'>
            { 
              alluploadimages.map((item)=>(
                <img src={item} alt="" style={{width:"50px",height:"50px"}}/>
              )
            )
            }
            {alluploadimages.length < 6 && 
                <label htmlFor="uploadbookimg" className='ms-4'>
                  <input onChange={(e)=>handlefile(e)} id='uploadbookimg' type="file" style={{display:"none"}} />
                  <img src="https://i.pinimg.com/736x/db/1c/88/db1c886cdd05cbdc5dff9716d6794e81.jpg" alt="" style={{width:"50px",height:"50px"}}/>
                </label>}


          </div>}
        </div>
                    </div>
                    <div>
                        <button onClick={handleaddproperty} className='bg-green-600 text-white border-2 hover:bg-green-100 hover:text-green-900 w-40 h-10 rounded-xl mb-20 mt-15 ms-175 hover:border-green-800'>Submit</button>
                    </div>


                </div>}
            </div>




            <div>
                {rental && <div className='pt-20 bg-zinc-900'>
                    <div className='ms-150'>
                        <label htmlFor="" className='block mb-3 text-white'>Property Type :</label>
                            <select value={propertydetails.propertytype} onChange={(e)=>setpropertydetails({...propertydetails,propertytype:e.target.value})} className='bg-gray-300 border-2 border-orange-500 w-60 h-8 rounded mb-3' name="" id="">
                                <option value="0" className='text-white'>Select Type</option>
                                <option value="Land" className='text-orange-500'>Land</option>
                                <option value="House" className='text-orange-500'>House</option>
                                <option value="Rental" className='text-orange-500'>Rental</option>
                                <option value="Flat" className='text-orange-500'>Flat/Apartment</option>
                                <option value="Commercial" className='text-orange-500'>Commercial</option>
                                <option value="Industrial" className='text-orange-500'>Industrial</option>
                            </select>
                    </div>
                    <div className='ms-120'>
                        <label htmlFor="" className='block mb-3 text-white'>Property Title :</label>
                        <input value={propertydetails.propertytitle} onChange={(e)=>setpropertydetails({...propertydetails,propertytitle:e.target.value})} type="text" className='w-150 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter title' />
                    </div>
                    <div className='ms-120'>
                        <label htmlFor="" className='block mt-5 mb-3 text-white'>Description :</label>
                        <textarea value={propertydetails.description} onChange={(e)=>setpropertydetails({...propertydetails,description:e.target.value})} rows={"4"} type="text" className='w-150 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter description' />
                    </div>
                    <div className='flex mt-20'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Property Type :</label>
                            <select value={propertydetails.selecttype} onChange={(e)=>setpropertydetails({...propertydetails,selecttype:e.target.value})} className='bg-gray-300 border-2 border-orange-500 w-60 h-8 rounded mb-3' name="" id="">
                                <option value="0" className='text-white'>Select Type</option>
                                <option value="Room" className='text-orange-500'>Room</option>
                                <option value="House" className='text-orange-500'>House</option>
                                <option value="Flat" className='text-orange-500'>Flat</option>
                            </select>
                        </div>
                        <div className='ms-50'>
                            <label htmlFor="" className='block mb-3 text-white'>BHK (if applicable) :</label>
                            <input value={propertydetails.bhk} onChange={(e)=>setpropertydetails({...propertydetails,bhk:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter number' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Rent (per month) :</label>
                            <input value={propertydetails.rent} onChange={(e)=>setpropertydetails({...propertydetails,rent:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter price' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Deposit :</label>
                            <input value={propertydetails.deposit} onChange={(e)=>setpropertydetails({...propertydetails,deposit:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter price' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Built-up Area (sqft) :</label>
                            <input value={propertydetails.builtuparea} onChange={(e)=>setpropertydetails({...propertydetails,builtuparea:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Preferred Tenants (Family / Bachelor / Anyone) :</label>
                            <input value={propertydetails.preferredtenant} onChange={(e)=>setpropertydetails({...propertydetails,preferredtenant:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border rounded-2 border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Furnishing (Fully, Semi, Unfurnished) :</label>
                            <input value={propertydetails.furnishing} onChange={(e)=>setpropertydetails({...propertydetails,furnishing:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Bathrooms :</label>
                            <input value={propertydetails.bathrooms} onChange={(e)=>setpropertydetails({...propertydetails,bathrooms:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter number' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Parking(y/n) :</label>
                            <input value={propertydetails.carparking} onChange={(e)=>setpropertydetails({...propertydetails,carparking:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Age of Property :</label>
                            <input value={propertydetails.ageofprop} onChange={(e)=>setpropertydetails({...propertydetails,ageofprop:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter number' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Available From (Date) :</label>
                            <input value={propertydetails.availablefrom} onChange={(e)=>setpropertydetails({...propertydetails,availablefrom:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter date' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Electricity details :</label>
                            <input value={propertydetails.electricity} onChange={(e)=>setpropertydetails({...propertydetails,electricity:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Food facilities :</label>
                            <input value={propertydetails.foodfacility} onChange={(e)=>setpropertydetails({...propertydetails,foodfacility:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Location (city, district, state) :</label>
                            <input value={propertydetails.location} onChange={(e)=>setpropertydetails({...propertydetails,location:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter location' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Water Availability :</label>
                            <input value={propertydetails.wateravailability} onChange={(e)=>setpropertydetails({...propertydetails,wateravailability:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='ms-120 mt-15'>
                            <label htmlFor="" className='block mb-3 text-white'>Address / Land Mark :</label>
                            <textarea value={propertydetails.address} onChange={(e)=>setpropertydetails({...propertydetails,address:e.target.value})} rows={"3"} type="text" className='w-150 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />

                        </div>
                        <div>
          {preview ? <img src={preview} alt="" style={{width:"200px",height:"200px"}}/>
          :
          <label htmlFor="uploadbookimg">
            <input onChange={(e)=>handlefile(e)} id='uploadbookimg' type="file" style={{display:"none"}}/>
            <img src="https://i.pinimg.com/736x/db/1c/88/db1c886cdd05cbdc5dff9716d6794e81.jpg" alt="" style={{width:"100px",height:"100px",marginLeft:"50px",marginTop:"90px"}}/>
          </label>}

          {preview && 
          <div className='mt-10 flex items-center gap-5'>
            { 
              alluploadimages.map((item)=>(
                <img src={item} alt="" style={{width:"50px",height:"50px"}}/>
              )
            )
            }
            {alluploadimages.length < 6 && 
                <label htmlFor="uploadbookimg" className='ms-4'>
                  <input onChange={(e)=>handlefile(e)} id='uploadbookimg' type="file" style={{display:"none"}} />
                  <img src="https://i.pinimg.com/736x/db/1c/88/db1c886cdd05cbdc5dff9716d6794e81.jpg" alt="" style={{width:"50px",height:"50px"}}/>
                </label>}


          </div>}
        </div>
                    </div>
                    <div>
                        <button onClick={handleaddproperty} className='bg-green-600 text-white border-2 hover:bg-green-100 hover:text-green-900 w-40 h-10 rounded-xl mb-20 mt-15 ms-175 hover:border-green-800'>Submit</button>
                    </div>


                </div>}
            </div>


            <div>
                {commercial && <div className='pt-20 bg-zinc-900'>
                    <div className='ms-150'>
                        <label htmlFor="" className='block mb-3 text-white'>Property Type :</label>
                            <select value={propertydetails.propertytype} onChange={(e)=>setpropertydetails({...propertydetails,propertytype:e.target.value})} className='bg-gray-300 border-2 border-orange-500 w-60 h-8 rounded mb-3' name="" id="">
                                <option value="0" className='text-white'>Select Type</option>
                                <option value="Land" className='text-orange-500'>Land</option>
                                <option value="House" className='text-orange-500'>House</option>
                                <option value="Rental" className='text-orange-500'>Rental</option>
                                <option value="Flat" className='text-orange-500'>Flat/Apartment</option>
                                <option value="Commercial" className='text-orange-500'>Commercial</option>
                                <option value="Industrial" className='text-orange-500'>Industrial</option>
                            </select>
                    </div>
                    <div className='ms-120'>
                        <label htmlFor="" className='block mb-3 text-white'>Property Title :</label>
                        <input value={propertydetails.propertytitle} onChange={(e)=>setpropertydetails({...propertydetails,propertytitle:e.target.value})} type="text" className='w-150 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter title' />
                    </div>
                    <div className='ms-120'>
                        <label htmlFor="" className='block mt-5 mb-3 text-white'>Description :</label>
                        <textarea value={propertydetails.description} onChange={(e)=>setpropertydetails({...propertydetails,description:e.target.value})} rows={"4"} type="text" className='w-150 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter description' />
                    </div>
                    <div className='flex mt-20'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Property Type :</label>
                            <select value={propertydetails.selecttype} onChange={(e)=>setpropertydetails({...propertydetails,selecttype:e.target.value})} className='bg-gray-300 border-2 border-orange-500 w-60 h-8 rounded mb-3' name="" id="">
                                <option value="0" className='text-white'>Select Type</option>
                                <option value="Shop" className='text-orange-500'>Shop</option>
                                <option value="Office" className='text-orange-500'>Office</option>
                                <option value="Warehouse" className='text-orange-500'>Warehouse</option>
                                <option value="Showroom" className='text-orange-500'>Showroom</option>
                            </select>
                        </div>
                        <div className='ms-50'>
                            <label htmlFor="" className='block mb-3 text-white'>Carpet Area (sqft) :</label>
                            <input value={propertydetails.carpetarea} onChange={(e)=>setpropertydetails({...propertydetails,carpetarea:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Built-up Area (sqft) :</label>
                            <input value={propertydetails.builtuparea} onChange={(e)=>setpropertydetails({...propertydetails,builtuparea:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Floor Number :</label>
                            <input value={propertydetails.floornumber} onChange={(e)=>setpropertydetails({...propertydetails,floornumber:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter number' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Parking(y/n) :</label>
                            <input value={propertydetails.carparking} onChange={(e)=>setpropertydetails({...propertydetails,carparking:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Price / Rent :</label>
                            <input value={propertydetails.price} onChange={(e)=>setpropertydetails({...propertydetails,price:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border rounded-2 border-orange-500' placeholder='Enter price' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Washrooms :</label>
                            <input value={propertydetails.washrooms} onChange={(e)=>setpropertydetails({...propertydetails,washrooms:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Electricity Load Capacity :</label>
                            <input value={propertydetails.electricityloadcapacity} onChange={(e)=>setpropertydetails({...propertydetails,electricityloadcapacity:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Road Width :</label>
                            <input value={propertydetails.roadwidth} onChange={(e)=>setpropertydetails({...propertydetails,roadwidth:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Age of Property :</label>
                            <input value={propertydetails.ageofprop} onChange={(e)=>setpropertydetails({...propertydetails,ageofprop:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Lift Access :</label>
                            <input value={propertydetails.lift} onChange={(e)=>setpropertydetails({...propertydetails,lift:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Loading/Unloading Zone :</label>
                            <input value={propertydetails.loadingorunloadingzone} onChange={(e)=>setpropertydetails({...propertydetails,loadingorunloadingzone:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='ms-35 mt-10'>
                            <label htmlFor="" className='block mb-3 text-white'>Location (city, district, state) :</label>
                            <input value={propertydetails.location} onChange={(e)=>setpropertydetails({...propertydetails,location:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter location' />
                        </div>
                    <div className='flex'>
                        <div className='ms-120 mt-15'>
                            <label htmlFor="" className='block mb-3 text-white'>Address / Land Mark :</label>
                            <textarea value={propertydetails.address} onChange={(e)=>setpropertydetails({...propertydetails,address:e.target.value})} rows={"3"} type="text" className='w-150 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />

                        </div>
                        <div>
          {preview ? <img src={preview} alt="" style={{width:"200px",height:"200px"}}/>
          :
          <label htmlFor="uploadbookimg">
            <input onChange={(e)=>handlefile(e)} id='uploadbookimg' type="file" style={{display:"none"}}/>
            <img src="https://i.pinimg.com/736x/db/1c/88/db1c886cdd05cbdc5dff9716d6794e81.jpg" alt="" style={{width:"100px",height:"100px",marginLeft:"50px",marginTop:"90px"}}/>
          </label>}

          {preview && 
          <div className='mt-10 flex items-center gap-5'>
            { 
              alluploadimages.map((item)=>(
                <img src={item} alt="" style={{width:"50px",height:"50px"}}/>
              )
            )
            }
            {alluploadimages.length < 6 && 
                <label htmlFor="uploadbookimg" className='ms-4'>
                  <input onChange={(e)=>handlefile(e)} id='uploadbookimg' type="file" style={{display:"none"}} />
                  <img src="https://i.pinimg.com/736x/db/1c/88/db1c886cdd05cbdc5dff9716d6794e81.jpg" alt="" style={{width:"50px",height:"50px"}}/>
                </label>}


          </div>}
        </div>
                    </div>
                    <div>
                        <button onClick={handleaddproperty} className='bg-green-600 text-white border-2 hover:bg-green-100 hover:text-green-900 w-40 h-10 rounded-xl mb-20 mt-15 ms-175 hover:border-green-800'>Submit</button>
                    </div>


                </div>}
            </div>




            <div>
                {industrial && <div className='pt-20 bg-zinc-900'>
                    <div className='ms-150'>
                        <label htmlFor="" className='block mb-3 text-white'>Property Type :</label>
                            <select value={propertydetails.propertytype} onChange={(e)=>setpropertydetails({...propertydetails,propertytype:e.target.value})} className='bg-gray-300 border-2 border-orange-500 w-60 h-8 rounded mb-3' name="" id="">
                                <option value="0" className='text-white'>Select Type</option>
                                <option value="Land" className='text-orange-500'>Land</option>
                                <option value="House" className='text-orange-500'>House</option>
                                <option value="Rental" className='text-orange-500'>Rental</option>
                                <option value="Flat" className='text-orange-500'>Flat/Apartment</option>
                                <option value="Commercial" className='text-orange-500'>Commercial</option>
                                <option value="Industrial" className='text-orange-500'>Industrial</option>
                            </select>
                    </div>
                    <div className='ms-120'>
                        <label htmlFor="" className='block mb-3 text-white'>Property Title :</label>
                        <input value={propertydetails.propertytitle} onChange={(e)=>setpropertydetails({...propertydetails,propertytitle:e.target.value})} type="text" className='w-150 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter title' />
                    </div>
                    <div className='ms-120'>
                        <label htmlFor="" className='block mt-5 mb-3 text-white'>Description :</label>
                        <textarea value={propertydetails.description} onChange={(e)=>setpropertydetails({...propertydetails,description:e.target.value})} rows={"4"} type="text" className='w-150 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter description' />
                    </div>
                    <div className='flex mt-20'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Property Type :</label>
                            <select value={propertydetails.selecttype} onChange={(e)=>setpropertydetails({...propertydetails,selecttype:e.target.value})} className='bg-gray-300 border-2 border-orange-500 w-60 h-8 rounded mb-3' name="" id="">
                                <option value="0" className='text-white'>Select Type</option>
                                <option value="Factory" className='text-orange-500'>Factory</option>
                                <option value="Industrialland" className='text-orange-500'>Industrial Land</option>
                                <option value="Godown" className='text-orange-500'>Godown</option>
                                <option value="ColdStorage" className='text-orange-500'>Cold Storage</option>
                            </select>
                        </div>
                        <div className='ms-50'>
                            <label htmlFor="" className='block mb-3 text-white'>Total Area (sq ft) :</label>
                            <input value={propertydetails.area} onChange={(e)=>setpropertydetails({...propertydetails,area:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Plot Area (sq ft / cents / acres) :</label>
                            <input value={propertydetails.plotarea} onChange={(e)=>setpropertydetails({...propertydetails,plotarea:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Built-up Area (sq ft) :</label>
                            <input value={propertydetails.builtuparea} onChange={(e)=>setpropertydetails({...propertydetails,builtuparea:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter value' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Ceiling Height (ft) :</label>
                            <input value={propertydetails.ceilingheight} onChange={(e)=>setpropertydetails({...propertydetails,ceilingheight:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Flooring Type :</label>
                            <input value={propertydetails.flooringtype} onChange={(e)=>setpropertydetails({...propertydetails,flooringtype:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border rounded-2 border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Power Supply (kVA) :</label>
                            <input value={propertydetails.electricityloadcapacity} onChange={(e)=>setpropertydetails({...propertydetails,electricityloadcapacity:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Water Availability :</label>
                            <input value={propertydetails.wateravailability} onChange={(e)=>setpropertydetails({...propertydetails,wateravailability:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Road Access Width (ft) :</label>
                            <input value={propertydetails.roadwidth} onChange={(e)=>setpropertydetails({...propertydetails,roadwidth:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Parking Availability :</label>
                            <input value={propertydetails.carparking} onChange={(e)=>setpropertydetails({...propertydetails,carparking:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Loading/Unloading Dock :</label>
                            <input value={propertydetails.loadingorunloadingzone} onChange={(e)=>setpropertydetails({...propertydetails,loadingorunloadingzone:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Crane Facility :</label>
                            <input value={propertydetails.cranefacility} onChange={(e)=>setpropertydetails({...propertydetails,cranefacility:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Number of Rooms/Offices :</label>
                            <input value={propertydetails.noofrooms} onChange={(e)=>setpropertydetails({...propertydetails,noofrooms:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter number' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Fire Safety Certification :</label>
                            <input value={propertydetails.firesafety} onChange={(e)=>setpropertydetails({...propertydetails,firesafety:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Security Guard Facility :</label>
                            <input value={propertydetails.security} onChange={(e)=>setpropertydetails({...propertydetails,security:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='ms-35'>
                            <label htmlFor="" className='block mb-3 text-white'>Price or rent :</label>
                            <input value={propertydetails.price} onChange={(e)=>setpropertydetails({...propertydetails,price:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter price' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Negotiable(y/n) :</label>
                            <input value={propertydetails.negotiable} onChange={(e)=>setpropertydetails({...propertydetails,negotiable:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                        <div className='ms-20'>
                            <label htmlFor="" className='block mb-3 text-white'>Location(city,district,state) :</label>
                            <input value={propertydetails.location} onChange={(e)=>setpropertydetails({...propertydetails,location:e.target.value})} type="text" className='w-90 h-9 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='ms-120 mt-15'>
                            <label htmlFor="" className='block mb-3 text-white'>Address / Land Mark :</label>
                            <textarea value={propertydetails.address} onChange={(e)=>setpropertydetails({...propertydetails,address:e.target.value})} rows={"3"} type="text" className='w-150 bg-gray-200 border-2 rounded border-orange-500' placeholder='Enter details' />

                        </div>
                        <div>
          {preview ? <img src={preview} alt="" style={{width:"200px",height:"200px"}}/>
          :
          <label htmlFor="uploadbookimg">
            <input onChange={(e)=>handlefile(e)} id='uploadbookimg' type="file" style={{display:"none"}}/>
            <img src="https://i.pinimg.com/736x/db/1c/88/db1c886cdd05cbdc5dff9716d6794e81.jpg" alt="" style={{width:"100px",height:"100px",marginLeft:"50px",marginTop:"90px"}}/>
          </label>}

          {preview && 
          <div className='mt-10 flex items-center gap-5'>
            { 
              alluploadimages.map((item)=>(
                <img src={item} alt="" style={{width:"50px",height:"50px"}}/>
              )
            )
            }
            {alluploadimages.length < 6 && 
                <label htmlFor="uploadbookimg" className='ms-4'>
                  <input onChange={(e)=>handlefile(e)} id='uploadbookimg' type="file" style={{display:"none"}} />
                  <img src="https://i.pinimg.com/736x/db/1c/88/db1c886cdd05cbdc5dff9716d6794e81.jpg" alt="" style={{width:"50px",height:"50px"}}/>
                </label>}


          </div>}
        </div>
                    </div>
                    <div>
                        <button onClick={handleaddproperty} className='bg-green-600 text-white border-2 hover:bg-green-100 hover:text-green-900 w-40 h-10 rounded-xl mb-20 mt-15 ms-175 hover:border-green-800'>Submit</button>
                    </div>


                </div>}
            </div>



        </>
    )
}

export default Addprops