import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import HomeInquiryForm from '../components/home/HomeInquiryForm'
import automationImage from '../assets/project1/gettyimages7.jpg'
import electricalImage from '../assets/optimized/image4.jpg'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const disciplines = [
  {
    number: '01',
    title: 'Industrial Automation',
    subtitle: 'Intelligent control systems',
    description:
      'Control architecture, PLC systems and intelligent production lines engineered for dependable output.',
    tags: ['PLC systems', 'SCADA', 'Robotics'],
    image: automationImage,
    alt: 'Technician inspecting electrical power control equipment',
  },
  {
    number: '02',
    title: 'Electrical Solutions',
    subtitle: 'Powering industrial infrastructure',
    description:
      'Power distribution and industrial electrical systems designed to make every connection count.',
    tags: ['Power distribution', 'Control panels', 'Safety systems'],
    image: electricalImage,
    alt: 'Engineer inspecting an electrical control cabinet',
  },
]

const advantages = [
  {
    number: '01',
    title: 'Engineered precision',
    description:
      'System architecture shaped around your application and operational requirements.',
  },
  {
    number: '02',
    title: 'Industrial reliability',
    description:
      'Practical engineering focused on dependable operation and long-term performance.',
  },
  {
    number: '03',
    title: 'Intelligent integration',
    description:
      'Automation, electrical systems and control technologies designed to work together.',
  },
]

const applications = [
  {
    number: '01',
    title: 'Factory automation',
    category: 'Industrial Automation',
    description: 'Intelligent production and process control.',
    image: automationImage,
  },
  {
    number: '02',
    title: 'Power distribution',
    category: 'Electrical Solutions',
    description: 'Reliable electrical infrastructure.',
    image: electricalImage,
  },
]

