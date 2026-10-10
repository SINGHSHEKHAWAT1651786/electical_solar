import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Video from '../components/home/Video'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeServices from '../components/home/HomeServices'
import HomeInquiryForm from '../components/home/HomeInquiryForm'

const Home = () => {
  const heroRef = useRef(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .from('.home-hero-brand', { y: 18, opacity: 0, duration: 0.65 })
      .from('.home-hero-title', { y: 48, opacity: 0, duration: 0.9 }, '-=0.3')
      .from('.home-hero-copy', { y: 24, opacity: 0, duration: 0.65 }, '-=0.35')
      .from('.home-hero-actions', { y: 18, opacity: 0, duration: 0.55 }, '-=0.25')
  }, { scope: heroRef })

  return (
    <main className='text-white'>
      <section
        ref={heroRef}
        className='relative isolate flex min-h-[680px] h-[100svh] flex-col justify-between overflow-hidden bg-[#101214]'
        aria-labelledby='home-hero-title'
      >
        <div className='absolute inset-0 -z-10'>
          <Video />
        </div>
        <div className='absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/10' />
        <div className='absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/25' />

        <div className='mx-auto flex w-full max-w-screen-2xl flex-1 flex-col justify-center px-5 pb-12 pt-32 sm:px-8 lg:px-14'>
          <div className='max-w-5xl'>
            <p className='home-hero-brand mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/75 sm:mb-8 sm:text-sm'>
              <span className='h-2 w-2 bg-[#00aeea]' aria-hidden='true' />
              Innovex Automation <span className='text-white/40'>/</span> Sikar, Rajasthan
            </p>

            <h1
              id='home-hero-title'
              className='home-hero-title font-[font1] text-5xl uppercase leading-[0.88] sm:text-6xl lg:text-7xl'
            >
              Power.<br />
              Control.<br />
              <span className='text-[#00aeea]'>Energy.</span>
            </h1>

            <p className='home-hero-copy mt-7 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-9 sm:text-base lg:text-lg'>
              Electrical systems, industrial automation and solar energy, engineered around the way you work.
            </p>

            <div className='home-hero-actions mt-7 flex flex-wrap items-center gap-3 sm:mt-9'>
              <a
                href='#capabilities'
                className='inline-flex min-h-12 items-center gap-3 bg-[#00aeea] px-5 text-xs uppercase tracking-[0.12em] text-black transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
              >
                Explore our services <ArrowDown size={16} aria-hidden='true' />
              </a>
              <Link
                to='/contact'
                className='inline-flex min-h-12 items-center gap-2 border border-white/65 px-5 text-xs uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
              >
                Contact Innovex <ArrowUpRight size={16} aria-hidden='true' />
              </Link>
            </div>
          </div>
        </div>

        <div className='mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-between gap-3 border-t border-white/30 px-5 py-4 text-[10px] uppercase tracking-[0.14em] text-white/75 sm:px-8 sm:py-5 sm:text-xs lg:px-14'>
          <span>Industrial Automation <span className='px-1 text-[#00aeea]'>/</span> Electrical <span className='px-1 text-[#00aeea]'>/</span> Solar</span>
          <span>Engineered in Sikar <span className='pl-1 text-[#00aeea]'>↓</span></span>
        </div>

        <HomeBottomText />
      </section>

      <HomeServices />
      <HomeInquiryForm />
    </main>
  )
}

export default Home
