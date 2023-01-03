import type { NextPage } from 'next'

import FriendsSwiper from '../components/about/friendsSwiper'
import PostsSwiper from '../components/about/postsSwiper'
import PointsSwiper from '../components/about/pointsSwiper'
import Head from 'next/head'


const About: NextPage = () => {

  return (
  <div className='w-full min-h-screen p-12 text-4xl h-max'>
    <Head>
      <title>About - Butterfly</title>
    </Head>
    <div className='flex flex-col items-center justify-between w-full h-max rounded-3xl'>
  
      <div className='flex flex-col items-center justify-center w-screen mb-24 h-max xl:flex-row'>
        <div className='m-5 section-swiper'>
          <FriendsSwiper/>
        </div>
        <div className='m-5'>
          <PostsSwiper/>
        </div>
        <div className='m-5'>
          <PointsSwiper/>
        </div>
      </div>
      <a className='flex flex-col justify-center w-11/12 py-40 mb-20 text-center text-white xl:flex-row md:flex about-download rounded-3xl bg-home h-96 min-h-max'
        href="https://apps.apple.com/gb/app/butterfly/id1640868808"
        target="_blank" rel="noopener noreferrer">
            <b>Download </b><b className='mt-16 ml-0 xl:ml-10 xl:mt-0'> Now</b>
      </a>
      {/* <a className='flex flex-col justify-center w-full mb-20 text-center text-white md:hidden about-download rounded-3xl bg-home h-96 min-h-max'
        href="https://apps.apple.com/gb/app/butterfly/id1640868808"
        target="_blank" rel="noopener noreferrer">
          <div className='about-download'><b>Download</b></div>
          <div className='w-24 h-5'></div>
          <div className='about-download'><b>Now</b></div>

      </a> */}

    </div>
  </div>
  )
}

export default About
