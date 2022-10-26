import type { NextPage } from 'next'
import Nav from "./nav"
const Header: NextPage = () => {
  return (
    <header className='min-w-max bg-custom-grad'>
        <Nav/>
    </header>
  )
}

export default Header
