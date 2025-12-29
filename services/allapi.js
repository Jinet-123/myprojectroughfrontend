import axios from "axios"
import baseurl from "./baseurl"
import commonapi from "./commonapi"


//register 
export const registerapi = async (reqbody) =>{
    return await commonapi("POST",`${baseurl}/register`,reqbody,{})
}

//login
export const loginapi = async (reqbody) =>{
    return await commonapi("POST",`${baseurl}/login`,reqbody,{})
}

//add property 
export const addpropertyapi = async (reqbody,reqheader) =>{
    return await commonapi("POST",`${baseurl}/addprops`,reqbody,reqheader)
}

// get home props
export const gethomepropsapi = async ()=>{
    return await commonapi("GET",`${baseurl}/homeprops`)
}

// get a property details
export const getapropertyapi = async (id, reqheader) =>{
    return await commonapi("GET",`${baseurl}/viewproperty/${id}`,{},reqheader)
}

//update user profile
export const updateprofileapi = async (reqbody,reqheader) =>{
    return await commonapi("PUT",`${baseurl}/updateuserprofile`,reqbody,reqheader)
}

// search props
export const getsearchpropsapi = async (location,propertytype) =>{
    return await commonapi("GET",`${baseurl}/searchprops?location=${location}&propertytype=${propertytype}`,{},{})
}

// get seller added properties 
export const getselleraddedpropsapi = async (reqheader) =>{
    return await commonapi("GET",`${baseurl}/selleraddedprops`,{},reqheader)
}

// update property on seller page 
export const updatepropertyapi = async (reqbody,reqheader,id) =>{
    return await commonapi("PUT",`${baseurl}/updateprop/${id}`,reqbody,reqheader)
}

// delete a property
export const deletepropertyapi = async (id) =>{
    return await commonapi("DELETE",`${baseurl}/deleteproperty/${id}`)
}

// mark as sold
export const updatepropertystatusapi = async (id) =>{
    return await commonapi("PUT",`${baseurl}/markassold/${id}`)
}

// become seller
export const becomesellerapi = async (reqbody,reqheader) =>{
    return await commonapi("POST",`${baseurl}/becomeseller`,reqbody,reqheader)
}

// sort and filter
export const sortFilterPropsAPI = async (data) => {
  return await axios.post(`${baseurl}/sort-filter-properties`,data);
}

// if interested 
export const addInterestedApi = async (reqbody) => {
  return await commonapi("POST",`${baseurl}/interested`,reqbody,{})
}

// get interested users for seller
export const getSellerInterestedApi = async (sellerEmail) => {
  return await commonapi("GET",`${baseurl}/interestedinseller/${sellerEmail}`)
}

// delete user interest request by seller
export const deleteuseraddedrequestsapi = async (id) =>{
    return await commonapi("DELETE",`${baseurl}/deleterequest/${id}`)
}

// add to wishlist
export const addToWishlistApi = async (reqbody) => {
  return await commonapi("POST", `${baseurl}/addtowishlist`, reqbody)
}

// remove from wishlist
export const deleteWishlistApi = async (id) => {
  return await commonapi("DELETE", `${baseurl}/wishlist/${id}`, "")
}

// get wishlist
export const getWishlistApi = async (userEmail) => {
  return await commonapi("GET", `${baseurl}/wishlist/${userEmail}`, "")
}


//....................admin.............................//

// get all become seller requests 
export const becomesellerrequestinadminapi = async (reqheader) =>{
    return await commonapi("GET",`${baseurl}/getallbecomesellerinadmin`,null,reqheader)
}

// approve seller 
export const approvesellerapi = async (id,reqheader) =>{
    return await commonapi("PUT",`${baseurl}/approveseller/${id}`,null,reqheader)
}

// reject seller
export const rejectsellerapi = async (id,reqheader) =>{
    return await commonapi("PUT",`${baseurl}/rejectseller/${id}`,null,reqheader)
}

// check seller status
export const checkSellerStatusAPI = async (headers) => {
  return await commonapi("GET",`${baseurl}/check-seller-status`,null,headers)
}

// get counts 
export const getAdminDashboardCountsAPI = async () => {
  return await commonapi("GET", `${baseurl}/dashboardcounts`, "", {});
};

// get all users in admin
export const getAllUsersAdminAPI = async () => {
  return await commonapi("GET",`${baseurl}/allusers`,"",{});
};
