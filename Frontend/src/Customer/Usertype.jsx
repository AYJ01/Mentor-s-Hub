import React from 'react'
import { useState } from 'react';
import api from '../api.cjs';

const Usertype = () => {
    const usertype = sessionStorage.getItem('usertype');
    const userid = sessionStorage.getItem('user');
    const [userType, setUserType] = useState(null);
    const dataApi = api().dataApi;
    async function submitForm() {
  if (userType) {
    try {
      console.log("Submitting form...");
      const response = await dataApi('update_usertype/', 'PUT', {
        usertype: userType,
        userid: userid,
      });
      if (response) {
        console.log('✅ User type updated:', response);
        sessionStorage.setItem('usertype', userType);
        alert('User type updated successfully!');
        if (userType === 'mentor') {
            location.href = '/mentor/mentorhome';
        }
        else {
            location.href = '/user/userhome';
        }
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  }
}

  return (
    <>
    <section className='w-screen h-screen text-center content-center bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600'>
        <h2 className='text-2xl font-bold'>Which type of User you are ?</h2>
        <div className='flex content-center w-fit mx-auto mt-20'>
        <div className='p-4 rounded-xl mx-4 text-white font-bold bg-black'>
            <img onClick={()=>(setUserType('user'),submitForm())} className='lg:h-40 lg:w-50 w-30 h-30 mx-auto rounded-full  object-cover mx-10' src="https://img.freepik.com/premium-vector/job-seeker-illustration-concept_225067-151.jpg" alt="" />
            User
        </div>
        <div className='bg-black p-4 rounded-xl mx-4 text-white font-bold'>
            <img onClick={()=>(setUserType('mentor'),submitForm())} className='lg:h-40 lg:w-50 w-30 h-30 rounded-full mx-auto  object-cover mx-10' src="https://blog.smarterservices.com/hubfs/SS%20Mentor%20Blog%20Graphic-1.jpg" alt="" />
            Mentor
        </div>
        </div>
    </section>
    </>
  )
}   

export default Usertype
