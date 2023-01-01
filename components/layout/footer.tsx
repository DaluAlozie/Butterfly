import type { NextPage } from 'next'
import Image from 'next/image'
import linkedinIcon from '../../web_assets/web_assets/linkedin-icon.png'
import insta from '../../web_assets/web_assets/Insta-logo.svg'
import Link from 'next/link'

const Footer: NextPage = () => {
  return(
    <footer className='flex flex-row justify-around w-full py-4 text-gray-400 bg-gray-200 min-h-max h-max'>
      {/* Left */}
      <div className='flex flex-col items-start justify-between h-20 w-max'>
        <a href="https://apps.apple.com/gb/app/butterfly-companion/id6444716123"
          target="_blank" rel="noopener noreferrer">
            Butterfly Companion
        </a>
        <a href="https://www.iubenda.com/privacy-policy/87428725" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </div>
    
      {/* Middle */}
      <div className='flex flex-col items-start justify-between h-20 w-max'>
          <a className=''
            href="https://apps.apple.com/gb/app/butterfly/id1640868808"
            target="_blank" rel="noopener noreferrer">
              Download
          </a>
          <div>Butterfly Technologies ©</div>
      </div>

      {/* Right */}
      <div className='flex flex-col items-start justify-between h-20 w-max'>
        <Link href='/sign-in'>
          Sign In
        </Link>
        <div>
          <Link href='/contact'>
              <span className="">
                Contact us
              </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
