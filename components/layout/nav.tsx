import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../web_assets/web_assets/whitelogo.svg'
import linkedinIcon from '../../web_assets/web_assets/linkedin-icon.png'
import { useContext, useEffect, useRef } from 'react' 
import { loggedInContext } from '../signIn/loggedInContext'
import { handleSignOut } from '../signOut/signOut'


const Nav: NextPage = () => {

  const navRef = useRef<HTMLElement>(null!)
  let scrollY: number;
  const NavLink = "items-center justify-center h-12 min-w-max mx-4 link-underline text-white font-sans text-3xl my-1"

  const loggedIn = useContext(loggedInContext);

  useEffect(()=>{
    
    //Scroll event listener to show and hide navbar
    addScrollListner();    
  })

  const addScrollListner = () => {
    const nav = navRef.current
    scrollY = window.scrollY;
    const navHeight: number = nav!.clientHeight/2;

    window.addEventListener("scroll",()=>{
      let currentScroll: number = window.scrollY; 
      let diff: number = currentScroll - scrollY;

      if (diff < 0 && currentScroll >= 0){
        nav?.classList.remove("scroll-hide");
        nav?.classList.add("scroll-show");
      } 
      
      else if(diff > 0 && currentScroll > navHeight && !((window.innerHeight + window.scrollY) >= document.body.scrollHeight)){
        nav?.classList.remove("scroll-show");
        nav?.classList.add("scroll-hide");
      }
      scrollY = window.scrollY;
    })
  }

  const collapse =() => {
    const nav = navRef.current
  
    //Removing scroll events as it interferes with collapse
    nav.classList.remove("scroll-show");
    nav.classList.remove("scroll-hide");

    nav.classList.toggle("collapse-hide");
    nav.classList.toggle(loggedIn ? "collapse-show-more" : "collapse-show");
  }
  return (
    <nav id="nav" ref={navRef} className='sticky top-0 flex flex-wrap items-center justify-center w-full px-5 overflow-hidden bg-fixed zIndex-50 bg-custom-nav collapse-hide min-h-36'>
      
        <Link passHref={true} href='/'>
        {/* This height deterines height of nav */}
        <div className='inline-flex items-center h-32 px-2 py-2 mr-10'>
          <Image src={logo}
              height={50}
              width={50}
              alt="Logo"
              >
          </Image>
          <div className='ml-3 logo-text'>
            butterfly
          </div>
          <div className='mb-6 text-6xl text-white'>.</div>
        </div>
        </Link>
        <button onClick={collapse} 
        className='absolute right-0 inline-flex p-3 mt-0 ml-10 mr-3 text-white rounded outline-none top-8 lg:hidden hover:text-white'>
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
        <div id="navbar" className='items-center justify-end w-full bg-inherit lg:inline-flex lg:flex-grow lg:w-auto min-h-max'>
          <div className='flex flex-col items-center mr-12 lg:inline-flex lg:flex-row lg:w-auto lg:items-center lg:h-auto'>
            <Link passHref={true} href='/'>
            <div className={NavLink}>
                Home
            </div>
            </Link>
            <Link passHref={true} href='/blog'>
                <div className={NavLink}>
                  Blog
                </div>
            </Link>
            <Link passHref={true}  href='/about'>
                <div className={NavLink}>
                  About
                </div>
            </Link>
            <Link passHref={true} href='/contact'>
                <div className={NavLink}>
                    Contact
                </div>
            </Link>{
              loggedIn && 
              (
                <button 
                onClick={handleSignOut}
                className="items-center justify-center h-16 mx-4 mb-3 font-sans text-3xl text-white min-w-max link-underline">
                  Sign Out
                </button>
              )
            }
            <a href="https://www.linkedin.com/company/butterflytechnologies/" target="_blank" rel="noopener noreferrer">
              <Image src={linkedinIcon}
                height={40}
                width={40}
                alt="Logo"
                className='mb-2'
                >
            </Image>  
            </a> 
          </div>
      </div>
    </nav>
  )
}

export default Nav
