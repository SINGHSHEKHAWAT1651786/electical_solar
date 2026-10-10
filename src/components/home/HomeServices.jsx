import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import automationImage from '../../assets/optimized/image1.jpg'
import electricalImage from '../../assets/optimized/image4.jpg'
import solarImage from '../../assets/optimized/image5.jpg'
import supportImage from '../../assets/optimized/image6.jpg'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    number: '01',
    title: 'Industrial Automation',
    description:
      'Control architecture, PLC systems and intelligent production lines engineered for dependable output.',
    capabilities: 'PLC / SCADA / ROBOTICS',
    image: automationImage,
    imageAlt: 'Engineer working on an industrial electrical control panel',
    href: '/projects',
    tone: 'bg-sky-200 text-black',
  },
  {
    number: '02',
    title: 'Electrical Solutions',
    description:
      'Power distribution and industrial electrical systems designed to make every connection count.',
    capabilities: 'POWER / CONTROL / SAFETY',
    image: electricalImage,
    imageAlt: 'Electrical control cabinet inspected by an engineer',
    href: '/projects',
    tone: 'bg-[#e9e9e6] text-black',
  },
  {
    number: '03',
    title: 'Solar Energy',
    description:
      'Site-ready solar infrastructure that turns clean energy into a measurable operating advantage.',
    capabilities: 'PV / STORAGE / MONITORING',
    image: solarImage,
    imageAlt: 'Solar panels installed on a rooftop',
    href: '/solar',
    tone: 'bg-[#101214] text-white',
  },
]

const locations = [
  {
    name: 'Sikar',
    href: 'https://share.google/Mr8cMOsD6Qpbwmvum',
  },
  {
    name: 'Churu',
    href: 'https://www.google.com/maps/search/?api=1&query=Churu,Rajasthan,India',
  },
  {
    name: 'Fatehpur',
    href: 'https://www.google.com/maps/search/?api=1&query=Fatehpur,Rajasthan,India',
  },
]

