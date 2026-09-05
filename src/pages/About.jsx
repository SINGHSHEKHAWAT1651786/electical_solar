import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef, useState } from 'react'
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
  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)

    const raf = requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      ScrollTrigger.refresh()
    })

    return () => cancelAnimationFrame(raf)
  }, [])

  /*
   * =========================================================
   * REFS
   * =========================================================
   */

  const page1Ref = useRef(null)
  const heroImageRef = useRef(null)
  const heroStageRef = useRef(null)
  const heroCopyRef = useRef(null)
  const heroProgressRef = useRef(null)
  const heroCounterRef = useRef(null)
  const heroLabelRef = useRef(null)

  // ABOUT / 001
  const aboutMetaRef = useRef(null)
  const aboutFrameRef = useRef(null)
  const aboutFrameImageRef = useRef(null)
  const aboutBlueLineRef = useRef(null)
  const aboutTitleRef = useRef(null)
  const aboutCopyRef = useRef(null)

  // EXPERIENCE
  const experienceRef = useRef(null)
  const experienceTitleRef = useRef(null)
  const experienceCopyRef = useRef(null)
  const statRefs = useRef([])

  // PHILOSOPHY
  const philosophyRef = useRef(null)
  const philosophyLabelRef = useRef(null)
  const philosophyTitleRef = useRef(null)

  // SERVICES
  const servicesRef = useRef(null)
  const servicesTrackRef = useRef(null)
  const servicesIntroTitleRef = useRef(null)
  const servicesIntroCopyRef = useRef(null)

  // TEAM
  const page2ImageContainerRef = useRef(null)
  const page2Image1Ref = useRef(null)
  const page2Image2Ref = useRef(null)

  const activeImageRef = useRef(0)

  const [activePerson, setActivePerson] = useState(null)

  /*
   * =========================================================
   * PAGE 1 IMAGES
   * =========================================================
   */

  const page1Images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ]

  /*
   * =========================================================
   * SERVICES
   * =========================================================
   */

  const services = [
    {
      number: '01',
      title: 'Industrial Automation',
      displayTitle: 'AUTOMATION',
      description:
        'Control architecture, PLC systems and intelligent production lines engineered for dependable output.',
      metadata: 'PLC / SCADA / ROBOTICS',
      image: image1,
      tone: 'bg-sky-300 text-black',
    },
    {
      number: '02',
      title: 'Electrical Solutions',
      displayTitle: 'ELECTRICAL',
      description:
        'Power distribution and industrial electrical systems designed to make every connection count.',
      metadata: 'POWER / CONTROL / SAFETY',
      image: image4,
      tone: 'bg-[#e9e9e6] text-black',
    },
    {
      number: '03',
      title: 'Solar Energy',
      displayTitle: 'SOLAR',
      description:
        'Site-ready solar infrastructure that turns clean energy into a measurable operating advantage.',
      metadata: 'PV / STORAGE / MONITORING',
      image: image5,
      tone: 'bg-[#101214] text-white',
    },
    {
      number: '04',
      title: 'Commissioning & Support',
      displayTitle: 'DELIVERY',
      description:
        'From first energisation to long-term support, we keep the system moving after installation.',
      metadata: 'START-UP / TRAINING / AMC',
      image: image6,
      tone: 'bg-sky-300 text-black',
    },
  ]

  /*
   * =========================================================
   * TEAM
   * =========================================================
   */

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

  /*
   * =========================================================
   * PAGE 1 + ABOUT / 001
   * =========================================================
   */

  useGSAP(() => {
    const section = page1Ref.current
    const image = heroImageRef.current
    const stage = heroStageRef.current
    const copy = heroCopyRef.current
    const progress = heroProgressRef.current
    const counter = heroCounterRef.current
    const label = heroLabelRef.current

    const aboutMeta = aboutMetaRef.current
    const aboutFrame = aboutFrameRef.current
    const aboutFrameImage = aboutFrameImageRef.current
    const aboutBlueLine = aboutBlueLineRef.current
    const aboutTitle = aboutTitleRef.current
    const aboutCopy = aboutCopyRef.current

    if (!section || !image || !stage || !copy) {
      return
    }

    const mm = gsap.matchMedia()

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reducedMotion) {
      return
    }

    /*
     * =======================================================
     * DESKTOP
     * =======================================================
     */

    mm.add('(min-width: 1024px)', () => {
      let currentIndex = 0
      let transitionRunning = false
      let queuedIndex = null

      image.src = page1Images[0]

      gsap.set(stage, {
        opacity: 1,
        scale: 1,
        rotation: 0,
      })

      gsap.set(image, {
        scale: 1.12,
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
      })

      /*
       * =====================================================
       * ABOUT 001 INITIAL
       * =====================================================
       */

      if (aboutFrame) {
        gsap.set(aboutFrame, {
          opacity: 0,
          x: '-5vw',
          y: 30,
          scale: 0.9,
          rotation: -5,
        })
      }

      if (aboutFrameImage) {
        gsap.set(aboutFrameImage, {
          scale: 1.18,
          xPercent: -3,
          yPercent: 8,
        })
      }

      if (aboutBlueLine) {
        gsap.set(aboutBlueLine, {
          scaleX: 0,
          transformOrigin: 'left center',
        })
      }

      if (aboutTitle) {
        gsap.set(aboutTitle, {
          opacity: 0,
          x: '-3vw',
          y: 25,
        })
      }

      if (aboutCopy) {
        gsap.set(aboutCopy, {
          opacity: 0,
          x: '4vw',
          y: 25,
        })
      }

      if (aboutMeta) {
        gsap.set(
          aboutMeta.querySelectorAll(
            '.about-meta-item'
          ),
          {
            opacity: 0,
            y: 15,
          }
        )
      }

      /*
       * =====================================================
       * ABOUT 001 REVEAL
       * =====================================================
       */

      const aboutTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: copy,
          start: 'top 90%',
          end: 'top 40%',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      })

      if (aboutMeta) {
        aboutTimeline.to(
          aboutMeta.querySelectorAll(
            '.about-meta-item'
          ),
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.35,
            ease: 'power3.out',
          },
          0
        )
      }

      if (aboutTitle) {
        aboutTimeline.to(
          aboutTitle,
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.65,
            ease: 'power4.out',
          },
          0.05
        )
      }

      if (aboutFrame) {
        aboutTimeline.to(
          aboutFrame,
          {
            opacity: 1,

            x: '17vw',

            y: 0,
            scale: 1,
            rotation: 2,
            duration: 1,
            ease: 'power4.out',
          },
          0
        )
      }

      if (aboutFrameImage) {
        aboutTimeline.to(
          aboutFrameImage,
          {
            scale: 1,
            xPercent: 2,
            yPercent: -5,
            duration: 1,
            ease: 'none',
          },
          0
        )
      }

      if (aboutBlueLine) {
        aboutTimeline.to(
          aboutBlueLine,
          {
            scaleX: 1,
            duration: 0.85,
            ease: 'power3.out',
          },
          0.12
        )
      }

      if (aboutCopy) {
        aboutTimeline.to(
          aboutCopy,
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'power4.out',
          },
          0.28
        )
      }

      /*
       * =====================================================
       * HERO IMAGE SEQUENCE
       * =====================================================
       */

      const changeImage = (nextIndex) => {
        if (nextIndex === currentIndex) {
          return
        }

        if (transitionRunning) {
          queuedIndex = nextIndex
          return
        }

        transitionRunning = true

        const direction =
          nextIndex > currentIndex ? 1 : -1

        currentIndex = nextIndex

        const tl = gsap.timeline({
          onComplete: () => {
            transitionRunning = false

            if (
              queuedIndex !== null &&
              queuedIndex !== currentIndex
            ) {
              const queued = queuedIndex
              queuedIndex = null
              changeImage(queued)
            }
          },
        })

        tl.to(image, {
          x: direction * -35,
          y: direction * -15,
          scale: 1.2,
          rotation: direction * -1.5,
          opacity: 0,
          duration: 0.2,
          ease: 'power3.in',
        })

        tl.call(() => {
          image.src = page1Images[nextIndex]
        })

        tl.set(image, {
          x: direction * 35,
          y: direction * 15,
          scale: 1.2,
          rotation: direction * 1.5,
        })

        tl.to(image, {
          x: 0,
          y: 0,
          scale: 1.1,
          rotation: 0,
          opacity: 1,
          duration: 0.45,
          ease: 'power4.out',
        })

        tl.fromTo(
          stage,
          {
            rotation: direction * -1,
          },
          {
            rotation: 0,
            duration: 0.45,
            ease: 'power3.out',
          },
          0
        )

        if (counter) {
          counter.textContent =
            `${String(nextIndex + 1).padStart(2, '0')} / 07`
        }

        if (label) {
          const labels = [
            
            //'CONTROL / AUTOMATION',
            //'FIELD / ENGINEERING',
            //'POWER / DISTRIBUTION',
            //'SOLAR / ENERGY',
           // 'INDUSTRIAL / CONTROL',
           // 'PROJECT / DELIVERY',
           // 'SYSTEM / COMPLETE',
          ]

          label.textContent = labels[nextIndex]
        }
      }

      /*
       * =====================================================
       * MAIN HERO SCROLL
       * =====================================================
       */

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,

        onUpdate: (self) => {
          const p = self.progress

          const nextIndex = Math.min(
            page1Images.length - 1,
            Math.floor(
              p * page1Images.length
            )
          )

          changeImage(nextIndex)

          if (progress) {
            gsap.set(progress, {
              scaleX: p,
            })
          }

          gsap.set(image, {
            y:
              Math.sin(p * Math.PI) * -25,
          })
        },
      })

      /*
       * =====================================================
       * ABOUT FRAME DRIFT
       * =====================================================
       */

      const frameDrift = aboutFrame
        ? gsap.to(aboutFrame, {
            y: -18,
            rotation: -1,
            ease: 'none',

            scrollTrigger: {
              trigger: copy,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          })
        : null

      const frameImageDrift = aboutFrameImage
        ? gsap.to(aboutFrameImage, {
            yPercent: -12,
            xPercent: -2,
            ease: 'none',

            scrollTrigger: {
              trigger: copy,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.8,
              invalidateOnRefresh: true,
            },
          })
        : null

      const titleDrift = aboutTitle
        ? gsap.to(aboutTitle, {
            y: -28,
            x: '-1.5vw',
            ease: 'none',

            scrollTrigger: {
              trigger: copy,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          })
        : null

      const copyDrift = aboutCopy
        ? gsap.to(aboutCopy, {
            y: -15,
            ease: 'none',

            scrollTrigger: {
              trigger: copy,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          })
        : null

      const copyParallax = gsap.to(copy, {
        y: -35,
        ease: 'none',

        scrollTrigger: {
          trigger: copy,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      gsap.from(stage, {
        scale: 0.92,
        opacity: 0,
        rotation: -2,
        duration: 1,
        ease: 'power4.out',
      })

      return () => {
        trigger.kill()
        aboutTimeline.kill()
        copyParallax.kill()

        frameDrift?.kill()
        frameImageDrift?.kill()
        titleDrift?.kill()
        copyDrift?.kill()
      }
    })

    /*
     * =======================================================
     * MOBILE / TABLET
     * =======================================================
     */

    mm.add('(max-width: 1023px)', () => {
      let currentIndex = 0
      let transitioning = false
      let queuedIndex = null

      image.src = page1Images[0]

      gsap.set(stage, {
        opacity: 1,
        scale: 1,
        rotation: 0,
      })

      gsap.set(image, {
        scale: 1.07,
        x: 0,
        y: 0,
        opacity: 1,
      })

      /*
       * =====================================================
       * ABOUT MOBILE INITIAL
       * =====================================================
       */

      if (aboutFrame) {
        gsap.set(aboutFrame, {
          opacity: 0,
          x: '-3vw',
          y: 25,
          scale: 0.92,
          rotation: -4,
        })
      }

      if (aboutFrameImage) {
        gsap.set(aboutFrameImage, {
          scale: 1.15,
          xPercent: -3,
          yPercent: 8,
        })
      }

      if (aboutBlueLine) {
        gsap.set(aboutBlueLine, {
          scaleX: 0,
          transformOrigin: 'left center',
        })
      }

      if (aboutTitle) {
        gsap.set(aboutTitle, {
          opacity: 0,
          x: '-4vw',
          y: 20,
        })
      }

      if (aboutCopy) {
        gsap.set(aboutCopy, {
          opacity: 0,
          x: '4vw',
          y: 20,
        })
      }

      if (aboutMeta) {
        gsap.set(
          aboutMeta.querySelectorAll(
            '.about-meta-item'
          ),
          {
            opacity: 0,
            y: 12,
          }
        )
      }

      /*
       * =====================================================
       * ABOUT MOBILE REVEAL
       * =====================================================
       */

      const aboutTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: copy,
          start: 'top 94%',
          end: 'top 48%',
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      })

      if (aboutMeta) {
        aboutTimeline.to(
          aboutMeta.querySelectorAll(
            '.about-meta-item'
          ),
          {
            opacity: 1,
            y: 0,
            stagger: 0.07,
            duration: 0.3,
            ease: 'power3.out',
          },
          0
        )
      }

      if (aboutTitle) {
        aboutTimeline.to(
          aboutTitle,
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.55,
            ease: 'power4.out',
          },
          0.05
        )
      }

      if (aboutFrame) {
        aboutTimeline.to(
          aboutFrame,
          {
            opacity: 1,

            /*
             * CHANGED:
             * Smaller movement to keep the image away
             * from the description text.
             */
            x: '6vw',

            y: 0,
            scale: 1,
            rotation: 2,
            duration: 0.85,
            ease: 'power4.out',
          },
          0
        )
      }

      if (aboutFrameImage) {
        aboutTimeline.to(
          aboutFrameImage,
          {
            scale: 1,
            xPercent: 2,
            yPercent: -5,
            duration: 0.85,
            ease: 'none',
          },
          0
        )
      }

      if (aboutBlueLine) {
        aboutTimeline.to(
          aboutBlueLine,
          {
            scaleX: 1,
            duration: 0.7,
            ease: 'power3.out',
          },
          0.12
        )
      }

      if (aboutCopy) {
        aboutTimeline.to(
          aboutCopy,
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'power4.out',
          },
          0.25
        )
      }

      /*
       * =====================================================
       * MOBILE HERO IMAGE
       * =====================================================
       */

      const changeImage = (nextIndex) => {
        if (nextIndex === currentIndex) {
          return
        }

        if (transitioning) {
          queuedIndex = nextIndex
          return
        }

        transitioning = true

        const direction =
          nextIndex > currentIndex ? 1 : -1

        currentIndex = nextIndex

        const tl = gsap.timeline({
          onComplete: () => {
            transitioning = false

            if (
              queuedIndex !== null &&
              queuedIndex !== currentIndex
            ) {
              const queued = queuedIndex
              queuedIndex = null
              changeImage(queued)
            }
          },
        })

        tl.to(image, {
          x: direction * -18,
          scale: 1.12,
          opacity: 0,
          duration: 0.16,
          ease: 'power2.in',
        })

        tl.call(() => {
          image.src = page1Images[nextIndex]
        })

        tl.set(image, {
          x: direction * 18,
          scale: 1.12,
        })

        tl.to(image, {
          x: 0,
          scale: 1.07,
          opacity: 1,
          duration: 0.35,
          ease: 'power3.out',
        })

        if (counter) {
          counter.textContent =
            `${String(nextIndex + 1).padStart(2, '0')} / 07`
        }
      }

      /*
       * =====================================================
       * MAIN MOBILE SCROLL
       * =====================================================
       */

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.35,

        onUpdate: (self) => {
          const p = self.progress

          const nextIndex = Math.min(
            page1Images.length - 1,
            Math.floor(
              p * page1Images.length
            )
          )

          changeImage(nextIndex)

          if (progress) {
            gsap.set(progress, {
              scaleX: p,
            })
          }

          gsap.set(image, {
            y:
              Math.sin(p * Math.PI) * -10,
          })
        },
      })

      /*
       * =====================================================
       * ABOUT MOBILE DRIFT
       * =====================================================
       */

      const frameDrift = aboutFrame
        ? gsap.to(aboutFrame, {
            y: -8,
            rotation: -1,
            ease: 'none',

            scrollTrigger: {
              trigger: copy,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.3,
              invalidateOnRefresh: true,
            },
          })
        : null

      const frameImageDrift = aboutFrameImage
        ? gsap.to(aboutFrameImage, {
            yPercent: -8,
            xPercent: -2,
            ease: 'none',

            scrollTrigger: {
              trigger: copy,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          })
        : null

      const titleDrift = aboutTitle
        ? gsap.to(aboutTitle, {
            y: -15,
            ease: 'none',

            scrollTrigger: {
              trigger: copy,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.3,
            },
          })
        : null

      const copyDrift = aboutCopy
        ? gsap.to(aboutCopy, {
            y: -8,
            ease: 'none',

            scrollTrigger: {
              trigger: copy,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          })
        : null

      const copyParallax = gsap.to(copy, {
        y: -12,
        ease: 'none',

        scrollTrigger: {
          trigger: copy,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.3,
        },
      })

      gsap.from(stage, {
        scale: 0.95,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
      })

      return () => {
        trigger.kill()
        aboutTimeline.kill()
        copyParallax.kill()

        frameDrift?.kill()
        frameImageDrift?.kill()
        titleDrift?.kill()
        copyDrift?.kill()
      }
    })

    return () => {
      mm.revert()
    }
  }, [])

  /*
   * =========================================================
   * EXPERIENCE GSAP
   * =========================================================
   */

  useGSAP(() => {
    const section = experienceRef.current
    const title = experienceTitleRef.current
    const copy = experienceCopyRef.current

    if (!section || !title || !copy) return

    const mm = gsap.matchMedia()

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reducedMotion) return

    const createExperienceAnimation = (mobile = false) => {
      const meta =
        section.querySelector('.experience-meta')

      const index =
        section.querySelector('.experience-index')

      const status =
        section.querySelector('.experience-status')

      const lead =
        section.querySelector('.experience-lead')

      const highlight =
        section.querySelector('.experience-highlight')

      const body =
        section.querySelector('.experience-body')

      gsap.set(meta, {
        opacity: 1,
        y: mobile ? 15 : 22,
      })

      gsap.set(index, {
        opacity: 1,
        x: 0,
      })

      gsap.set(status, {
        opacity: 1,
        x: 0,
      })

      gsap.set(title, {
        opacity: 1,
        x: mobile ? -30 : -70,
        y: mobile ? 25 : 35,
      })

      gsap.set(copy, {
        opacity: 1,
        y: mobile ? 25 : 35,
      })

      gsap.set(lead, {
        opacity: 1,
        y: mobile ? 20 : 30,
      })

      if (highlight) {
        gsap.set(highlight, {
          opacity: 1,
          scaleX: 0.75,
          transformOrigin: 'left center',
        })
      }

      gsap.set(body, {
        opacity: 1,
        y: mobile ? 15 : 25,
      })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: mobile ? 'top 88%' : 'top 84%',
          end: mobile ? 'top 45%' : 'top 25%',
          scrub: mobile ? 0.65 : 0.8,
        },
      })

      timeline.to(meta, {
        y: 0,
        duration: 0.3,
        ease: 'power3.out',
      })

      timeline.to(
        title,
        {
          x: 0,
          y: 0,
          duration: mobile ? 0.65 : 0.8,
          ease: 'power4.out',
        },
        '-=0.08'
      )

      timeline.to(
        copy,
        {
          y: 0,
          duration: 0.55,
          ease: 'power3.out',
        },
        '-=0.35'
      )

      timeline.to(
        lead,
        {
          y: 0,
          duration: 0.55,
          ease: 'power3.out',
        },
        '-=0.3'
      )

      if (highlight) {
        timeline.to(
          highlight,
          {
            scaleX: 1,
            duration: 0.4,
            ease: 'power3.out',
          },
          '-=0.28'
        )
      }

      timeline.to(
        body,
        {
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        },
        '-=0.18'
      )

      return () => timeline.kill()
    }

    mm.add('(min-width: 768px)', () => {
      const cleanup =
        createExperienceAnimation(false)

      statRefs.current.forEach((stat, index) => {
        if (!stat) return

        const number =
          stat.querySelector(
            '.experience-stat-number'
          )

        const label =
          stat.querySelector(
            '.experience-stat-label'
          )

        gsap.set(stat, {
          opacity: 1,
          y: 80,
          scale: 0.94,
          rotation:
            index % 2 === 0 ? -2 : 2,
        })

        if (number) {
          gsap.set(number, {
            y: 20,
          })
        }

        if (label) {
          gsap.set(label, {
            opacity: 1,
            y: 12,
          })
        }

        const statTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: stat,
            start: 'top 90%',
            end: 'top 55%',
            scrub: 0.8,
          },
        })

        statTimeline.to(stat, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'power4.out',
        })

        if (number) {
          statTimeline.to(
            number,
            {
              y: 0,
              duration: 0.35,
              ease: 'power3.out',
            },
            '-=0.4'
          )
        }

        if (label) {
          statTimeline.to(
            label,
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: 'power3.out',
            },
            '-=0.2'
          )
        }
      })

      return cleanup
    })

    mm.add('(max-width: 767px)', () => {
      const cleanup =
        createExperienceAnimation(true)

      statRefs.current.forEach((stat) => {
        if (!stat) return

        const number =
          stat.querySelector(
            '.experience-stat-number'
          )

        const label =
          stat.querySelector(
            '.experience-stat-label'
          )

        gsap.set(stat, {
          opacity: 1,
          y: 45,
          scale: 0.97,
        })

        if (number) {
          gsap.set(number, {
            y: 12,
          })
        }

        if (label) {
          gsap.set(label, {
            opacity: 1,
            y: 8,
          })
        }

        const statTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: stat,
            start: 'top 92%',
            end: 'top 67%',
            scrub: 0.65,
          },
        })

        statTimeline.to(stat, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
        })

        if (number) {
          statTimeline.to(
            number,
            {
              y: 0,
              duration: 0.3,
              ease: 'power3.out',
            },
            '-=0.35'
          )
        }

        if (label) {
          statTimeline.to(
            label,
            {
              opacity: 1,
              y: 0,
              duration: 0.25,
              ease: 'power3.out',
            },
            '-=0.15'
          )
        }
      })

      return cleanup
    })

    return () => mm.revert()
  }, [])

  /*
   * =========================================================
   * PHILOSOPHY
   * =========================================================
   */

  useGSAP(() => {
    const section = philosophyRef.current
    const label = philosophyLabelRef.current
    const title = philosophyTitleRef.current

    if (!section || !label || !title) return

    const lines =
      title.querySelectorAll('.philosophy-line')

    const highlightedLine =
      title.querySelector(
        '.philosophy-highlight'
      )

    const intro = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 82%',
        end: 'top 18%',
        scrub: 1,
      },
    })

    intro.fromTo(
      label,
      {
        y: 30,
        opacity: 0,
        letterSpacing: '0.5em',
      },
      {
        y: 0,
        opacity: 1,
        letterSpacing: '0.2em',
        duration: 0.35,
        ease: 'power2.out',
      }
    )

    intro.fromTo(
      lines,
      {
        clipPath: (index) =>
          index % 2 === 0
            ? 'inset(0 100% 0 0)'
            : 'inset(0 0 0 100%)',

        x: (index) =>
          index % 2 === 0 ? -140 : 140,

        skewX: (index) =>
          index % 2 === 0 ? -8 : 8,

        scaleX: 0.72,
        opacity: 0,
      },
      {
        clipPath: 'inset(0 0% 0 0%)',
        x: 0,
        skewX: 0,
        scaleX: 1,
        opacity: 1,
        duration: 0.7,
        stagger: 0.16,
        ease: 'power4.out',
      },
      '-=0.12'
    )

    if (highlightedLine) {
      intro.fromTo(
        highlightedLine,
        {
          color: '#ffffff',
          textShadow:
            '0 0 0 rgba(125, 211, 252, 0)',
        },
        {
          color: '#7dd3fc',
          textShadow:
            '0 0 28px rgba(125, 211, 252, 0.45)',
          duration: 0.45,
          ease: 'none',
        },
        '-=0.2'
      )
    }

    const drift = gsap.to(lines, {
      x: (index) =>
        index % 2 === 0 ? -18 : 18,

      ease: 'none',

      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.4,
      },
    })

    return () => {
      intro.kill()
      drift.kill()
    }
  }, [])

  /*
   * =========================================================
   * SERVICES
   * =========================================================
   */

  useGSAP(() => {
    const section = servicesRef.current

    if (!section) return

    const mm = gsap.matchMedia()

    const cards = gsap.utils.toArray(
      '.service-card',
      section
    )

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reducedMotion) {
      gsap.set(cards, {
        clearProps: 'all',
      })

      return
    }

    mm.add('(min-width: 1024px)', () => {
      gsap.fromTo(
        servicesIntroTitleRef.current,
        {
          x: -90,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,

          scrollTrigger: {
            trigger:
              servicesIntroTitleRef.current,
            start: 'top 82%',
            end: 'top 45%',
            scrub: 0.8,
          },
        }
      )

      gsap.fromTo(
        servicesIntroCopyRef.current,
        {
          x: 90,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,

          scrollTrigger: {
            trigger:
              servicesIntroCopyRef.current,
            start: 'top 88%',
            end: 'top 52%',
            scrub: 0.8,
          },
        }
      )

      cards.forEach((card, index) => {
        const image =
          card.querySelector('.service-image')

        const titleLines =
          card.querySelectorAll(
            '.service-title-line'
          )

        const arrow =
          card.querySelector('.service-arrow')

        gsap.fromTo(
          card,
          {
            y: 90,
            rotation:
              index % 2 ? 1.5 : -1.5,
          },
          {
            y: 0,
            rotation: 0,

            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              end: 'top 48%',
              scrub: 0.8,
            },
          }
        )

        gsap.fromTo(
          image,
          {
            clipPath:
              'inset(0 100% 0 0)',
            scale: 1.15,
          },
          {
            clipPath:
              'inset(0 0% 0 0)',
            scale: 1,

            scrollTrigger: {
              trigger: card,
              start: 'top 86%',
              end: 'top 48%',
              scrub: 0.8,
            },
          }
        )

        gsap.fromTo(
          titleLines,
          {
            yPercent: 110,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.08,

            scrollTrigger: {
              trigger: card,
              start: 'top 78%',
              end: 'top 44%',
              scrub: 0.7,
            },
          }
        )

        gsap.to(image, {
          yPercent:
            index % 2 ? 6 : -6,

          ease: 'none',

          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })

        const enter = () => {
          gsap.to(image, {
            scale: 1.06,
            rotation: 1,
            duration: 0.6,
            ease: 'power3.out',
            overwrite: true,
          })

          gsap.to(arrow, {
            x: 8,
            duration: 0.35,
            ease: 'power3.out',
          })
        }

        const leave = () => {
          gsap.to(image, {
            scale: 1,
            rotation: 0,
            duration: 0.7,
            ease: 'power3.out',
            overwrite: true,
          })

          gsap.to(arrow, {
            x: 0,
            duration: 0.4,
            ease: 'power3.out',
          })
        }

        card.addEventListener(
          'mouseenter',
          enter
        )

        card.addEventListener(
          'mouseleave',
          leave
        )

        card._cleanupServiceHover = () => {
          card.removeEventListener(
            'mouseenter',
            enter
          )

          card.removeEventListener(
            'mouseleave',
            leave
          )
        }
      })
    })

    mm.add('(max-width: 1023px)', () => {
      gsap.fromTo(
        servicesIntroTitleRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,

          scrollTrigger: {
            trigger:
              servicesIntroTitleRef.current,
            start: 'top 88%',
            end: 'top 58%',
            scrub: 0.7,
          },
        }
      )

      gsap.fromTo(
        servicesIntroCopyRef.current,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,

          scrollTrigger: {
            trigger:
              servicesIntroCopyRef.current,
            start: 'top 92%',
            end: 'top 64%',
            scrub: 0.7,
          },
        }
      )

      cards.forEach((card) => {
        const image =
          card.querySelector('.service-image')

        gsap.fromTo(
          card,
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,

            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              end: 'top 68%',
              scrub: 0.6,
            },
          }
        )

        gsap.fromTo(
          image,
          {
            clipPath:
              'inset(0 100% 0 0)',
          },
          {
            clipPath:
              'inset(0 0% 0 0)',

            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              end: 'top 65%',
              scrub: 0.6,
            },
          }
        )
      })
    })

    return () => {
      cards.forEach((card) => {
        card._cleanupServiceHover?.()
      })

      mm.revert()
    }
  }, [])

  /*
   * =========================================================
   * TEAM IMAGE
   * =========================================================
   */

  const showTeamImage = (index) => {
    const container =
      page2ImageContainerRef.current

    const imageA =
      page2Image1Ref.current

    const imageB =
      page2Image2Ref.current

    if (!container || !imageA || !imageB) {
      return
    }

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

    if (activePerson === null) {
      gsap.set(container, {
        autoAlpha: 1,
        scale: 0.8,
      })

      gsap.set(nextImage, {
        opacity: 0,
        scale: 1.2,
        x: 70,
        y: 40,
        rotation: 4,
      })

      gsap.to(container, {
        scale: 1,
        duration: 0.45,
        ease: 'power4.out',
      })

      gsap.to(nextImage, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.7,
        ease: 'power4.out',
      })
    } else {
      gsap.set(nextImage, {
        opacity: 0,
        scale: 1.15,
        x: 60,
        y: 30,
        rotation: 4,
      })

      gsap.to(currentImage, {
        opacity: 0,
        scale: 0.92,
        x: -40,
        y: -20,
        rotation: -3,
        duration: 0.4,
        ease: 'power3.inOut',
      })

      gsap.to(nextImage, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.7,
        ease: 'power4.out',
      })
    }

    activeImageRef.current =
      activeImageRef.current === 0 ? 1 : 0

    setActivePerson(index)
  }

  const hideTeamImage = () => {
    const container =
      page2ImageContainerRef.current

    if (!container) return

    gsap.killTweensOf(container)

    gsap.to(container, {
      autoAlpha: 0,
      scale: 0.9,
      duration: 0.3,
      ease: 'power3.out',
    })

    setActivePerson(null)
  }

  /*
   * =========================================================
   * JSX
   * =========================================================
   */

  return (
    <div className="w-full overflow-x-hidden bg-white text-black">

      {/* =====================================================
          PAGE 1
      ===================================================== */}

      <section
        ref={page1Ref}
        className="
          relative
          min-h-[175vh]
          bg-white
          font-[font2]

          lg:min-h-[190vh]
        "
      >

        {/* IMAGE */}

        <div
          ref={heroStageRef}
          className="
            sticky
            top-[15vh]
            z-10
            ml-[7vw]
            h-[60vw]
            w-[86vw]
            overflow-hidden
            rounded-[1.25rem]
            bg-black

            lg:top-[25vh]
            lg:ml-[56vw]
            lg:h-[72vh]
            lg:w-[32vw]
            lg:rounded-[2rem]
          "
        >

          <img
            ref={heroImageRef}
            src={image1}
            alt="Innovex Automation"
            draggable="false"
            className="
              absolute
              inset-[-6%]
              h-[112%]
              w-[112%]
              object-cover
              will-change-transform
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

          <div
            className="
              absolute
              bottom-5
              left-5
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white
            "
          >
            
          </div>

          <div
            ref={heroLabelRef}
            className="
              absolute
              right-5
              top-5
              text-right
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-white/80
            "
          >
            
          </div>

        </div>

        {/* STATIC TITLE */}

        <div
          className="
            absolute
            left-[4vw]
            top-[30vh]
            z-20
            w-[92vw]
          "
        >

          <div
            className="
              mb-4
              text-[8px]
              uppercase
              tracking-[0.2em]

              lg:text-xs
            "
          >
            Industrial systems / electrical / energy
          </div>

          <h1
            className="
              text-[18vw]
              uppercase
              leading-[0.76]
              tracking-[-0.08em]

              lg:text-[10vw]
            "
          >
            INNOVEX
            <br />

            <span className="ml-[6vw]">
              AUTO
            </span>

            <br />

            <span className="ml-[12vw]">
              MATION
            </span>

          </h1>

        </div>

        {/* ===================================================
            ABOUT / 001
        =================================================== */}

        <div
          ref={heroCopyRef}
          className="
            absolute
            left-0
            top-[72vh]
            z-20
            w-full

            lg:top-[142vh]
          "
        >

          <div
            className="
              relative
              min-h-[64vh]
              overflow-hidden
              bg-[#e9e9e6]
              px-5
              py-5
              font-[font2]
              text-black

              lg:min-h-[48vh]
              lg:px-10
              lg:py-7
            "
          >

            {/* TOP META */}

            <div
              ref={aboutMetaRef}
              className="
                relative
                z-40
                flex
                items-start
                justify-between
                border-t
                border-black/20
                pt-4
              "
            >

              <span
                className="
                  about-meta-item
                  text-[8px]
                  uppercase
                  tracking-[0.2em]

                  lg:text-xs
                "
              >
                001 / About
              </span>

              <span
                className="
                  about-meta-item
                  text-right
                  text-[8px]
                  uppercase
                  leading-relaxed
                  tracking-[0.15em]
                  text-black/50

                  lg:text-xs
                "
              >
                Since 2019
                <br />
                Rajasthan / India
              </span>

            </div>

            {/* MAIN EDITORIAL AREA */}

            <div
              className="
                relative
                min-h-[55vh]
                w-full

                lg:min-h-[39vh]
              "
            >

              {/* GHOST ABOUT */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[-2vw]
                  top-[2vh]
                  select-none
                  font-[font1]
                  text-[27vw]
                  leading-[0.7]
                  tracking-[-0.1em]
                  text-black/[0.055]

                  lg:top-[-1vh]
                  lg:text-[15vw]
                "
              >
                ABOUT
              </div>

              {/* BLUE LINE */}

              <div
                ref={aboutBlueLineRef}
                className="
                  absolute
                  left-[7vw]
                  top-[51%]
                  z-10
                  h-[2px]
                  w-[82vw]
                  origin-left
                  bg-sky-300

                  lg:left-[4vw]
                  lg:top-[55%]
                  lg:w-[70vw]
                "
              />

              {/* =================================================
                  ABOUT IMAGE FRAME
                  UPDATED SIZE + POSITION
              ================================================= */}

              <div
                ref={aboutFrameRef}
                className="
                  absolute

                  /* MOBILE */
                  left-[8vw]
                  top-[15vh]
                  z-20
                  h-[32vh]
                  w-[38vw]

                  overflow-hidden
                  bg-black
                  will-change-transform

                  /* DESKTOP */
                  lg:left-[27vw]
                  lg:top-[4vh]
                  lg:h-[34vh]
                  lg:w-[15vw]
                "
              >

                <img
                  ref={aboutFrameImageRef}
                  src={image3}
                  alt="Innovex Automation engineering"
                  draggable="false"
                  className="
                    absolute
                    inset-[-8%]
                    h-[116%]
                    w-[116%]
                    object-cover
                    will-change-transform
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    text-[7px]
                    uppercase
                    tracking-[0.18em]
                    text-white/80

                    lg:bottom-4
                    lg:left-4
                    lg:text-[9px]
                  "
                >
                  03 / 07
                </div>

              </div>

              {/* LEFT TITLE */}

              <div
                ref={aboutTitleRef}
                className="
                  absolute
                  left-[5vw]
                  top-[6vh]
                  z-30
                  w-[70vw]

                  lg:left-[4vw]
                  lg:top-[5vh]
                  lg:w-[25vw]
                "
              >

                <div
                  className="
                    mb-3
                    text-[7px]
                    uppercase
                    tracking-[0.2em]
                    text-black/40

                    lg:text-[10px]
                  "
                >
                  Who we are
                </div>

                <h2
                  className="
                    font-[font1]
                    text-[12vw]
                    uppercase
                    leading-[0.78]
                    tracking-[-0.075em]

                    lg:text-[5.7vw]
                  "
                >
                  ENGINEER
                  <br />

                  <span
                    className="
                      inline-block
                      bg-black
                      px-2
                      text-white
                    "
                  >
                    SYSTEMS.
                  </span>
                </h2>

              </div>

              {/* RIGHT DESCRIPTION */}

              <div
                ref={aboutCopyRef}
                className="
                  absolute
                  right-[5vw]
                  top-[48vh]
                  z-30
                  w-[88vw]

                  lg:right-[5vw]
                  lg:top-[6vh]
                  lg:w-[28vw]
                "
              >

                <p
                  className="
                    text-[4.6vw]
                    leading-[1.03]
                    tracking-[-0.025em]

                    lg:text-[1.45vw]
                    lg:leading-[1.05]
                  "
                >
                  Innovex Automation connects
                  industrial automation,
                  electrical engineering and
                  solar energy into one practical
                  system — designed, installed and
                  supported for the real world.
                </p>

                <div
                  className="
                    mt-6
                    grid
                    grid-cols-2
                    gap-5
                    border-t
                    border-black/20
                    pt-3
                    text-[7px]
                    uppercase
                    tracking-[0.16em]
                    text-black/45

                    lg:mt-8
                    lg:text-[10px]
                  "
                >

                  <div>
                    Automation
                    <br />
                    Electrical
                    <br />
                    Solar
                  </div>

                  <div>
                    Design
                    <br />
                    Installation
                    <br />
                    Support
                  </div>

                </div>

              </div>

              {/* BOTTOM STATEMENT */}

              <div
                className="
                  absolute
                  bottom-1
                  left-[5vw]
                  right-[5vw]
                  z-30
                  flex
                  items-end
                  justify-between
                  border-t
                  border-black/20
                  pt-3
                  text-[7px]
                  uppercase
                  tracking-[0.17em]
                  text-black/45

                  lg:bottom-0
                  lg:left-[4vw]
                  lg:right-[4vw]
                  lg:text-[10px]
                "
              >

              

              </div>

            </div>

          </div>

        </div>

        {/* PROGRESS */}

        <div
          className="
            absolute
            left-[7vw]
            top-[116vh]
            z-30
            w-[86vw]

            lg:left-[7vw]
            lg:top-[96vh]
            lg:w-[38vw]
          "
        >

          <div
            className="
              mb-2
              flex
              justify-between
              text-[8px]
              uppercase
              tracking-[0.2em]
            "
          >

            <span>
              Scroll / Explore
            </span>

            <span ref={heroCounterRef}>
              01 / 07
            </span>

          </div>

          <div
            className="
              h-[2px]
              w-full
              bg-black/15
            "
          >

            <div
              ref={heroProgressRef}
              className="
                h-full
                w-full
                origin-left
                scale-x-0
                bg-black
              "
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          EXPERIENCE / 002
      ===================================================== */}

      <section
        ref={experienceRef}
        className="
          relative
          z-20
          bg-white
          px-5
          py-[15vh]
          font-[font2]

          lg:px-10
          lg:py-[20vh]
        "
      >

        <div className="border-t border-black pt-5">

          <div
            className="
              grid
              gap-16

              lg:grid-cols-2
            "
          >

            <div>

              <div
                className="
                  experience-meta
                  mb-8
                  flex
                  justify-between
                  text-[8px]
                  uppercase
                  tracking-[0.2em]

                  lg:text-xs
                "
              >

                <span className="experience-index">
                  002 / Experience
                </span>

                <span className="experience-status">
                  Field tested
                </span>

              </div>

              <h2
                ref={experienceTitleRef}
                className="
                  text-[18vw]
                  uppercase
                  leading-[0.76]
                  tracking-[-0.08em]

                  lg:text-[10vw]
                "
              >
                BUILT
                <br />
                FOR
                <br />
                REAL
                <br />
                WORLD
              </h2>

            </div>

            <div
              ref={experienceCopyRef}
              className="lg:flex lg:items-end"
            >

              <div>

                <p
                  className="
                    experience-lead
                    text-[8vw]
                    leading-[0.9]
                    tracking-[-0.05em]

                    lg:text-[4vw]
                  "
                >
                  Engineering isn't only about
                  making something work.

                  <span
                    className="
                      experience-highlight
                      mx-1
                      inline-block
                      origin-left
                      bg-black
                      px-2
                      text-white
                    "
                  >
                    It's making it work reliably.
                  </span>
                </p>

                <p
                  className="
                    experience-body
                    mt-8
                    max-w-[600px]
                    text-base
                    leading-relaxed
                    text-black/55

                    lg:text-xl
                  "
                >
                  Innovex Automation combines
                  industrial automation,
                  electrical engineering and
                  solar energy into one complete
                  project workflow.

                  From design and installation
                  to commissioning, maintenance
                  and technical support, our
                  focus remains the same —
                  systems that perform in
                  real-world conditions.
                </p>

              </div>

            </div>

          </div>

          <div
            className="
              mt-[15vh]
              grid
              grid-cols-2
              border-t
              border-black

              lg:grid-cols-4
            "
          >

            {[
              ['07+', 'Years operating'],
              ['100+', 'Projects delivered'],
              ['04', 'Regional offices'],
              ['24/7', 'Technical support'],
            ].map(([number, label], index) => (
              <div
                key={label}
                ref={(el) => {
                  statRefs.current[index] = el
                }}
                className="
                  min-h-[220px]
                  border-b
                  border-black/20
                  py-8

                  lg:min-h-[320px]
                  lg:border-b-0
                  lg:border-r
                  lg:px-7
                  lg:py-10
                "
              >

                <div
                  className="
                    experience-stat-number
                    text-[18vw]
                    leading-[0.8]
                    tracking-[-0.08em]

                    lg:text-[7vw]
                  "
                >
                  {number}
                </div>

                <div
                  className="
                    experience-stat-label
                    mt-7
                    max-w-[150px]
                    text-[9px]
                    uppercase
                    leading-relaxed
                    tracking-[0.14em]
                    text-black/50

                    lg:text-sm
                  "
                >
                  {label}
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section
        ref={philosophyRef}
        className="
          relative
          z-20
          bg-black
          px-5
          py-[18vh]
          font-[font2]
          text-white

          lg:px-10
        "
      >

        <div
          className="
            grid
            gap-10

            lg:grid-cols-[25%_75%]
          "
        >

          <div
            ref={philosophyLabelRef}
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white/40

              lg:text-xs
            "
          >
            Engineering philosophy
          </div>

          <div
            ref={philosophyTitleRef}
            className="
              text-[12vw]
              uppercase
              leading-[0.8]
              tracking-[-0.08em]

              lg:text-[7vw]
            "
          >

            <span className="philosophy-line block">
              DON'T JUST
            </span>

            <span className="philosophy-line block">
              CONNECT
            </span>

            <span
              className="
                philosophy-line
                philosophy-highlight
                block
                text-sky-300
              "
            >
              SYSTEMS.
            </span>

            <span className="philosophy-line block">
              MAKE THEM
            </span>

            <span
              className="
                philosophy-line
                block
                text-white/30
              "
            >
              WORK TOGETHER.
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        ref={servicesRef}
        className="
          relative
          z-20
          overflow-clip
          bg-white
          font-[font2]
          text-black
        "
      >

        <div
          ref={servicesTrackRef}
          className="relative w-full"
        >

          <div
            className="
              grid
              min-h-[78vh]
              w-full
              justify-between
              gap-12
              border-r
              border-black
              p-5

              lg:min-h-[72vh]
              lg:grid-cols-[65%_35%]
              lg:gap-0
              lg:p-10
            "
          >

            <div
              className="
                col-span-full
                flex
                justify-between
                text-[8px]
                uppercase
                tracking-[0.2em]

                lg:text-xs
              "
            >

              <span>
                003 / What we do
              </span>

              <span>
                01—04
              </span>

            </div>

            <h2
              ref={servicesIntroTitleRef}
              className="
                text-[17vw]
                uppercase
                leading-[0.75]
                tracking-[-0.08em]

                lg:text-[9vw]
              "
            >
              IDEAS
              <br />
              INTO
              <br />

              <span
                className="
                  bg-black
                  px-2
                  text-white
                "
              >
                SYSTEMS.
              </span>
            </h2>

            <p
              ref={servicesIntroCopyRef}
              className="
                max-w-[400px]
                self-end
                text-[9px]
                uppercase
                leading-relaxed
                tracking-[0.15em]
                text-black/50

                lg:mb-2
                lg:pr-8
                lg:text-sm
              "
            >
              One engineering workflow from
              first concept to final
              commissioning.
            </p>

          </div>

          {services.map((service, index) => (
            <article
              key={service.number}
              className={`
                service-card
                relative
                grid
                min-h-[90vh]
                w-full
                gap-8
                overflow-hidden
                border-t
                border-black
                p-5
                ${service.tone}

                lg:min-h-[78vh]
                lg:grid-cols-[18%_47%_35%]
                lg:items-center
                lg:gap-0
                lg:p-10
              `}
            >

              <div
                className="
                  service-number
                  self-start
                  text-[16vw]
                  leading-[0.75]
                  tracking-[-0.08em]

                  lg:text-[11vw]
                "
              >
                {service.number}
              </div>

              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  justify-center
                "
              >

                <div
                  className="
                    mb-4
                    flex
                    items-center
                    justify-between
                    border-t
                    border-current/30
                    pt-3
                    text-[8px]
                    uppercase
                    tracking-[0.18em]

                    lg:mr-10
                    lg:text-xs
                  "
                >

                  <span>
                    {service.title}
                  </span>

                  <span>
                    0{index + 1} / 04
                  </span>

                </div>

                <div
                  className="
                    mb-7
                    aspect-[1.35]
                    overflow-hidden
                    bg-black
                  "
                >

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      service-image
                      h-full
                      w-full
                      object-cover
                      will-change-transform
                    "
                  />

                </div>

                <h3
                  className="
                    overflow-hidden
                    text-[15vw]
                    uppercase
                    leading-[0.75]
                    tracking-[-0.08em]

                    lg:text-[6vw]
                  "
                >

                  {service.displayTitle
                    .split(' ')
                    .map((word) => (
                      <span
                        key={word}
                        className="
                          service-title-line
                          block
                        "
                      >
                        {word}
                      </span>
                    ))}

                </h3>

              </div>

              <div
                className="
                  service-details
                  flex
                  flex-col
                  justify-end

                  lg:pl-14
                "
              >

                <div
                  className="
                    mb-8
                    border-t
                    border-current/30
                    pt-3
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    opacity-60

                    lg:text-xs
                  "
                >
                  {service.metadata}
                </div>

                <p
                  className="
                    max-w-sm
                    text-xl
                    leading-[1.05]
                    tracking-[-0.03em]

                    lg:text-[2vw]
                  "
                >
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="
                    group
                    mt-10
                    flex
                    w-fit
                    items-center
                    gap-4
                    border-b
                    border-current
                    pb-2
                    text-[9px]
                    uppercase
                    tracking-[0.18em]

                    lg:text-xs
                  "
                >
                  Discuss a project

                  <span
                    className="
                      service-arrow
                      text-xl
                      leading-none
                    "
                  >
                    ↗
                  </span>

                </Link>

              </div>

            </article>
          ))}

          <div
            className="
              flex
              min-h-[55vh]
              w-full
              items-center
              justify-center
              bg-white

              lg:min-h-[65vh]
            "
          >

            <div
              className="
                text-center
                text-[12vw]
                uppercase
                leading-[0.8]
                tracking-[-0.08em]

                lg:text-[6vw]
              "
            >
              ONE
              <br />
              TEAM.
              <br />

              <span
                className="
                  bg-black
                  px-2
                  text-white
                "
              >
                ONE
              </span>

              <br />

              SYSTEM.
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          TEAM
      ===================================================== */}

      <section
        className="
          relative
          z-30
          bg-white
          font-[font2]
        "
      >

        <div
          className="
            px-5
            pb-[15vh]
            pt-[18vh]

            lg:px-10
          "
        >

          <div
            className="
              mb-8
              flex
              justify-between
              border-t
              border-black
              pt-5
              text-[8px]
              uppercase
              tracking-[0.2em]

              lg:text-xs
            "
          >

            <span>
              004 / People
            </span>

            <span>
              The team behind the systems
            </span>

          </div>

          <h2
            className="
              text-[18vw]
              uppercase
              leading-[0.76]
              tracking-[-0.08em]

              lg:text-[9vw]
            "
          >
            OUR
            <br />

            <span className="ml-[10vw]">
              TEAM
            </span>

          </h2>

        </div>

        <div className="relative z-20">

          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              onMouseEnter={() =>
                showTeamImage(index)
              }
              onMouseLeave={
                hideTeamImage
              }
              className="
                group
                relative
                flex
                h-[12vh]
                w-full
                cursor-pointer
                items-center
                overflow-hidden
                border-b
                border-black/20

                lg:h-[15vh]
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  translate-y-full
                  bg-black
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:translate-y-0
                "
              />

              <div
                className="
                  relative
                  z-10
                  w-[38%]
                  px-5
                  text-[8px]
                  uppercase
                  tracking-[0.08em]
                  transition-colors
                  duration-500
                  group-hover:text-white

                  lg:px-10
                  lg:text-sm
                "
              >
                {member.designation}
              </div>

              <div
                className="
                  relative
                  z-10
                  w-[62%]
                  whitespace-nowrap
                  px-5
                  text-right
                  text-[6vw]
                  uppercase
                  leading-none
                  tracking-[-0.05em]
                  transition-colors
                  duration-500
                  group-hover:text-white

                  lg:px-10
                  lg:text-[5vw]
                "
              >
                {member.name}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="
          relative
          z-30
          flex
          items-center
          justify-end
          gap-2
          bg-white
          px-2
          pb-8
          pt-10
          font-[font2]
        "
      >

        <div
          className="
            flex
            h-10
            items-center
            rounded-full
            border
            border-black
            px-3
            pt-1
            text-[10px]
            uppercase

            sm:h-12
            sm:px-4
            sm:text-sm
          "
        >
          © {new Date().getFullYear()}
          {' '}
          Innovex Automation
        </div>

        <Link
          to="/contact"
          className="
            flex
            h-10
            items-center
            rounded-full
            border
            border-black
            px-4
            pt-1
            text-sm
            uppercase
            transition-all
            duration-300
            hover:bg-black
            hover:text-white

            sm:h-12
            sm:px-5
            sm:text-base
          "
        >
          Contact
        </Link>

      </footer>

      {/* =====================================================
          TEAM IMAGE PORTAL
      ===================================================== */}

      {typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={page2ImageContainerRef}
            className="
              pointer-events-none
              fixed
              inset-0
              z-[50]
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
                h-[72vw]
                max-h-[480px]
                w-[55vw]
                max-w-[360px]
                -translate-x-1/2
                -translate-y-1/2
                overflow-hidden
                rounded-3xl
                bg-black

                lg:h-[34vw]
                lg:w-[25vw]
              "
            >

              <img
                ref={page2Image1Ref}
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