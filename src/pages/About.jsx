import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'
import image5 from '../assets/images/image5.jpg'
import image6 from '../assets/images/image6.jpg'
import image7 from '../assets/images/image7.jpg'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  // =========================================================
  // PAGE 1
  // =========================================================

  const page1Ref = useRef(null)

  const page1ImageContainerRef = useRef(null)
  const page1Image1Ref = useRef(null)
  const page1Image2Ref = useRef(null)

  const page1ActiveImageRef = useRef(0)
  const page1CurrentIndexRef = useRef(0)

  // =========================================================
  // PAGE 2
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
  // TEAM IMAGES
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
  // PRELOAD PAGE 1 IMAGES
  // =========================================================

  useGSAP(() => {
    page1Images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  // =========================================================
  // PAGE 1 IMAGE SYSTEM
  //
  // ARCHITECTURE
  //
  // PAGE 1
  // │
  // ├── white background        z-0
  // │
  // ├── image wrapper           z-10
  // │       └── GSAP PIN
  // │
  // └── text                    z-20
  //
  // IMPORTANT:
  //
  // NO position: fixed
  // NO createPortal for PAGE 1 image
  //
  // The image belongs to Page 1.
  // GSAP pins it during Page 1 scrolling.
  // =========================================================

  useGSAP(() => {
    const page1 = page1Ref.current
    const imageContainer = page1ImageContainerRef.current
    const imageA = page1Image1Ref.current
    const imageB = page1Image2Ref.current

    if (
      !page1 ||
      !imageContainer ||
      !imageA ||
      !imageB
    ) {
      return
    }

    // -------------------------------------------------------
    // INITIAL IMAGES
    // -------------------------------------------------------

    imageA.src = page1Images[0]
    imageB.src = page1Images[1]

    page1ActiveImageRef.current = 0
    page1CurrentIndexRef.current = 0

    // -------------------------------------------------------
    // INITIAL IMAGE STATE
    // -------------------------------------------------------

    gsap.set(imageContainer, {
      opacity: 1,
      visibility: 'visible',
    })

    gsap.set(imageA, {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    })

    gsap.set(imageB, {
      opacity: 0,
      scale: 1.05,
      x: 0,
      y: 0,
    })

    // =======================================================
    // IMAGE CHANGE
    // =======================================================

    const changeImage = (nextIndex) => {
      if (
        nextIndex === page1CurrentIndexRef.current ||
        nextIndex < 0 ||
        nextIndex >= page1Images.length
      ) {
        return
      }

      const currentImage =
        page1ActiveImageRef.current === 0
          ? imageA
          : imageB

      const nextImage =
        page1ActiveImageRef.current === 0
          ? imageB
          : imageA

      nextImage.src = page1Images[nextIndex]

      gsap.killTweensOf([
        currentImage,
        nextImage,
      ])

      // -----------------------------------------------------
      // NEXT IMAGE START
      // -----------------------------------------------------

      gsap.set(nextImage, {
        opacity: 0,
        scale: 1.08,
        x: 0,
        y: 0,
      })

      // -----------------------------------------------------
      // CURRENT IMAGE OUT
      // -----------------------------------------------------

      gsap.to(currentImage, {
        opacity: 0,
        scale: 0.98,
        duration: 0.35,
        ease: 'power2.out',
        overwrite: true,
      })

      // -----------------------------------------------------
      // NEXT IMAGE IN
      // -----------------------------------------------------

      gsap.to(nextImage, {
        opacity: 1,
        scale: 1,
        duration: 0.55,
        ease: 'power3.out',
        overwrite: true,
      })

      page1ActiveImageRef.current =
        page1ActiveImageRef.current === 0
          ? 1
          : 0

      page1CurrentIndexRef.current = nextIndex
    }

    // =======================================================
    // GSAP PIN
    //
    // This is the important part.
    //
    // The image is NOT fixed.
    //
    // GSAP pins this element while Page 1 scrolls.
    // =======================================================

    const trigger = ScrollTrigger.create({
      trigger: page1,

      pin: imageContainer,

      start: 'top top',

      end: 'bottom bottom',

      pinSpacing: false,

      anticipatePin: 1,

      invalidateOnRefresh: true,

      onUpdate: (self) => {
        const progress = self.progress

        const index = Math.min(
          page1Images.length - 1,
          Math.floor(
            progress * page1Images.length
          )
        )

        changeImage(index)
      },

      // -----------------------------------------------------
      // PAGE 1 ENTER
      // -----------------------------------------------------

      onEnter: () => {
        gsap.to(imageContainer, {
          opacity: 1,
          duration: 0.25,
          overwrite: true,
        })
      },

      // -----------------------------------------------------
      // ENTER PAGE 1 FROM BELOW
      // -----------------------------------------------------

      onEnterBack: () => {
        gsap.to(imageContainer, {
          opacity: 1,
          duration: 0.25,
          overwrite: true,
        })
      },

      // -----------------------------------------------------
      // LEAVE PAGE 1
      // -----------------------------------------------------

      onLeave: () => {
        gsap.to(imageContainer, {
          opacity: 0,
          duration: 0.35,
          ease: 'power2.out',
          overwrite: true,
        })
      },

      // -----------------------------------------------------
      // BACK INTO PAGE 1
      // -----------------------------------------------------

      onLeaveBack: () => {
        gsap.to(imageContainer, {
          opacity: 1,
          duration: 0.3,
          overwrite: true,
        })
      },
    })

    // -------------------------------------------------------
    // REFRESH AFTER LAYOUT
    // -------------------------------------------------------

    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    // -------------------------------------------------------
    // CLEANUP
    // -------------------------------------------------------

    return () => {
      trigger.kill()

      gsap.killTweensOf([
        imageContainer,
        imageA,
        imageB,
      ])
    }
  }, [])

  // =========================================================
  // PAGE 2 IMAGE INITIALIZATION
  // =========================================================

  useGSAP(() => {
    if (!page2ImageContainerRef.current) return

    gsap.set(page2ImageContainerRef.current, {
      autoAlpha: 0,
      scale: 0.92,
    })
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

    const imageA =
      page2Image1Ref.current

    const imageB =
      page2Image2Ref.current

    if (!container || !imageA || !imageB) return

    const currentImage =
      activeImageRef.current === 0
        ? imageA
        : imageB

    const nextImage =
      activeImageRef.current === 0
        ? imageB
        : imageA

    nextImage.src =
      teamMembers[index].image

    gsap.killTweensOf([
      container,
      currentImage,
      nextImage,
    ])

    // -------------------------------------------------------
    // FIRST HOVER
    // -------------------------------------------------------

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
    } else {
      // -----------------------------------------------------
      // CHANGE TEAM IMAGE
      // -----------------------------------------------------

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

  // =========================================================
  // JSX
  // =========================================================

  return (
    <div className="parent w-full">

      {/* =====================================================
          =====================================================
          PAGE 1
          =====================================================
          ===================================================== */}

      <div
        ref={page1Ref}
        id="page1"
        className="
          relative
          min-h-[180vh]
          text-black
          overflow-visible
        "
      >

        {/* ===================================================
            WHITE BACKGROUND

            z-0
        =================================================== */}

        <div
          className="
            absolute
            inset-0
            z-0
            bg-white
            pointer-events-none
          "
        />

        {/* ===================================================
            PAGE 1 IMAGE

            z-10

            IMPORTANT:

            This is INSIDE page1.

            It is NOT fixed.

            GSAP pins this element.

            Therefore:
            - it stays in viewport
            - text scrolls
            - image does not scroll with text
            - white background stays behind it
            - text stays above it
        =================================================== */}

        <div
          ref={page1ImageContainerRef}
          className="
            absolute
            z-[10]

            overflow-hidden

            rounded-xl
            lg:rounded-3xl

            pointer-events-none

            left-[8vw]
            top-[50vh]

            -translate-y-1/2

            w-[35vw]
            h-[25vw]

            lg:left-[7vw]
            lg:w-[25vw]
            lg:h-[30vw]
          "
        >

          {/* IMAGE A */}

          <img
            ref={page1Image1Ref}
            src={page1Images[0]}
            alt=""
            draggable="false"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              block
            "
          />

          {/* IMAGE B */}

          <img
            ref={page1Image2Ref}
            src={page1Images[1]}
            alt=""
            draggable="false"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              block
            "
          />

        </div>

        {/* ===================================================
            PAGE 1 TEXT

            z-20

            ABOVE IMAGE
        =================================================== */}

        <div
          className="
            relative
            z-[20]
            font-[font2]
          "
        >

          {/* =================================================
              TITLE
          ================================================= */}

          <div
            className="
              relative
              z-[20]

              lg:pt-[65vh]
              pt-[35vh]
            "
          >

            <h1
              className="
                relative
                z-[20]

                text-[14vw]
                text-center
                uppercase
                leading-[18vw]

                bg-transparent
              "
            >
              INNOVEX
              <br />
              AUTOMATION
            </h1>

          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <div
            className="
              relative
              z-[20]

              lg:pl-[40%]
              lg:mt-20
              mt-4

              p-3
              pb-[70vh]

              bg-transparent
            "
          >

            <p
              className="
                relative
                z-[20]

                lg:text-6xl
                text-xl
                leading-tight

                bg-transparent
              "
            >

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              Innovex Automation (IA) is a leading engineering
              company in Rajasthan, we specializing in{' '}

              <span className="bg-sky-300 px-2 py-1">
                Industrial Automation
              </span>

              ,{' '}

              <span className="bg-sky-300 px-2 py-1">
                Electrical Solutions
              </span>

              ,{' '}

              <span className="bg-sky-300 px-2 py-1">
                Solar Energy
              </span>

              .

              Based in{' '}

              <span className="bg-gray-300 px-2 py-1">
                Sikar
              </span>

              , with branches in{' '}

              <span className="bg-gray-300 px-2 py-1">
                Churu
              </span>

              and{' '}

              <span className="bg-gray-300 px-2 py-1">
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
          =====================================================
          PAGE 2
          =====================================================
          ===================================================== */}

      <div
        ref={page2Ref}
        id="page2"
        className="
          relative
          z-30
          min-h-[400vh]
          bg-white
          text-black
          font-[font2]
        "
      >

        {/* ===================================================
            EXPERIENCE
        =================================================== */}

        <section
          className="
            pt-[18vh]
            pb-[18vh]
            px-5
            lg:px-10
          "
        >

          <div
            className="
              flex
              flex-col
              lg:flex-row
              justify-between
              gap-12
            "
          >

            <div className="lg:w-[48%]">

              <p
                className="
                  text-sm
                  lg:text-lg
                  uppercase
                  tracking-wider
                  mb-8
                "
              >
                Our Experience
              </p>

              <h2
                className="
                  text-[13vw]
                  lg:text-[8vw]
                  uppercase
                  leading-[0.82]
                "
              >
                BUILT
                <br />
                BY
                <br />
                EXPERIENCE
              </h2>

            </div>

            <div
              className="
                lg:w-[42%]
                lg:pt-[12vh]
              "
            >

              <p
                className="
                  text-xl
                  lg:text-4xl
                  leading-tight
                "
              >
                Engineering solutions built through{' '}

                <span
                  className="
                    bg-sky-300
                    px-2
                    py-1
                    mx-1
                  "
                >
                  practical experience
                </span>

                , technical expertise and a deep understanding
                of real-world industrial requirements.
              </p>

              <p
                className="
                  text-base
                  lg:text-xl
                  leading-relaxed
                  mt-10
                  text-black/60
                "
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
              NUMBERS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              mt-[15vh]
              border-t
              border-black
            "
          >

            <div
              className="
                py-10
                lg:py-14
                border-b
                lg:border-b-0
                lg:border-r
                border-black/20
              "
            >

              <div
                className="
                  text-[15vw]
                  lg:text-[7vw]
                  leading-none
                "
              >
                10+
              </div>

              <p
                className="
                  text-sm
                  lg:text-lg
                  uppercase
                  mt-5
                "
              >
                Years Experience
              </p>

            </div>

            <div
              className="
                py-10
                lg:py-14
                border-b
                lg:border-b-0
                lg:border-r
                border-black/20
                lg:pl-8
              "
            >

              <div
                className="
                  text-[15vw]
                  lg:text-[7vw]
                  leading-none
                "
              >
                100+
              </div>

              <p
                className="
                  text-sm
                  lg:text-lg
                  uppercase
                  mt-5
                "
              >
                Projects Delivered
              </p>

            </div>

            <div
              className="
                py-10
                lg:py-14
                border-b
                lg:border-b-0
                lg:border-r
                border-black/20
                lg:pl-8
              "
            >

              <div
                className="
                  text-[15vw]
                  lg:text-[7vw]
                  leading-none
                "
              >
                3
              </div>

              <p
                className="
                  text-sm
                  lg:text-lg
                  uppercase
                  mt-5
                "
              >
                Locations
              </p>

            </div>

            <div
              className="
                py-10
                lg:py-14
                lg:pl-8
              "
            >

              <div
                className="
                  text-[15vw]
                  lg:text-[7vw]
                  leading-none
                "
              >
                24/7
              </div>

              <p
                className="
                  text-sm
                  lg:text-lg
                  uppercase
                  mt-5
                "
              >
                Technical Support
              </p>

            </div>

          </div>

        </section>

        {/* ===================================================
            ENGINEERING STATEMENT
        =================================================== */}

        <section
          className="
            px-5
            lg:px-10
            pb-[18vh]
          "
        >

          <div
            className="
              border-t
              border-black
              pt-8
            "
          >

            <div
              className="
                flex
                flex-col
                lg:flex-row
                justify-between
                gap-10
              "
            >

              <p
                className="
                  text-sm
                  uppercase
                  lg:w-[25%]
                "
              >
                What We Do
              </p>

              <p
                className="
                  text-3xl
                  lg:text-[5vw]
                  leading-[0.95]
                  lg:w-[70%]
                "
              >
                WE TURN ENGINEERING
                <br />
                CHALLENGES INTO
                <br />

                <span
                  className="
                    bg-black
                    text-white
                    px-2
                  "
                >
                  WORKING SOLUTIONS.
                </span>

              </p>

            </div>

          </div>

        </section>

        {/* ===================================================
            OUR TEAM
        =================================================== */}

        <div
          className="
            pt-[8vh]
            pb-[15vh]
            px-5
            lg:px-10
          "
        >

          <h2
            className="
              text-[11vw]
              lg:text-[8vw]
              uppercase
              leading-none
            "
          >
            OUR TEAM
          </h2>

        </div>

        {/* ===================================================
            TEAM LIST
        =================================================== */}

        <div className="relative z-20">

          {teamMembers.map((member, index) => (

            <div
              key={member.name}
              onMouseEnter={() =>
                showTeamImage(index)
              }
              onMouseLeave={hideTeamImage}
              className="
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
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  bg-black
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                "
              />

              <div
                className="
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
                "
              >
                {member.designation}
              </div>

              <div
                className="
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
                "
              >
                {member.name}
              </div>

            </div>

          ))}

        </div>

        {/* ===================================================
            SPACE
        =================================================== */}

        <div className="h-[35vh]" />

        {/* ===================================================
            FOOTER
        =================================================== */}

        <div
          className="
            font-[font2]
            flex
            items-center
            justify-end
            gap-1
            sm:gap-2
            px-2
            pb-8
          "
        >

          <div
            className="
              border
              border-black
              text-black
              h-10
              sm:h-12
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
            "
          >

            <span
              className="
                text-[12px]
                sm:text-sm
                lg:text-base
              "
            >
              © {new Date().getFullYear()} Innovex Automation
            </span>

          </div>

          <div
            className="
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
            "
          >

            <Link
              className="
                text-[15px]
                sm:text-base
                lg:text-[5vw]
              "
              to="/contact"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>

      {/* =====================================================
          PAGE 2 TEAM IMAGE
          ORIGINAL SYSTEM PRESERVED
      ===================================================== */}

      {typeof document !== 'undefined' &&
        createPortal(

          <div
            ref={page2ImageContainerRef}
            className="
              fixed
              inset-0
              z-[50]
              pointer-events-none
            "
            style={{
              opacity: 0,
              visibility: 'hidden',
            }}
          >

            <div
              className="
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
              "
            >

              <img
                ref={page2Image1Ref}
                src={teamImages.carl}
                alt=""
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />

              <img
                ref={page2Image2Ref}
                src={teamImages.carl}
                alt=""
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />

            </div>

          </div>,

          document.body
        )}

    </div>
  )
}

export default About