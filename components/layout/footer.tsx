import type { NextPage } from 'next'
import Link from 'next/link'

const Footer: NextPage = () => {
  const columnClass: string = "flex flex-col items-center sm:justify-between sm:items-start sm:h-14 w-max"
  return(
    <footer className='flex flex-col items-center justify-center w-full py-4 text-gray-400 bg-gray-200 sm:justify-around sm:flex-row min-h-max h-max'>
      {/* Left */}
      <div className={columnClass}>
        <a href="https://apps.apple.com/gb/app/butterfly-companion/id6444716123"
          target="_blank" rel="noopener noreferrer">
            Butterfly Companion
        </a>
        <a href="https://www.iubenda.com/privacy-policy/87428725" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </div>
    
      {/* Middle */}
      <div className={columnClass}>
          <a href="https://apps.apple.com/gb/app/butterfly/id1640868808"
            target="_blank" rel="noopener noreferrer">
              Download
          </a>
          <div>Butterfly Technologies ©</div>
      </div>

      {/* Right */}
      <div className={columnClass}>
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
