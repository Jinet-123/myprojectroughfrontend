import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { loginapi, registerapi } from '../../services/allapi';
import { toast } from 'react-toastify';

function Auth({ register }) {

   const [userdetails, setuserdetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  console.log(userdetails);

  const navigate = useNavigate()

  const handleregister = async () => {
    const { username, email, password } = userdetails
    if (!username || !email || !password) {
      alert("fill completely")
    } else {
      const result = await registerapi(userdetails)
      console.log(result);
      if (result.status == 200) {
        toast.success(`registered successfully`)
        setuserdetails({
          username: "",
          email: "",
          password: ""

        })
        navigate("/login")
      } else if (result.status == 404) {
        toast.warning(result.response.data)
        setuserdetails({
          username: "",
          email: "",
          password: ""

        })

      } else {
        toast.error(`something went wrong`)
        setuserdetails({
          username: "",
          email: "",
          password: ""
        })
      }


    }


  }

 const handlelogin = async () => {
    const { email, password } = userdetails
    if (!email || !password) {
      toast.info("fill completely")
    } else {
      const result = await loginapi(userdetails)
      console.log(result);
      if (result.status == 200) {
        const user = result.data.existinguser
        sessionStorage.setItem("existinguser",JSON.stringify(result.data.existinguser))
        sessionStorage.setItem("token",result.data.token)
        toast.success(`Login success`)
        setuserdetails({
          username: "",
          email: "",
          password: ""
        })
        if (user.role === "admin") {
    navigate("/admindashboard")
  }
  else if (user.role === "seller") {
    navigate("/sellerprops")
  }
  else {
    navigate("/")
  }
      } else if (result.status == 404) {
        toast.warning(result.response.data)
        setuserdetails({
          username: "",
          email: "",
          password: ""
        })
      } else if (result.status == 401) {
        toast.warning(result.response.data)
      } else {
        toast.error(`something went wrong`)
        setuserdetails({
          username: "",
          email: "",
          password: ""
        })
      }

    }
  }

  return (
    <>
      <div className='bg-stone-800 w-full min-h-screen pt-10'>

        <div className='flex bg-stone-900 mx-36 mt-0'>
          <div>
            <img src="https://i.pinimg.com/736x/d8/ce/a9/d8cea917242d69e590292b4166b4386a.jpg" style={{ width: "500px", height: "630px", marginTop: "30px", marginLeft: "60px", marginBottom: "20px" }} alt="" />
          </div>
          <div className='mt-24 ms-20'>
            {register ? <h1 className='text-4xl text-white'>Create An Account</h1> : <h1 className='text-4xl text-white'>Login</h1>}
            {register ? <h1 className='text-md mt-5 text-white'>Already have an account <Link className='text-blue-500 underline'>Login</Link></h1> : <h1 className='text-md mt-5 text-white'>Not a User <Link className='text-blue-500 underline'>Register</Link></h1>}
            {register ? <div>
              <input value={userdetails?.username} onChange={(e)=>setuserdetails({...userdetails,username : e.target.value})} type="text" className='w-120 mt-8 h-12 border-3 rounded-md  border-blue-900 bg-gray-400' placeholder='Enter Username' /><br />
              <input value={userdetails?.email} onChange={(e)=>setuserdetails({...userdetails,email : e.target.value})} type="text" className='w-120 h-12 border-3 rounded-md mt-5 border-blue-900 bg-gray-400' placeholder='Enter Email' /><br />
              <input value={userdetails?.password} onChange={(e)=>setuserdetails({...userdetails,password : e.target.value})} type="password" className='w-120 h-12 border-3 rounded-md mt-5 border-blue-900 bg-gray-400' placeholder='Enter Password' /><br />
              
              <button onClick={handleregister} className='text-white ms-30 bg-orange-600 w-50 h-10 mt-8 rounded-md hover:bg-white border hover:border-orange-600 hover:text-orange-600'>Create Account</button>
            </div>
              :
              <div>
                <input value={userdetails?.username} onChange={(e)=>setuserdetails({...userdetails,username : e.target.value})} type="text" className='w-120 mt-8 h-12 border-3 rounded-md  border-blue-900 bg-gray-400' placeholder='Enter Username' /><br />
                <input value={userdetails?.email} onChange={(e)=>setuserdetails({...userdetails,email : e.target.value})} type="text" className='w-120 h-12 border-3 rounded-md mt-5 border-blue-900 bg-gray-400' placeholder='Enter Email' /><br />
                <input value={userdetails?.password} onChange={(e)=>setuserdetails({...userdetails,password : e.target.value})} type="password" className='w-120 h-12 border-3 rounded-md mt-5 border-blue-900 bg-gray-400' placeholder='Enter Password' /><br />
                
                <br />
                <button onClick={handlelogin} className='text-white ms-30 bg-orange-600 w-50 h-10 mt-8 rounded-md hover:bg-white border hover:border-orange-600 hover:text-orange-600'>Login</button>
              </div>

            }
          

          </div>
        </div>

      </div>

    </>
  )
}

export default Auth