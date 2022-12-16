import type { NextPage } from 'next'
import Image from 'next/image'
import linkedinIcon from '../web_assets/web_assets/linkedin-blue-icon.svg'
import insta from '../web_assets/web_assets/Insta-logo.svg'
import socialMedia from '../web_assets/web_assets/social-media.svg'
import email from '../web_assets/web_assets/email.svg'
import campus from '../web_assets/web_assets/campus.svg'

const Contact: NextPage = () => {
  const cellClass = "flex flex-col justify-between min-h-max content-center text-center my-24 w-1/3 h-max"
  return (
    <div className='w-full h-screen min-h-screen bg-white min-w-max'>
      <div className='flex flex-col justify-between w-full bg-white min-w-max pb-52 min-h-max'>
        {/* <div className='w-full contact-us-banner'>
          <div className='mt-16 text-center home-message'>
            <b>Contact Us</b>
          </div>
        </div> */}
  
      </div>

    </div>

  )
}

export default Contact
