import type { NextPage } from 'next'
import linkedinIcon from '../web_assets/web_assets/linkedin-icon.png'
import Image from 'next/image'
import logo from '../web_assets/web_assets/whitelogo.svg'
import HomeNav from '../components/index/nav'
import Head from 'next/head'
import { useEffect } from 'react'

const Home: NextPage = () => {

  return (
    <div className='flex flex-row flex-wrap-reverse w-full min-h-screen overflow-hidden h-max'>
      <Head>
        <title>Home - Butterfly</title>
      </Head>
      {/* Left side */}
      <div className='flex-col w-full h-max overflow-hidden xl:min-h-screen  xl:max-h-screen bg-home xl:flex xl:w-1/2 home-left'>
        <nav className='z-50 flex flex-wrap items-start justify-between w-full px-2 py-4 pt-5 overflow-hidden min-w-fit home-left-nav'>
          <div className='flex-wrap justify-between w-full ml-5 xl:inline-flex xl:flex-grow xl:w-auto'>
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
              <div className='hidden xl:flex '>
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
        <div className='z-50 flex flex-col items-center justify-center w-full home-message'>
          <div className='text-white sans-light-italic text-5xl sm:text-8xl'><i>“ Spread your </i></div>
          <div className='mb-20 text-white sans-light-italic text-5xl sm:text-8xl'> <i>social wings ”</i></div>
        </div>
      </div>

      {/* Right side */}
      <div className='relative flex-col w-full xl:min-h-screen h-max xl:flex xl:w-1/2'>
        <div className='absolute top-0 left-0 z-0 w-full h-full bg-home-right'>
          
        </div>
        <HomeNav/>
        {/* main content */}
        <div className='relative w-full bg-inherit '>
          <div> 
              <a type='button' 
              className='absolute  text-white w-80 h-32 xl:h-16 rounded-full xl:w-44 home-download xl:bottom-5 xl:fixed  xl:right-5 ' 
              href="https://apps.apple.com/gb/app/butterfly/id1640868808"
              target="_blank" rel="noopener noreferrer">
                <div className='w-full h-full bg-home home-download-content rounded-full justify-center flex flex-col text-4xl xl:text-xl text-center'>
                  <b>Download Now</b>
                </div>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
