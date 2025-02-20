import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`} className="block">
        <div className='max-w-xs mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105'>
            <div className='w-full'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='w-full h-40 sm:h-48 object-cover' />

            </div>
            <h2
            className='text-lg font-semibold text-gray-900 dark:text-gray-100 text-center'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard