import { Waypoints } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <>
    <header className='w-screen min-h-screen h-fit bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 lg:p-10 md:p-8 p-4'>
        <nav className='lg:flex md:flex'>
            <div className='content-center w-fit mx-auto'>
                <p className='content-center flex rounded-full shadow-lg shadow-gray-950/40 p-5 bg-black'>
                <Waypoints className='text-white cursor-pointer' onClick={()=>location.href="/"} />
                <ul className='flex lg:gap-10 md:gap-8 gap-4 lg:ml-10 md:ml-8 ml-4 text-white '>
                <li className='cursor-pointer' onClick={()=>location.href="/"}>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Services</li>
                <button className='bg-white w-18 text-sm text-purple-400 py-1 rounded-xl  shadow-lg cursor-pointer' 
                onClick={()=>location.href="/login"}>Signin</button>
            </ul>
                </p>
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
    </>
  )
}

export default Home
