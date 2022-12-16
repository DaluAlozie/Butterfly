import type { NextPage } from 'next'
import Image from 'next/image'
import linkedinIcon from '../web_assets/web_assets/linkedin-blue-icon.svg'
import insta from '../web_assets/web_assets/Insta-logo.svg'
import socialMedia from '../web_assets/web_assets/social-media.svg'
import email from '../web_assets/web_assets/email.svg'
import campus from '../web_assets/web_assets/campus.svg'

const Contact: NextPage = () => {
  const cellClass = "flex flex-col justify-between h-max content-center text-center m-24 w-1/3"
  return (
  <div className='flex flex-col justify-around w-full h-full'>
    <div className=' contact-us-banner'>
      <div className='text-center home-message'>
        <b>Contact Us</b>
      </div>
    </div>
    <div className='flex flex-row content-center justify-between w-full align-middle bg-white'>
      <div className={cellClass}>
        <Image src={email}
                  height={120}
                  width={120}
                  alt="Logo"
                  >
        </Image>  
          Email us at
      </div>
      <div className={cellClass}>
        <Image src={socialMedia}
                  height={120}
                  width={120}
                  alt="Logo"
                  >
        </Image> 
        Follow us on

        <div className='flex flex-row content-center justify-between py-5 m-5'>
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
        Visit us at  

        <div className='my-5'>
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
