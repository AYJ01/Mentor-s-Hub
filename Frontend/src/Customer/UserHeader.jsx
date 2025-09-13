import React from 'react'
import { Waypoints } from 'lucide-react'

const UserHeader = () => {
  return (
    <header className='w-screen min-h-screen h-fit lg:p-10 md:p-8 p-4'>
        <nav className='lg:flex md:flex'>
            <div className='content-center w-fit mx-auto'>
                <div className='content-center flex rounded-full shadow-lg shadow-gray-950/40 p-5 bg-black'>
                <Waypoints className='text-white cursor-pointer' onClick={()=>location.href="/"} />
                <ul className='flex lg:gap-10 md:gap-8 gap-4 lg:ml-10 md:ml-8 ml-4 text-white '>
                <li className='cursor-pointer' onClick={()=>location.href="/user/userhome"}>Home</li>
                <li className='cursor-pointer'>Mentors</li>
                <li className='cursor-pointer'>Chats</li>
                <li className='cursor-pointer'>Alerts</li>
                <li className='cursor-pointer' onClick={()=>{sessionStorage.clear(); location.href="/login"}} >Signout</li>
                <li className='cursor-pointer'><img className='w-[25px] rounded-full' src="data:image/jpeg;base64,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" alt="" /></li>
                
                </ul>
                </div>
            </div>
        </nav>
        <div>
            <div>
                <div ><p className='bg-purple-200/20 shadow-lg border border-purple-400 
                rounded-xl text-purple-400 text-xs w-fit mx-auto mt-24 p-2'>Mentor in you pocket</p></div>
                <div><h1 className='w-fit text-white text-shadow-lg text-center mx-auto text-5xl lg:text-6xl mt-10 font-bold'>Expert Guidance for Every Step of Your Journey.</h1>
                <p className='lg:w-200 text-sm text-black text-center mt-4 mx-auto'>Mentors Hub connects learners with experienced mentors, offering personalized guidance, skill development, 
                    and career support to help you grow, achieve goals, and succeed in your journey.</p>
                </div>
                <div className='w-fit mx-auto my-8'>
                    <button className='bg-purple-400 w-30 text-white py-2 rounded-xl mx-2 shadow-lg' href="#">Join us</button>
                </div>
                <div className='text-center mt-10 font-bold'><p className='my-2 text-2xl'> 102657+</p> Trusted users</div>
            </div>
        </div>
    </header>
  )
}

export default UserHeader
