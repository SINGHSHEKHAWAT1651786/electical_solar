import { useState } from 'react'
import { ArrowUpRight, Mail, Send } from 'lucide-react'

const HomeInquiryForm = () => {
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
      `mailto:info@innovexautomation.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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
            className='max-w-lg font-[font1] text-3xl uppercase leading-[0.96] sm:text-4xl lg:text-5xl'
          >
            Tell us what you need to power.
          </h2>
          <p className='mt-5 max-w-md text-sm leading-relaxed text-black/65 sm:text-base'>
            Share a few details and we will prepare an email to the Innovex team.
          </p>
          <a
            href='mailto:info@innovexautomation.com'
            className='mt-7 inline-flex items-center gap-2 text-sm transition-colors hover:text-sky-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-800'
          >
            <Mail size={16} aria-hidden='true' />
            info@innovexautomation.com
            <ArrowUpRight size={15} aria-hidden='true' />
          </a>
        </div>

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
      </div>
    </section>
  )
}

export default HomeInquiryForm
