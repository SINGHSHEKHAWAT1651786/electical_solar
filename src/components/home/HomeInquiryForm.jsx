import { useState } from 'react'
import { ArrowUpRight, Mail, Phone, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomeInquiryForm = ({ contactOnly = false }) => {
  const [draftHref, setDraftHref] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone') || 'Not provided'
    const service = formData.get('service')
    const details = formData.get('details')
    const subject = `Project enquiry: ${service}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      '',
      'Project details:',
      details,
    ].join('\n')

    setDraftHref(
      `mailto:innovexautomations@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    )
  }

  return (
    <section
      id='enquiry'
      className='bg-[#dce8ed] text-[#101214]'
      aria-labelledby='home-enquiry-title'
    >
      <div className='mx-auto grid max-w-screen-2xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12 lg:py-24'>
        <div>
          <p className='mb-4 text-xs uppercase tracking-[0.16em] text-sky-800'>
            Innovex Automation / Sikar
          </p>
          <h2
            id='home-enquiry-title'
            className={contactOnly
              ? 'max-w-lg font-[font2] text-[clamp(3rem,8vw,7.5rem)] uppercase leading-[0.9] tracking-[-0.06em]'
              : 'max-w-lg font-[font1] text-3xl uppercase leading-[0.96] sm:text-4xl lg:text-5xl'}
          >
            {contactOnly ? (
              <>
                <span className='block'>
                  <span className='electrical-contact-word block'>Power your</span>
                </span>
                <span className='block'>
                  <span className='electrical-contact-word block w-fit bg-black px-2 text-white'>NEXT MOVE.</span>
                </span>
              </>
            ) : (
              'Tell us what you need to power.'
            )}
          </h2>
          <p className='mt-5 max-w-md text-sm leading-relaxed text-black/65 sm:text-base'>
            {contactOnly
              ? 'Tell us about your automation or electrical project. Our team can help shape the right solution for your operation.'
              : 'Share your project details to prepare an email for our team. Once you send it, we will follow up. Prefer direct contact? Call or email us.'}
          </p>
          <div className='mt-7 flex flex-wrap items-center gap-x-6 gap-y-3'>
            <a
              href='mailto:innovexautomations@gmail.com'
              className='inline-flex items-center gap-2 break-all text-sm transition-colors hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-800'
            >
              <Mail size={16} aria-hidden='true' />
              innovexautomations@gmail.com
              <ArrowUpRight size={15} aria-hidden='true' />
            </a>
            <a
              href='tel:+917737216028'
              className='inline-flex items-center gap-2 text-sm transition-colors hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-800'
            >
              <Phone size={16} aria-hidden='true' />
              +91 77372 16028
              <ArrowUpRight size={15} aria-hidden='true' />
            </a>
          </div>
        </div>

        {contactOnly ? (
          <div className='electrical-contact-panel flex min-h-[280px] flex-col justify-between gap-10 bg-black p-6 text-white sm:p-8'>
            <div>
              <p className='text-[10px] uppercase tracking-[0.16em] text-sky-300'>
                Automation · Electrical · Power
              </p>
              <h3 className='electrical-contact-panel-heading mt-5 max-w-md font-[font2] text-[clamp(2.5rem,5vw,5rem)] uppercase leading-[0.9] tracking-[-0.06em]'>
                <span className='block'>
                  <span className='electrical-contact-panel-word block'>One system.</span>
                </span>
                <span className='mt-2 block text-sky-300'>
                  <span className='electrical-contact-panel-word block'>Built for your work.</span>
                </span>
              </h3>
            </div>
            <Link
              to='/contact'
              className='inline-flex min-h-12 w-fit items-center gap-3 bg-sky-300 px-5 text-xs uppercase tracking-[0.12em] text-slate-950 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
            >
              Contact us <ArrowUpRight size={16} aria-hidden='true' />
            </Link>
          </div>
        ) : (
        <form onSubmit={handleSubmit} className='grid gap-x-6 gap-y-6 sm:grid-cols-2'>
          <label className='grid gap-2 text-[10px] uppercase tracking-[0.14em] text-black/65'>
            Your name
            <input
              name='name'
              type='text'
              autoComplete='name'
              placeholder='Name'
              required
              className='min-h-12 w-full border-b border-black/30 bg-transparent px-0 text-base normal-case tracking-normal text-black outline-none placeholder:text-black/35 focus:border-sky-800'
            />
          </label>

          <label className='grid gap-2 text-[10px] uppercase tracking-[0.14em] text-black/65'>
            Email address
            <input
              name='email'
              type='email'
              autoComplete='email'
              placeholder='you@example.com'
              required
              className='min-h-12 w-full border-b border-black/30 bg-transparent px-0 text-base normal-case tracking-normal text-black outline-none placeholder:text-black/35 focus:border-sky-800'
            />
          </label>

          <label className='grid gap-2 text-[10px] uppercase tracking-[0.14em] text-black/65'>
            Phone <span className='text-black/40'>(optional)</span>
            <input
              name='phone'
              type='tel'
              autoComplete='tel'
              placeholder='+91'
              className='min-h-12 w-full border-b border-black/30 bg-transparent px-0 text-base normal-case tracking-normal text-black outline-none placeholder:text-black/35 focus:border-sky-800'
            />
          </label>

          <label className='grid gap-2 text-[10px] uppercase tracking-[0.14em] text-black/65'>
            Service
            <select
              name='service'
              defaultValue='Industrial Automation'
              className='min-h-12 w-full border-b border-black/30 bg-transparent px-0 text-base normal-case tracking-normal text-black outline-none focus:border-sky-800'
            >
              <option>Industrial Automation</option>
              <option>Electrical Solutions</option>
              <option>Solar Energy</option>
              <option>Commissioning &amp; Support</option>
            </select>
          </label>

          <label className='grid gap-2 text-[10px] uppercase tracking-[0.14em] text-black/65 sm:col-span-2'>
            Project details
            <textarea
              name='details'
              rows='3'
              placeholder='What are you planning?'
              required
              className='w-full resize-y border-b border-black/30 bg-transparent px-0 py-3 text-base normal-case tracking-normal text-black outline-none placeholder:text-black/35 focus:border-sky-800'
            />
          </label>

          <div className='flex flex-wrap items-center gap-5 sm:col-span-2'>
            <button
              type='submit'
              className='inline-flex min-h-12 items-center gap-3 bg-[#00aeea] px-5 text-xs uppercase tracking-[0.12em] text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black'
            >
              Prepare email <Send size={15} aria-hidden='true' />
            </button>
            {draftHref && (
              <a
                href={draftHref}
                className='inline-flex min-h-11 items-center gap-2 text-xs uppercase tracking-[0.12em] text-sky-900 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-800'
              >
                Open email draft <ArrowUpRight size={15} aria-hidden='true' />
              </a>
            )}
          </div>

          {draftHref && (
            <p className='text-xs text-black/60 sm:col-span-2' role='status'>
              Email draft ready. Open it in your email app to send your enquiry.
            </p>
          )}
        </form>
        )}
      </div>
    </section>
  )
}

export default HomeInquiryForm
