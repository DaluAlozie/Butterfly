import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../web_assets/web_assets/whitelogo.svg'
import linkedinIcon from '../../web_assets/web_assets/linkedin-icon.png'


const NavLink = "items-center justify-center min-w-max mx-4 link-underline text-white mt-2 font-sans text-xl"
const Nav: NextPage = () => {
  return (
    <nav className='flex flex-wrap items-start py-4 pt-5 justify-center px-5 '>
        <Link href='/'>
        <a className='inline-flex items-center p-2 mr-4 '>
          <Image src={logo}
              height={40}
              width={40}
              alt="Logo"
              >
          </Image>
          <div className='logo-text ml-3 '>
            butterfly.
          </div>
        </a>
        </Link>
        <button onClick={()=>{document.getElementById("navbar")!.classList.toggle("hidden")}} 
        className='inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-sky-600 lg:hidden hover:text-white mr-3'>
        <svg
            className='w-6 h-6'
            fill='none'
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
        <div id="navbar" className='justify-end hidden w-full lg:inline-flex lg:flex-grow lg:w-auto h-fit'>
          <div className='flex flex-col items-center lg:inline-flex lg:flex-row lg:w-auto lg:items-center lg:h-auto mr-12'>
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
              <Link href='/'>
                  <a className="mt-4 link-underline">
                  <Image src={linkedinIcon}
                    height={25}
                    width={25}
                    alt="Logo"
                    >
                </Image>  
                  </a>
              </Link>             
                  
          </div>
      </div>
    </nav>
  )
}

export default Nav
