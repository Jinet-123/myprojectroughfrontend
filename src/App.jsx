import { Route, Routes } from 'react-router-dom'
import './App.css'
import Wishlist from './Users/Wishlist'
import Auth from './Common/Auth'
import Landing from './Common/Landing'
import Profile from './Common/Profile'
import Viewpropertyy from './Common/Viewpropertyy'
import Admindashboard from './Admin/Admindashboard'
import Allusers from './Admin/Allusers'
import Allrequests from './Admin/Allrequests'
import Adminsidebar from './Admin/Adminsidebar'
import Sellersidebar from './Seller/Sellersidebar'

import Sellerproperties from './Seller/Sellerproperties'
import Approved from './Seller/Approved'
import Addprops from './Seller/Addprops'
import Propertyhome from './Common/Propertyhome'
import { ToastContainer } from 'react-toastify'
import Landproperty from './Common/Landproperty'
import Houseproperty from './Common/Houseproperty'
import Flatorapartproperty from './Common/Flatorapartproperty'
import Rentalproperty from './Common/Rentalproperty'
import Commercialproperty from './Common/Commercialproperty'
import Industrialproperty from './Common/Industrialproperty'
import Becomeseller from './Seller/Becomeseller'
import Requestsfromusers from './Seller/Requestsfromusers'

function App() {

  return (
    <>
      <Routes>

        {/* admin */}
        <Route path='/admindashboard' element={<Admindashboard />} />
        <Route path='/allusers' element={<Allusers />} />
        <Route path='/allrequests' element={<Allrequests />} />
        <Route path='/sidebar' element={<Adminsidebar />} />




        {/* seller */}
        
        <Route path='/sellerprops' element={<Sellerproperties />} />
        <Route path='/addprops' element={<Addprops />} />
        <Route path='/approved' element={<Approved />} />
        <Route path='/sellersidebar' element={<Sellersidebar />} />
      <Route path='/requestfromusers' element={<Requestsfromusers />} />

        {/* users */}
        <Route path='/wishlist' element={<Wishlist />} />



        {/* common */}

        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/' element={<Landing />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/propertyhome' element={<Propertyhome />} />
        <Route path='/viewproperty/:id' element={<Viewpropertyy />} />
        <Route path='/land' element={<Landproperty />} />
        <Route path='/house' element={<Houseproperty />} />
        <Route path='/flat' element={<Flatorapartproperty />} />
        <Route path='/rental' element={<Rentalproperty />} />
        <Route path='/commercial' element={<Commercialproperty />} />
        <Route path='/industrial' element={<Industrialproperty />} />
        <Route path='/becomeseller' element={<Becomeseller />} />
        

      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"

      />

    </>
  )
}

export default App
