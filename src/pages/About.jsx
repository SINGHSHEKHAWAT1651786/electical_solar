import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

// =========================================================
// PAGE 1 LOCAL IMAGES
// =========================================================

import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'
import image5 from '../assets/images/image5.jpg'
import image6 from '../assets/images/image6.jpg'
import image7 from '../assets/images/image7.jpg'

const About = () => {

  gsap.registerPlugin(ScrollTrigger)

  // =========================================================
  // PAGE 1 REFS
  // =========================================================

  const page1Ref = useRef(null)

  const page1ImageContainerRef = useRef(null)

  const page1Image1Ref = useRef(null)
  const page1Image2Ref = useRef(null)

  const page1ActiveImageRef = useRef(0)
  const page1CurrentIndexRef = useRef(0)

  // =========================================================
  // PAGE 2 REFS
  // =========================================================

  const page2Ref = useRef(null)

  const page2ImageContainerRef = useRef(null)
  const page2Image1Ref = useRef(null)
  const page2Image2Ref = useRef(null)

  const activeImageRef = useRef(0)

  const [activePerson, setActivePerson] = useState(null)

  // =========================================================
  // PAGE 1 IMAGES
  // =========================================================

  const page1Images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ]

  // =========================================================
  // PAGE 2 / TEAM IMAGES
  // =========================================================

  const teamImages = {

    carl:
      'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',

    camille:
      'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',

    olivier:
      'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',

    lawrence:
      'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',

    hugo:
      'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',

    chantal:
      'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',

    mylene:
      'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',

    sophie:
      'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',

    claire:
      'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',

    michele:
      'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',

    mel:
      'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',

    maxime:
      'https://k72.ca/uploads/teamMembers/MAXIME_480X640-480x640.jpg',

    meggie:
      'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',

    joel:
      'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',

  }

  // =========================================================
  // PAGE 1 IMAGE PRELOAD
  // =========================================================

  useGSAP(() => {

    page1Images.forEach((src) => {

      const img = new Image()

      img.src = src

    })

  }, [])

  // =========================================================
  // PAGE 1 SCROLL IMAGE SYSTEM
  // =========================================================

  useGSAP(() => {

    const page1 = page1Ref.current
    const image1Element = page1Image1Ref.current
    const image2Element = page1Image2Ref.current

    if (
      !page1 ||
      !image1Element ||
      !image2Element
    ) {
      return
    }

    // -------------------------------------------------------
    // INITIAL STATE
    // -------------------------------------------------------

    image1Element.src = page1Images[0]
    image2Element.src = page1Images[1]

    gsap.set(image1Element, {
      opacity: 1,
      scale: 1,
    })

    gsap.set(image2Element, {
      opacity: 0,
      scale: 1.04,
    })

    page1ActiveImageRef.current = 0
    page1CurrentIndexRef.current = 0

    // -------------------------------------------------------
    // IMAGE TRANSITION FUNCTION
    // -------------------------------------------------------

    const changeImage = (nextIndex) => {

      const currentIndex =
        page1CurrentIndexRef.current

      if (nextIndex === currentIndex) {
        return
      }

      const currentImage =
        page1ActiveImageRef.current === 0
          ? image1Element
          : image2Element

      const nextImage =
        page1ActiveImageRef.current === 0
          ? image2Element
          : image1Element

      nextImage.src =
        page1Images[nextIndex]

      gsap.killTweensOf([
        currentImage,
        nextImage,
      ])

      gsap.set(nextImage, {
        opacity: 0,
        scale: 1.05,
      })

      gsap.to(currentImage, {

        opacity: 0,
        scale: 0.98,

        duration: 0.45,

        ease: 'power2.out',

      })

      gsap.to(nextImage, {

        opacity: 1,
        scale: 1,

        duration: 0.65,

        ease: 'power3.out',

      })

      page1ActiveImageRef.current =
        page1ActiveImageRef.current === 0
          ? 1
          : 0

      page1CurrentIndexRef.current =
        nextIndex

    }

    // =======================================================
    // SCROLLTRIGGER
    // =======================================================

    const trigger = ScrollTrigger.create({

      trigger: page1,

      start: 'top top',

      end: 'bottom bottom',

      scrub: true,

      invalidateOnRefresh: true,

      onUpdate: (self) => {

        const progress = self.progress

        const maxIndex =
          page1Images.length - 1

        const nextIndex = Math.min(
          maxIndex,
          Math.floor(
            progress * (maxIndex + 0.999)
          )
        )

        changeImage(nextIndex)

      },

    })

    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    return () => {

      trigger.kill()

    }

  }, [])

  // =========================================================
  // PAGE 2 IMAGE INITIAL SETUP
  // =========================================================

  useGSAP(() => {

    if (page2ImageContainerRef.current) {

      gsap.set(
        page2ImageContainerRef.current,
        {
          autoAlpha: 0,
        }
      )

    }

  }, [])

  // =========================================================
  // TEAM MEMBERS
  // =========================================================

  const teamMembers = [

    {
      name: 'CARL GODBOUT',
      designation: 'Engineering & Automation',
      image: teamImages.carl,
    },

    {
      name: 'CAMILLE BRIÈRE',
      designation: 'Solar Solutions',
      image: teamImages.camille,
    },

    {
      name: 'OLIVIER DUCLOS',
      designation: 'Electrical Engineering',
      image: teamImages.olivier,
    },

    {
      name: 'LAWRENCE MARTIN',
      designation: 'Industrial Automation',
      image: teamImages.lawrence,
    },

    {
      name: 'HUGO JOSEPH',
      designation: 'Project Engineering',
      image: teamImages.hugo,
    },

    {
      name: 'CHANTAL G.',
      designation: 'Solar Installation',
      image: teamImages.chantal,
    },

    {
      name: 'MYLÈNE S.',
      designation: 'Electrical Solutions',
      image: teamImages.mylene,
    },

    {
      name: 'SOPHIE A.',
      designation: 'Building Wiring',
      image: teamImages.sophie,
    },

    {
      name: 'CLAIRE L.',
      designation: 'Control Panel',
      image: teamImages.claire,
    },

    {
      name: 'MICHÈLE RIENDEAU',
      designation: 'Maintenance & AMC',
      image: teamImages.michele,
    },

    {
      name: 'MEL',
      designation: 'PLC & SCADA',
      image: teamImages.mel,
    },

    {
      name: 'MAXIME',
      designation: 'Industrial Electrical',
      image: teamImages.maxime,
    },

    {
      name: 'MEGGIE',
      designation: 'Solar Engineering',
      image: teamImages.meggie,
    },

    {
      name: 'JOËL',
      designation: 'Engineering Projects',
      image: teamImages.joel,
    },

  ]

  // =========================================================
  // PRELOAD TEAM IMAGES
  // =========================================================

  useGSAP(() => {

    teamMembers.forEach((member) => {

      const img = new Image()

      img.src = member.image

    })

  }, [])

  // =========================================================
  // SHOW TEAM IMAGE
  // =========================================================

  const showTeamImage = (index) => {

    const container =
      page2ImageContainerRef.current

    const image1Element =
      page2Image1Ref.current

    const image2Element =
      page2Image2Ref.current

    if (
      !container ||
      !image1Element ||
      !image2Element
    ) {
      return
    }

    const currentImage =
      activeImageRef.current === 0
        ? image1Element
        : image2Element

    const nextImage =
      activeImageRef.current === 0
        ? image2Element
        : image1Element

    nextImage.src =
      teamMembers[index].image

    gsap.killTweensOf([
      container,
      currentImage,
      nextImage,
    ])

    // =======================================================
    // FIRST HOVER
    // =======================================================

    if (activePerson === null) {

      gsap.set(container, {
        autoAlpha: 1,
        scale: 0.88,
      })

      gsap.set(nextImage, {
        opacity: 0,
        scale: 1.15,
        x: 70,
        y: 30,
        rotate: 4,
      })

      gsap.to(container, {
        scale: 1,
        duration: 0.45,
        ease: 'power3.out',
      })

      gsap.to(nextImage, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotate: 0,
        duration: 0.8,
        ease: 'power4.out',
      })

    }

    // =======================================================
    // CHANGE IMAGE
    // =======================================================

    else {

      gsap.set(nextImage, {
        opacity: 0,
        scale: 1.12,
        x: 60,
        y: 25,
        rotate: 3,
      })

      gsap.to(currentImage, {
        opacity: 0,
        scale: 0.94,
        x: -40,
        y: -20,
        rotate: -3,
        duration: 0.5,
        ease: 'power3.inOut',
      })

      gsap.to(nextImage, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotate: 0,
        duration: 0.8,
        ease: 'power4.out',
      })

    }

    activeImageRef.current =
      activeImageRef.current === 0
        ? 1
        : 0

    setActivePerson(index)

  }

  // =========================================================
  // HIDE TEAM IMAGE
  // =========================================================

  const hideTeamImage = () => {

    const container =
      page2ImageContainerRef.current

    if (!container) return

    gsap.killTweensOf(container)

    gsap.to(container, {

      autoAlpha: 0,
      scale: 0.92,

      duration: 0.3,

      ease: 'power3.out',

    })

    setActivePerson(null)

  }


  // JSX
  
  return (

    <div className='parent'>

      {/* =====================================================
          PAGE 1
      ===================================================== */}

      <div
        ref={page1Ref}
        id='page1'
        className='
          relative
          py-1
          min-h-[180vh]
        '
      >

        {/* =================================================
            PAGE 1 IMAGE SYSTEM
        ================================================= */}

        <div
          className='
            absolute
            inset-x-0
            top-0
            h-full
            pointer-events-none
          '
        >

          {/* STICKY IMAGE */}

          <div
            ref={page1ImageContainerRef}
            className='
              sticky
              top-[65%]
              
              top-1/2
              -translate-y-1/2
              lg:-translate-x-[-14vw]
              overflow-hidden
              lg:h-[30vw]
              h-[20vw]
              lg:w-[25vw]
              w-[35vw]
              lg:rounded-3xl
              rounded-xl
              will-change-transform
            '
          >

            {/* IMAGE 1 */}

            <img
              ref={page1Image1Ref}
              src={page1Images[0]}
              alt='Innovex Automation'
              className='
                absolute
                inset-0
                h-full
                w-full
                object-cover
                will-change-transform
              '
            />

            {/* IMAGE 2 */}

            <img
              ref={page1Image2Ref}
              src={page1Images[1]}
              alt='Innovex Automation'
              className='
                absolute
                inset-0
                h-full
                w-full
                object-cover
                will-change-transform
              '
            />

          </div>

        </div>


        {/* =================================================
            PAGE 1 CONTENT
        ================================================= */}

        <div
          className='
            relative
            z-10
            font-[font2]
          '
        >

          {/* TITLE */}

          <div
            className='
              lg:mt-[65vh]
              mt-[35vh]
            '
          >

            <h1
              className='
                text-[14vw]
                text-center
                uppercase
                leading-[18vw]
              '
            >

              INNOVEX
              <br />

              AUTOMATION

            </h1>

          </div>


          {/* DESCRIPTION */}

          <div
            className='
              lg:pl-[40%]
              lg:mt-20
              mt-4
              p-3
              pb-[70vh]
            '
          >

            <p
              className='
                lg:text-6xl
                text-xl
                leading-tight
              '
            >

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              Innovex Automation (IA) is a leading engineering
              company in Rajasthan, we specializing in{' '}

              <span className='bg-sky-300 px-2 py-1'>
                Industrial Automation
              </span>

              ,{' '}

              <span className='bg-sky-300 px-2 py-1'>
                Electrical Solutions
              </span>

              ,{' '}

              <span className='bg-sky-300 px-2 py-1'>
                Solar Energy
              </span>

              .

              Based in{' '}

              <span className='bg-gray-300 px-2 py-1'>
                Sikar
              </span>

              , with branches in{' '}

              <span className='bg-gray-300 px-2 py-1'>
                Churu
              </span>

              and{' '}

              <span className='bg-gray-300 px-2 py-1'>
                Fatehpur
              </span>

              , we delivering complete solutions from project
              design and installation to commissioning,
              maintenance, & technical support.

            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          PAGE 2
      ===================================================== */}

      <div
        ref={page2Ref}
        id='page2'
        className='
          relative
          min-h-[400vh]
          bg-white
          text-black
          font-[font2]
        '
      >

        {/* =================================================
            OUR EXPERIENCE
        ================================================= */}

        <section
          className='
            pt-[18vh]
            pb-[18vh]
            px-5
            lg:px-10
          '
        >

          <div
            className='
              flex
              flex-col
              lg:flex-row
              justify-between
              gap-12
            '
          >

            <div className='lg:w-[48%]'>

              <p
                className='
                  text-sm
                  lg:text-lg
                  uppercase
                  tracking-wider
                  mb-8
                '
              >
                Our Experience
              </p>

              <h2
                className='
                  text-[13vw]
                  lg:text-[8vw]
                  uppercase
                  leading-[0.82]
                '
              >

                BUILT
                <br />

                BY
                <br />

                EXPERIENCE

              </h2>

            </div>


            <div
              className='
                lg:w-[42%]
                lg:pt-[12vh]
              '
            >

              <p
                className='
                  text-xl
                  lg:text-4xl
                  leading-tight
                '
              >

                Engineering solutions built through{' '}

                <span
                  className='
                    bg-sky-300
                    px-2
                    py-1
                    mx-1
                  '
                >
                  practical experience
                </span>

                , technical expertise and a deep understanding
                of real-world industrial requirements.

              </p>


              <p
                className='
                  text-base
                  lg:text-xl
                  leading-relaxed
                  mt-10
                  text-black/60
                '
              >

                From automation and control systems to electrical
                infrastructure and solar energy, Innovex Automation
                works across the complete project lifecycle —
                from design and installation to commissioning,
                maintenance and technical support.

              </p>

            </div>

          </div>


          {/* =================================================
              EXPERIENCE NUMBERS
          ================================================= */}

          <div
            className='
              grid
              grid-cols-2
              lg:grid-cols-4
              mt-[15vh]
              border-t
              border-black
            '
          >

            {/* 10+ */}

            <div
              className='
                py-10
                lg:py-14
                border-b
                lg:border-b-0
                lg:border-r
                border-black/20
              '
            >

              <div
                className='
                  text-[15vw]
                  lg:text-[7vw]
                  leading-none
                '
              >
                10+
              </div>

              <p
                className='
                  text-sm
                  lg:text-lg
                  uppercase
                  mt-5
                '
              >
                Years Experience
              </p>

            </div>


            {/* 100+ */}

            <div
              className='
                py-10
                lg:py-14
                border-b
                lg:border-b-0
                lg:border-r
                border-black/20
                lg:pl-8
              '
            >

              <div
                className='
                  text-[15vw]
                  lg:text-[7vw]
                  leading-none
                '
              >
                100+
              </div>

              <p
                className='
                  text-sm
                  lg:text-lg
                  uppercase
                  mt-5
                '
              >
                Projects Delivered
              </p>

            </div>


            {/* 3 */}

            <div
              className='
                py-10
                lg:py-14
                border-b
                lg:border-b-0
                lg:border-r
                border-black/20
                lg:pl-8
              '
            >

              <div
                className='
                  text-[15vw]
                  lg:text-[7vw]
                  leading-none
                '
              >
                3
              </div>

              <p
                className='
                  text-sm
                  lg:text-lg
                  uppercase
                  mt-5
                '
              >
                Locations
              </p>

            </div>


            {/* 24/7 */}

            <div
              className='
                py-10
                lg:py-14
                lg:pl-8
              '
            >

              <div
                className='
                  text-[15vw]
                  lg:text-[7vw]
                  leading-none
                '
              >
                24/7
              </div>

              <p
                className='
                  text-sm
                  lg:text-lg
                  uppercase
                  mt-5
                '
              >
                Technical Support
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            ENGINEERING STATEMENT
        ================================================= */}

        <section
          className='
            px-5
            lg:px-10
            pb-[18vh]
          '
        >

          <div
            className='
              border-t
              border-black
              pt-8
            '
          >

            <div
              className='
                flex
                flex-col
                lg:flex-row
                justify-between
                gap-10
              '
            >

              <p
                className='
                  text-sm
                  uppercase
                  lg:w-[25%]
                '
              >
                What We Do
              </p>

              <p
                className='
                  text-3xl
                  lg:text-[5vw]
                  leading-[0.95]
                  lg:w-[70%]
                '
              >

                WE TURN ENGINEERING
                <br />

                CHALLENGES INTO
                <br />

                <span
                  className='
                    bg-black
                    text-white
                    px-2
                  '
                >
                  WORKING SOLUTIONS.
                </span>

              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            OUR TEAM
        ================================================= */}

        <div
          className='
            pt-[8vh]
            pb-[15vh]
            px-5
            lg:px-10
          '
        >

          <h2
            className='
              text-[11vw]
              lg:text-[8vw]
              uppercase
              leading-none
            '
          >
            OUR TEAM
          </h2>

        </div>


        {/* =================================================
            TEAM LIST
        ================================================= */}

        <div className='relative z-20'>

          {teamMembers.map((member, index) => (

            <div
              key={member.name}

              onMouseEnter={() =>
                showTeamImage(index)
              }

              onMouseLeave={hideTeamImage}

              className='
                group
                relative
                w-full
                h-[13vh]
                lg:h-[15vh]
                flex
                items-center
                border-b
                border-black/20
                cursor-pointer
                overflow-hidden
              '
            >

              {/* BLACK HOVER */}

              <div
                className='
                  absolute
                  inset-0
                  bg-black
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                '
              />


              {/* DESIGNATION */}

              <div
                className='
                  relative
                  z-10
                  w-[35%]
                  px-5
                  lg:px-10
                  text-xs
                  lg:text-lg
                  group-hover:text-white
                  transition-colors
                  duration-500
                '
              >

                {member.designation}

              </div>


              {/* NAME */}

              <div
                className='
                  relative
                  z-10
                  w-[65%]
                  px-5
                  lg:px-10
                  text-right
                  text-[7vw]
                  lg:text-[5vw]
                  leading-none
                  uppercase
                  whitespace-nowrap
                  group-hover:text-white
                  transition-colors
                  duration-500
                '
              >

                {member.name}

              </div>

            </div>

          ))}

        </div>


        {/* =================================================
            SPACE BEFORE FOOTER
        ================================================= */}

        <div className='h-[35vh]' />


        {/* =================================================
            COPYRIGHT + CONTACT
            BOTTOM RIGHT
        ================================================= */}

        <div
          className='
            font-[font2]
            flex
            items-center
            justify-end
            gap-1
            sm:gap-2
            px-2
            pb-8
          '
        >

          {/* =================================================
              COPYRIGHT
          ================================================= */}

          <div
            className='
              border
              border-black
              text-black
              h-10
              sm:h-12
              flex
              items-center
               left-1/2
      bottom-8
      -translate-x-3/4
    justify-center
              pt-1
              px-3
              sm:px-4
              lg:px-5
              rounded-full
              uppercase
              transition-all
              duration-300
            '
          >

            <span
              className='
                text-[12px]
                sm:text-sm
                lg:text-base
                
              '
            >
              © {new Date().getFullYear()} Innovex Automation
            </span>

          </div>


          {/* =================================================
              CONTACT
              SAME STYLE AS PROJECTS / ABOUT
          ================================================= */}

          <div
            className='
              border
              border-black
              hover:border-black
              hover:text-white
              hover:bg-black
              h-10
              sm:h-12
              lg:h-20
              flex
              
              items-center
              pt-1
              px-3
              sm:px-4
              lg:px-5
              rounded-full
              uppercase
              transition-all
              duration-300
            '
          >

            <Link
              className='
                text-[15px]
                sm:text-base
                lg:text-[5vw]
                lg:mt-0
              '
              to='/contact'
            >
              Contact
            </Link>

          </div>

        </div>

      </div>


      {/* =====================================================
          PAGE 2 IMAGE PORTAL
      ===================================================== */}

      {typeof document !== 'undefined' &&
        createPortal(

          <div
            ref={page2ImageContainerRef}
            className='
              fixed
              inset-0
              z-[50]
              pointer-events-none
            '
            style={{
              opacity: 0,
              visibility: 'hidden',
            }}
          >

            <div
              className='
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                overflow-hidden
                rounded-3xl
                bg-black
                w-[55vw]
                h-[70vw]
                max-w-[360px]
                max-h-[480px]
                lg:w-[25vw]
                lg:h-[34vw]
              '
            >

              <img
                ref={page2Image1Ref}
                src={teamImages.carl}
                alt=''
                className='
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                '
              />

              <img
                ref={page2Image2Ref}
                src={teamImages.carl}
                alt=''
                className='
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                '
              />

            </div>

          </div>,

          document.body

        )}

    </div>

  )

}

export default About