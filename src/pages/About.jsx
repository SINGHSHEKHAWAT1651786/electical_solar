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
  /*
   * =========================================================
   * ROUTE / SCROLL RESET
   * =========================================================
   */

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'

    window.scrollTo(0, 0)

    const raf = requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      ScrollTrigger.refresh()
    })

    return () => {
      cancelAnimationFrame(raf)
    }
  }, [])

  /*
   * =========================================================
   * PAGE 1 REFS
   * =========================================================
   */

  const page1Ref = useRef(null)
  const heroImageRef = useRef(null)
  const heroStageRef = useRef(null)
  const heroCopyRef = useRef(null)
  const heroProgressRef = useRef(null)
  const heroCounterRef = useRef(null)
  const heroLabelRef = useRef(null)
  const aboutMetaRef = useRef(null)
  const heroStatementRef = useRef(null)

  /*
   * =========================================================
   * EXPERIENCE
   * =========================================================
   */

  const experienceRef = useRef(null)
  const experienceTitleRef = useRef(null)
  const experienceCopyRef = useRef(null)
  const statRefs = useRef([])

  /*
   * =========================================================
   * PHILOSOPHY
   * =========================================================
   */

  const philosophyRef = useRef(null)
  const philosophyLabelRef = useRef(null)
  const philosophyTitleRef = useRef(null)

  /*
   * =========================================================
   * SERVICES
   * =========================================================
   */

  const servicesRef = useRef(null)
  const servicesTrackRef = useRef(null)
  const servicesIntroTitleRef = useRef(null)
  const servicesIntroCopyRef = useRef(null)

  /*
   * =========================================================
   * TEAM
   * =========================================================
   */

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
   * SERVICES DATA
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
   * TEAM IMAGES
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

  /*
   * =========================================================
   * TEAM MEMBERS
   * =========================================================
   */

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
   * PHILOSOPHY GSAP
   *
   * PRESERVED
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
      title.querySelector('.philosophy-highlight')

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
   * PAGE 1 GSAP
   *
   * IMPORTANT:
   *
   * heroCopyRef IS NOT animated with opacity.
   *
   * This prevents the white/invisible problem.
   *
   * TITLE IS COMPLETELY UNTOUCHED.
   * =========================================================
   */

  useGSAP(() => {
    const section = page1Ref.current
    const stage = heroStageRef.current
    const image = heroImageRef.current
    const copy = heroCopyRef.current
    const progress = heroProgressRef.current
    const counter = heroCounterRef.current
    const label = heroLabelRef.current
    const aboutMeta = aboutMetaRef.current
    const heroStatement = heroStatementRef.current

    if (
      !section ||
      !stage ||
      !image ||
      !copy ||
      !heroStatement
    ) {
      return
    }

    const mm = gsap.matchMedia()

    const reducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

    if (reducedMotion) {
      gsap.set(copy, {
        clearProps: 'all',
      })

      gsap.set(stage, {
        clearProps: 'all',
      })

      return
    }

    const highlight =
      heroStatement.querySelector(
        '.about-highlight'
      )

    const subline =
      heroStatement.querySelector(
        '.about-subline'
      )

    const sweep =
      aboutMeta?.querySelector(
        '.about-meta-sweep'
      )

    const metaRows =
      aboutMeta?.querySelectorAll(
        '.about-meta-row'
      )

    /*
     * ---------------------------------------------------------
     * ABOUT TEXT ANIMATION
     *
     * Clean editorial reveal.
     * No opacity: 0 on the whole panel.
     * ---------------------------------------------------------
     */

    const createAboutTextAnimation = (
      mobile = false
    ) => {
      /*
       * RESET
       */

      gsap.set(copy, {
        clearProps:
          'opacity,x,y,scale,transform',
      })

      /*
       * META
       */

      if (aboutMeta) {
        gsap.set(aboutMeta, {
          opacity: 1,
          y: mobile ? 14 : 20,
        })
      }

      if (metaRows?.length) {
        gsap.set(metaRows, {
          opacity: 1,
          x: 0,
          y: 0,
        })
      }

      if (sweep) {
        gsap.set(sweep, {
          scaleX: 0,
          transformOrigin:
            'left center',
        })
      }

      /*
       * STATEMENT
       *
       * It remains dark and visible.
       */

      gsap.set(heroStatement, {
        opacity: 1,
        y: mobile ? 24 : 35,
        x: 0,
        skewX: 0,
        clipPath:
          'inset(0 0 0% 0)',
      })

      /*
       * BLUE HIGHLIGHT
       */

      if (highlight) {
        gsap.set(highlight, {
          opacity: 1,
          scaleX: 0.82,
          x: 0,
          skewX: 0,
          transformOrigin:
            'left center',
        })
      }

      /*
       * SUBLINE
       */

      if (subline) {
        gsap.set(subline, {
          opacity: 1,
          y: mobile ? 12 : 18,
        })
      }

      /*
       * -------------------------------------------------------
       * META TIMELINE
       * -------------------------------------------------------
       */

      const metaTimeline =
        gsap.timeline({
          scrollTrigger: {
            trigger: aboutMeta,
            start: mobile
              ? 'top 92%'
              : 'top 88%',
            end: mobile
              ? 'top 68%'
              : 'top 62%',
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        })

      if (aboutMeta) {
        metaTimeline.to(
          aboutMeta,
          {
            y: 0,
            duration: 0.45,
            ease: 'power3.out',
          }
        )
      }

      if (sweep) {
        metaTimeline.to(
          sweep,
          {
            scaleX: 1,
            duration: 0.7,
            ease: 'power4.inOut',
          },
          '<'
        )
      }

      /*
       * -------------------------------------------------------
       * MAIN STATEMENT
       * -------------------------------------------------------
       */

      const statementTimeline =
        gsap.timeline({
          scrollTrigger: {
            trigger: heroStatement,
            start: mobile
              ? 'top 91%'
              : 'top 88%',
            end: mobile
              ? 'top 57%'
              : 'top 52%',
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        })

      statementTimeline.to(
        heroStatement,
        {
          y: 0,
          duration: 0.8,
          ease: 'power4.out',
        }
      )

      /*
       * HIGHLIGHT
       */

      if (highlight) {
        statementTimeline.to(
          highlight,
          {
            scaleX: 1,
            duration: 0.45,
            ease: 'power3.out',
          },
          '-=0.38'
        )
      }

      /*
       * SUBLINE
       */

      if (subline) {
        statementTimeline.to(
          subline,
          {
            y: 0,
            duration: 0.4,
            ease: 'power3.out',
          },
          '-=0.18'
        )
      }

      /*
       * -------------------------------------------------------
       * VERY SMALL SCROLL FLOAT
       *
       * No aggressive movement.
       * -------------------------------------------------------
       */

      const statementFloat =
        gsap.to(heroStatement, {
          y: mobile ? -6 : -12,
          ease: 'none',

          scrollTrigger: {
            trigger: heroStatement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        })

      /*
       * HIGHLIGHT FLOAT
       */

      let highlightFloat = null

      if (highlight) {
        highlightFloat =
          gsap.to(highlight, {
            x: mobile ? 2 : 4,
            ease: 'none',

            scrollTrigger: {
              trigger: heroStatement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.8,
              invalidateOnRefresh: true,
            },
          })
      }

      return () => {
        metaTimeline.kill()
        statementTimeline.kill()
        statementFloat.kill()

        if (highlightFloat) {
          highlightFloat.kill()
        }
      }
    }

    /*
     * =======================================================
     * DESKTOP
     * =======================================================
     */

    mm.add(
      '(min-width: 1024px)',
      () => {
        let currentIndex = 0
        let transitionRunning = false
        let queuedIndex = null

        image.src = page1Images[0]

        /*
         * STAGE
         */

        gsap.set(stage, {
          opacity: 1,
          scale: 1,
          y: 0,
          x: 0,
          rotation: 0,
        })

        /*
         * IMAGE
         */

        gsap.set(image, {
          scale: 1.1,
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
        })

        /*
         * COPY
         *
         * ALWAYS VISIBLE.
         */

        gsap.set(copy, {
          opacity: 1,
          x: 0,
          y: 0,
        })

        /*
         * ABOUT TEXT
         */

        createAboutTextAnimation(false)

        /*
         * -----------------------------------------------------
         * IMAGE CHANGE
         * -----------------------------------------------------
         */

        const changeImage = (
          nextIndex
        ) => {
          if (
            nextIndex ===
            currentIndex
          ) {
            return
          }

          if (transitionRunning) {
            queuedIndex = nextIndex
            return
          }

          transitionRunning = true

          const direction =
            nextIndex > currentIndex
              ? 1
              : -1

          currentIndex = nextIndex

          const timeline =
            gsap.timeline({
              onComplete: () => {
                transitionRunning =
                  false

                if (
                  queuedIndex !== null &&
                  queuedIndex !==
                    currentIndex
                ) {
                  const queuedNextIndex =
                    queuedIndex

                  queuedIndex = null

                  changeImage(
                    queuedNextIndex
                  )
                }
              },
            })

          /*
           * EXIT
           */

          timeline.to(image, {
            x:
              direction * -32,
            y:
              direction * -16,
            scale: 1.16,
            rotation:
              direction * -1.5,
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in',
          })

          /*
           * CHANGE SOURCE
           */

          timeline.call(() => {
            image.src =
              page1Images[
                nextIndex
              ]
          })

          /*
           * ENTER
           */

          timeline.set(image, {
            x:
              direction * 28,
            y:
              direction * 14,
            scale: 1.16,
            rotation:
              direction * 1.5,
          })

          timeline.to(image, {
            x: 0,
            y: 0,
            scale: 1.08,
            rotation: 0,
            opacity: 1,
            duration: 0.42,
            ease: 'power4.out',
          })

          /*
           * SMALL STAGE MOVEMENT
           */

          timeline.fromTo(
            stage,
            {
              rotation:
                direction * -1,
            },
            {
              rotation: 0,
              duration: 0.45,
              ease: 'power3.out',
            },
            0
          )

          /*
           * COUNTER
           */

          if (counter) {
            counter.textContent =
              `${String(
                nextIndex + 1
              ).padStart(
                2,
                '0'
              )} / 07`
          }

          /*
           * LABEL
           */

          if (label) {
            const labels = [
              'CONTROL / AUTOMATION',
              'FIELD / ENGINEERING',
              'POWER / DISTRIBUTION',
              'SOLAR / ENERGY',
              'INDUSTRIAL / CONTROL',
              'PROJECT / DELIVERY',
              'SYSTEM / COMPLETE',
            ]

            label.textContent =
              labels[nextIndex]
          }
        }

        /*
         * -----------------------------------------------------
         * MAIN PAGE 1 SCROLL
         *
         * DOES NOT TOUCH COPY OPACITY.
         * -----------------------------------------------------
         */

        const trigger =
          ScrollTrigger.create({
            trigger: section,

            start: 'top top',

            end: 'bottom bottom',

            scrub: true,

            onUpdate: (self) => {
              const progressValue =
                self.progress

              /*
               * IMAGE SEQUENCE
               */

              const nextIndex =
                Math.min(
                  page1Images.length -
                    1,

                  Math.floor(
                    progressValue *
                      page1Images.length
                  )
                )

              changeImage(
                nextIndex
              )

              /*
               * PROGRESS
               */

              if (progress) {
                gsap.set(progress, {
                  scaleX:
                    progressValue,
                })
              }

              /*
               * IMAGE PARALLAX ONLY
               */

              gsap.set(image, {
                y:
                  Math.sin(
                    progressValue *
                      Math.PI
                  ) * -22,
              })
            },
          })

        /*
         * STAGE ENTRY
         */

        gsap.from(stage, {
          scale: 0.9,
          opacity: 0,
          rotation: -2,
          duration: 1,
          ease: 'power4.out',
        })

        return () => {
          trigger.kill()
        }
      }
    )

    /*
     * =======================================================
     * TABLET / MOBILE
     * =======================================================
     */

    mm.add(
      '(max-width: 1023px)',
      () => {
        let currentIndex = 0
        let transitioning = false
        let queuedIndex = null

        image.src = page1Images[0]

        /*
         * STAGE
         */

        gsap.set(stage, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          x: 0,
          y: 0,
        })

        /*
         * IMAGE
         */

        gsap.set(image, {
          scale: 1.06,
          x: 0,
          y: 0,
          opacity: 1,
        })

        /*
         * COPY
         *
         * ALWAYS VISIBLE.
         */

        gsap.set(copy, {
          opacity: 1,
          x: 0,
          y: 0,
        })

        /*
         * ABOUT TEXT
         */

        createAboutTextAnimation(true)

        /*
         * -----------------------------------------------------
         * MOBILE IMAGE CHANGE
         * -----------------------------------------------------
         */

        const changeMobileImage = (
          nextIndex
        ) => {
          if (
            nextIndex ===
            currentIndex
          ) {
            return
          }

          if (transitioning) {
            queuedIndex = nextIndex
            return
          }

          transitioning = true

          const direction =
            nextIndex > currentIndex
              ? 1
              : -1

          currentIndex = nextIndex

          const timeline =
            gsap.timeline({
              onComplete: () => {
                transitioning =
                  false

                if (
                  queuedIndex !== null &&
                  queuedIndex !==
                    currentIndex
                ) {
                  const queuedNextIndex =
                    queuedIndex

                  queuedIndex = null

                  changeMobileImage(
                    queuedNextIndex
                  )
                }
              },
            })

          /*
           * EXIT
           */

          timeline.to(image, {
            x:
              direction * -18,
            scale: 1.1,
            opacity: 0,
            duration: 0.16,
            ease: 'power2.in',
          })

          /*
           * CHANGE IMAGE
           */

          timeline.call(() => {
            image.src =
              page1Images[
                nextIndex
              ]
          })

          /*
           * ENTER
           */

          timeline.set(image, {
            x:
              direction * 18,
            scale: 1.1,
          })

          timeline.to(image, {
            x: 0,
            scale: 1.06,
            opacity: 1,
            duration: 0.32,
            ease: 'power3.out',
          })

          /*
           * COUNTER
           */

          if (counter) {
            counter.textContent =
              `${String(
                nextIndex + 1
              ).padStart(
                2,
                '0'
              )} / 07`
          }
        }

        /*
         * -----------------------------------------------------
         * MOBILE SCROLL
         *
         * NO COPY OPACITY.
         * -----------------------------------------------------
         */

        const trigger =
          ScrollTrigger.create({
            trigger: section,

            start: 'top top',

            end: 'bottom bottom',

            scrub: 0.35,

            onUpdate: (self) => {
              const progressValue =
                self.progress

              const nextIndex =
                Math.min(
                  page1Images.length -
                    1,

                  Math.floor(
                    progressValue *
                      page1Images.length
                  )
                )

              changeMobileImage(
                nextIndex
              )

              /*
               * PROGRESS
               */

              if (progress) {
                gsap.set(progress, {
                  scaleX:
                    progressValue,
                })
              }

              /*
               * IMAGE PARALLAX
               */

              gsap.set(image, {
                y:
                  Math.sin(
                    progressValue *
                      Math.PI
                  ) * -10,
              })
            },
          })

        /*
         * STAGE ENTRY
         */

        gsap.from(stage, {
          scale: 0.94,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
        })

        return () => {
          trigger.kill()
        }
      }
    )

    return () => {
      mm.revert()
    }
  }, [])

  /*
   * =========================================================
   * EXPERIENCE GSAP
   *
   * CLEANER VERSION
   * =========================================================
   */

  useGSAP(() => {
    const section = experienceRef.current
    const title = experienceTitleRef.current
    const copy = experienceCopyRef.current

    if (
      !section ||
      !title ||
      !copy
    ) {
      return
    }

    const mm = gsap.matchMedia()

    const reducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

    if (reducedMotion) {
      return
    }

    const createExperienceAnimation = (
      mobile = false
    ) => {
      const meta =
        section.querySelector(
          '.experience-meta'
        )

      const index =
        section.querySelector(
          '.experience-index'
        )

      const status =
        section.querySelector(
          '.experience-status'
        )

      const lead =
        section.querySelector(
          '.experience-lead'
        )

      const highlight =
        section.querySelector(
          '.experience-highlight'
        )

      const body =
        section.querySelector(
          '.experience-body'
        )

      /*
       * INITIAL
       */

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

      /*
       * TITLE
       */

      gsap.set(title, {
        opacity: 1,
        x: mobile ? -30 : -70,
        y: mobile ? 25 : 35,
        clipPath:
          'inset(0 0 0 0)',
        transformOrigin:
          'left center',
      })

      /*
       * COPY
       */

      gsap.set(copy, {
        opacity: 1,
        y: mobile ? 25 : 35,
      })

      /*
       * LEAD
       */

      gsap.set(lead, {
        opacity: 1,
        y: mobile ? 20 : 30,
      })

      /*
       * HIGHLIGHT
       */

      if (highlight) {
        gsap.set(highlight, {
          opacity: 1,
          scaleX: 0.75,
          transformOrigin:
            'left center',
        })
      }

      /*
       * BODY
       */

      gsap.set(body, {
        opacity: 1,
        y: mobile ? 15 : 25,
      })

      /*
       * MAIN TIMELINE
       */

      const timeline =
        gsap.timeline({
          scrollTrigger: {
            trigger: section,

            start: mobile
              ? 'top 88%'
              : 'top 84%',

            end: mobile
              ? 'top 45%'
              : 'top 25%',

            scrub: mobile
              ? 0.65
              : 0.8,

            invalidateOnRefresh: true,
          },
        })

      /*
       * META
       */

      timeline.to(
        meta,
        {
          y: 0,
          duration: 0.3,
          ease: 'power3.out',
        }
      )

      /*
       * TITLE
       */

      timeline.to(
        title,
        {
          x: 0,
          y: 0,
          duration: mobile
            ? 0.65
            : 0.8,
          ease: 'power4.out',
        },
        '-=0.08'
      )

      /*
       * COPY
       */

      timeline.to(
        copy,
        {
          y: 0,
          duration: 0.55,
          ease: 'power3.out',
        },
        '-=0.35'
      )

      /*
       * LEAD
       */

      timeline.to(
        lead,
        {
          y: 0,
          duration: 0.55,
          ease: 'power3.out',
        },
        '-=0.3'
      )

      /*
       * HIGHLIGHT
       */

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

      /*
       * BODY
       */

      timeline.to(
        body,
        {
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
        },
        '-=0.18'
      )

      return () => {
        timeline.kill()
      }
    }

    /*
     * =======================================================
     * DESKTOP EXPERIENCE
     * =======================================================
     */

    mm.add(
      '(min-width: 768px)',
      () => {
        const cleanup =
          createExperienceAnimation(
            false
          )

        /*
         * STATS
         */

        statRefs.current.forEach(
          (stat, index) => {
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
                index % 2 === 0
                  ? -2
                  : 2,
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

            const statTimeline =
              gsap.timeline({
                scrollTrigger: {
                  trigger: stat,
                  start: 'top 90%',
                  end: 'top 55%',
                  scrub: 0.8,
                },
              })

            statTimeline.to(
              stat,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: 'power4.out',
              }
            )

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
          }
        )

        return cleanup
      }
    )

    /*
     * =======================================================
     * MOBILE EXPERIENCE
     * =======================================================
     */

    mm.add(
      '(max-width: 767px)',
      () => {
        const cleanup =
          createExperienceAnimation(
            true
          )

        statRefs.current.forEach(
          (stat) => {
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

            const statTimeline =
              gsap.timeline({
                scrollTrigger: {
                  trigger: stat,
                  start: 'top 92%',
                  end: 'top 67%',
                  scrub: 0.65,
                },
              })

            statTimeline.to(
              stat,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                ease: 'power3.out',
              }
            )

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
          }
        )

        return cleanup
      }
    )

    return () => {
      mm.revert()
    }
  }, [])

  /*
   * =========================================================
   * SERVICES GSAP
   *
   * PRESERVED
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

    const reducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

    if (reducedMotion) {
      gsap.set(cards, {
        clearProps: 'all',
      })

      return () => mm.revert()
    }

    /*
     * DESKTOP
     */

    mm.add(
      '(min-width: 1024px)',
      () => {
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

        cards.forEach(
          (card, index) => {
            const image =
              card.querySelector(
                '.service-image'
              )

            const titleLines =
              card.querySelectorAll(
                '.service-title-line'
              )

            const arrow =
              card.querySelector(
                '.service-arrow'
              )

            gsap.fromTo(
              card,
              {
                y: 90,
                rotation:
                  index % 2
                    ? 1.5
                    : -1.5,
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
                index % 2
                  ? 6
                  : -6,

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

            card._cleanupServiceHover =
              () => {
                card.removeEventListener(
                  'mouseenter',
                  enter
                )

                card.removeEventListener(
                  'mouseleave',
                  leave
                )
              }
          }
        )
      }
    )

    /*
     * MOBILE
     */

    mm.add(
      '(max-width: 1023px)',
      () => {
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
            card.querySelector(
              '.service-image'
            )

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
                'inset(0 0% 0 0%)',

              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                end: 'top 65%',
                scrub: 0.6,
              },
            }
          )
        })
      }
    )

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
   *
   * PRESERVED
   * =========================================================
   */

  const showTeamImage = (index) => {
    const container =
      page2ImageContainerRef.current

    const imageA =
      page2Image1Ref.current

    const imageB =
      page2Image2Ref.current

    if (
      !container ||
      !imageA ||
      !imageB
    ) {
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
      activeImageRef.current === 0
        ? 1
        : 0

    setActivePerson(index)
  }

  /*
   * =========================================================
   * HIDE TEAM IMAGE
   * =========================================================
   */

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
          min-h-[170vh]
          bg-white
          font-[font2]

          lg:min-h-[190vh]
        "
      >

        {/* ===================================================
            IMAGE STAGE
        =================================================== */}

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
            FRAME <span>01</span>
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
            CONTROL / AUTOMATION
          </div>

        </div>

        {/* ===================================================
            STATIC HERO TITLE

            DO NOT ANIMATE
        =================================================== */}

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
            left-[7vw]
            top-[62vh]
            z-20
            w-[86vw]
            max-w-[700px]

            border-l-4
            border-sky-300

            bg-white

            p-5

            shadow-[10px_10px_0_rgba(125,211,252,0.18)]

            lg:left-[7vw]
            lg:top-[146vh]
            lg:w-[46vw]
            lg:p-7
          "
        >

          {/* =================================================
              ABOUT META
          ================================================= */}

          <div
            ref={aboutMetaRef}
            className="
              relative
              mb-5
              overflow-hidden
              border-y
              border-black
              py-3
              font-[font1]
            "
          >

            <span
              className="
                about-meta-sweep
                absolute
                left-0
                top-0
                h-px
                w-full
                origin-left
                bg-sky-300
              "
            />

            <div
              className="
                flex
                items-start
                justify-between
                gap-5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]

                sm:text-[11px]

                lg:text-base
              "
            >

              <span className="about-meta-row">
                About / 001
              </span>

              <div
                className="
                  about-meta-row
                  text-right
                  leading-relaxed
                "
              >

                <div>
                  Since 2019
                </div>

                <div
                  className="
                    mt-2
                    text-[9px]
                    font-normal
                    tracking-[0.12em]
                    text-black/65

                    sm:text-[10px]

                    lg:text-xs
                  "
                >
                  Sikar / Jaipur /
                  <br className="sm:hidden" />
                  {' '}Churu / Fatehpur
                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              ABOUT STATEMENT
          ================================================= */}

          <p
            ref={heroStatementRef}
            className="
              relative
              font-[font1]
              text-[6vw]
              leading-[0.98]
              tracking-[-0.02em]
              text-black

              sm:text-[5.3vw]

              lg:text-[3.1vw]
            "
          >

            We design and build{' '}

            <span
              className="
                about-highlight
                mx-1
                inline-block
                origin-left
                bg-sky-300
                px-2
                py-1
                text-black
              "
            >
              industrial systems
            </span>

            {' '}
            connecting machines,
            energy and intelligence.

            <br />

            <span
              className="
                about-subline
                mt-3
                block
                border-t
                border-black/15
                pt-3
                text-[0.62em]
                tracking-[0.03em]
                text-black/55
              "
            >
              Automation.{' '}
              Electrical.{' '}
              Solar.{' '}
              Engineering.
            </span>

          </p>

        </div>

        {/* ===================================================
            PROGRESS
        =================================================== */}

        <div
          className="
            absolute
            left-[7vw]
            top-[115vh]
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

        <div
          className="
            border-t
            border-black
            pt-5
          "
        >

          <div
            className="
              grid
              gap-16

              lg:grid-cols-2
            "
          >

            {/* =================================================
                EXPERIENCE TITLE
            ================================================= */}

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

            {/* =================================================
                EXPERIENCE COPY
            ================================================= */}

            <div
              ref={experienceCopyRef}
              className="
                lg:flex
                lg:items-end
              "
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

          {/* =================================================
              STATS
          ================================================= */}

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
            ].map(
              ([number, label], index) => (
                <div
                  key={label}
                  ref={(el) => {
                    statRefs.current[index] =
                      el
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
              )
            )}

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
          WHAT WE DO
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
          className="
            relative
            w-full
          "
        >

          {/* =================================================
              SERVICES INTRO
          ================================================= */}

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

          {/* =================================================
              SERVICE CARDS
          ================================================= */}

          {services.map(
            (service, index) => (
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
                        transition-transform
                      "
                    >
                      ↗
                    </span>
                  </Link>

                </div>

              </article>
            )
          )}

          {/* =================================================
              END
          ================================================= */}

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

        <div
          className="
            relative
            z-20
          "
        >

          {teamMembers.map(
            (member, index) => (
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
            )
          )}

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