import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Post from '../components/blog/post'
import { collection, getDocs, query, DocumentData, orderBy} from "firebase/firestore"; 
import db from '../firebase/config';
import { PostType } from '../components/blog/props';

interface Props {
  
}

const PostsRef = collection(db, "Posts");
const getPostQuery = query(PostsRef, orderBy("timeStamp"));


const Blog: NextPage = () => {
  const [posts,setPosts] = useState<DocumentData>([])

  //Gets posts when page loads 
  useEffect(() => {
    getPosts();
  },[])
  
  

  //Fetches posts from server
  const getPosts = async () => {

    const res = await getDocs(getPostQuery);
    const docs = res.docs.map((doc) => {doc.data()}).reverse()
    setPosts(docs)        
  }

  return (
  <div className='w-full h-full flex flex-col items-center'>
    {
      posts.map((post: PostType) => 
      <Post key={post.timeStamp.nanoseconds+post.timeStamp.seconds} 
        props={post}/>)
    }
  </div>
  )
}

export default Blog
