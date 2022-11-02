import type { NextPage } from 'next'
import Image from 'next/image'
import linkedinIcon from '../../web_assets/web_assets/linkedin-icon.png'

import insta from '../../web_assets/web_assets/insta-logo.svg'

const Footer: NextPage = () => {
  return(
    <footer className='bottom-0 flex flex-col justify-center w-full py-10 bg-custom-footer h-3/5 min-h-max h-max'>

        <div className="flex flex-col items-center justify-between h-48 p-4 text-xl text-center text-white">
          <div>Butterfly Technologies, Warwick University,</div>
          <div>Gibbet Hill Rd, Coventry,</div>
          <div>CV4 7ES</div>
          <div>United Kingdom </div>

          <div className='flex flex-row justify-between w-48 mt-5'>
            <a href="https://www.instagram.com/butterfly.warwick/" target="_blank" rel="noopener noreferrer">
              <Image src={insta}
                height={40}
                width={40}
                alt="Logo"
                >
            </Image>  
            </a>      
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
    </footer>
  )
}

export default Footer
