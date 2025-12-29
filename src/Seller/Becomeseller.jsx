import React, {  useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { becomesellerapi, checkSellerStatusAPI } from '../../services/allapi';


function Becomeseller() {


    const [sellerstatus, setsellerstatus] = useState({
        name: "",
        email: "",
        phone: "",
        idimage: []
    })
    console.log(sellerstatus);

    const [status, setStatus] = useState("user")
    const [token, setToken] = useState("")
    const [preview, setpreview] = useState([])

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files)


        setsellerstatus({
            ...sellerstatus,
            idimage: files
        })


        const imagePreviews = files.map(file =>
            URL.createObjectURL(file)
        )

        setpreview(imagePreviews)
    }



    useEffect(() => {
        setToken(sessionStorage.getItem("token"))
        

        const user = JSON.parse(sessionStorage.getItem("user"))
        if (user?.isseller) {
            setStatus(user.isseller)
        }
    }, [])


    const handleSubmit = async () => {
        const { name, email, phone, idimage } = sellerstatus

        if (!name || !email || !phone || idimage.length === 0) {
            toast.warning("All fields including ID proof are required")
            return
        }

        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("phone", phone)

        for (let file of idimage) {
            formData.append("idproof", file)
        }

        const reqHeader = {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
        }

        try {
            const result = await becomesellerapi(formData, reqHeader)

            if (result.status === 200) {
                toast.success("Seller request sent successfully")
                setStatus("pending")
                
                
                setsellerstatus({
                    name: "",
                    email: "",
                    phone: "",
                    idimage: []
                })

                setpreview([])


                const user = JSON.parse(sessionStorage.getItem("existinguser"))
                user.isseller = "pending"
                sessionStorage.setItem("user", JSON.stringify(user))
            }
        } catch (err) {
            toast.error("Something went wrong")
            console.log(err)
        }
    }

     useEffect(() => {
  const checkStatus = async () => {
    const token = sessionStorage.getItem("token")

    if (!token) return

    const headers = {
      Authorization: `Bearer ${token}`
    }

    const result = await checkSellerStatusAPI(headers)

    if (result.data.isseller === "approved") {
      alert(" Your seller request has been approved. Please relogin.")
    }
  }

  checkStatus()
}, [])

    return (
        <>

            <h1 className='text-2xl text-center mt-7'>Become A Seller</h1>

            {status !== "user" && <div className='flex bg-orange-400 w-50 p-2 text-white rounded-md ms-290'>
                <h1 className='text-xl'>Status :</h1>
                <p className='text-xl ms-5'>{status}</p>
            </div>}

            <div className='ms-140 mt-10 shadow w-100 p-15'>
                <label htmlFor="" className='block mb-1'>Name :</label>
                <input value={sellerstatus.name} onChange={(e) => setsellerstatus({ ...sellerstatus, name: e.target.value })} type="text" placeholder='Enter Your Name' className='border-2 bg-gray-100 rounded w-70 h-9 mb-5' />

                <label htmlFor="" className='block mb-1'>Email :</label>
                <input value={sellerstatus.email} onChange={(e) => setsellerstatus({ ...sellerstatus, email: e.target.value })} type="text" placeholder='Enter Email' className='border-2 bg-gray-100 rounded w-70 h-9 mb-5' />

                <label htmlFor="" className='block mb-1'>Phone :</label>
                <input value={sellerstatus.phone} onChange={(e) => setsellerstatus({ ...sellerstatus, phone: e.target.value })} type="text" placeholder='Enter phone number' className='border-2 bg-gray-100 rounded w-70 h-9 mb-5' />

                <label className='block mb-1'>Upload Valid ID Proof :
                    <img style={{ width: "70px", height: "70px" }} src="https://imgs.search.brave.com/Q8L_bbNHYobr9BaP1VMZnrlZF8itNyztys3i7WSsQOU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbmV0d29yay1k/YXRhLWJhY2t1cC1p/Y29uXzExODYzNjYt/MTI1ODgyLmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDAmcT04/MA" alt="" />
                    <input
                        type="file" style={{ display: "none" }}
                        multiple
                        onChange={handleImageUpload}
                    />
                </label>

                {preview.length > 0 && (
                    <div className="flex gap-3 mt-3">
                        {preview.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                className="w-24 h-24 object-cover border rounded"
                            />
                        ))}
                    </div>
                )}

                <button onClick={handleSubmit} className='bg-green-500 text-white border-2 hover:bg-white hover:text-green-600 hover:border-green-800 w-27 h-9 rounded-xl ms-20'>Send Request</button>

            </div>

        </>
    )
}

export default Becomeseller