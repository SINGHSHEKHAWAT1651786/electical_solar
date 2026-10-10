import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import HomeInquiryForm from '../components/home/HomeInquiryForm'
import automationImage from '../assets/optimized/image1.jpg'
import electricalImage from '../assets/optimized/image4.jpg'

const disciplines = [
  {
    number: '01',
    title: 'Industrial Automation',
    description:
      'Control architecture, PLC systems and intelligent production lines engineered for dependable output.',
    tags: ['PLC systems', 'SCADA', 'Robotics'],
    image: automationImage,
    alt: 'Industrial automation control equipment concept',
  },
  {
    number: '02',
    title: 'Electrical Solutions',
    description:
      'Power distribution and industrial electrical systems designed to make every connection count.',
    tags: ['Power distribution', 'Control panels', 'Safety systems'],
    image: electricalImage,
    alt: 'Industrial electrical control cabinet concept',
  },
]

const Electrical = () => (
  <main className='bg-[#e8eef0] text-[#28383f]'>
    <section className='relative isolate flex min-h-[620px] h-[82svh] flex-col justify-end overflow-hidden bg-slate-800 px-5 pb-10 pt-28 text-white sm:px-8 sm:pb-12 lg:px-12'>
      <img
        src={automationImage}
        alt='Industrial automation controls'
        className='absolute inset-0 -z-10 h-full w-full object-cover'
        fetchPriority='high'
      />
      <div className='absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/75 via-slate-900/45 to-slate-900/15' />
      <div className='absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-900/15' />

      <div className='mx-auto w-full max-w-screen-2xl'>
        <p className='mb-5 text-[10px] uppercase tracking-[0.16em] text-white/80 sm:text-xs'>
          Innovex Automation <span className='px-2 text-sky-300'>/</span> Sikar, Rajasthan
        </p>
        <h1 className='max-w-4xl font-[font1] text-4xl uppercase leading-[0.92] sm:text-6xl lg:text-7xl'>
          Industrial automation <span className='text-sky-300'>&amp;</span> electrical systems.
        </h1>
        <p className='mt-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base'>
          Control systems and electrical infrastructure, engineered around your operation.
        </p>
        <div className='mt-7 flex flex-wrap gap-3'>
          <a
            href='#enquiry'
            className='inline-flex min-h-12 items-center gap-3 bg-sky-300 px-5 text-xs uppercase tracking-[0.1em] text-slate-900 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
          >
            Request a quote <ArrowDown size={16} aria-hidden='true' />
          </a>
          <Link
            to='/projects'
            className='inline-flex min-h-12 items-center gap-2 border border-white/70 px-5 text-xs uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
          >
            See project samples <ArrowUpRight size={16} aria-hidden='true' />
          </Link>
        </div>
      </div>
    </section>

    <section className='mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24' aria-labelledby='electrical-systems-title'>
      <div className='mb-9 flex flex-col gap-4 border-b border-slate-600/20 pb-7 sm:mb-12 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='mb-3 text-[10px] uppercase tracking-[0.16em] text-sky-800 sm:text-xs'>Systems / 01-02</p>
          <h2 id='electrical-systems-title' className='font-[font1] text-3xl uppercase sm:text-4xl'>
            Built around the work.
          </h2>
        </div>
        <p className='max-w-md text-sm leading-relaxed text-slate-600'>
          From control architecture to power distribution, begin with the system your operation needs.
        </p>
      </div>

      <div className='grid gap-12 lg:grid-cols-2 lg:gap-8'>
        {disciplines.map((discipline) => (
          <article key={discipline.number}>
            <div className='relative aspect-[1.6] overflow-hidden bg-slate-300'>
              <img
                src={discipline.image}
                alt={discipline.alt}
                loading='lazy'
                decoding='async'
                className='h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]'
              />
              <span className='absolute bottom-4 left-4 bg-slate-950/80 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-white'>
                Innovex / {discipline.number}
              </span>
            </div>
            <div className='mt-5 flex items-start justify-between gap-4 border-b border-slate-600/25 pb-5'>
              <div>
                <p className='mb-2 text-[10px] uppercase tracking-[0.12em] text-sky-800'>{discipline.number} / Capability</p>
                <h3 className='font-[font1] text-2xl uppercase sm:text-3xl'>{discipline.title}</h3>
              </div>
              <ArrowUpRight className='mt-1 shrink-0 text-sky-800' size={19} aria-hidden='true' />
            </div>
            <p className='mt-4 max-w-xl text-sm leading-relaxed text-slate-600'>{discipline.description}</p>
            <ul className='mt-5 flex flex-wrap gap-x-5 gap-y-2'>
              {discipline.tags.map((tag) => (
                <li key={tag} className='text-[10px] uppercase tracking-[0.1em] text-slate-500'>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>

    <section className='bg-white/70 py-14 sm:py-18' aria-labelledby='electrical-samples-title'>
      <div className='mx-auto max-w-screen-2xl px-5 sm:px-8 lg:px-12'>
        <div className='flex flex-wrap items-end justify-between gap-4 border-b border-slate-600/20 pb-5'>
          <div>
            <p className='mb-3 text-[10px] uppercase tracking-[0.16em] text-sky-800 sm:text-xs'>Illustrative / Sample concepts</p>
            <h2 id='electrical-samples-title' className='font-[font1] text-3xl uppercase sm:text-4xl'>
              Example project types.
            </h2>
          </div>
          <p className='max-w-sm text-xs leading-relaxed text-slate-600'>
            Concept imagery only. These are not presented as completed client installations.
          </p>
        </div>
        <div className='mt-7 grid gap-5 md:grid-cols-2'>
          {[
            { title: 'Factory automation', type: 'Industrial Automation', image: automationImage },
            { title: 'Power distribution', type: 'Electrical Solutions', image: electricalImage },
          ].map((sample, index) => (
            <article key={sample.title}>
              <div className='relative aspect-[1.6] overflow-hidden bg-slate-200'>
                <img src={sample.image} alt={`${sample.title} sample concept`} loading='lazy' decoding='async' className='h-full w-full object-cover' />
                <span className='absolute left-4 top-4 bg-sky-300 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-slate-900'>
                  Sample / 0{index + 1}
                </span>
              </div>
              <div className='flex flex-wrap items-baseline justify-between gap-3 border-b border-slate-600/20 py-4'>
                <h3 className='text-base uppercase sm:text-lg'>{sample.title}</h3>
                <span className='text-right text-[10px] uppercase tracking-[0.1em] text-slate-500'>{sample.type}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <HomeInquiryForm />
  </main>
)

export default Electrical
