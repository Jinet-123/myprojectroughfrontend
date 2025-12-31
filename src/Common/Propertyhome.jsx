import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineColumnWidth } from 'react-icons/ai'
import { FaHeart, FaIndianRupeeSign, FaRegHeart } from 'react-icons/fa6'
import { IoIosHome, IoMdSearch } from 'react-icons/io'
import { IoBedOutline, IoLocationSharp, IoReorderThree } from 'react-icons/io5'
import { LuBath } from 'react-icons/lu'
import { MdOutlineLocationOn } from 'react-icons/md'
import { addToWishlistApi, gethomepropsapi, getsearchpropsapi, } from '../../services/allapi'
import { Link } from 'react-router-dom'
import baseurl from '../../services/baseurl'
import { toast } from 'react-toastify'
import { ProfileContext } from '../../context/ProfileContext'

function Propertyhome() {

    const [homeprops, sethomeprops] = useState([])
    const [searchkey, setsearchkey] = useState("")
    const [searchprops, setsearchprops] = useState([])
    const [propertytype, setpropertytype] = useState("all")
    const [hasSearched, setHasSearched] = useState(false)
    const propsToRender = hasSearched ? searchprops : homeprops

    const { profile } = useContext(ProfileContext);


    const searchproperties = async () => {
        try {
            setHasSearched(true)
            const result = await getsearchpropsapi(searchkey, propertytype)
            setsearchprops(result.data)


        } catch (error) {
            console.log(error);

        }
    }


    const gethomeprops = async () => {
        const result = await gethomepropsapi()
        console.log(result);
        sethomeprops(result.data)

    }

    useEffect(() => {
        gethomeprops()

    }, [])



    const handleWishlist = async (props) => {
        const user = JSON.parse(sessionStorage.getItem("existinguser"))


        const reqbody = {
            userEmail: user.email,
            propertyId: props._id,
            propertyTitle: props.propertytitle,
            propertyPrice: props.price,
            propertyImage: props.uploadimages[1]
        }

        try {
            await addToWishlistApi(reqbody)
            toast.success("Added to wishlist")
        } catch (error) {
            toast.error("Already in wishlist")
        }
    }





    return (
        <>
            <div className='bg-zinc-200'>

                <div className='flex bg-black h-12'>

                    <div className='flex text-white gap-10 ms-170 mt-3'>
                        <h1 className='hover:text-orange-500 cursor-pointer'>Home</h1>
                        <h1 className='hover:text-orange-500 cursor-pointer'>Profile</h1>
                    </div>
                    <div className='flex ms-100 gap-3'>
                        {profile?.profile ? (
                            <img
                                src={`${baseurl}/Imguploads/${profile.profile}`}
                                alt="profile"
                                className="w-11 h-11 rounded-full object-cover border"
                            />
                        ) : (
                            <img
                                src="https://i.pinimg.com/1200x/4c/85/31/4c8531dbc05c77cb7a5893297977ac89.jpg"
                                alt="default"
                                className="w-11 h-11 rounded-full border"
                            />
                       
                       )
                        }
                        <h1 className='text-white mt-2'>{profile?.username}</h1>
                    </div>

                </div>


                <div className='flex'>
                    <div className='border-2 bg-white w-170 h-12 mt-7 rounded-3xl ms-90'>
                        <div className='flex'>
                            <IoLocationSharp className='mt-3 ms-4 text-xl' />
                            <input value={searchkey} onChange={(e) => setsearchkey(e.target.value)} type="text" placeholder='Enter Location' className='w-50 h-10 ms-3 bg-white focus:border-none focus:outline-none' />
                            <div className="w-px h-7  mt-2 bg-gray-400"></div>
                            <IoIosHome className='mt-3 ms-4 text-xl' />
                            <select value={propertytype} onChange={(e) => setpropertytype(e.target.value)} name="" id="" className='focus:border-none focus:outline-none ms-3'>
                                <option value="all">All</option>
                                <option value="land">Land</option>
                                <option value="house">Houses</option>
                                <option value="flat">Flat/Apartments</option>
                                <option value="rental">Rental</option>
                                <option value="commercial">Commercial</option>
                                <option value="industrial">Industrial</option>
                            </select>
                            <div className="w-px h-7 ms-6 mt-2 bg-gray-400"></div>

                            <button onClick={searchproperties} className='flex mt-1 ms-6 bg-orange-500 p-1 text-white rounded-xl w-30 h-9 hover:text-orange-600 border hover:border-orange-600 hover:bg-white'><IoMdSearch className='text-xl ms-4 font-bold mt-1  white' />Search</button>


                        </div>

                    </div>
                    

                </div>

                <div className='text-xl mt-10 text-center'>
                    <h1>All Properties</h1>
                </div>


                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-15'>

                    {propsToRender.map((props) => (

                        <div>


                            <div className='bg-zinc-100 rounded-xl w-90 ms-20 mt-10 shadow-xl'>

                                <button onClick={() => handleWishlist(props)} className='absolute pt-7 ms-80 text-2xl hover:text-green-700 text-red-500 z-10'><FaHeart /></button>

                                <h1 className='bg-white absolute mt-6 ps-2 ms-9 z-10 w-23 h-8 pt-1 rounded-md text-md'>{props?.sellstatus}</h1>
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



                        </div>
                    ))}

                    {hasSearched && propsToRender.length === 0 && (
                        <h1 className="text-center text-gray-500 mt-10">
                            No properties found
                        </h1>
                    )}



                </div>


            </div>

        </>
    )
}

export default Propertyhome