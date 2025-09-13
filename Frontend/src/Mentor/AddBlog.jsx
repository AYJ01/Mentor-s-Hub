import React from 'react'
import api from '../api.cjs';
import { Form } from 'react-router';

const AddBlog = () => {
    const userid = sessionStorage.getItem('user');
    const [media, setMedia] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState(null);


const submitBlog = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("user", userid);
  formData.append("description", description);
  if (image) {
    formData.append("image", image); 
    formData.append("title", "");   
  } else {
    formData.append("title", title);
  }

  console.log([...formData.entries()]);
  const { dataApi } = api();
  dataApi("add_blog", "POST", formData)
    .then((response) => {
      console.log("✅ Blog posted successfully:", response);
    })
    .catch((error) => {
      console.error("❌ Error posting blog:", error);
    });
};


  return (
    <>
    <div className='bg-black p-4 rounded-lg m-5'>
        <h1 className='text-white text-2xl font-bold'>Add a New Blog Post</h1>
        <form className='mt-4 text-white'>
            {media && (
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-white'>Media</label>
                    <input type='file' onChange={(e) => setImage(e.currentTarget.files[0])} className='mt-1 block w-full p-2 border border-gray-300 rounded' />
                </div>
            )}
            {!media && (
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-white'>Tweet</label>
                    <input type='text' onChange={(e) => setTitle(e.target.value)} placeholder='Do you want to share something' className='mt-1 block w-full p-2 border border-gray-300 rounded' />
                </div>
            )}
            <div className='mb-4'>
                <label className='block text-sm font-medium text-white'>Description</label>
                <textarea onChange={(e) => setDescription(e.target.value)} placeholder='More about your Tweet' className='mt-1 block w-full p-2 border border-gray-300 rounded' rows='5'></textarea>
            </div>
            <button onClick={(e)=>(submitBlog(e))}  className='bg-purple-700 text-white py-2 px-4 rounded'>Post Blog</button>
        </form>
        <label className='block text-sm font-medium text-white mt-5'><input type="checkbox" value="Media" checked={media} onChange={() => setMedia(!media)} /> Media</label>

    </div>
    </>
  )
}

export default AddBlog
