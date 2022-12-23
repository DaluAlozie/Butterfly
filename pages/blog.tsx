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
import techLead1 from '../web_assets/web_assets/techLead1.png'
import techLead2 from '../web_assets/web_assets/techLead2.png'


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
  <div className='flex flex-col items-center justify-start w-full min-h-screen h-max'>
    <div className='w-full mb-4 bg-black h-72'>
      {
        posts.map((post: PostType) => 
        <Post key={post.timeStamp.nanoseconds+post.timeStamp.seconds} 
          props={post}/>)
      }
    </div>
    <div className='mb-5'>
      <div className='w-full my-10 text-4xl text-center bold-italic'>Meet the Team</div>
      <div className='team-swiper'>
        <div  className='hidden w-full justify-evenly xl:flex'>   
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
            <SwiperSlide>
              <div className={member}>
                <Image
                  src={techLead1}
                  alt="Picture of the tech lead"
                  width={200}
                  height={200}
                />
                <div className={memberName}>Jessica Daniels</div>
                <div className={memberRole}>Tech Lead</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={member}>
                <Image
                  src={techLead2}
                  alt="Picture of the tech lead"
                  width={200}
                  height={200}
                />
                <div className={memberName}>Neil Shaabi</div>
                <div className={memberRole}>Tech Lead</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div  className='flex justify-evenly w-96 xl:hidden'>   
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
          <SwiperSlide>
              <div className={member}>
                <Image
                  src={techLead1}
                  alt="Picture of the tech lead"
                  width={200}
                  height={200}
                />
                <div className={memberName}>Jessica Daniels</div>
                <div className={memberRole}>Tech Lead</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={member}>
                <Image
                  src={techLead2}
                  alt="Picture of the tech lead"
                  width={200}
                  height={200}
                />
                <div className={memberName}>Neil Shaabi</div>
                <div className={memberRole}>Tech Lead</div>
              </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
  )
}

export default Blog
