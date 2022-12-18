import type { NextPage } from 'next'
import Image from 'next/image'
import linkedinIcon from '../../web_assets/web_assets/linkedin-icon.png'
import insta from '../../web_assets/web_assets/Insta-logo.svg'
import Link from 'next/link'

const Footer: NextPage = () => {
  return(
    <footer className='flex flex-row justify-evenly w-full py-4 bg-gray-900 min-h-max h-max text-gray-400'>
      <div>
        <a className='mx-5' href="https://www.iubenda.com/privacy-policy/87428725" target="_blank" rel="noopener noreferrer">
            Privacy Policy
        </a>
      </div>
      <div>© Butterfly Technologies</div>
      <div>
        <Link href='/contact'>
            <a className="">
              Contact us
            </a>
        </Link>
      </div>

    </footer>
  )
}

export default Footer
