import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useState } from 'react'

import ProjectCard from '../components/projects/ProjectCard'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  const pageRef = useRef(null)
  const projectsRef = useRef(null)
  const partnersRef = useRef(null)
  const contactRef = useRef(null)

  const projects = [
    {
      projects: [
        {
          image:
            'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
          title: 'Prendre les devants',
          type: 'Campagne',
          year: '2024',
          href: 'https://k72.ca/travail/prendre-les-devants',
        },
        {
          image:
            'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
          title: 'Widescape',
          type: 'Branding',
          year: '2022',
          href: 'https://k72.ca/travail/widescape',
        },
      ],
    },
    {
      projects: [
        {
          image:
            'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
          title: 'OKA',
          type: 'Campaign',
          year: '2023',
          href: 'https://k72.ca/travail/oka',
        },
        {
          image:
            'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
          title: 'Opto reseau',
          type: 'Digital',
          year: '2023',
          href: 'https://k72.ca/travail/opto-reseau',
        },
      ],
    },
    {
      projects: [
        {
          image:
            'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
          title: 'La Majeure',
          type: 'Branding',
          year: '2022',
          href: 'https://k72.ca/travail/lamajeure',
        },
        {
          image:
            'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
          title: 'Shelton',
          type: 'Campaign',
          year: '2022',
          href: 'https://k72.ca/travail/shelton',
        },
      ],
    },
  ]

  const partners = [
    'TATA POWER',
    'ADANI',
    'LUMINOUS',
    'WAAREE',
  ]

  useGSAP(
    () => {
      /*
      ============================================================
      PROJECTS
      ============================================================
      */

      const heroElements = gsap.utils.toArray(
        '.project-hero',
        projectsRef.current
      )

      heroElements.forEach((hero, index) => {
        const getExpandedHeight = () => {
          return window.innerWidth >= 768
            ? 850
            : window.innerHeight * 0.7
        }

        const expandedHeight = getExpandedHeight()

        gsap.set(hero, {
          height: 100,
          transformOrigin: 'bottom center',
          force3D: true,
          overflow: 'hidden',
        })

        gsap.fromTo(
          hero,
          {
            scaleY: 0.2,
          },
          {
            scaleY: 1,
            height: expandedHeight,
            ease: 'none',
            scrollTrigger: {
              trigger: hero,
              start: `top ${92 - index * 4}%`,
              end: `bottom ${12 + index * 4}%`,
              scrub: 1,
              invalidateOnRefresh: true,
              id: `project-height-${index}`,
            },
          }
        )
      })

      /*
      ============================================================
      PARTNERS
      ============================================================
      */

      const partnersLabel = partnersRef.current?.querySelector(
        '.partners-label'
      )

      const partnersTitle = partnersRef.current?.querySelectorAll(
        '.partners-title span'
      )

      const partnerCards = partnersRef.current?.querySelectorAll(
        '.partner-card'
      )

      const partnerNames = partnersRef.current?.querySelectorAll(
        '.partner-name'
      )

      if (partnersLabel) {
        gsap.from(partnersLabel, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: partnersRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
      }

      if (partnersTitle?.length) {
        gsap.from(partnersTitle, {
          yPercent: 100,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: partnersRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        })
      }

      if (partnerCards?.length) {
        gsap.from(partnerCards, {
          y: 60,
          opacity: 0,
          scale: 0.96,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: partnersRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        })
      }

      if (partnerNames?.length) {
        gsap.from(partnerNames, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: partnersRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        })
      }

      /*
      ============================================================
      CONTACT
      ============================================================
      */

      const contactLabel = contactRef.current?.querySelector(
        '.contact-label'
      )

      const contactTitle = contactRef.current?.querySelectorAll(
        '.contact-title span'
      )

      const contactItems = contactRef.current?.querySelectorAll(
        '.contact-item'
      )

      const contactFooter = contactRef.current?.querySelector(
        '.contact-footer'
      )

      /*
      Contact background reveal
      */

      gsap.fromTo(
        contactRef.current,
        {
          clipPath: 'inset(100% 0% 0% 0%)',
        },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.9,
          ease: 'power3.inOut',

          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      /*
      Contact label
      */

      if (contactLabel) {
        gsap.from(contactLabel, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        })
      }

      /*
      Contact title
      */

      if (contactTitle?.length) {
        gsap.from(contactTitle, {
          yPercent: 100,
          opacity: 0,
          duration: 0.55,
          stagger: 0.05,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        })
      }

      /*
      Contact items
      */

      if (contactItems?.length) {
        gsap.from(contactItems, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        })
      }

      /*
      Contact footer
      */

      if (contactFooter) {
        gsap.from(contactFooter, {
          y: 25,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: contactFooter,
            start: 'top 95%',
            toggleActions: 'play none none reverse',
          },
        })
      }

      /*
      ============================================================
      REFRESH
      ============================================================
      */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
      })
    },
    {
      scope: pageRef,
    }
  )

  return (
    <div
      ref={pageRef}
      className="md:p-4 p-2"
    >
      {/* =========================================================
          ACTIVE PROJECT INFO
      ========================================================= */}

      {activeProject && (
        <div className="fixed top-32 md:top-56 left-0 z-30 w-full bg-white text-black pointer-events-none">
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-y border-black px-3 py-2 md:px-5 md:py-3">
            <span className="font-[font1] text-xl uppercase md:text-4xl">
              {activeProject.title}
            </span>

            <span className="text-xs uppercase md:text-base">
              {activeProject.type}
            </span>

            <span className="font-[font1] text-xl md:text-4xl">
              {activeProject.year}
            </span>
          </div>
        </div>
      )}

      {/* =========================================================
          TITLE
      ========================================================= */}

      <div className="pt-[45vh]">
        <h2 className="font-[font2] md:text-[9.5vw] text-7xl uppercase">
          Projets
        </h2>
      </div>

      {/* =========================================================
          PROJECTS
          IMPORTANT:
          This wrapper isolates the project ScrollTriggers.
      ========================================================= */}

      <div
        ref={projectsRef}
        className="md:-mt-3 mt-0"
      >
        {projects.map((elem, idx) => (
          <div
            key={idx}
            className="
              project-hero
              w-full
              h-[70vh]
              md:h-[850px]
              mb-4
              flex
              md:flex-row
              flex-col
              md:gap-4
              gap-2
              overflow-hidden
              min-h-0
            "
          >
            <ProjectCard
              projects={elem.projects}
              onProjectHover={setActiveProject}
            />
          </div>
        ))}
      </div>

      {/* =========================================================
          PARTNERS
      ========================================================= */}

      <section
        ref={partnersRef}
        className="mt-32 overflow-hidden"
      >
        <div className="mb-16 overflow-hidden">
          <p className="partners-label font-[font1] text-sm uppercase mb-5">
            Our Partners
          </p>

          <h3 className="partners-title font-[font2] text-[12vw] md:text-[9.5vw] leading-[0.8] uppercase overflow-hidden">
            <span className="inline-block">
              Trusted
            </span>{' '}
            <span className="inline-block">
              By
            </span>
          </h3>
        </div>

        <div className="partner-grid grid grid-cols-2 md:grid-cols-4 border-t border-black">
          {partners.map((partner, index) => (
            <div
              key={partner}
              className={`
                partner-card
                group
                relative
                h-40
                md:h-64
                flex
                items-center
                justify-center
                border-b
                border-black
                overflow-hidden
                transition-colors
                duration-500
                hover:bg-sky-400
                ${index % 2 === 0 ? 'border-r' : ''}
                md:border-r
                ${index === partners.length - 1 ? 'md:border-r-0' : ''}
              `}
            >
              <div
                className="
                  absolute
                  w-20
                  h-20
                  md:w-32
                  md:h-32
                  rounded-full
                  bg-sky-400
                  scale-0
                  group-hover:scale-[4]
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                "
              />

              <span
                className="
                  partner-name
                  relative
                  z-10
                  font-[font2]
                  text-2xl
                  md:text-4xl
                  lg:text-5xl
                  uppercase
                  text-black
                  text-center
                  px-4
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              >
                {partner}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section
        ref={contactRef}
        className="
          bg-black
          text-white
          mt-4
          px-4
          py-20
          md:px-8
          md:py-24
          overflow-hidden
        "
      >
        <div className="min-h-screen flex flex-col">

          <div>
            <p className="contact-label font-[font1] text-sm uppercase text-sky-400 mb-8">
              Get In Touch
            </p>

            <div className="overflow-hidden">
              <h2
                className="
                  contact-title
                  font-[font2]
                  text-[17vw]
                  md:text-[14vw]
                  leading-[0.75]
                  uppercase
                "
              >
                <span className="inline-block">
                  Let's
                </span>

                <br />

                <span className="inline-block">
                  Talk
                </span>
              </h2>
            </div>
          </div>

          <div className="contact-items mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">

            <div className="contact-item group">
              <p className="font-[font1] text-xs uppercase text-white/40 mb-4">
                Email
              </p>

              <a
                href="mailto:info@innovexautomation.com"
                className="
                  inline-block
                  font-[font1]
                  text-xl
                  md:text-3xl
                  lg:text-4xl
                  break-all
                  text-white
                  transition-all
                  duration-300
                  group-hover:text-sky-400
                  group-hover:translate-x-2
                "
              >
                info@innovexautomation.com
              </a>
            </div>

            <div className="contact-item group">
              <p className="font-[font1] text-xs uppercase text-white/40 mb-4">
                Phone
              </p>

              <a
                href="tel:+919XXXXXXXXX"
                className="
                  inline-block
                  font-[font1]
                  text-xl
                  md:text-3xl
                  lg:text-4xl
                  text-white
                  transition-all
                  duration-300
                  group-hover:text-sky-400
                  group-hover:translate-x-2
                "
              >
                +91 XXXXX XXXXX
              </a>
            </div>

            <div className="contact-item group">
              <p className="font-[font1] text-xs uppercase text-white/40 mb-4">
                Location
              </p>

              <p
                className="
                  inline-block
                  font-[font1]
                  text-xl
                  md:text-3xl
                  lg:text-4xl
                  text-white
                  transition-all
                  duration-300
                  group-hover:text-sky-400
                  group-hover:translate-x-2
                "
              >
                Sikar, Rajasthan
              </p>
            </div>

            <div className="contact-item group">
              <p className="font-[font1] text-xs uppercase text-white/40 mb-4">
                Services
              </p>

              <p
                className="
                  inline-block
                  font-[font1]
                  text-xl
                  md:text-3xl
                  lg:text-4xl
                  text-white
                  transition-all
                  duration-300
                  group-hover:text-sky-400
                  group-hover:translate-x-2
                "
              >
                Automation / Electrical / Solar
              </p>
            </div>

          </div>

          <div className="contact-footer border-t border-white/30 mt-auto pt-6 flex flex-col md:flex-row justify-between gap-5">
            <p className="font-[font1] text-xs uppercase">
              © 2026 Innovex Automation
            </p>

            <a
              href="#"
              className="
                font-[font1]
                text-xs
                uppercase
                transition-colors
                duration-300
                hover:text-sky-400
              "
            >
              Back To Top ↑
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Projects