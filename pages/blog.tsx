import type { NextPage } from 'next'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import Post from '../components/blog/post'
import { getPosts, PostProps } from '../components/blog/utils'
import Image from 'next/image';
import { allMembers, memberType } from '../components/blog/allMembers';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext } from 'react'
import { UserContext } from '../components/user/UserContext'
import Link from 'next/link'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Classes
const memberClass = "h-max w-max flex flex-col justify-center"
const memberNameClass = "text-center text-2xl mt-2"
const memberRoleClass = "text-center text-gray-400 text-2xl"

type PageProps = {
  allPosts: string
}

const Blog: NextPage<PageProps> = ({ allPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const posts: PostProps[] = (JSON.parse(allPosts)) as PostProps[]
  const user = useContext(UserContext)

  //Gets posts when page loads 
  return (
  <div className='flex flex-col items-center justify-start w-full min-h-screen h-max'>
      <Head>
        <title>Blog - Butterfly</title>
    </Head>
    <div className='mt-10 flex flex-row justify-center sm:justify-end w-full'>
      {
        user && (
          <div >
            <Link href={`/blog/create`}
              className='w-36 h-16 rounded-2xl text-center flex flex-col justify-center sans-regular text-2xl shadow-md border-4 mr-0 sm:mr-10'>
                <b>Create Post</b>
            </Link>
          </div>
        )
      }
    </div>
    <div className='mb-8 blog-swiper min-h-max'>

      <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={1}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          > 
          {
            posts.map((post: PostProps) => 
            <SwiperSlide key={post.id}>
              <Post key={post.id} 
                props={post}/>
            </SwiperSlide>
          )}
          <div className='h-10'></div> 
      </Swiper>
    </div>

    <div className='flex flex-col items-center w-full mb-36 mt-16'>
      <div className='w-full my-2 text-4xl text-center sm:text-7xl sans-bold'>Meet the Team</div>
      <div className='team-swiper'>
        <div  className='hidden w-full team-swiper justify-evenly 2xl:flex h-max'>   
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
  
                <div className={memberNameClass}>{member.name }</div>
                <div className={memberRoleClass}>{member.role }</div>
              </div>
            </SwiperSlide>
            )
          }
          <div className='h-10'></div>
          </Swiper>
        </div>
      </div>
      <div  className='flex w-full justify-evenly team-swiper-collapsed 2xl:hidden'>   
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
              <div className={memberClass +" sm:ml-16 ml-12 mt-24 md:ml-16"}>
                <div className='member-image'>
                  <Image
                    src={member.image}
                    alt={"Picture of " + member.role}
                    width={270}
                  />
                </div>
                <div className={memberNameClass}>{member.name}</div>
                <div className={memberRoleClass}>{member.role}</div>
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

export async function getStaticProps() {

  const allPosts = JSON.stringify(await getPosts())
  
  return {
    props: {
      allPosts: allPosts
    }, // will be passed to the page component as props
    revalidate: 30
  }
}

export default Blog
