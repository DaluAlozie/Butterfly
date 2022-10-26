import type { NextPage } from 'next'

const Footer: NextPage = () => {
  return(
    <footer className='bottom-0 w-full bg-custom-footer h-3/5 min-h-max'>

        <div className="p-4 text-center text-white">
            © 2021 Copyright:
            <a className="text-gray-800" href="https://tailwind-elements.com/">Tailwind Elements</a>
        </div>
            
    </footer>
  )
}


export default Footer
