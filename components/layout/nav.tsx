import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../web_assets/web_assets/whitelogo.svg'
import linkedinIcon from '../../web_assets/web_assets/linkedin-icon.png'
import {useState, useEffect, useRef} from 'react'  
let scrollY: number;


const NavLink = "items-center justify-center min-w-max mx-4 link-underline text-white mt-2 font-sans text-3xl"
const Nav: NextPage = () => {


  useEffect(()=>{
    
    //Scroll event listener to show and hide navbar
    addScrollListner();
  
  })

  const addScrollListner = () => {
    scrollY = window.scrollY;

    window.addEventListener("scroll",()=>{
      let currentScroll: number = window.scrollY; 
      let diff: number = currentScroll - scrollY;
      const nav = document.getElementById("nav");

      if (diff < 0){
        nav?.classList.remove("scroll-hide");
        nav?.classList.add("scroll-show");
      } 
      
      else if(diff > 0){
        nav?.classList.remove("scroll-show");
        nav?.classList.add("scroll-hide");
      }
      scrollY = window.scrollY;
    })
  }


  const collapse =() => {
    const nav = document.getElementById("nav");

    //Removing scroll events as it interferes with collapse
    nav?.classList.remove("scroll-show");
    nav?.classList.remove("scroll-hode");

    nav!.classList.toggle("collapse-hide");
    nav!.classList.toggle("collapse-show");
    
    document.getElementById("navbar")!.classList.toggle("hidden");

  }
  return (
    <nav id="nav" className='sticky top-0 flex flex-wrap items-start justify-center px-5 py-4 pt-5 bg-fixed bg-custom-nav collapse-hide'>
      
        <Link href='/'>
        <a className='inline-flex items-center p-2 mr-10 '>
          <Image src={logo}
              height={50}
              width={50}
              alt="Logo"
              >
          </Image>
          <div className='ml-3 logo-text'>
            butterfly
          </div>
          <span className='mb-6 text-6xl text-white'>.</span>
        </a>
        </Link>
        <button onClick={collapse} 
        className='fixed right-0 inline-flex p-3 ml-10 mr-3 text-white rounded outline-none top-8 lg:hidden hover:text-white'>
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
        <div id="navbar" className='justify-end hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
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
              <a href="https://www.linkedin.com/company/butterflytechnologies/" className="mt-4" target="_blank" rel="noopener">
                <Image src={linkedinIcon}
                  height={40}
                  width={40}
                  alt="Logo"
                  >
              </Image>  
            </a>
                  
          </div>
      </div>
    </nav>
  )
}

export default Nav
