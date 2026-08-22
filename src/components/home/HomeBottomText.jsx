import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  const [socialOpen, setSocialOpen] = useState(false)
  const [branchOpen, setBranchOpen] = useState(false)

  return (
    <div className='font-[font2] flex items-center justify-center gap-1 sm:gap-2 px-2'>

      {/*  PROJECTS  */}
      <div className='
        border border-white
        hover:border-[#D3FD50]
        hover:text-[#D3FD50]
        h-10 sm:h-12 lg:h-20
        flex items-center
        pt-1
        px-3 sm:px-4 lg:px-5
        rounded-full
        uppercase
        transition-all duration-300
      '>
        <Link
          className='text-[15px] sm:text-base lg:text-[5vw] lg:mt-0'
          to='/projects'
        >
          Projects
        </Link>
      </div>


      {/*  ABOUT  */}
      <div className='
        border border-white
        hover:border-[#D3FD50]
        hover:text-[#D3FD50]
        h-10 sm:h-12 lg:h-20
        flex items-center
        pt-1
        px-3 sm:px-4 lg:px-5
        rounded-full
        uppercase
        transition-all duration-300
      '>
        <Link
          className='text-[15px] sm:text-base lg:text-[5vw] lg:mt-0'
          to='/agence'
        >
          About
        </Link>
      </div>


      {/* BRANCH OFFICES */}
      <div
        className='
          fixed
          bottom-3 sm:bottom-5
          left-3 sm:left-5 lg:left-8
          z-[100]
          flex flex-col-reverse
          items-center
          gap-2 sm:gap-3
        '
        onMouseEnter={() => setBranchOpen(true)}
        onMouseLeave={() => setBranchOpen(false)}
      >

        {/* Main Branch Button */}
        <button
          type='button'
          onClick={() => setBranchOpen(!branchOpen)}
          title='Our Branches'
          aria-label='Our Branches'
          className='
            w-12 h-12
            sm:w-14 sm:h-14
            lg:w-16 lg:h-16
            rounded-full
            border
            sm:border-2
            border-white
            text-white
            flex items-center justify-center
            hover:border-[#D3FD50]
            hover:text-[#D3FD50]
            transition-all duration-300
            bg-black/30
            backdrop-blur-sm
          '
        >

          {branchOpen ? (
            <span className='text-2xl sm:text-3xl lg:text-4xl leading-none'>
              ×
            </span>
          ) : (
            <svg
              className='w-5 h-5 sm:w-6 sm:h-6 lg:w-[27px] lg:h-[27px]'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.8'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z' />
              <circle cx='12' cy='10' r='2.5' />
            </svg>
          )}

        </button>


        {/* Branch Locations */}
        <div
          className={`
            flex flex-col gap-2 sm:gap-3
            transition-all duration-300
            ${branchOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-5 pointer-events-none'
            }
          `}
        >

          {/* Sikar */}
          <a
            href='https://share.google/Mr8cMOsD6Qpbwmvum'
            target='_blank'
            rel='noopener noreferrer'
            title='Sikar Branch'
            className='
              px-4 sm:px-5
              h-10 sm:h-12
              min-w-[75px]
              rounded-full
              border border-white
              bg-black
              text-white
              flex items-center justify-center
              uppercase
              text-xs sm:text-sm
              hover:border-[#D3FD50]
              hover:text-[#D3FD50]
              hover:scale-105
              transition-all duration-300
            '
          >
            Sikar
          </a>


          {/* Churu */}
          <a
            href='https://www.google.com/maps/search/?api=1&query=Churu,Rajasthan,India'
            target='_blank'
            rel='noopener noreferrer'
            title='Churu Branch'
            className='
              px-4 sm:px-5
              h-10 sm:h-12
              min-w-[75px]
              rounded-full
              border border-white
              bg-black
              text-white
              flex items-center justify-center
              uppercase
              text-xs sm:text-sm
              hover:border-[#D3FD50]
              hover:text-[#D3FD50]
              hover:scale-105
              transition-all duration-300
            '
          >
            Churu
          </a>


          {/* Fatehpur */}
          <a
            href='https://www.google.com/maps/search/?api=1&query=Fatehpur,Rajasthan,India'
            target='_blank'
            rel='noopener noreferrer'
            title='Fatehpur Branch'
            className='
              px-4 sm:px-5
              h-10 sm:h-12
              min-w-[75px]
              rounded-full
              border border-white
              bg-black
              text-white
              flex items-center justify-center
              uppercase
              text-xs sm:text-sm
              hover:border-[#D3FD50]
              hover:text-[#D3FD50]
              hover:scale-105
              transition-all duration-300
            '
          >
            Fatehpur
          </a>

        </div>

      </div>


      {/* SOCIAL MEDIA */}
      <div
        className='
          fixed
          bottom-3 sm:bottom-5
          right-3 sm:right-5 lg:right-8
          z-[100]
          flex flex-col-reverse
          items-center
          gap-2 sm:gap-3
        '
        onMouseEnter={() => setSocialOpen(true)}
        onMouseLeave={() => setSocialOpen(false)}
      >

        {/* Main Social Button */}
        <button
          type='button'
          onClick={() => setSocialOpen(!socialOpen)}
          title='Social Media'
          aria-label='Social Media'
          className='
            w-12 h-12
            sm:w-14 sm:h-14
            lg:w-16 lg:h-16
            rounded-full
            border
            sm:border-2
            border-white
            text-white
            flex items-center justify-center
            text-2xl sm:text-3xl lg:text-5xl
            hover:border-[#D3FD50]
            hover:text-[#D3FD50]
            transition-all duration-300
            bg-black/30
            backdrop-blur-sm
          '
        >
          {socialOpen ? '×' : '↗'}
        </button>


        {/* Social Icons */}
        <div
          className={`
            flex flex-col gap-2 sm:gap-3
            transition-all duration-300
            ${socialOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-5 pointer-events-none'
            }
          `}
        >

          {/* WhatsApp */}
          <a
            href='https://wa.me/918949656484'
            target='_blank'
            rel='noopener noreferrer'
            title='WhatsApp'
            className='
              w-10 h-10
              sm:w-12 sm:h-12
              rounded-full
              border border-white
              bg-black
              text-white
              flex items-center justify-center
              text-lg sm:text-xl
              hover:border-[#D3FD50]
              hover:text-[#D3FD50]
              hover:scale-110
              transition-all duration-300
            '
          >
            ☎
          </a>


          {/* LinkedIn */}
          <a
            href='https://www.linkedin.com/in/innovex-automation-15b4b8222/'
            target='_blank'
            rel='noopener noreferrer'
            title='LinkedIn'
            className='
              w-10 h-10
              sm:w-12 sm:h-12
              rounded-full
              border border-white
              bg-black
              text-white
              flex items-center justify-center
              font-bold
              text-base sm:text-lg
              hover:border-[#D3FD50]
              hover:text-[#D3FD50]
              hover:scale-110
              transition-all duration-300
            '
          >
            in
          </a>


          {/* Email */}
          <a
            href='mailto:innovexautomations@gmail.com'
            title='Email'
            className='
              w-10 h-10
              sm:w-12 sm:h-12
              rounded-full
              border border-white
              bg-black
              text-white
              flex items-center justify-center
              text-lg sm:text-xl
              hover:border-[#D3FD50]
              hover:text-[#D3FD50]
              hover:scale-110
              transition-all duration-300
            '
          >
            @
          </a>

        </div>

      </div>

    </div>
  )
}

export default HomeBottomText