import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Post from '../components/blog/post'
import { doc,collection, getDocs, query, DocumentData, orderBy} from "firebase/firestore"; 
import db from '../firebase/config';
import { PostType } from '../components/blog/props';
import Image from 'next/image';
import ceo from '../web_assets/web_assets/ceo.png'
import cfo from '../web_assets/web_assets/cfo.png'
import cto from '../web_assets/web_assets/cto.png'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Classes
const member = "h-max w-max mx-16 ml-24 flex flex-col justify-center my-10"
const memberName = "text-center"
const memberRole = "text-center text-gray-400"


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
  <div className='flex flex-col items-center w-full h-max min-h-screen justify-center'>
    <div className='h-96'></div>
    <div className='h-20 mb-4'>
      {
        posts.map((post: PostType) => 
        <Post key={post.timeStamp.nanoseconds+post.timeStamp.seconds} 
          props={post}/>)
      }
    </div>
    <div className='mb-10'>
      <div className='w-full text-center bold-italic text-4xl my-10'>Meet the Team</div>
      <div className='team-swiper'>
        <div  className='justify-evenly w-full xl:flex hidden'>   
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className={member}>
                <Image
                  src={ceo}
                  alt="Picture of ceo"
                  width={200}
                  height={200}
                />
                <div className={memberName}>Josh Okusi</div>
                <div className={memberRole}>CEO</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={member}>
                <Image
                  src={cfo}
                  alt="Picture of cfo"
                  width={200}
                  height={200}
                />
                <div className={memberName}>Alex Reid</div>
                <div className={memberRole}>CFO</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={member}>
                <Image
                  src={cto}
                  alt="Picture of the cto"
                  width={200}
                  height={200}
                />
                <div className={memberName}>Zain Mobarik</div>
                <div className={memberRole}>CTO</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div  className='justify-evenly w-96 xl:hidden flex'>   
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          
        >
          <SwiperSlide>
            <div className={member}>
              <Image
                src={ceo}
                alt="Picture of ceo"
                width={200}
                height={200}
              />
              <div className={memberName}>Josh Okusi</div>
              <div className={memberRole}>CEO</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={member}>
              <Image
                src={cfo}
                alt="Picture of cfo"
                width={200}
                height={200}
              />
              <div className={memberName}>Alex Reid</div>
              <div className={memberRole}>CFO</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={member}>
              <Image
                src={cto}
                alt="Picture of the cto"
                width={200}
                height={200}
              />
              <div className={memberName}>Zain Mobarik</div>
              <div className={memberRole}>CTO</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
  )
}

export default Blog