const Electrical = () => {
  const pageRef = useRef(null)

  useGSAP(() => {
    const root = pageRef.current
    if (!root) return

    const motion = gsap.matchMedia()

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const hero = root.querySelector('.electrical-hero')
      const heroImage = root.querySelector('.electrical-hero-image')
      const heroWords = root.querySelectorAll('.electrical-hero-word')
      const heroMeta = root.querySelectorAll('.electrical-hero-meta')
      const heroRule = root.querySelector('.electrical-hero-rule')

      if (hero && heroImage && heroWords.length) {
        gsap.timeline({ defaults: { ease: 'power4.out' } })
          .fromTo(
            heroImage,
            { scale: 1.15 },
            { scale: 1, duration: 1.5, ease: 'power3.out' },
            0
          )
          .fromTo(
            heroWords,
            { y: 28, skewY: 3, autoAlpha: 0 },
            {
              y: 0,
              skewY: 0,
              autoAlpha: 1,
              duration: 0.8,
              stagger: 0.1,
            },
            0.15
          )
          .fromTo(
            heroMeta,
            { y: 18, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.65,
              stagger: 0.1,
            },
            0.55
          )

        if (heroRule) {
          gsap.fromTo(
            heroRule,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 0.9,
              ease: 'power3.out',
              transformOrigin: 'left center',
              delay: 0.65,
            }
          )
        }

        gsap.to(heroImage, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }

      root.querySelectorAll('.electrical-background-text').forEach((text, index) => {
        const section = text.closest('section')
        if (!section) return

        const isHero = section.classList.contains('electrical-hero')
        const direction = index % 2 === 0 ? -1 : 1

        gsap.to(text, {
          yPercent: isHero ? -25 : direction * 18,
          scale: isHero ? 1.08 : 1.05,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: isHero ? 'top top' : 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

      root.querySelectorAll('.electrical-reveal-section').forEach((section) => {
        gsap.fromTo(
          section,
          { y: 48, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      root.querySelectorAll('.electrical-scroll-text').forEach((text) => {
        gsap.fromTo(
          text,
          { y: 22 },
          {
            y: -22,
            ease: 'none',
            scrollTrigger: {
              trigger: text,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        )
      })

      root.querySelectorAll('.electrical-scroll-sway').forEach((text) => {
        gsap.fromTo(
          text,
          { x: -24 },
          {
            x: 24,
            ease: 'none',
            scrollTrigger: {
              trigger: text,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        )
      })

      const introHeading = root.querySelector('.electrical-scroll-spread')
      if (introHeading) {
        gsap.fromTo(
          introHeading,
          { letterSpacing: '-0.065em' },
          {
            letterSpacing: '-0.02em',
            ease: 'none',
            scrollTrigger: {
              trigger: introHeading,
              start: 'top 85%',
              end: 'bottom 35%',
              scrub: 1,
            },
          }
        )
      }

      const heroScrollText = root.querySelector('.electrical-scroll-side')
      if (hero && heroScrollText) {
        gsap.fromTo(
          heroScrollText,
          { x: 18 },
          {
            x: -18,
            ease: 'none',
            scrollTrigger: {
              trigger: hero,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          }
        )
      }

      root.querySelectorAll('.electrical-reveal-word').forEach((word) => {
        gsap.fromTo(
          word,
          {
            y: 38,
            rotate: -3,
            scale: 0.97,
            autoAlpha: 0,
            transformOrigin: 'left bottom',
          },
          {
            y: 0,
            rotate: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 0.9,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: word,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      const serviceCards = root.querySelectorAll('.electrical-service-card')
      if (serviceCards.length) {
        gsap.fromTo(
          serviceCards,
          { y: 70, scale: 0.96, autoAlpha: 0 },
          {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 0.9,
            stagger: 0.18,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: root.querySelector('.electrical-services-grid'),
              start: 'top 84%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      root.querySelectorAll('.electrical-service-image').forEach((image) => {
        gsap.set(image, { scale: 1.08 })

        gsap.fromTo(
          image,
          { yPercent: -3 },
          {
            yPercent: 3,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        )
      })

      root.querySelectorAll('.electrical-application-image').forEach((image) => {
        gsap.set(image, { scale: 1.14 })

        gsap.fromTo(
          image,
          { yPercent: 5 },
          {
            yPercent: -5,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.4,
            },
          }
        )
      })

      root.querySelectorAll('.electrical-image-caption').forEach((caption) => {
        const scene = caption.closest('.electrical-image-scene')
        if (!scene) return

        gsap.fromTo(
          caption,
          { y: 55, skewY: 3, autoAlpha: 0 },
          {
            y: 0,
            skewY: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: scene,
              start: 'top 92%',
              toggleActions: 'play none none reverse',
              invalidateOnRefresh: true,
            },
          }
        )
      })

      motion.add('(hover: hover) and (pointer: fine)', () => {
        const hoverCards = root.querySelectorAll('.electrical-hover-card')

        const cleanups = [...hoverCards].map((card) => {
          const image = card.querySelector('.electrical-hover-image')
          const title = card.querySelector('.electrical-hover-title')
          const meta = card.querySelector('.electrical-hover-meta')
          const isServiceCard = card.classList.contains('electrical-service-card')
          const restingScale = isServiceCard ? 1.08 : 1.14
          const hoverScale = isServiceCard ? 1.17 : 1.23

          const handleEnter = () => {
            if (image) {
              gsap.to(image, {
                scale: hoverScale,
                duration: 0.7,
                ease: 'power3.out',
              })
            }

            if (title) {
              gsap.to(title, {
                x: 8,
                color: '#7dd3fc',
                duration: 0.4,
                ease: 'power3.out',
              })
            }

            if (meta) {
              gsap.to(meta, {
                x: 4,
                duration: 0.4,
                ease: 'power3.out',
              })
            }
          }

          const handleLeave = () => {
            if (image) {
              gsap.to(image, {
                scale: restingScale,
                duration: 0.55,
                ease: 'power2.out',
              })
            }

            if (title) {
              gsap.to(title, {
                x: 0,
                color: '#ffffff',
                duration: 0.35,
                ease: 'power2.out',
              })
            }

            if (meta) {
              gsap.to(meta, {
                x: 0,
                duration: 0.35,
                ease: 'power2.out',
              })
            }
          }

          card.addEventListener('pointerenter', handleEnter)
          card.addEventListener('pointerleave', handleLeave)

          return () => {
            card.removeEventListener('pointerenter', handleEnter)
            card.removeEventListener('pointerleave', handleLeave)
          }
        })

        return () => cleanups.forEach((cleanup) => cleanup())
      })

      const advantageItems = root.querySelectorAll('.electrical-advantage')
      if (advantageItems.length) {
        gsap.fromTo(
          advantageItems,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: root.querySelector('.electrical-advantages-grid'),
              start: 'top 86%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      const applicationCards = root.querySelectorAll('.electrical-application-card')
      if (applicationCards.length) {
        gsap.fromTo(
          applicationCards,
          { y: 50, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: root.querySelector('.electrical-applications-grid'),
              start: 'top 86%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      const contactPanel = root.querySelector('.electrical-contact-panel')
      if (contactPanel) {
        gsap.fromTo(
          contactPanel,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contactPanel,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      const contactWords = root.querySelectorAll('.electrical-contact-panel-word')
      if (contactWords.length) {
        gsap.fromTo(
          contactWords,
          { y: 20, rotate: -2 },
          {
            y: 0,
            rotate: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: contactWords[0],
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

    })

    return () => motion.revert()
  }, { scope: pageRef })

  return (
    <main ref={pageRef} className='overflow-hidden bg-[#f3f6f7] text-[#142b40]'>
      <section className='electrical-hero relative isolate flex min-h-[700px] h-[92svh] flex-col justify-end overflow-hidden bg-slate-950 px-5 pb-10 pt-28 text-white sm:px-8 sm:pb-12 lg:px-12 lg:pb-16'>
        <img
          src={automationImage}
          alt='Technician inspecting industrial automation control cabinets'
          className='electrical-hero-image absolute inset-0 z-0 h-full w-full object-cover opacity-65'
          fetchPriority='high'
        />
        <div className='absolute inset-0 z-0 bg-gradient-to-r from-slate-950/90 via-slate-900/65 to-slate-900/20' />
        <div className='absolute inset-0 z-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30' />
        <div className='pointer-events-none absolute inset-0 z-0 opacity-15'>
          <div className='h-full w-full bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:72px_72px]' />
        </div>
        <div
          aria-hidden='true'
          className='electrical-background-text pointer-events-none absolute left-1/2 top-1/2 z-[1] w-[140%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-[font2] text-[24vw] uppercase leading-none tracking-[-0.07em] text-white/20 lg:w-[120%] lg:text-[22vw]'
        >
          AUTOMATION
        </div>

        <div className='relative z-10 mx-auto w-full max-w-screen-2xl'>
          <div className='electrical-hero-meta mb-6 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/75 sm:text-xs'>
            <span>Innovex Automation</span>
            <span className='h-1 w-1 rounded-full bg-sky-300' />
            <span>Sikar, Rajasthan</span>
            <span className='ml-auto hidden sm:inline'>Automation / Electrical / Power</span>
          </div>

          <h1
            aria-label='Industrial automation and electrical systems.'
            className='electrical-scroll-side max-w-6xl font-[font2] text-[clamp(3.6rem,10.5vw,9rem)] uppercase leading-[0.88] tracking-[-0.065em]'
          >
            <span className='block'>
              <span className='electrical-hero-word block'>Industrial</span>
            </span>
            <span className='block text-sky-300'>
              <span className='electrical-hero-word block'>automation</span>
            </span>
            <span className='block'>
              <span className='electrical-hero-word block'>&amp; electrical</span>
            </span>
            <span className='block'>
              <span className='electrical-hero-word block'>systems.</span>
            </span>
          </h1>

          <div className='electrical-hero-rule mt-7 h-px w-full origin-left bg-white/35 sm:mt-9' />

          <div className='mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between'>
            <p className='electrical-hero-meta max-w-lg text-sm leading-relaxed text-white/80 sm:text-base'>
              Control systems and electrical infrastructure, engineered around your operation.
            </p>
            <div className='electrical-hero-meta flex flex-wrap gap-3'>
              <a
                href='#enquiry'
                className='group inline-flex min-h-12 items-center gap-3 bg-sky-300 px-5 text-xs uppercase tracking-[0.12em] text-slate-950 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-14 sm:px-6'
              >
                Request a quote
                <ArrowDown size={16} aria-hidden='true' className='transition-transform group-hover:translate-y-1' />
              </a>
              <Link
                to='/projects'
                className='group inline-flex min-h-12 items-center gap-3 border border-white/60 px-5 text-xs uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-14 sm:px-6'
              >
                View projects
                <ArrowUpRight size={16} aria-hidden='true' className='transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
              </Link>
            </div>
          </div>

          <div className='electrical-hero-meta mt-12 flex items-center justify-between border-t border-white/20 pt-4 text-[9px] uppercase tracking-[0.18em] text-white/55 sm:mt-16 sm:text-[10px]'>
            <span>Control systems / Engineered for operation</span>
            <span className='hidden sm:inline'>Scroll to discover</span>
          </div>
        </div>
      </section>

      <section className='electrical-reveal-section relative isolate mx-auto max-w-screen-2xl overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36' aria-labelledby='electrical-intro-title'>
        <div aria-hidden='true' className='electrical-background-text pointer-events-none absolute left-1/2 top-1/2 z-0 w-[140%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-[font2] text-[22vw] uppercase leading-none tracking-[-0.07em] text-slate-950/[0.045]'>
          ENGINEERING
        </div>
        <div className='relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16'>
          <div>
            <p className='mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-sky-800 sm:text-xs'>
              <span className='h-px w-8 bg-sky-500' />
              What we engineer / 001
            </p>
            <h2 id='electrical-intro-title' aria-label='Beyond electrical engineering.' className='electrical-scroll-text electrical-scroll-spread font-[font2] text-[clamp(3.5rem,8vw,7.5rem)] uppercase leading-[0.88] tracking-[-0.065em]'>
              <span className='block'><span className='electrical-reveal-word block'>Beyond</span></span>
              <span className='block'><span className='electrical-reveal-word block w-fit bg-black px-2 text-white'>electrical.</span></span>
              <span className='block'><span className='electrical-reveal-word block'>Engineering.</span></span>
            </h2>
          </div>
          <div className='max-w-lg lg:justify-self-end'>
            <p className='text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
              We bring together industrial automation and electrical engineering to create systems that work smarter, operate reliably and support the demands of modern industry.
            </p>
            <div className='mt-8 border-t border-slate-300 pt-5'>
              <p className='text-[10px] uppercase tracking-[0.18em] text-sky-800'>Innovex Automation</p>
              <p className='mt-2 font-[font1] text-xl uppercase leading-tight tracking-wide text-slate-950 sm:text-2xl'>
                Industrial engineering solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id='electrical-systems'
        className='relative isolate overflow-hidden bg-black px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32'
        aria-labelledby='electrical-systems-title'
      >
        <div aria-hidden='true' className='electrical-background-text pointer-events-none absolute left-1/2 top-1/2 z-0 w-[140%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-[font2] text-[24vw] uppercase leading-none tracking-[-0.07em] text-white/[0.06]'>
          CONTROL
        </div>
        <div className='relative z-10 mx-auto max-w-screen-2xl'>
          <div className='electrical-reveal-section mb-12 flex flex-col justify-between gap-6 border-b border-white/20 pb-8 lg:flex-row lg:items-end'>
            <div>
              <p className='mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-sky-300 sm:text-xs'>
                <span className='h-px w-8 bg-sky-300' />
                Systems / 01-02
              </p>
              <h2 id='electrical-systems-title' aria-label='Built around the work.' className='electrical-scroll-sway font-[font2] text-[clamp(3.4rem,8vw,7.5rem)] uppercase leading-[0.88] tracking-[-0.065em]'>
                <span className='block'><span className='electrical-reveal-word block'>Built around</span></span>
                <span className='block'><span className='electrical-reveal-word block w-fit bg-black px-2 text-white'>THE WORK.</span></span>
              </h2>
            </div>
            <p className='max-w-md text-sm leading-relaxed text-white/65'>
              From control architecture to power distribution, begin with the system your operation needs.
            </p>
          </div>

          <div className='electrical-services-grid grid gap-5 lg:grid-cols-2'>
            {disciplines.map((item) => (
              <article key={item.number} className='electrical-service-card electrical-hover-card group overflow-hidden border border-white/15 bg-white/[0.04] transition-colors duration-500 hover:bg-white/[0.08]'>
                <div className='electrical-image-scene relative aspect-[1.45] overflow-hidden bg-slate-800'>
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading='lazy'
                    decoding='async'
                    className='electrical-service-image electrical-hover-image h-full w-full object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent' />
                  <span className='absolute left-5 top-5 bg-sky-300 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-slate-950'>
                    Innovex / {item.number}
                  </span>
                  <div className='electrical-image-caption absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7'>
                    <p className='electrical-hover-meta mb-2 text-[10px] uppercase tracking-[0.16em] text-sky-200'>{item.subtitle}</p>
                    <h3 className='electrical-hover-title electrical-scroll-text font-[font1] text-2xl uppercase leading-tight sm:text-4xl'>{item.title}</h3>
                  </div>
                </div>
                <div className='p-5 sm:p-7'>
                  <p className='max-w-xl text-sm leading-relaxed text-white/65'>{item.description}</p>
                  <ul className='mt-6 flex flex-wrap gap-2'>
                    {item.tags.map((tag) => (
                      <li key={tag} className='border border-white/20 px-3 py-2 text-[9px] uppercase tracking-[0.1em] text-white/70'>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='relative isolate overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32' aria-labelledby='electrical-approach-title'>
        <div aria-hidden='true' className='electrical-background-text pointer-events-none absolute left-1/2 top-1/2 z-0 w-[140%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-[font2] text-[22vw] uppercase leading-none tracking-[-0.07em] text-slate-950/[0.045]'>
          PRECISION
        </div>
        <div className='relative z-10 mx-auto max-w-screen-2xl'>
          <div className='electrical-reveal-section mb-12 max-w-3xl'>
            <p className='mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-sky-800 sm:text-xs'>
              <span className='h-px w-8 bg-sky-500' />
              Our engineering approach / 003
            </p>
            <h2 id='electrical-approach-title' className='electrical-scroll-text font-[font2] text-[clamp(3.2rem,7vw,6.8rem)] uppercase leading-[0.9] tracking-[-0.065em]'>
              <span className='block'><span className='electrical-reveal-word block'>Designed for</span></span>
              <span className='block'><span className='electrical-reveal-word block w-fit bg-black px-2 text-white'>PERFORMANCE.</span></span>
            </h2>
            <p className='mt-6 max-w-xl border-l-2 border-sky-500 pl-5 text-sm leading-relaxed text-slate-600 sm:text-base'>
              Good engineering starts with understanding the application, choosing the right solution and integrating systems with purpose.
            </p>
          </div>

          <div className='electrical-advantages-grid grid border-l border-t border-slate-200 md:grid-cols-3'>
            {advantages.map((item) => (
              <article key={item.number} className='electrical-advantage group border-b border-r border-slate-200 p-6 transition-colors duration-300 hover:bg-sky-50 sm:p-8'>
                <span className='font-[font1] text-4xl leading-none tracking-[-0.04em] text-sky-800 sm:text-5xl'>
                  / {item.number}
                </span>
                <h3 className='mt-10 font-[font1] text-2xl uppercase tracking-tight sm:mt-14 sm:text-3xl'>{item.title}</h3>
                <p className='mt-4 max-w-sm text-sm leading-relaxed text-slate-500'>{item.description}</p>
                <div className='mt-7 h-px w-10 bg-sky-500 transition-all duration-500 group-hover:w-full' />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='relative isolate overflow-hidden bg-[#e8eef0] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32' aria-labelledby='electrical-applications-title'>
        <div aria-hidden='true' className='electrical-background-text pointer-events-none absolute left-1/2 top-1/2 z-0 w-[140%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-[font2] text-[22vw] uppercase leading-none tracking-[-0.07em] text-slate-950/[0.05]'>
          APPLICATIONS
        </div>
        <div className='relative z-10 mx-auto max-w-screen-2xl'>
          <div className='electrical-reveal-section mb-10 flex flex-col justify-between gap-6 border-b border-slate-600/20 pb-7 sm:flex-row sm:items-end'>
            <div>
              <p className='mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-sky-800 sm:text-xs'>
                <span className='h-px w-8 bg-sky-500' />
                Applications / 01-02
              </p>
              <h2 id='electrical-applications-title' className='electrical-scroll-text font-[font2] text-[clamp(3.4rem,8vw,7.5rem)] uppercase leading-[0.88] tracking-[-0.065em]'>
                <span className='block'><span className='electrical-reveal-word block'>Project</span></span>
                <span className='block'><span className='electrical-reveal-word block w-fit bg-black px-2 text-white'>APPLICATIONS.</span></span>
              </h2>
            </div>
            <p className='max-w-sm text-xs leading-relaxed text-slate-600'>
              Concept imagery only. These are not presented as completed client installations.
            </p>
          </div>

          <div className='electrical-applications-grid grid gap-5 md:grid-cols-2'>
            {applications.map((project) => (
              <article key={project.number} className='electrical-application-card electrical-hover-card group'>
                <div className='electrical-image-scene relative aspect-[1.45] overflow-hidden bg-slate-300'>
                  <img
                    src={project.image}
                    alt={`${project.title} project image`}
                    loading='lazy'
                    decoding='async'
                    className='electrical-application-image electrical-hover-image h-full w-full object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent' />
                  <span className='absolute left-4 top-4 bg-sky-300 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-slate-950'>
                    Application / {project.number}
                  </span>
                  <div className='electrical-image-caption absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-7 sm:left-7 sm:right-7'>
                    <div>
                      <p className='electrical-hover-meta mb-2 text-[10px] uppercase tracking-[0.14em] text-sky-200'>{project.category}</p>
                      <h3 className='electrical-hover-title electrical-scroll-text text-xl uppercase sm:text-3xl'>{project.title}</h3>
                      <p className='mt-2 text-xs text-white/70'>{project.description}</p>
                    </div>
                    <ArrowUpRight size={24} aria-hidden='true' className='shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1' />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className='electrical-reveal-section mt-8 flex flex-col items-start justify-between gap-5 border-t border-slate-600/20 pt-6 sm:flex-row sm:items-center'>
            <p className='text-xs uppercase tracking-[0.12em] text-slate-600'>Have a project in mind?</p>
            <Link
              to='/projects'
              className='group inline-flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-sky-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-800'
            >
              Explore projects
              <span className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white transition-colors group-hover:bg-sky-500'>
                <ArrowUpRight size={17} aria-hidden='true' />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className='relative overflow-hidden bg-sky-500 px-5 py-16 text-slate-950 sm:px-8 sm:py-24 lg:px-12 lg:py-28' aria-labelledby='electrical-next-step-title'>
        <div aria-hidden='true' className='electrical-background-text pointer-events-none absolute left-1/2 top-1/2 z-0 w-[140%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-[font2] text-[24vw] uppercase leading-none tracking-[-0.07em] text-white/[0.16]'>
          POWER
        </div>
        <div className='pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/30 sm:h-[32rem] sm:w-[32rem]'>
          <div className='electrical-floating-orbit absolute inset-10 rounded-full border border-white/30'>
            <div className='absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-white' />
          </div>
        </div>
        <div className='electrical-reveal-section relative z-10 mx-auto max-w-screen-2xl'>
          <p className='mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-slate-900/70 sm:text-xs'>
            <span className='h-px w-8 bg-slate-950' />
            Start your next project / 004
          </p>
          <h2 id='electrical-next-step-title' className='electrical-scroll-text max-w-5xl font-[font2] text-[clamp(3.5rem,9vw,8.5rem)] uppercase leading-[0.88] tracking-[-0.065em]'>
            Engineering<br />
            for your <span className='text-white'>next move.</span>
          </h2>
          <div className='mt-9 flex flex-col gap-6 border-t border-slate-950/25 pt-6 sm:flex-row sm:items-end sm:justify-between'>
            <p className='max-w-lg text-sm leading-relaxed text-slate-950/75 sm:text-base'>
              Tell us what your operation needs. We can help shape the right automation or electrical solution.
            </p>
            <a
              href='#enquiry'
              className='group inline-flex min-h-12 w-fit items-center gap-3 bg-slate-950 px-5 text-xs uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 sm:min-h-14 sm:px-6'
            >
              Start an enquiry
              <ArrowUpRight size={17} aria-hidden='true' className='transition-transform group-hover:translate-x-1 group-hover:-translate-y-1' />
            </a>
          </div>
        </div>
      </section>

      <HomeInquiryForm contactOnly />
    </main>
  )
}

export default Electrical
