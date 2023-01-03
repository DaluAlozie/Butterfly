import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Post from '../components/blog/post'
import { doc,collection, getDocs, query, DocumentData, orderBy} from "firebase/firestore"; 
import { db } from '../firebase/config';
import { PostType } from '../components/blog/props';
import Image from 'next/image';
import { allMembers, memberType } from '../components/blog/allMembers';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


//Classes
const memberClass = "h-max w-max flex flex-col justify-center"
const memberNameClass = "text-center text-2xl mt-2"
const memberRoleClass = "text-center text-gray-400 text-2xl"


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
  <div className='flex flex-col items-center justify-start w-full min-h-screen h-max'>
      <Head>
        <title>Blog - Butterfly</title>
    </Head>
    <div className='w-full mb-4 h-72'>
      {
        posts.map((post: PostType) => 
        <Post key={post.timeStamp.nanoseconds+post.timeStamp.seconds} 
          props={post}/>)
      }
    </div>

    <div className='mb-36'>
      <div className='w-full my-10 text-4xl text-center sm:text-7xl bold-italic'>Meet the Team</div>
      <div className='team-swiper'>
        <div  className='hidden w-full justify-evenly xl:flex h-max'>   
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="mb-24"
          >
            
          {
            allMembers.map( (member: memberType) => 
              <SwiperSlide key={member.name}>
              <div className={memberClass + " mr-16 ml-24 mt-8"}>
                <div>
                  <Image
                    src={member.image}
                    alt={"Picture of " + member.role}
                    width={300}
                  />
                </div>
  
                <div className={memberNameClass}>Josh Okusi</div>
                <div className={memberRoleClass}>CEO</div>
              </div>
            </SwiperSlide>
            )
          }
          <div className='h-10'></div>
          </Swiper>
        </div>
      </div>
      <div  className='flex justify-evenly team-swiper-collapsed xl:hidden'>   
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {
            allMembers.map( (member: memberType) => 
              <SwiperSlide key={member.name}>
              <div className={memberClass +" sm:ml-28 ml-12 mt-24 md:ml-12"}>
                <div className='member-image'>
                  <Image
                    src={member.image}
                    alt={"Picture of " + member.role}
                    width={300}
                  />
                </div>
                <div className={memberNameClass}>Josh Okusi</div>
                <div className={memberRoleClass}>CEO</div>
              </div>
            </SwiperSlide>
            )
          }
        <div className='h-10'></div> 
        </Swiper>
      </div>
    </div>
  </div>
  )
}

export default Blog
