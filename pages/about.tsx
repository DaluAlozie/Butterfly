import type { NextPage } from 'next'

import FriendsSwiper from '../components/about/friendsSwiper'
import PostsSwiper from '../components/about/postsSwiper'
import PointsSwiper from '../components/about/pointsSwiper'
import Head from 'next/head'


const About: NextPage = () => {

  return (
  <div className='w-full min-h-screen p-12 text-4xl h-max min-w-max'>
    <Head>
      <title>About - Butterfly</title>
    </Head>
    <div className='flex flex-col items-center justify-between w-full h-max rounded-3xl'>
  
      <div className='flex flex-col items-center justify-center mb-24 h-max xl:flex-row'>
        <div className='m-5'>
          <FriendsSwiper/>
        </div>
        <div className='m-5'>
          <PostsSwiper/>
        </div>
        <div className='m-5'>
          <PointsSwiper/>
        </div>
      </div>
      <a className='flex-col justify-center hidden w-11/12 mb-20 text-center text-white xl:flex about-download rounded-3xl bg-home h-96 min-h-max'
        href="https://apps.apple.com/gb/app/butterfly/id1640868808"
        target="_blank" rel="noopener noreferrer">
            <b>Download Now</b>
      </a>
      <a className='flex flex-col justify-center w-11/12 mb-20 text-center text-white xl:hidden about-download rounded-3xl bg-home h-96 min-h-max'
        href="https://apps.apple.com/gb/app/butterfly/id1640868808"
        target="_blank" rel="noopener noreferrer">
          <div className='about-download'><b>Download</b></div>
          <div className='w-24 h-24'></div>
          <div className='about-download'><b>Now</b></div>

      </a>

    </div>
  </div>
  )
}

export default About
