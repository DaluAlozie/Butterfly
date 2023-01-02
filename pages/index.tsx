import type { NextPage } from 'next'
import linkedinIcon from '../web_assets/web_assets/linkedin-icon.png'
import Image from 'next/image'
import logo from '../web_assets/web_assets/whitelogo.svg'
import HomeNav from '../components/index/nav'
import Head from 'next/head'
import { useEffect } from 'react'

const Home: NextPage = () => {

  return (
    <div className='flex flex-row flex-wrap-reverse w-full min-h-screen h-max overflow-hidden'>
      <Head>
        <title>Home - Butterfly</title>
      </Head>
      {/* Left side */}
      <div className='flex-col w-full min-h-screen p-5 h-max bg-home xl:flex xl:w-1/2'>
        <nav className='flex flex-wrap items-start justify-between w-full px-2 py-4 pt-5 min-w-fit'>
          <div className='flex-wrap justify-between w-full ml-5 lg:inline-flex lg:flex-grow lg:w-auto'>
            <div className='flex flex-row flex-wrap justify-between w-full mr-12 '> 
              <div>
                <a className='inline-flex items-center p-2 mr-4'>
                  <Image src={logo}
                      height={50}
                      width={50}
                      alt="Logo"
                      >
                  </Image>
                  <div className='ml-3 logo-text '>
                    butterfly
                  </div>
                  <span className='mb-6 text-6xl text-white'>.</span>
                </a>
              </div>
              <div className='hidden lg:flex '>
                <a href="https://www.linkedin.com/company/butterflytechnologies/" className="mt-5" target="_blank" rel="noopener noreferrer">
                  <Image src={linkedinIcon}
                    height={50}
                    width={50}
                    alt="Logo"
                    >
                  </Image>  
                </a> 
              </div>       
            </div>
          </div>
        </nav>
        {/* main content */}
        <div className='flex flex-col items-center w-full px-16 py-28 bg-inherit'>
          <div className='text-white sans-light-italic home-message'><i>“ Spread your </i></div>
          <div className='text-white sans-light-italic home-message'> <i>social wings ”</i></div>
        </div>
      </div>

      {/* Right side */}
      <div id="temp" className='flex-col w-full min-h-screen pt-8 h-max m xl:flex xl:w-1/2 relative'>
        <div className='absolute h-full w-full bg-home-right left-0 top-0'>

        </div>
        <HomeNav/>
        {/* main content */}
        <div className='relative w-full bg-inherit  '>
          <div> 
              <a type='button' 
              className='absolute justify-center h-16 pt-4 text-xl text-center text-white rounded-full w-44 join-button md:bottom-5 md:fixed md:inline-flex md:right-5 bg-home' 
              href="https://apps.apple.com/gb/app/butterfly/id1640868808"
              target="_blank" rel="noopener noreferrer">
                <b>Download Now</b>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
