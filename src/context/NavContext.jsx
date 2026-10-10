import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NavbarContext } from './navbarContext'

const NavContext = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false)
    const { pathname } = useLocation()

    const navColor = pathname === '/projects' || pathname === '/about' ? 'black' : 'white'

    return (
        <NavbarContext.Provider value={[navOpen, setNavOpen, navColor]}>
            {children}
        </NavbarContext.Provider>
    )
}

export default NavContext