import React from 'react'
import MentorHeader from './MentorHeader'
import { PlusCircle } from 'lucide-react'
import AddBlog from './AddBlog';

const MentorHome = () => {
    const [addBlog,setAddBlog] = React.useState(false); 
  return (
    <>
      <MentorHeader />
      <section className='fixed lg:flex md:flex w-screen h-screen'>
        <div className='lg:w-2/8 md:w-2/8 lg:h-100 md:h-100 rounded-xl shadow-xl bg-black p-4 text-white m-5'>
            <button onClick={() => setAddBlog(!addBlog)} className='text-purple-400 bg-purple-900/40 backdrop-blur-xl flex text-sm p-2 rounded items-center mx-auto'> <PlusCircle className='w-4 mx-1' /> <p className='text-sm'>Post Blog</p></button>
        </div>
        <div className='lg:w-6/8 md:w-5/8'>
            {addBlog && <AddBlog />}
        </div>
      </section>
    </>
  )
}

export default MentorHome
