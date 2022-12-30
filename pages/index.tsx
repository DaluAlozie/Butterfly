import type { NextPage } from 'next'
import linkedinIcon from '../web_assets/web_assets/linkedin-icon.png'
import Image from 'next/image'
import logo from '../web_assets/web_assets/whitelogo.svg'
import HomeNav from '../components/index/nav'

const Home: NextPage = () => {

  return (
    <div className='flex flex-row flex-wrap-reverse w-screen h-max min-w-min'>
      {/* Left side */}
      <div className='flex-col w-full h-full p-5 min-h-max bg-home xl:flex xl:w-1/2'>
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
        <div className='flex flex-col items-center min-h-screen py-28 min-w-screen bg-inherit'>
          <div className='italic home-message mr-72'><i>“ Spread your </i></div>
          <div className='ml-12 home-message'> <i>social wings ”</i></div>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-col w-full h-full mb-10 xl:flex xl:w-1/2 min-h-max bg-sky-50'>
        <HomeNav/>

        {/* main content */}
        <div className='relative min-h-screen min-w-screen bg-inherit'>
          <div> 
              <a type='button' className='absolute justify-center w-32 py-2 text-center text-white join-button md:bottom-5 md:fixed md:inline-flex md:right-5 h-11 bg-home rounded-3xl' href="https://apps.apple.com/gb/app/butterfly/id1640868808">
                <b>Join Today</b>
              </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
