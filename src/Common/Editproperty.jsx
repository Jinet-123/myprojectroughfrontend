import React, { useEffect, useState } from "react"
import { FaRegEdit } from "react-icons/fa"
import { toast } from "react-toastify"
import { updatepropertyapi } from "../../services/allapi"
import baseurl from "../../services/baseurl"

function EditProperty({ property }) {

  const [open, setOpen] = useState(false)
  const [token, setToken] = useState("")
  const [preview, setPreview] = useState([])

  const [data, setData] = useState({
    propertytitle :"", propertytype :"", description :"", selecttype :"", area :"",
    plotwidth :"", plotlength :"", facingdirection :"", roadwidth :"", price :"",
    priceperunit :"", location :"", wateravailability :"", electricity :"",
    fencing :"", address :"", bhk :"", builtuparea :"", carpetarea :"", plotarea :"",
    bedrooms :"", bathrooms :"", balconies :"", floors :"", ageofprop :"",
    furnishing :"", carparking :"", totalfloor :"", floornumber :"",
    maintanancefee :"", lift :"", security :"", clubhouse :"", rent :"", deposit :"",
    preferredtenant :"", availablefrom :"", foodfacility :"", washrooms :"",
    electricityloadcapacity :"", loadingorunloadingzone :"",
    ceilingheight :"", flooringtype :"", cranefacility :"", noofrooms :"",
    firesafety :"", negotiable :"", uploadimages :[]
  })

  const [existingImages, setExistingImages] = useState([])

  
  const handleImages = (e) => {
    const files = Array.from(e.target.files)
    setData({ ...data, uploadimages: files })
    setPreview(files.map(file => URL.createObjectURL(file)))
  }

  
  const handleUpdate = async () => {
    if (!data.propertytitle || !data.description || !data.location) {
      toast.warning("Fill required fields")
      return
    }

    const formData = new FormData()

    Object.keys(data).forEach(key => {
      if (key === "uploadimages" && data.uploadimages.length > 0) {
  data.uploadimages.forEach(img => {
    formData.append("uploadimages", img)
  })
} else {
        formData.append(key, data[key])
      }
    })

    const reqheader = {
      Authorization: `Bearer ${token}`
    }
    formData.append(
  "existingImages",
  JSON.stringify(existingImages)
)

    const result = await updatepropertyapi(formData, reqheader, property._id)

    if (result.status === 200) {
      toast.success("Property updated")
      setOpen(false)
    } else {
      toast.error("Update failed")
    }
  }

  
  useEffect(() => {
    const token = sessionStorage.getItem("token")
  setToken(token)

  if (property) {
    setData({
      propertytitle : property.propertytitle, propertytype :property.propertytype, description :property.description, selecttype :property.selecttype, area :property.area,
    plotwidth :property.plotwidth, plotlength :property.plotlength, facingdirection :property.facingdirection, roadwidth :property.roadwidth, price :property.price,
    priceperunit :property.priceperunit, location :property.location, wateravailability :property.wateravailability, electricity :property.electricity,
    fencing :property.fencing, address :property.address, bhk :property.bhk, builtuparea :property.builtuparea, carpetarea :property.carpetarea, plotarea :property.plotarea,
    bedrooms :property.bedrooms, bathrooms :property.bathrooms, balconies :property.balconies, floors :property.floors, ageofprop :property.ageofprop,
    furnishing :property.furnishing, carparking :property.carparking, totalfloor :property.totalfloor, floornumber :property.floornumber,
    maintanancefee :property.maintanancefee, lift :property.lift, security :property.security, clubhouse :property.clubhouse, rent :property.rent, deposit :property.deposit,
    preferredtenant :property.preferredtenant, availablefrom :property.availablefrom, foodfacility :property.foodfacility, washrooms :property.washrooms,
    electricityloadcapacity :property.electricityloadcapacity, loadingorunloadingzone :property.loadingorunloadingzone,
    ceilingheight :property.ceilingheight, flooringtype :property.flooringtype, cranefacility :property.cranefacility, noofrooms :property.noofrooms,
    firesafety :property.firesafety, negotiable :property.negotiable, uploadimages :[]
    })

    setExistingImages(property.uploadimages || [])
  }
}, [property])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className='bg-green-600 w-15 h-8 text-white rounded-md border-2 hover:border-green-800 hover:bg-white hover:text-black'
      >
       Edit
      </button>

      {open && (
        <>
          <div className="fixed inset-0 bg-black/60"></div>

          <div className="fixed left-0 top-0 h-full w-[430px] bg-white z-50 overflow-y-auto">

            
            <div className="bg-gray-900 text-white p-4 flex justify-between">
              <h2>Edit Property</h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            
            <div className="p-4">
              <label htmlFor="upimage">
                <img src="https://imgs.search.brave.com/AUJw3plfST11mTp6UMeh1Y-rpid7o25zj-AquUfcd8E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMDI1NC8xMDI1/NDUxMy5wbmc_c2Vt/dD1haXNfd2hpdGVf/bGFiZWw" style={{width:"50px",height:"50px"}} alt="" />
              <input type="file" id="upimage" style={{display:"none"}} multiple onChange={handleImages} />
              </label>
              <div className="grid grid-cols-3 gap-2 mt-3">
                {preview.length
                  ? preview.map((img, i) => (
                      <img key={i} src={img} className="h-20 w-full rounded" />
                    ))
                  : existingImages.map((img, i) => (
                      <img
                        key={i}
                        src={`${baseurl}/Imguploads/${img}`}
                        className="h-20 w-full rounded"
                      />
                    ))}
              </div>
            </div>

            {/* COMMON FIELDS */}
            <div className="p-4 space-y-3">
              <label htmlFor="">propertytitle :</label>
              <input value={data.propertytitle}
                onChange={e => setData({ ...data, propertytitle: e.target.value })}
                placeholder="Property Title" className="w-full border p-2" />

                    <label htmlFor="">Propertytype :</label>
              <select value={data.propertytype}
                onChange={e => setData({ ...data, propertytype: e.target.value })}
                className="w-full border p-2">
                <option value="">Select Type</option>
                <option value="land">Land</option>
                <option value="house">House</option>
                <option value="flat">Flat</option>
                <option value="rental">Rental</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>

              </select>

              
                    <label htmlFor="">Description :</label>
              <textarea value={data.description}
                onChange={e => setData({ ...data, description: e.target.value })}
                placeholder="Description" className="w-full border p-2" />

                    <label htmlFor="">Location :</label>
              <input value={data.location}
                onChange={e => setData({ ...data, location: e.target.value })}
                placeholder="Location" className="w-full border p-2" />

                    <label htmlFor="">Price :</label>
              <input value={data.price || data.rent || ""}
                onChange={e => setData({ ...data, price: e.target.value })}
                placeholder="Price" className="w-full border p-2" />
            </div>

            {/* Land */}
            {data.propertytype === "land" && (
              <div className="p-4 space-y-3 bg-gray-50">
                <label htmlFor="">Area :</label>
                <input placeholder="Area"
                  value={data.area}
                  onChange={e => setData({ ...data, area: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Plotwidth :</label>
                <input placeholder="Plot Width"
                  value={data.plotwidth}
                  onChange={e => setData({ ...data, plotwidth: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Plotlength :</label>
                <input placeholder="Plot length"
                  value={data.plotlength}
                  onChange={e => setData({ ...data, plotlength: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Facing Direction :</label>
                <input placeholder="Facing direction"
                  value={data.facingdirection}
                  onChange={e => setData({ ...data, facingdirection: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Road Width :</label>
                <input placeholder="Road Width"
                  value={data.roadwidth}
                  onChange={e => setData({ ...data, roadwidth: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Price per unit :</label>
                <input placeholder="Price per Unit"
                  value={data.priceperunit}
                  onChange={e => setData({ ...data, priceperunit: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Water Availability :</label>
                <input placeholder="Water Availability"
                  value={data.wateravailability}
                  onChange={e => setData({ ...data, wateravailability: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Electricity :</label>
                <input placeholder="Electricity"
                  value={data.electricity}
                  onChange={e => setData({ ...data, electricity: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Fencing :</label>
                <input placeholder="Fencing"
                  value={data.fencing}
                  onChange={e => setData({ ...data, fencing: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Propertytype :</label>
                <textarea rows={2} placeholder="Address/Landmark"
                  value={data.address}
                  onChange={e => setData({ ...data, address: e.target.value })}
                  className="w-full border p-2" />
                
                
              </div>
            )}

           {/* House */}
            {data.propertytype === "house" && (
              <div className="p-4 space-y-3 bg-gray-50">
                <label htmlFor="">BHK :</label>
                <input placeholder="BHK"
                  value={data.bhk}
                  onChange={e => setData({ ...data, bhk: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Builtup Area :</label>
                <input placeholder="Builtup Area"
                  value={data.builtuparea}
                  onChange={e => setData({ ...data, builtuparea: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Carpet Area :</label>
                <input placeholder="Carpet Area"
                  value={data.carpetarea}
                  onChange={e => setData({ ...data, carpetarea: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Plot Area :</label>
                <input placeholder="Plot Area"
                  value={data.plotarea}
                  onChange={e => setData({ ...data, plotarea: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Bedrooms :</label>
                <input placeholder="Bedrooms"
                  value={data.bedrooms}
                  onChange={e => setData({ ...data, bedrooms: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Bathrooms :</label>
                <input placeholder="Bathrooms"
                  value={data.bathrooms}
                  onChange={e => setData({ ...data, bathrooms: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Balconies :</label>
                <input placeholder="Balconies"
                  value={data.balconies}
                  onChange={e => setData({ ...data, balconies: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Floors :</label>
                <input placeholder="Floors"
                  value={data.floors}
                  onChange={e => setData({ ...data, floors: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Age of Property :</label>
                <input placeholder="Age of property"
                  value={data.ageofprop}
                  onChange={e => setData({ ...data, ageofprop: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Furnishing :</label>
                <input placeholder="Furnishing"
                  value={data.furnishing}
                  onChange={e => setData({ ...data, furnishing: e.target.value })}
                  className="w-full border p-2" />
                
                 <label htmlFor="">Car parking :</label>
                <input placeholder="Car parking"
                  value={data.carparking}
                  onChange={e => setData({ ...data, carparking: e.target.value })}
                  className="w-full border p-2" />

                   <label htmlFor="">Water Availability :</label>
                <input placeholder="Water Availability"
                  value={data.wateravailability}
                  onChange={e => setData({ ...data, wateravailability: e.target.value })}
                  className="w-full border p-2" />

                   <label htmlFor="">Address/landmark :</label>
                <textarea rows={2} placeholder="Address/landmark"
                  value={data.address}
                  onChange={e => setData({ ...data, address: e.target.value })}
                  className="w-full border p-2" />
                
              </div>
            )}

            {/* flat */}
            {data.propertytype === "flat" && (
              <div className="p-4 space-y-3 bg-gray-50">
                <label htmlFor="">Builtup Area :</label>
                <input placeholder="Builtup area"
                  value={data.builtuparea}
                  onChange={e => setData({ ...data, builtuparea: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Carpet Area :</label>
                <input placeholder="Carpet Area"
                  value={data.carpetarea}
                  onChange={e => setData({ ...data, carpetarea: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Bedrooms :</label>
                <input placeholder="Bedrooms"
                  value={data.bedrooms}
                  onChange={e => setData({ ...data, bedrooms: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Bathrooms :</label>
                <input placeholder="Bathrooms"
                  value={data.bathrooms}
                  onChange={e => setData({ ...data, bathrooms: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Balconies :</label>
                <input placeholder="Balconies"
                  value={data.balconies}
                  onChange={e => setData({ ...data, balconies: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Floor No :</label>
                <input placeholder="Floor Number"
                  value={data.floornumber}
                  onChange={e => setData({ ...data, floornumber: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Total Floors :</label>
                <input placeholder="Total floors"
                  value={data.totalfloor}
                  onChange={e => setData({ ...data, totalfloor: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Furnishing :</label>
                <input placeholder="Furnishing"
                  value={data.furnishing}
                  onChange={e => setData({ ...data, furnishing: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Age of Property :</label>
                <input placeholder="Age of property"
                  value={data.ageofprop}
                  onChange={e => setData({ ...data, ageofprop: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Car parking :</label>
                <input placeholder="Car parking"
                  value={data.carparking}
                  onChange={e => setData({ ...data, carparking: e.target.value })}
                  className="w-full border p-2" />
                
                 <label htmlFor="">Maintanance fee :</label>
                <input placeholder="maintanance fee"
                  value={data.maintanancefee}
                  onChange={e => setData({ ...data, maintanancefee: e.target.value })}
                  className="w-full border p-2" />

                   <label htmlFor="">Lift :</label>
                <input placeholder="Lift Access"
                  value={data.lift}
                  onChange={e => setData({ ...data, lift: e.target.value })}
                  className="w-full border p-2" />

                   <label htmlFor="">Security :</label>
                <input placeholder="Security"
                  value={data.security}
                  onChange={e => setData({ ...data, security: e.target.value })}
                  className="w-full border p-2" />

                   <label htmlFor="">Clubhouse :</label>
                <input placeholder="Clubhouse"
                  value={data.clubhouse}
                  onChange={e => setData({ ...data, clubhouse: e.target.value })}
                  className="w-full border p-2" />

                   <label htmlFor="">Address/landmark :</label>
                <textarea rows={2} placeholder="Address/landmark"
                  value={data.address}
                  onChange={e => setData({ ...data, address: e.target.value })}
                  className="w-full border p-2" />
                
              </div>
            )}

            {/* rental */}
            {data.propertytype === "rental" && (
              <div className="p-4 space-y-3 bg-gray-50">
                <label htmlFor="">BHK (if any) :</label>
                <input placeholder="BHK"
                  value={data.bhk}
                  onChange={e => setData({ ...data, bhk: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Rent(per month) :</label>
                <input placeholder="rent"
                  value={data.rent || ""}
                  onChange={e => setData({ ...data, rent: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Deposit :</label>
                <input placeholder="Deposit"
                  value={data.deposit || ""}
                  onChange={e => setData({ ...data, deposit: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Builtup Area :</label>
                <input placeholder="Builtup Area"
                  value={data.builtuparea}
                  onChange={e => setData({ ...data, builtuparea: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">preferredtenant :</label>
                <input placeholder="Preferredtenant"
                  value={data.preferredtenant}
                  onChange={e => setData({ ...data, preferredtenant: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Furnishing :</label>
                <input placeholder="Furnishing"
                  value={data.furnishing}
                  onChange={e => setData({ ...data, furnishing: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Bathrooms :</label>
                <input placeholder="Bathrooms"
                  value={data.bathrooms}
                  onChange={e => setData({ ...data, bathrooms: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Parking :</label>
                <input placeholder="Parking"
                  value={data.carparking}
                  onChange={e => setData({ ...data, carparking: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Age of property :</label>
                <input placeholder="Age of property"
                  value={data.ageofprop}
                  onChange={e => setData({ ...data, ageofprop: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Available From :</label>
                <input placeholder="Available from"
                  value={data.availablefrom}
                  onChange={e => setData({ ...data, availablefrom: e.target.value })}
                  className="w-full border p-2" />
                
                 <label htmlFor="">Electricity :</label>
                <input placeholder="Electricity"
                  value={data.electricity}
                  onChange={e => setData({ ...data, electricity: e.target.value })}
                  className="w-full border p-2" />

                   <label htmlFor="">Food facility :</label>
                <input placeholder="Food Facility"
                  value={data.foodfacility}
                  onChange={e => setData({ ...data, foodfacility: e.target.value })}
                  className="w-full border p-2" />

                   <label htmlFor="">Water Availability :</label>
                <input placeholder="Water Availability"
                  value={data.wateravailability}
                  onChange={e => setData({ ...data, wateravailability: e.target.value })}
                  className="w-full border p-2" />


                   <label htmlFor="">Address/landmark :</label>
                <textarea rows={2} placeholder="Address/landmark"
                  value={data.address}
                  onChange={e => setData({ ...data, address: e.target.value })}
                  className="w-full border p-2" />
                
              </div>
            )}

            {/* commercial */}
            {data.propertytype === "commercial" && (
              <div className="p-4 space-y-3 bg-gray-50">
                <label htmlFor="">Builtup Area :</label>
                <input placeholder="Builtup area"
                  value={data.builtuparea}
                  onChange={e => setData({ ...data, builtuparea: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Carpet Area :</label>
                <input placeholder="Carpet Area"
                  value={data.carpetarea}
                  onChange={e => setData({ ...data, carpetarea: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Floor No :</label>
                <input placeholder="Floor No"
                  value={data.floornumber}
                  onChange={e => setData({ ...data, floornumber: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Parking :</label>
                <input placeholder="Parking"
                  value={data.carparking}
                  onChange={e => setData({ ...data, carparking: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Price/rent :</label>
                <input placeholder="Price/rent"
                  value={data.rent || data.price}
                  onChange={e => setData({ ...data, rent: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Washrooms :</label>
                <input placeholder="Washrooms"
                  value={data.washrooms}
                  onChange={e => setData({ ...data, washrooms: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Electricity Load Capacity :</label>
                <input placeholder="Electricity load capacity"
                  value={data.electricityloadcapacity}
                  onChange={e => setData({ ...data, electricityloadcapacity: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Road width :</label>
                <input placeholder="Road width"
                  value={data.roadwidth}
                  onChange={e => setData({ ...data, roadwidth: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Age of Property :</label>
                <input placeholder="Age of property"
                  value={data.ageofprop}
                  onChange={e => setData({ ...data, ageofprop: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Lift Access :</label>
                <input placeholder="Lift Access"
                  value={data.lift}
                  onChange={e => setData({ ...data, lift: e.target.value })}
                  className="w-full border p-2" />
                
                 <label htmlFor="">Loading/Unloading zone :</label>
                <input placeholder="Loading/unloading zone"
                  value={data.loadingorunloadingzone}
                  onChange={e => setData({ ...data, loadingorunloadingzone: e.target.value })}
                  className="w-full border p-2" />

                   <label htmlFor="">Address/landmark :</label>
                <textarea rows={2} placeholder="Address/landmark"
                  value={data.address}
                  onChange={e => setData({ ...data, address: e.target.value })}
                  className="w-full border p-2" />
                
              </div>
            )}

            {/* industrial */}
            {data.propertytype === "industrial" && (
              <div className="p-4 space-y-3 bg-gray-50">
                <label htmlFor="">Total Area :</label>
                <input placeholder="Total area"
                  value={data.area}
                  onChange={e => setData({ ...data, area: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Builtup Area :</label>
                <input placeholder="Builtup Area"
                  value={data.builtuparea}
                  onChange={e => setData({ ...data, builtuparea: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Ceiling Height :</label>
                <input placeholder="Ceiling Height"
                  value={data.ceilingheight}
                  onChange={e => setData({ ...data, ceilingheight: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Flooring Type :</label>
                <input placeholder="Flooring Type"
                  value={data.flooringtype}
                  onChange={e => setData({ ...data, flooringtype: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Power Supply :</label>
                <input placeholder="Power Supply"
                  value={data.electricityloadcapacity}
                  onChange={e => setData({ ...data, electricityloadcapacity: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Water Availability :</label>
                <input placeholder="Water Availability"
                  value={data.wateravailability}
                  onChange={e => setData({ ...data, wateravailability: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Road Access Width :</label>
                <input placeholder="Road Access Width"
                  value={data.roadwidth}
                  onChange={e => setData({ ...data, roadwidth: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Parking :</label>
                <input placeholder="Parking"
                  value={data.carparking}
                  onChange={e => setData({ ...data, carparking: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Loading/unloading Facility :</label>
                <input placeholder="Loading/unloading Facility"
                  value={data.loadingorunloadingzone}
                  onChange={e => setData({ ...data, loadingorunloadingzone: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Crane facility :</label>
                <input placeholder="Crane facility"
                  value={data.cranefacility}
                  onChange={e => setData({ ...data, cranefacility: e.target.value })}
                  className="w-full border p-2" />
                
                 <label htmlFor="">No of rooms :</label>
                <input placeholder="No of rooms"
                  value={data.noofrooms}
                  onChange={e => setData({ ...data, noofrooms: e.target.value })}
                  className="w-full border p-2" />

                   <label htmlFor="">Fire safety :</label>
                <input placeholder="Fire safety"
                  value={data.firesafety}
                  onChange={e => setData({ ...data, firesafety: e.target.value })}
                  className="w-full border p-2" />

                   <label htmlFor="">Security :</label>
                <input placeholder="Security"
                  value={data.security}
                  onChange={e => setData({ ...data, security: e.target.value })}
                  className="w-full border p-2" />

                   <label htmlFor="">Price/rent :</label>
                <input placeholder="Price or Rent"
                  value={data.price || data.rent || ""}
                  onChange={e => setData({ ...data, price: e.target.value })}
                  className="w-full border p-2" />

                  <label htmlFor="">Negotiable :</label>
                <input placeholder="Negotiable"
                  value={data.negotiable}
                  onChange={e => setData({ ...data, negotiable: e.target.value })}
                  className="w-full border p-2" />

                   <label htmlFor="">Address/landmark :</label>
                <textarea rows={2} placeholder="Address/landmark"
                  value={data.address}
                  onChange={e => setData({ ...data, address: e.target.value })}
                  className="w-full border p-2" />
                
              </div>
            )}

            
            <div className="p-4 flex justify-end gap-4">
              <button onClick={() => setOpen(false)}
                className="bg-red-500 text-white px-4 py-2">
                Cancel
              </button>
              <button onClick={handleUpdate}
                className="bg-green-600 text-white px-4 py-2">
                Update
              </button>
            </div>

          </div>
        </>
      )}
    </>
  )
}

export default EditProperty
