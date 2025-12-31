import React, { useContext, useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { updateprofileapi } from '../../services/allapi'
import baseurl from '../../services/baseurl'
import { ProfileContext } from '../../context/ProfileContext'


function Editprofile() {

    const [offcanvas,setoffcanvas] = useState(false)
    const [preview,setpreview] = useState("")
    const [userdetails,setuserdetails] = useState({
        username : "",
        password : "",
        confirmpassword : "",
        bio : "",
        role : "",
        profile : ""
    })
    const [token,settoken] = useState("")
    const [existingprofile,setexistingprofile] = useState("")

    const { profile, setProfile } = useContext(ProfileContext);

    console.log(userdetails);
    console.log(existingprofile);

    const handleimageupload = (e) =>{
        setuserdetails({...userdetails,profile : e.target.files[0]})
        const url = URL.createObjectURL(e.target.files[0])
        setpreview(url)

    }

    const handleupdate = async () =>{
        const {username,password,confirmpassword,bio,role,profile} = userdetails
        if(!username || !password || !confirmpassword || !bio){
                toast.info(`fill completely`)
        }else{
            if(password != confirmpassword){
                toast.warning("invalid credentials")
            }else{
                //reqheader
    const reqheader = {
      "Authorization" : `Bearer ${token}`
    }
    const reqbody = new FormData()
    if(preview){
        for(let key in userdetails){
            reqbody.append(key,userdetails[key])
        }
        const result = await updateprofileapi(reqbody,reqheader)
        console.log(result);
        if(result.status == 200){
            toast.success('updated successfully')
            sessionStorage.setItem("existinguser",JSON.stringify(result.data))
            setProfile(result.data)
            setoffcanvas(false)
            
        }else{
                toast.error("something went wrong")
        }
        
    }else{
        const result = await updateprofileapi({username,password,bio,role,profile : existingprofile},reqheader)
        console.log(result);
        if(result.status == 200){
            toast.success('updated successfully')
            sessionStorage.setItem("existinguser",JSON.stringify(result.data))
            setoffcanvas(false)
        }else{
                toast.error("something went wrong")
        }
    }
            }
        }
    }

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            settoken(sessionStorage.getItem("token"))
            const user = JSON.parse(sessionStorage.getItem("existinguser"))
            setuserdetails({username : user.username,password: user.password,confirmpassword :user.password,bio : user.bio, role :user.role})
            setexistingprofile(user.profile)
            
        }
    },[])
    
    

  return (
    <>
    <button onClick={()=>setoffcanvas(true)} className='text-white bg-green-500 hover:text-green-700 hover:bg-white border-2 hover:border-green-600 w-30 h-10 rounded-md mt-8 ms-13'>Edit Profile
          </button>

          {offcanvas && <div>
            <div  className='fixed inset-0 bg-gray-500/75 w-full h-full'></div>
            <div className='bg-white h-full w-90 z-50 fixed top-0 left-0'> 
                <div className='bg-gray-900 px-3 py-4 flex justify-between text-white text-2xl'>
                    <h1>Edit user Profile</h1>
                    <button onClick={()=>setoffcanvas(false)}>X</button>
                </div>
                <div className='flex justify-center items-center flex-col my-5'>
                    <label htmlFor="profilepic">
                        <input onChange={(e)=>handleimageupload(e)} type="file" style={{display:"none"}} id='profilepic'/>
                        {existingprofile == "" ?<img src={preview ? preview :"https://i.pinimg.com/1200x/4c/85/31/4c8531dbc05c77cb7a5893297977ac89.jpg"} alt="" style={{width:"150px",height:"150px",borderRadius:"50%"}}/>
                        :
                         <img src={preview ? preview :`${baseurl}/Imguploads/${existingprofile}`} alt="" style={{width:"150px",height:"150px",borderRadius:"50%"}}/>}

                    </label>
                </div>
                <div className='mt-10 mb-3 w-full px-5'>
                    <label htmlFor="">Username :</label>
                    <input value={userdetails.username} onChange={(e)=>setuserdetails({...userdetails,username:e.target.value})} type="text" placeholder='username' className='w-full border border-gray-300 placeholder-gray-500 p-2 rounded'/>

                </div>
                <div className='mt-5 mb-3 w-full px-5'>
                    <label htmlFor="">Password :</label>
                    <input value={userdetails.password} onChange={(e)=>setuserdetails({...userdetails,password:e.target.value})} type="text" placeholder='password' className='w-full border border-gray-300 placeholder-gray-500 p-2 rounded'/>

                </div>
                <div className='mt-5 mb-3 w-full px-5'>
                    <label htmlFor="">Confirm Password :</label>
                    <input value={userdetails.password} onChange={(e)=>setuserdetails({...userdetails,password:e.target.value})} type="text" placeholder='confirm password' className='w-full border border-gray-300 placeholder-gray-500 p-2 rounded'/>

                </div>
                <div className='mt-5 mb-3 w-full px-5'>
                    <label htmlFor="">Bio :</label>
                    <textarea value={userdetails.bio} onChange={(e)=>setuserdetails({...userdetails,bio:e.target.value})} type="text" placeholder='bio' className='w-full border border-gray-300 placeholder-gray-500 p-2 rounded'/>

                </div>
                <div className='flex ms-45 mt-5 gap-5'>
                    <button className='w-13 h-8 rounded bg-red-500 text-white hover:bg-white hover:text-orange-600'>Reset</button>
                    <button onClick={handleupdate} className='w-16 h-8 rounded bg-green-500 text-white hover:bg-white hover:text-green-600'>Update</button>
                </div>
            </div>
          </div>}
    
    </>
  )
}

export default Editprofile