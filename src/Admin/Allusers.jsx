import React, { useEffect, useState } from 'react'
import Adminsidebar from './Adminsidebar'
import { getAllUsersAdminAPI } from '../../services/allapi';


function Allusers() {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const result = await getAllUsersAdminAPI();

      console.log("Data is:", result.data); 

      if (result.status === 200) {
        setUsers(result.data.users); 
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
    <div className='grid grid-cols-[1fr_4fr]'>
      <div>
        <Adminsidebar/>
      </div>
      <div className='bg-stone-800' style={{marginLeft:"-26px"}}>
        <h1 className='text-3xl mt-5 ps-20 font-bold text-white'>ALL-USERS</h1>
        <div className='mt-10'>
          <table className='w-300 my-3 ms-4 shadow'>
              <thead>
                <tr>
                  
                  <th className='p-3 border border-purple-100 text-center text-indigo-600 border-lime-800 '>User Name</th>
                  <th className='p-3 border border-purple-100 text-center text-indigo-600 border-lime-800 '>Email</th>
                  <th className='p-3 border border-purple-100 text-center text-indigo-600 border-lime-800 '>Role</th>
                  <th className='p-3  text-center text-white border-gray-500 '></th>
                </tr>
              </thead>
              <tbody>
                
                <tr>
                  
                  <td className=' p-3 text-center text-white shadow'>Jinet KL</td>
                  <td className=' p-3 text-center text-white shadow'>jinetkl1@gmail.com</td>
                  <td className=' p-3 text-center text-white shadow'>Seller</td>
                  
                </tr>
              
                
              </tbody>

            </table>
        </div>



        </div>
       
        </div>
    
    </>
  )
}

export default Allusers