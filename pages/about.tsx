import type { NextPage } from 'next'

import FriendsSwiper from '../components/about/friendsSwiper'
import PostsSwiper from '../components/about/postsSwiper'
import PointsSwiper from '../components/about/pointsSwiper'


const About: NextPage = () => {


  return (
  <div className='w-full min-h-screen p-12 text-4xl h-max'>
    <div className='flex flex-col items-center justify-between w-full h-max rounded-3xl'>
      <div className='title bold-italic h-max'>
        Butterfly 
      </div>
      <div className='flex flex-col items-center justify-center h-max xl:flex-row'>
        <div className='m-6'>
          <FriendsSwiper/>
        </div>
        <div className='m-6'>
          <PostsSwiper/>
        </div>
        <div className='m-6'>
          <PointsSwiper/>
        </div>
      </div>
      <a className='hidden xl:flex flex-col justify-center w-11/12 text-center text-white about-download rounded-3xl bg-home h-96 min-h-max'
        href="https://apps.apple.com/gb/app/butterfly/id1640868808"
        target="_blank" rel="noopener noreferrer">
            <b>Download Now</b>
      </a>
      <a className='flex xl:hidden flex-col justify-center w-11/12 text-center text-white about-download rounded-3xl bg-home h-96 min-h-max'
        href="https://apps.apple.com/gb/app/butterfly/id1640868808"
        target="_blank" rel="noopener noreferrer">
          <div className='about-download'><b>Download</b></div>
          <div className='h-24 w-24'></div>
          <div className='about-download'><b>Now</b></div>

      </a>

    </div>
  </div>
  )
}

export default About
