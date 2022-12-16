import type { NextPage } from 'next'
import Image from 'next/image'
import linkedinIcon from '../web_assets/web_assets/linkedin-blue-icon.svg'
import insta from '../web_assets/web_assets/Insta-logo.svg'
import socialMedia from '../web_assets/web_assets/social-media.svg'
import email from '../web_assets/web_assets/email.svg'
import campus from '../web_assets/web_assets/campus.svg'

const Contact: NextPage = () => {
  const cellClass = "flex flex-col justify-between min-h-max content-center text-center my-24 w-1/4 h-max"
  return (
    <div className='w-full h-screen min-h-screen bg-white min-w-max'>
      <div className='flex flex-col justify-between w-screen bg-white pb-52 min-h-max min-w-max'>
        {/* <div className='w-full contact-us-banner'>
          <div className='mt-16 text-center home-message'>
            <b>Contact Us</b>
          </div>
        </div> */}
        <div className='flex flex-row content-center justify-between w-full px-1 align-middle bg-white min-w-max min-h-max'>
          <div className={cellClass}>
            <Image src={email}
                      height={120}
                      width={120}
                      alt="Logo"
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
                      >
            </Image> 
            
            <div className='mt-1 mb-5'> Follow us on</div>
            <div className='flex flex-row content-center self-center w-1/2 justify-evenly min-w-max min-h-max'>
              <a className='mx-5' href="https://www.instagram.com/butterfly.warwick/" target="_blank" rel="noopener noreferrer">
                  <Image src={insta}
                    height={40}
                    width={40}
                    alt="Logo"
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
          <div className={cellClass}>
            <Image src={campus}
                      height={120}
                      width={120}
                      alt="Logo"
                      >
            </Image>
            
            <div className='my-5'>Visit us at </div>
            <div>
              <div>Butterfly Technologies, Warwick University,</div>
              <div>Gibbet Hill Rd, Coventry,</div>
              <div>CV4 7ES, United Kingdom</div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Contact