const HomeServices = () => {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.fromTo(
      '.home-services-heading',
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-services-heading',
          start: 'top 86%',
          once: true,
        },
      }
    )

    gsap.fromTo(
      '.home-services-slider',
      { y: 44, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-services-slider',
          start: 'top 88%',
          once: true,
        },
      }
    )
  }, { scope: sectionRef })

  const goToSlide = (index) => {
    const nextIndex = (index + services.length) % services.length
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    setActiveSlide(nextIndex)
    gsap.to(trackRef.current, {
      xPercent: -(nextIndex * (100 / services.length)),
      duration: reduceMotion ? 0 : 0.85,
      ease: 'power3.inOut',
      overwrite: 'auto',
    })

    const nextImage = trackRef.current?.children[nextIndex]?.querySelector('.service-photo')

    if (nextImage && !reduceMotion) {
      gsap.fromTo(nextImage, { scale: 1.1 }, {
        scale: 1,
        duration: 1.1,
        ease: 'power3.out',
        overwrite: 'auto',
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      id='capabilities'
      className='relative z-10 bg-[#e8eef0] text-[#28383f]'
      aria-labelledby='home-services-title'
    >
      <div className='mx-auto max-w-screen-2xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-32'>
        <div className='home-services-heading mb-9 flex flex-col gap-8 border-b border-slate-700/20 pb-8 sm:mb-12 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <p className='mb-4 text-xs uppercase tracking-[0.16em] text-slate-600'>
              Innovex Automation <span className='px-2 text-[#00aeea]'>/</span> Sikar, Rajasthan
            </p>
            <h2
              id='home-services-title'
              className='max-w-3xl font-[font1] text-3xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl'
            >
              Engineering for what comes next.
            </h2>
          </div>
          <p className='max-w-sm text-sm leading-relaxed text-slate-600 sm:text-base'>
            Industrial automation, electrical systems and solar energy, brought together by one engineering team.
          </p>
        </div>

        <div
          className='home-services-slider relative h-[min(74svh,760px)] min-h-[540px] overflow-hidden bg-black text-white sm:min-h-[600px]'
          aria-roledescription='carousel'
          aria-label='Our services'
        >
          <div ref={trackRef} className='flex h-full w-[300%] touch-pan-y'>
            {services.map((service, index) => (
              <article
                key={service.number}
                className='relative h-full w-1/3 shrink-0 overflow-hidden bg-black text-white'
                aria-hidden={activeSlide !== index}
                inert={activeSlide !== index}
                aria-roledescription='slide'
                aria-label={`${index + 1} of ${services.length}: ${service.title}`}
              >
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className='service-photo absolute inset-0 h-full w-full scale-[1.04] object-cover'
                  loading={index === 0 ? 'eager' : 'lazy'}
                    decoding='async'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10' />
                <div className='absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent' />

                <div className='absolute inset-x-5 top-5 flex items-center justify-between border-b border-white/35 pb-3 text-[10px] uppercase tracking-[0.15em] sm:inset-x-9 sm:top-8 sm:text-xs lg:inset-x-12'>
                  <span>Service / {service.number}</span>
                  <span>Innovex Automation / Sikar</span>
                </div>

                <div className='absolute inset-x-5 bottom-7 sm:inset-x-9 sm:bottom-10 lg:inset-x-12 lg:bottom-12'>
                  <p className='mb-4 text-[10px] uppercase tracking-[0.18em] text-white/75 sm:text-xs'>
                    {service.capabilities}
                  </p>
                  <h3 className='mb-4 max-w-5xl font-[font1] text-4xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl'>
                    {service.title}
                  </h3>
                  <div className='flex flex-col items-start justify-between gap-5 border-t border-white/35 pt-5 sm:flex-row sm:items-end sm:gap-8'>
                    <p className='max-w-xl text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg'>
                      {service.description}
                    </p>
                    <Link
                      to={service.href}
                      tabIndex={activeSlide === index ? 0 : -1}
                      className='inline-flex min-h-11 shrink-0 items-center gap-2 border-b border-white pb-1 text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
                    >
                      Explore service <ArrowUpRight size={16} aria-hidden='true' />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className='absolute right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 sm:right-7'>
            <button
              type='button'
              onClick={() => goToSlide(activeSlide - 1)}
              aria-label='Previous service'
              className='flex h-11 w-11 items-center justify-center border border-white/70 bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              <ArrowLeft size={18} aria-hidden='true' />
            </button>
            <button
              type='button'
              onClick={() => goToSlide(activeSlide + 1)}
              aria-label='Next service'
              className='flex h-11 w-11 items-center justify-center border border-white/70 bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              <ArrowRight size={18} aria-hidden='true' />
            </button>
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-between gap-5 border-b border-slate-700/20 py-5 sm:py-6'>
          <div className='flex flex-wrap items-center gap-x-5 gap-y-3' aria-label={`Slide ${activeSlide + 1} of ${services.length}`}>
            {services.map((service, index) => (
              <button
                key={service.number}
                type='button'
                onClick={() => goToSlide(index)}
                aria-label={`Show ${service.title}`}
                aria-current={activeSlide === index ? 'true' : undefined}
                className={`border-b-2 py-2 text-[10px] uppercase tracking-[0.14em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00aeea] sm:text-xs ${activeSlide === index ? 'border-[#00aeea] text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
              >
                {service.number} <span className='hidden sm:inline'>/ {service.title}</span>
              </button>
            ))}
            <span className='hidden text-xs tabular-nums text-slate-500 md:inline'>
              0{activeSlide + 1} / 0{services.length}
            </span>
          </div>

        </div>

        <section className='mt-20 border-t border-slate-700/20 pt-10 sm:mt-28 sm:pt-14' aria-labelledby='home-support-title'>
          <div className='grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16'>
            <div>
              <p className='mb-4 text-xs uppercase tracking-[0.16em] text-[#00aeea]'>
                04 / Commissioning & Support
              </p>
              <h2 id='home-support-title' className='max-w-xl font-[font1] text-3xl uppercase leading-[0.95] sm:text-4xl lg:text-5xl'>
                Support beyond installation.
              </h2>
              <p className='mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base'>
                From first energisation to long-term support, we keep the system moving after installation.
              </p>
            </div>
            <div className='relative min-h-[240px] overflow-hidden sm:min-h-[340px]'>
              <img
                src={supportImage}
                alt='Technician reviewing an electrical control system'
                className='absolute inset-0 h-full w-full object-cover'
                loading='lazy'
                decoding='async'
              />
            </div>
          </div>

          <div className='mt-7 grid grid-cols-3 border-y border-slate-700/20 sm:mt-9'>
            {['Start-up', 'Training', 'AMC'].map((item, index) => (
              <div key={item} className={`py-4 sm:py-5 ${index > 0 ? 'border-l border-slate-700/20 pl-4 sm:pl-6' : ''}`}>
                <span className='mb-2 block text-[10px] uppercase tracking-[0.14em] text-slate-500'>
                  0{index + 1}
                </span>
                <span className='text-xs uppercase tracking-[0.1em] sm:text-sm'>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className='mt-20 border-t border-slate-700/20 pt-10 sm:mt-24 sm:pt-12' aria-labelledby='home-locations-title'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
            <div>
              <p className='mb-3 text-xs uppercase tracking-[0.16em] text-[#00aeea]'>
                Rajasthan / Local branches
              </p>
              <h2 id='home-locations-title' className='font-[font1] text-3xl uppercase leading-none sm:text-4xl'>
                Close to your project.
              </h2>
            </div>
            <p className='max-w-sm text-sm leading-relaxed text-slate-600'>
              Connect with Innovex Automation in Sikar, Churu or Fatehpur.
            </p>
          </div>

          <div className='mt-7 grid sm:grid-cols-3'>
            {locations.map((location, index) => (
              <a
                key={location.name}
                href={location.href}
                target='_blank'
                rel='noopener noreferrer'
                className={`group flex min-h-20 items-center justify-between border-t border-slate-700/20 py-4 transition-colors hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00aeea] sm:pr-6 ${index > 0 ? 'sm:border-l sm:pl-6' : ''}`}
              >
                <span>
                  <span className='block text-lg uppercase sm:text-xl'>{location.name}</span>
                  <span className='mt-1 block text-[10px] uppercase tracking-[0.14em] text-slate-500'>
                    Rajasthan
                  </span>
                </span>
                <ArrowUpRight size={18} aria-hidden='true' />
              </a>
            ))}
          </div>
        </section>

        <div className='flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-10'>
          <p className='max-w-2xl font-[font1] text-2xl uppercase leading-tight sm:text-3xl'>
            From Sikar to your next project.
          </p>
          <Link
            to='/contact'
            className='inline-flex min-h-12 w-fit items-center gap-3 bg-[#00aeea] px-5 text-xs uppercase tracking-[0.12em] text-black transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00aeea]'
          >
            Talk to our team <ArrowUpRight size={17} aria-hidden='true' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeServices