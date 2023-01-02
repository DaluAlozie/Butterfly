import type { NextPage } from 'next'
import Link from 'next/link'
import { UserContext } from '../user/UserContext'
import { useContext } from 'react'
import { handleSignOut } from '../signOut/signOut'

const HomeNav: NextPage = () => {
    const user = useContext(UserContext)
    const NavLink = "h-14 items-center justify-center min-w-max mx-4 link-underline link-underline-black text-black mt-2 sans-regular text-4xl nav-link"

    return (
        <nav className='z-50 flex flex-wrap items-start justify-center w-full px-5 py-4 pt-5 bg-fixed collapse-hide'>
            <div  className='z-50 justify-around w-full ml-8 lg:inline-flex lg:flex-grow lg:w-auto'>
                <div id="navbar" className='z-50 flex flex-col items-center mr-12 lg:inline-flex lg:flex-row lg:w-auto lg:items-center lg:h-auto'>
                    <Link passHref={true} href='/'>
                    <div className={NavLink}>
                        Home
                    </div>
                    </Link>
                    <Link passHref={true} href='/blog'>
                    <div className={NavLink}>
                        Blog
                    </div>
                    </Link>
                    <Link passHref={true} href='/about'>
                    <div className={NavLink}>
                        About
                    </div>
                    </Link>
                    <Link passHref={true} href='/contact'>
                    <div className={NavLink}>
                        Contact
                    </div>
                    </Link> 
                    { user && 
                        (
                            <button 
                                onClick={handleSignOut}
                                className="items-center justify-center h-20 mx-4 mb-2 font-sans text-4xl text-black min-w-max link-underline link-underline-black">
                                Sign Out
                            </button>
                        )   
                    }       
                </div>
            </div>
        </nav>
    )
}

export default HomeNav
