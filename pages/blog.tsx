import type { NextPage } from 'next'
import { useState, useEffect } from 'react'

const Blog: NextPage = () => {
  const [posts,setPosts] = useState([])

  //Gets posts when page loads 
  useEffect(() => {
    getPosts();
  })
  

  //Fetches posts from server
  const getPosts = async () => {

  }

  return (
  <div className='w-full h-full'>
    Blog
  </div>
  )
}

export default Blog
