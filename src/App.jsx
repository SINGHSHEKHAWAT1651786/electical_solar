import { lazy, Suspense, useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { LoaderCircle } from 'lucide-react'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))
const Solar = lazy(() => import('./pages/Solar'))
const Electrical = lazy(() => import('./pages/Electrical'))

const RouteLoading = () => (
  <div
    className='grid min-h-screen place-items-center bg-[#101214] text-[#00aeea]'
    role='status'
    aria-live='polite'
  >
    <span className='sr-only'>Loading page</span>
    <LoaderCircle className='animate-spin' size={28} aria-hidden='true' />
  </div>
)

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    const frame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname])

  return null
}

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <ScrollToTop />
      <Navbar />
      <FullScreenNav />
      <Suspense fallback={<RouteLoading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/solar' element={<Solar />} />
          <Route path='/electrical' element={<Electrical />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App