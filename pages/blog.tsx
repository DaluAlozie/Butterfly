import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps, GetServerSidePropsContext,InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Post from '../components/blog/post'
import { doc,collection, getDocs, query, DocumentData, orderBy, where} from "firebase/firestore"; 
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
import { stringify } from '@firebase/util'


//Classes
const memberClass = "h-max w-max flex flex-col justify-center"
const memberNameClass = "text-center text-2xl mt-2"
const memberRoleClass = "text-center text-gray-400 text-2xl"

type AppProps = {
  allPosts: string
}

const Blog: NextPage<AppProps> = ({ allPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const posts: PostType[] = (JSON.parse(allPosts)) as PostType[]
  
  //Gets posts when page loads 
  return (
  <div className='flex flex-col items-center justify-start w-full min-h-screen h-max'>
      <Head>
        <title>Blog - Butterfly</title>
    </Head>
    <div className='w-full mb-4 h-72'>
      {/* {
        posts.map((post: PostType) => 
        <Post key={post.id} 
          props={post}/>)
      } */}
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
            allMembers.map( (member: memberType, index) => 
              <SwiperSlide key={index}>
              <div className={memberClass + " mr-16 ml-20 mt-16"}>
                <div>
                  <Image
                    src={member.image}
                    alt={"Picture of " + member.role}
                    width={270}
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
            allMembers.map( (member: memberType, index) => 
              <SwiperSlide key={index}>
              <div className={memberClass +" sm:ml-32 ml-16 mt-24 md:ml-16"}>
                <div className='member-image'>
                  <Image
                    src={member.image}
                    alt={"Picture of " + member.role}
                    width={270}
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

const getPosts = async () => {
  const q = query(collection(db, "Posts"),where("published", "==", true),orderBy("timeStamp","desc"));
  
  const res = await getDocs(q);
  const docs = res.docs.map((doc) => Object.assign(doc.data(), { id: doc.id }));
  return docs
}

export async function getStaticProps(context: GetServerSidePropsContext) {

  const allPosts = JSON.stringify(await getPosts())
  
  return {
    props: {
      allPosts
    }, // will be passed to the page component as props
  }
}

export default Blog
