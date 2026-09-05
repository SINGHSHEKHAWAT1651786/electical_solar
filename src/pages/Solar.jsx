import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image4 from '../assets/images/image4.jpg'
import image5 from '../assets/images/image5.jpg'
import image7 from '../assets/images/image7.jpg'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  ['RAJESH SHARMA', 'SIKAR, RAJASTHAN', '10 KW RESIDENTIAL', 'Professional installation, excellent support and a noticeable reduction in our electricity bill.'],
  ['ANIL AGARWAL', 'JAIPUR, RAJASTHAN', '25 KW COMMERCIAL', 'The entire project from survey to commissioning was handled smoothly and professionally.'],
  ['MAHESH GUPTA', 'KOTA, RAJASTHAN', '15 KW RESIDENTIAL', 'Good quality panels, clean installation and very responsive after-sales service.'],
]

const inverters = [
  ['TATA POWER', 'SOLAR INVERTER', '5 - 100 KW', image1],
  ['LUMINOUS', 'SOLAR NXG', '3 - 10 KW', image5],
  ['ADANI', 'SOLAR POWER', '5 - 100 KW', image7],
  ['WAAREE', 'SMART ENERGY', '5 - 50 KW', image2],
]

const projects = [
  ['01', 'RESIDENTIAL', 'SIKAR / RAJASTHAN', '10 KW', '18 PANELS', image1],
  ['02', 'COMMERCIAL', 'JAIPUR / RAJASTHAN', '25 KW', '46 PANELS', image5],
  ['03', 'INDUSTRIAL', 'KOTA / RAJASTHAN', '100 KW', '180 PANELS', image7],
  ['04', 'LARGE SCALE', 'RAJASTHAN / INDIA', '500 KW', '900+ PANELS', image4],
]

const branches = [
  ['01', 'SIKAR', 'HEAD OFFICE'],
  ['02', 'JAIPUR', 'SERVICE BRANCH'],
  ['03', 'KOTA', 'PROJECT OFFICE'],
  ['04', 'DELHI', 'NORTH REGION'],
]

