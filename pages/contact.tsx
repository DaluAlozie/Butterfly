import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import linkedinIcon from '../web_assets/web_assets/Contact/linkedin-blue-icon.svg'
import insta from '../web_assets/web_assets/Contact/Insta-logo.svg'
import socialMedia from '../web_assets/web_assets/Contact/social-media.svg'
import email from '../web_assets/web_assets/Contact/email.svg'
import campus from '../web_assets/web_assets/Contact/campus.svg'

const Contact: NextPage = () => {
  const cellClass = "flex flex-col justify-between min-h-max content-center text-center my-10 w-40 h-max"
  return (
    <div className='w-full min-h-screen bg-white h-max'>
      <Head>
        <title>Contact - Butterfly</title>
      </Head>
      <div className='flex flex-col justify-between w-full h-max min-w-max min-h-max'>
        <div className='w-full py-24 contact-us-banner h-max'>
          <div className='contact-text text-center text-white bold-italic sm:text-8xl'>
            Contact Us
          </div>
        </div>

      </div>
      <div className='flex flex-col items-center w-full sm:flex-row h-max min-h-max justify-evenly'>
        <div className={cellClass}>
          <Image src={email}
                  height={120}
                  width={120}
                  alt="Logo"
                  className='self-center'
                  >
          </Image>    
          <div className='mt-1 mb-2'>Email us at</div>
          <div>
            admin@butterfly-social.com
          </div>

        </div>
        <div className={cellClass}>
          <Image src={socialMedia}
                    height={120}
                    width={120}
                    alt="Logo"
                    className='self-center'
                    >
          </Image> 
          
          <div className='mt-1 mb-5'> Follow us on</div>
          <div className='flex flex-row content-center self-center w-1/2 justify-evenly min-w-max min-h-max'>
            <a className='mx-5' href="https://www.instagram.com/butterfly.warwick/" target="_blank" rel="noopener noreferrer">
                <Image src={insta}
                  height={40}
                  width={40}
                  alt="Logo"
                  className='self-center'

                  >
              </Image>  
              </a>      
              <a className='mx-5' href="https://www.linkedin.com/company/butterflytechnologies/" target="_blank" rel="noopener noreferrer">
                <Image src={linkedinIcon}
                  height={40}
                  width={40}
                  alt="Logo"
                  >
                </Image>  
              </a>   
          </div>

        </div>
        <div className={cellClass+" mt-16"}>
            <Image src={campus}
                      height={120}
                      width={120}
                      alt="Logo"
                      className='self-center'
                      >
            </Image>
            
            <div className='my-2'>Visit us at </div>
            <div className='text-sm'>
              <div>Butterfly Technologies, Warwick University,</div>
              <div>Gibbet Hill Rd, Coventry,</div>
              <div>CV4 7ES, United Kingdom</div>
            </div>
          </div>
      </div>
    </div>

  )
}

export default Contact
