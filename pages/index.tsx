import type { NextPage } from 'next'
import linkedinIcon from '../web_assets/web_assets/linkedin-icon.png'
import Image from 'next/image'
import logo from '../web_assets/web_assets/whitelogo.svg'
import Link from 'next/link'


const NavLink = "h-14 items-center justify-center min-w-max mx-4 link-underline link-underline-black text-black mt-2 font-sans text-4xl"

const Home: NextPage = () => {
  return (
    <div className='flex flex-row flex-wrap-reverse w-full min-w-full min-h-screen bg-green'>
      {/* Left side */}
      <div className='flex-col w-full min-h-full p-5 bg-home xl:flex xl:w-1/2'>
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
        <div className='flex flex-col items-center min-h-screen min-w-screen bg-inherit'>
          <div className='italic home-message'><i>“ Spread your </i></div>
          <div className='home-message'> <i>social wings ”</i></div>
        </div>
      </div>

      {/* Right side */}
      <div className='w-full p-5 min-h-max bg-sky-50 xl:flex xl:w-1/2'>
        <nav className='flex flex-wrap items-start justify-center px-5 py-4 pt-5 bg-fixed collapse-hide'>
          <button 
      
          onClick={() => {document.getElementById("navbar")?.classList.toggle("hidden")}}
          className='inline-flex p-3 ml-auto mr-3 text-white rounded-full bg-sky-300 hover:bg-sky-300 lg:hidden '>
            <svg
                className='w-6 h-6'
                fill='black'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
                />
            </svg>
          </button>
          <div id="navbar" className='justify-around hidden w-full ml-8 lg:inline-flex lg:flex-grow lg:w-auto'>
            <div className='flex flex-col items-center mr-12 lg:inline-flex lg:flex-row lg:w-auto lg:items-center lg:h-auto'>
              <Link href='/'>
                <a className={NavLink}>
                    Home
                </a>
              </Link>
              <Link href='/blog'>
                <a className={NavLink}>
                  Blog
                </a>
              </Link>
              <Link href='/about'>
                <a className={NavLink}>
                  About
                </a>
              </Link>
              <Link href='/contact'>
                <a className={NavLink}>
                    Contact
                </a>
              </Link>           
            </div>
          </div>
        </nav>

        {/* main content */}
        <div className='min-h-screen min-w-screen bg-inherit'>
          <div> 
              <a type='button' className='absolute justify-center w-32 py-2 mb-0 text-center text-white join-button md:bottom-5 md:fixed md:inline-flex md:right-5 h-11 bg-home rounded-3xl' href="https://apps.apple.com/gb/app/butterfly/id1640868808">
                <b>Join Today</b>
              </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
