import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../web_assets/web_assets/whitelogo.svg'
import linkedinIcon from '../../web_assets/web_assets/linkedin-icon.png'
import {useState, useEffect, useRef} from 'react'  
let scrollY: number;


const NavLink = "items-center justify-center h-12 min-w-max mx-4 link-underline text-white font-sans text-3xl"
const Nav: NextPage = () => {


  useEffect(()=>{
    
    //Scroll event listener to show and hide navbar
    addScrollListner();
  
  })

  const addScrollListner = () => {
    const nav = document.getElementById("nav");

    scrollY = window.scrollY;
    const navHeight: number = nav!.clientHeight/2;

    window.addEventListener("scroll",()=>{
      let currentScroll: number = window.scrollY; 
      let diff: number = currentScroll - scrollY;

      if (diff < 0){
        nav?.classList.remove("scroll-hide");
        nav?.classList.add("scroll-show");
      } 
      
      else if(diff > 0 && currentScroll > navHeight){
        nav?.classList.remove("scroll-show");
        nav?.classList.add("scroll-hide");
      }
      scrollY = window.scrollY;
    })
  }


  const collapse =() => {
    const nav = document.getElementById("nav");
    const navbar  = document.getElementById("navbar");

    //Removing scroll events as it interferes with collapse
    nav?.classList.remove("scroll-show");
    nav?.classList.remove("scroll-hide");

    nav!.classList.toggle("collapse-hide");
    nav!.classList.toggle("collapse-show");
  }
  return (
    <nav id="nav" className='sticky top-0 flex flex-wrap items-center justify-center w-full px-5 overflow-hidden bg-fixed zIndex-50 bg-custom-nav collapse-hide min-h-36'>
      
        <Link href='/'>
        {/* This height deterines height of nav */}
        <a className='inline-flex items-center h-32 px-2 py-2 mr-10'>
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
            <a href="https://www.linkedin.com/company/butterflytechnologies/" target="_blank" rel="noopener noreferrer">
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
