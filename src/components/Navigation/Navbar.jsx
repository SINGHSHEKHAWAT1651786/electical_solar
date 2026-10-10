import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NavbarContext } from '../../context/navbarContext'
import heroImage from '../../assets/hero.png'

const Navbar = () => {
    const [navOpen, setNavOpen] = useContext(NavbarContext)

    return (
        <nav
            aria-label='Main navigation'
            className='fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-slate-500/15 bg-[#e8eef0]/90 px-4 text-[#28383f] shadow-[0_2px_18px_rgba(22,42,51,0.07)] backdrop-blur-xl sm:px-6 lg:h-[76px] lg:px-10'
        >
            <Link to='/' aria-label='Innovex home' className='flex h-16 w-16 shrink-0 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00aeea]'>
                <img
                    src={heroImage}
                    alt='Innovex Automation'
                    className='h-full w-full object-contain'
                    loading='eager'
                    fetchPriority='high'
                />
            </Link>

            <div className='ml-auto mr-4 hidden items-center gap-6 md:flex lg:mr-8 lg:gap-8'>
                {[
                    ['Electrical', '/electrical'],
                    ['Projects', '/projects'],
                    ['About', '/about'],
                    ['Solar', '/solar'],
                    ['Contact', '/contact'],
                ].map(([label, to]) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) => `text-[9px] uppercase tracking-[0.1em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00aeea] lg:text-[10px] ${isActive ? 'font-semibold text-sky-800' : 'text-slate-600 hover:text-sky-800'}`}
                    >
                        {label}
                    </NavLink>
                ))}
            </div>

            <button
                type='button'
                aria-label={navOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={navOpen}
                onClick={() => setNavOpen(!navOpen)}
                className='ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center border border-slate-500/25 bg-white/55 text-sky-800 transition-colors hover:border-sky-700/30 hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-800 md:hidden'
            >
                {navOpen
                    ? <X size={19} strokeWidth={1.8} aria-hidden='true' />
                    : <Menu size={19} strokeWidth={1.8} aria-hidden='true' />}
            </button>
        </nav>
    )
}

export default Navbar