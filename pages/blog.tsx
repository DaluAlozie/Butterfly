import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Post from '../components/blog/post'
import { doc,collection, getDocs, query, DocumentData, orderBy} from "firebase/firestore"; 
import db from '../firebase/config';
import { PostType } from '../components/blog/props';

interface Props {
  
}




const Blog: NextPage = () => {
  const [posts,setPosts] = useState<DocumentData>([])

  //Gets posts when page loads 
  useEffect(() => {
    getPosts();
  },[])
  
  

  //Fetches posts from server
  const getPosts = async () => {
    // const q = query(collection(db, "Posts"),orderBy("timeStamp"));

    // const res = await getDocs(q);
    // const docs = res.docs.map((doc) => doc.data()).reverse();
    // console.log(docs)
    // setPosts(docs)   
         
  }

  return (
  <div className='flex flex-col items-center w-full h-full'>
    {
      posts.map((post: PostType) => 
      <Post key={post.timeStamp.nanoseconds+post.timeStamp.seconds} 
        props={post}/>)
    }
  </div>
  )
}

export default Blog