const Solar = () => {
  const pageRef = useRef(null)

  useGSAP(() => {
    const scope = pageRef.current
    if (!scope) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    gsap.fromTo('.solar-hero-image', { scale: 1.18, opacity: 0 }, {
      scale: 1,
      opacity: 0.78,
      duration: 1.4,
      ease: 'power4.out',
    })

    gsap.fromTo('.solar-hero-line', { yPercent: 120, opacity: 0 }, {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power4.out',
      delay: 0.2,
    })

    gsap.utils.toArray('.solar-reveal', scope).forEach((element) => {
      gsap.fromTo(element, { y: 70, opacity: 0 }, {
        y: 0,
        opacity: 1,
        ease: 'power4.out',
        scrollTrigger: { trigger: element, start: 'top 88%', end: 'top 58%', scrub: 0.7 },
      })
    })
  }, { scope: pageRef })

  return (
    <main ref={pageRef} className="overflow-hidden bg-[#f4f3ee] text-[#111]">
      <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-black px-5 py-8 text-white md:px-10 md:py-10">
        <img className="solar-hero-image absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2400&q=85" alt="Solar panels" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 flex justify-between text-[10px] uppercase tracking-[0.25em] md:text-xs"><span>INNOVEX AUTOMATION</span><span>ENERGY / SOLAR / POWER</span></div>
        <div className="relative z-10 overflow-hidden"><h1 className="font-[font2] text-[19vw] uppercase leading-[0.72] md:text-[13vw]"><span className="solar-hero-line block">Power</span><span className="solar-hero-line block">Your</span><span className="solar-hero-line block text-sky-300">Future</span></h1></div>
        <div className="relative z-10 flex items-end justify-between gap-6"><p className="max-w-md text-sm leading-6 text-white/70 md:text-base">Solar systems engineered for homes, businesses and industries across Rajasthan and beyond.</p><span className="hidden h-24 w-24 items-center justify-center rounded-full border border-white/50 text-center text-[9px] uppercase tracking-[0.2em] md:flex">Scroll<br />Explore</span></div>
      </section>

      <section className="px-5 py-32 md:px-10 md:py-48"><div className="grid gap-12 md:grid-cols-[0.65fr_2fr]"><p className="solar-reveal text-xs uppercase tracking-[0.3em]">001 / Solar energy</p><h2 className="solar-reveal max-w-6xl font-[font2] text-[14vw] uppercase leading-[0.76] md:text-[9vw]">Clean power.<br /><span className="text-sky-500">Built properly.</span></h2></div></section>

      <section className="bg-black px-5 py-24 text-white md:px-10 md:py-36"><div className="mb-16 flex justify-between text-xs uppercase tracking-[0.25em] text-sky-300"><span>002 / Customer voice</span><span>Field tested</span></div><div className="grid gap-5 md:grid-cols-3">{reviews.map(([name, city, system, text], index) => <article key={name} className="solar-reveal border-t border-white/20 pt-6"><span className="text-xs text-white/40">0{index + 1} / {system}</span><blockquote className="mt-10 font-[font2] text-[8vw] uppercase leading-[0.8] md:text-[3.3vw]">“{text}”</blockquote><div className="mt-10"><p className="uppercase">{name}</p><p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">{city}</p></div></article>)}</div></section>

      <section className="inverter-section overflow-hidden bg-[#deddd6] px-5 py-24 md:px-10 md:py-36"><div className="mb-14 flex items-end justify-between"><div><p className="text-xs uppercase tracking-[0.25em] text-black/45">003 / Inverters</p><h2 className="mt-8 font-[font2] text-[15vw] uppercase leading-[0.75] md:text-[9vw]">Power<br /><span className="text-sky-500">Inside.</span></h2></div><p className="hidden max-w-xs text-right text-sm uppercase text-black/50 md:block">Reliable conversion from sunlight to usable power.</p></div><div className="grid gap-5 md:grid-cols-2">{inverters.map(([brand, model, capacity, image]) => <article key={brand} className="solar-reveal overflow-hidden rounded-[1.5rem] bg-white p-4 md:p-6"><img className="h-64 w-full rounded-[1rem] object-cover md:h-80" src={image} alt={brand} /><div className="mt-6 flex items-end justify-between gap-4"><div><h3 className="font-[font2] text-4xl uppercase md:text-6xl">{brand}</h3><p className="mt-2 text-xs uppercase tracking-[0.2em] text-black/45">{model}</p></div><p className="text-right text-xs uppercase tracking-[0.2em]">{capacity}</p></div></article>)}</div></section>

      <section className="bg-[#101214] px-5 py-24 text-white md:px-10 md:py-36"><div className="mb-16"><p className="text-xs uppercase tracking-[0.3em] text-sky-300">004 / Built energy</p><h2 className="mt-8 font-[font2] text-[15vw] uppercase leading-[0.75] md:text-[10vw]">Projects<br /><span className="text-sky-300">that perform.</span></h2></div><div className="space-y-5">{projects.map(([number, title, location, capacity, panelCount, image]) => <article key={number} className="solar-reveal relative min-h-[55vh] overflow-hidden rounded-[1.5rem] bg-black md:min-h-[70vh]"><img className="absolute inset-0 h-full w-full object-cover opacity-60" src={image} alt={title} /><div className="absolute inset-0 bg-black/35" /><div className="relative z-10 flex min-h-[55vh] flex-col justify-between p-5 md:min-h-[70vh] md:p-10"><span className="font-[font2] text-[18vw] leading-none text-white/30 md:text-[10vw]">{number}</span><div><p className="text-xs uppercase tracking-[0.3em] text-sky-300">{location}</p><h3 className="mt-4 font-[font2] text-[13vw] uppercase leading-[0.75] md:text-[8vw]">{title}</h3><div className="mt-8 flex gap-8 border-t border-white/30 pt-5 text-xs uppercase tracking-[0.2em]"><span>{capacity}</span><span>{panelCount}</span></div></div></div></article>)}</div></section>

      <section className="bg-white px-5 py-32 md:px-10 md:py-48"><div className="grid gap-16 md:grid-cols-[0.65fr_2fr]"><div><p className="text-xs uppercase tracking-[0.3em] text-black/40">005 / Our network</p><h2 className="mt-8 font-[font2] text-[16vw] uppercase leading-[0.72] md:text-[9vw]">Near<br /><span className="text-sky-400">You.</span></h2></div><div>{branches.map(([number, city, detail]) => <article key={city} className="solar-reveal border-t border-black/20 py-10 md:py-14"><div className="flex items-center gap-5"><span className="text-xs text-black/30">{number}</span><span className="h-px flex-1 bg-black/20" /><span className="text-xs uppercase tracking-[0.2em] text-black/40">{detail}</span></div><h3 className="mt-7 font-[font2] text-[14vw] uppercase leading-[0.75] md:text-[8vw]">{city}</h3></article>)}</div></div></section>

      <section className="solar-cta flex min-h-[80vh] flex-col justify-between bg-sky-300 px-5 py-12 md:px-10 md:py-16"><p className="text-xs uppercase tracking-[0.3em]">006 / Start your solar project</p><h2 className="font-[font2] text-[18vw] uppercase leading-[0.7] md:text-[13vw]">Make<br />Your<br /><span className="text-white">Roof<br />Work.</span></h2><div className="flex flex-col justify-between gap-8 border-t border-black/25 pt-6 md:flex-row"><a className="text-lg md:text-2xl" href="mailto:info@innovexautomation.com">info@innovexautomation.com</a><Link className="text-sm uppercase tracking-[0.2em]" to="/contact">Get free consultation <span className="ml-4 text-xl">-&gt;</span></Link></div></section>
    </main>
  )
}

export default Solar
