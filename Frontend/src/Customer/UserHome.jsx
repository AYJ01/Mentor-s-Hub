import React from 'react'
import UserHeader from './UserHeader';
import Usertype from './Usertype';

const UserHome = () => {
    const userid = sessionStorage.getItem('user');
    const usertype = sessionStorage.getItem('usertype');
    console.log('User ID:', userid);
    console.log('User Type:', usertype);

    if (usertype == 'null' || usertype == null || usertype == '') {
        return <Usertype />
    }
    else{
        return (
    <>
    <UserHeader />
    </>
  )
        
    }
}

export default UserHome
