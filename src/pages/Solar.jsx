import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

/* ============================================================
   DATA
============================================================ */

const solarImages = [
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=85',
    'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1800&q=85',
    'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1800&q=85',
    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=85',
]

const reviews = [
    {
        name: 'RAJESH SHARMA',
        city: 'SIKAR',
        capacity: '10 KW',
        text: 'THE INSTALLATION WAS CLEAN, FAST AND PROFESSIONAL.',
        image: solarImages[0],
    },
    {
        name: 'ANIL AGARWAL',
        city: 'JAIPUR',
        capacity: '25 KW',
        text: 'FROM SURVEY TO COMMISSIONING, EVERYTHING WAS HANDLED SMOOTHLY.',
        image: solarImages[1],
    },
    {
        name: 'MAHESH GUPTA',
        city: 'KOTA',
        capacity: '15 KW',
        text: 'GREAT SUPPORT AND A VERY PROFESSIONAL SOLAR EXPERIENCE.',
        image: solarImages[2],
    },
]

const inverterBrands = [
    'LUMINOUS',
    'WAAREE',
    'TATA POWER',
    'ADANI',
    'SUNGROW',
    'SOLIS',
]

const panelBrands = [
    'WAAREE',
    'ADANI',
    'TATA POWER',
    'VIKRAM',
    'PREMIER',
]

const projects = [
    {
        number: '01',
        title: 'HOME',
        location: 'SIKAR / RAJASTHAN',
        capacity: '10 KW',
        image: solarImages[0],
    },
    {
        number: '02',
        title: 'BUSINESS',
        location: 'JAIPUR / RAJASTHAN',
        capacity: '25 KW',
        image: solarImages[1],
    },
    {
        number: '03',
        title: 'INDUSTRY',
        location: 'KOTA / RAJASTHAN',
        capacity: '100 KW',
        image: solarImages[2],
    },
    {
        number: '04',
        title: 'MEGA',
        location: 'RAJASTHAN / INDIA',
        capacity: '500 KW',
        image: solarImages[3],
    },
]

const branches = [
    {
        number: '01',
        city: 'SIKAR',
        state: 'RAJASTHAN',
        type: 'HEAD OFFICE',
    },
    {
        number: '02',
        city: 'JAIPUR',
        state: 'RAJASTHAN',
        type: 'SERVICE OFFICE',
    },
    {
        number: '03',
        city: 'KOTA',
        state: 'RAJASTHAN',
        type: 'PROJECT OFFICE',
    },
    {
        number: '04',
        city: 'DELHI',
        state: 'INDIA',
        type: 'NORTH REGION',
    },
]

const certifications = [
    {
        number: '01',
        title: 'GOVT',
        subtitle: 'REGISTERED',
    },
    {
        number: '02',
        title: 'SOLAR',
        subtitle: 'CERTIFIED',
    },
    {
        number: '03',
        title: 'ELECTRICAL',
        subtitle: 'LICENSED',
    },
    {
        number: '04',
        title: 'QUALITY',
        subtitle: 'ASSURED',
    },
]

/* ============================================================
   MARQUEE
============================================================ */

const SolarMarquee = ({ reverse = false }) => {
    return (
        <div
            className={`solar-marquee ${
                reverse ? 'solar-marquee-reverse' : ''
            }`}
        >
            <div className="solar-marquee-track">
                <span>SOLAR POWER</span>
                <i>✳</i>
                <span>CLEAN ENERGY</span>
                <i>✳</i>
                <span>SMART FUTURE</span>
                <i>✳</i>

                <span>SOLAR POWER</span>
                <i>✳</i>
                <span>CLEAN ENERGY</span>
                <i>✳</i>
                <span>SMART FUTURE</span>
                <i>✳</i>
            </div>
        </div>
    )
}

/* ============================================================
   CORE BRAND
============================================================ */

const CoreBrand = ({ brand, index }) => {
    const cardRef = useRef(null)

    const handleMove = (e) => {
        const card = cardRef.current

        if (!card) return

        const rect = card.getBoundingClientRect()

        const x =
            ((e.clientX - rect.left) / rect.width - 0.5) * 16

        const y =
            ((e.clientY - rect.top) / rect.height - 0.5) * 16

        gsap.to(card, {
            x,
            y,
            rotateX: -y * 0.3,
            rotateY: x * 0.3,
            duration: 0.35,
            ease: 'power3.out',
            overwrite: true,
        })
    }

    const handleLeave = () => {
        if (!cardRef.current) return

        gsap.to(cardRef.current, {
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 0.65,
            ease: 'elastic.out(1,.45)',
            overwrite: true,
        })
    }

    return (
        <div
            className={`core-brand-slot core-brand-slot-${index + 1}`}
        >
            <div
                ref={cardRef}
                className="core-brand"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
            >
                <span className="core-brand-number">
                    0{index + 1}
                </span>

                <span className="core-brand-name">
                    {brand}
                </span>

                <span className="core-brand-status">
                    ENERGY SYSTEM
                </span>
            </div>
        </div>
    )
}

/* ============================================================
   PAGE
============================================================ */

const Solar = () => {
    const pageRef = useRef(null)
    const navigate = useNavigate()

    useGSAP(
        () => {
            const root = pageRef.current

            if (!root) return

            const reducedMotion = window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ).matches

            /* ========================================================
               HERO
            ======================================================== */

            const hero = root.querySelector('.solar-hero')

            if (hero && !reducedMotion) {
                const curtains =
                    hero.querySelectorAll('.hero-curtain')

                const words =
                    hero.querySelectorAll('.hero-title-word')

                const image =
                    hero.querySelector('.hero-main-image')

                const information =
                    hero.querySelector('.hero-information')

                gsap.set(curtains, {
                    scaleY: 1,
                    transformOrigin: 'bottom',
                })

                gsap.set(words, {
                    yPercent: 115,
                    skewY: 6,
                })

                gsap.set(information, {
                    y: 30,
                })

                gsap.set(image, {
                    scale: 1.12,
                })

                const heroTimeline = gsap.timeline()

                heroTimeline
                    .to(curtains, {
                        scaleY: 0,
                        duration: 0.9,
                        stagger: 0.06,
                        ease: 'power4.inOut',
                    })
                    .to(
                        image,
                        {
                            scale: 1,
                            duration: 1.25,
                            ease: 'power3.out',
                        },
                        '-=0.7'
                    )
                    .to(
                        words,
                        {
                            yPercent: 0,
                            skewY: 0,
                            duration: 0.8,
                            stagger: 0.08,
                            ease: 'power4.out',
                        },
                        '-=0.8'
                    )
                    .to(
                        information,
                        {
                            y: 0,
                            duration: 0.55,
                            ease: 'power3.out',
                        },
                        '-=0.35'
                    )

                gsap.to(image, {
                    yPercent: 10,
                    scale: 1.12,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: hero,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1.2,
                    },
                })

                gsap.to(words, {
                    yPercent: -12,
                    stagger: 0.04,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: hero,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1,
                    },
                })
            }

            /* ========================================================
               INTRO
            ======================================================== */

            const intro = root.querySelector('.solar-intro')

            if (intro && !reducedMotion) {
                const introWords =
                    intro.querySelectorAll('.intro-word')

                const description =
                    intro.querySelector('.intro-description')

                gsap.fromTo(
                    introWords,
                    {
                        yPercent: 110,
                        rotate: -2,
                    },
                    {
                        yPercent: 0,
                        rotate: 0,
                        duration: 0.75,
                        stagger: 0.12,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: intro,
                            start: 'top 90%',
                            end: 'top 55%',
                            toggleActions:
                                'play none none reverse',
                            invalidateOnRefresh: true,
                        },
                    }
                )

                gsap.fromTo(
                    description,
                    {
                        y: 30,
                    },
                    {
                        y: 0,
                        duration: 0.65,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: intro,
                            start: 'top 86%',
                            toggleActions:
                                'play none none reverse',
                            invalidateOnRefresh: true,
                        },
                    }
                )
            }

            /* ========================================================
               REVIEWS
            ======================================================== */

            if (!reducedMotion) {
                root.querySelectorAll('.review-item').forEach(
                    (item, index) => {
                        const frame =
                            item.querySelector(
                                '.review-photo-wrap'
                            )

                        const image =
                            item.querySelector(
                                '.review-photo'
                            )

                        const quote =
                            item.querySelector(
                                '.review-quote'
                            )

                        const meta =
                            item.querySelector(
                                '.review-meta'
                            )

                        const direction =
                            index % 2 === 0 ? -1 : 1

                        gsap.fromTo(
                            frame,
                            {
                                clipPath:
                                    index % 2 === 0
                                        ? 'inset(0 100% 0 0)'
                                        : 'inset(0 0 0 100%)',
                                x: direction * 70,
                            },
                            {
                                clipPath:
                                    'inset(0 0% 0 0%)',
                                x: 0,
                                duration: 0.85,
                                ease: 'power4.out',
                                scrollTrigger: {
                                    trigger: item,
                                    start: 'top 92%',
                                    toggleActions:
                                        'play none none reverse',
                                    invalidateOnRefresh: true,
                                },
                            }
                        )

                        gsap.fromTo(
                            image,
                            {
                                scale: 1.2,
                            },
                            {
                                scale: 1,
                                ease: 'none',
                                scrollTrigger: {
                                    trigger: item,
                                    start: 'top bottom',
                                    end: 'bottom top',
                                    scrub: 1.2,
                                },
                            }
                        )

                        gsap.fromTo(
                            quote,
                            {
                                x: direction * 60,
                            },
                            {
                                x: 0,
                                duration: 0.7,
                                ease: 'power4.out',
                                scrollTrigger: {
                                    trigger: item,
                                    start: 'top 88%',
                                    toggleActions:
                                        'play none none reverse',
                                    invalidateOnRefresh: true,
                                },
                            }
                        )

                        gsap.fromTo(
                            meta,
                            {
                                y: 25,
                            },
                            {
                                y: 0,
                                duration: 0.55,
                                ease: 'power3.out',
                                scrollTrigger: {
                                    trigger: item,
                                    start: 'top 84%',
                                    toggleActions:
                                        'play none none reverse',
                                    invalidateOnRefresh: true,
                                },
                            }
                        )
                    }
                )
            }

            /* ========================================================
               CORE
            ======================================================== */

            const coreSection =
                root.querySelector('.core-section')

            if (coreSection && !reducedMotion) {
                const title =
                    coreSection.querySelector(
                        '.core-main-title'
                    )

                const description =
                    coreSection.querySelector(
                        '.core-description'
                    )

                const system =
                    coreSection.querySelector(
                        '.core-system'
                    )

                const brands =
                    coreSection.querySelectorAll(
                        '.core-brand'
                    )

                const rings =
                    coreSection.querySelectorAll(
                        '.core-ring'
                    )

                const sun =
                    coreSection.querySelector(
                        '.core-sun'
                    )

                const coreTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: coreSection,
                        start: 'top 92%',
                        toggleActions:
                            'play none none reverse',
                        invalidateOnRefresh: true,
                    },
                })

                coreTimeline
                    .fromTo(
                        title,
                        {
                            y: 80,
                        },
                        {
                            y: 0,
                            duration: 0.7,
                            ease: 'power4.out',
                        }
                    )
                    .fromTo(
                        description,
                        {
                            y: 35,
                        },
                        {
                            y: 0,
                            duration: 0.55,
                            ease: 'power3.out',
                        },
                        '-=0.35'
                    )
                    .fromTo(
                        system,
                        {
                            scale: 0.78,
                            rotate: -6,
                        },
                        {
                            scale: 1,
                            rotate: 0,
                            duration: 1,
                            ease: 'power4.out',
                        },
                        '-=0.45'
                    )
                    .fromTo(
                        brands,
                        {
                            scale: 0.7,
                            y: 30,
                        },
                        {
                            scale: 1,
                            y: 0,
                            duration: 0.55,
                            stagger: 0.07,
                            ease: 'back.out(1.5)',
                        },
                        '-=0.55'
                    )

                rings.forEach((ring, index) => {
                    gsap.to(ring, {
                        rotate:
                            index % 2 === 0
                                ? 180
                                : -180,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: coreSection,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub:
                                1.2 +
                                index * 0.2,
                        },
                    })
                })

                gsap.to(sun, {
                    scale: 1.08,
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                })
            }

            /* ========================================================
               PANELS
            ======================================================== */

            const panelsSection =
                root.querySelector('.panels-section')

            if (panelsSection && !reducedMotion) {
                const heading =
                    panelsSection.querySelector(
                        '.panels-heading'
                    )

                gsap.fromTo(
                    heading,
                    {
                        y: 70,
                    },
                    {
                        y: 0,
                        duration: 0.75,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: panelsSection,
                            start: 'top 92%',
                            toggleActions:
                                'play none none reverse',
                            invalidateOnRefresh: true,
                        },
                    }
                )

                panelsSection
                    .querySelectorAll('.panel-scene')
                    .forEach((scene) => {
                        const image =
                            scene.querySelector(
                                '.panel-scene-image'
                            )

                        const text =
                            scene.querySelector(
                                '.panel-scene-text'
                            )

                        gsap.fromTo(
                            image,
                            {
                                scale: 1.16,
                            },
                            {
                                scale: 1,
                                ease: 'none',
                                scrollTrigger: {
                                    trigger: scene,
                                    start: 'top bottom',
                                    end: 'bottom top',
                                    scrub: 1.2,
                                },
                            }
                        )

                        gsap.fromTo(
                            text,
                            {
                                y: 65,
                                skewY: 3,
                            },
                            {
                                y: 0,
                                skewY: 0,
                                duration: 0.7,
                                ease: 'power4.out',
                                scrollTrigger: {
                                    trigger: scene,
                                    start: 'top 92%',
                                    toggleActions:
                                        'play none none reverse',
                                    invalidateOnRefresh: true,
                                },
                            }
                        )
                    })
            }

            /* ========================================================
               PROJECTS
            ======================================================== */

            const projectsSection =
                root.querySelector('.projects-section')

            if (projectsSection && !reducedMotion) {
                const heading =
                    projectsSection.querySelector(
                        '.projects-heading'
                    )

                gsap.fromTo(
                    heading,
                    {
                        y: 70,
                    },
                    {
                        y: 0,
                        duration: 0.75,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: projectsSection,
                            start: 'top 92%',
                            toggleActions:
                                'play none none reverse',
                            invalidateOnRefresh: true,
                        },
                    }
                )

                projectsSection
                    .querySelectorAll('.project-card')
                    .forEach((project, index) => {
                        const image =
                            project.querySelector(
                                '.project-card-image'
                            )

                        const number =
                            project.querySelector(
                                '.project-number'
                            )

                        const title =
                            project.querySelector(
                                '.project-title'
                            )

                        gsap.fromTo(
                            project,
                            {
                                y: 80,
                                scale: 0.97,
                            },
                            {
                                y: 0,
                                scale: 1,
                                duration: 0.8,
                                ease: 'power4.out',
                                scrollTrigger: {
                                    trigger: project,
                                    start: 'top 94%',
                                    toggleActions:
                                        'play none none reverse',
                                    invalidateOnRefresh: true,
                                },
                            }
                        )

                        gsap.fromTo(
                            image,
                            {
                                scale: 1.18,
                            },
                            {
                                scale: 1,
                                ease: 'none',
                                scrollTrigger: {
                                    trigger: project,
                                    start: 'top bottom',
                                    end: 'bottom top',
                                    scrub: 1.2,
                                },
                            }
                        )

                        gsap.fromTo(
                            number,
                            {
                                x:
                                    index % 2 === 0
                                        ? -60
                                        : 60,
                            },
                            {
                                x: 0,
                                duration: 0.65,
                                ease: 'power4.out',
                                scrollTrigger: {
                                    trigger: project,
                                    start: 'top 90%',
                                    toggleActions:
                                        'play none none reverse',
                                    invalidateOnRefresh: true,
                                },
                            }
                        )

                        gsap.fromTo(
                            title,
                            {
                                y: 55,
                            },
                            {
                                y: 0,
                                duration: 0.65,
                                ease: 'power4.out',
                                scrollTrigger: {
                                    trigger: project,
                                    start: 'top 88%',
                                    toggleActions:
                                        'play none none reverse',
                                    invalidateOnRefresh: true,
                                },
                            }
                        )
                    })
            }

            /* ========================================================
               BRANCHES
            ======================================================== */

            const branchesSection =
                root.querySelector('.branches-section')

            if (branchesSection && !reducedMotion) {
                const heading =
                    branchesSection.querySelector(
                        '.branches-heading'
                    )

                const rows =
                    branchesSection.querySelectorAll(
                        '.branch-row'
                    )

                const branchTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: branchesSection,
                        start: 'top 92%',
                        toggleActions:
                            'play none none reverse',
                        invalidateOnRefresh: true,
                    },
                })

                branchTimeline.fromTo(
                    heading,
                    {
                        y: 65,
                    },
                    {
                        y: 0,
                        duration: 0.65,
                        ease: 'power4.out',
                    }
                )

                rows.forEach((row, index) => {
                    const line =
                        row.querySelector(
                            '.branch-line'
                        )

                    const marker =
                        row.querySelector(
                            '.branch-marker'
                        )

                    const city =
                        row.querySelector(
                            '.branch-city'
                        )

                    const direction =
                        index % 2 === 0 ? -1 : 1

                    branchTimeline
                        .fromTo(
                            line,
                            {
                                scaleX: 0,
                            },
                            {
                                scaleX: 1,
                                duration: 0.35,
                                ease: 'power3.out',
                            },
                            index === 0
                                ? '-=0.15'
                                : '-=0.18'
                        )
                        .fromTo(
                            marker,
                            {
                                scale: 0,
                            },
                            {
                                scale: 1,
                                duration: 0.35,
                                ease: 'back.out(2)',
                            },
                            '-=0.22'
                        )
                        .fromTo(
                            city,
                            {
                                x: direction * 70,
                            },
                            {
                                x: 0,
                                duration: 0.5,
                                ease: 'power4.out',
                            },
                            '-=0.25'
                        )
                })
            }

            /* ========================================================
               OFFERS
            ======================================================== */

            const offerSection =
                root.querySelector('.offers-section')

            if (offerSection && !reducedMotion) {
                const label =
                    offerSection.querySelector(
                        '.offers-label'
                    )

                const words =
                    offerSection.querySelectorAll(
                        '.offer-word'
                    )

                const cards =
                    offerSection.querySelectorAll(
                        '.offer-card'
                    )

                const circle =
                    offerSection.querySelector(
                        '.offer-circle'
                    )

                const offerTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: offerSection,
                        start: 'top 92%',
                        toggleActions:
                            'play none none reverse',
                        invalidateOnRefresh: true,
                    },
                })

                offerTimeline
                    .fromTo(
                        label,
                        {
                            y: 30,
                        },
                        {
                            y: 0,
                            duration: 0.4,
                            ease: 'power3.out',
                        }
                    )
                    .fromTo(
                        words,
                        {
                            yPercent: 110,
                            rotate: 3,
                        },
                        {
                            yPercent: 0,
                            rotate: 0,
                            duration: 0.65,
                            stagger: 0.08,
                            ease: 'power4.out',
                        },
                        '-=0.1'
                    )
                    .fromTo(
                        cards,
                        {
                            y: 50,
                            scale: 0.94,
                        },
                        {
                            y: 0,
                            scale: 1,
                            duration: 0.5,
                            stagger: 0.08,
                            ease: 'power3.out',
                        },
                        '-=0.15'
                    )

                gsap.to(circle, {
                    rotate: 360,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: offerSection,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.5,
                    },
                })
            }

            /* ========================================================
               CERTIFICATIONS
            ======================================================== */

            const certificationSection =
                root.querySelector(
                    '.certification-section'
                )

            if (
                certificationSection &&
                !reducedMotion
            ) {
                const heading =
                    certificationSection.querySelector(
                        '.certification-heading'
                    )

                const certificates =
                    certificationSection.querySelectorAll(
                        '.certificate'
                    )

                const seals =
                    certificationSection.querySelectorAll(
                        '.certificate-seal'
                    )

                const certificateTimeline =
                    gsap.timeline({
                        scrollTrigger: {
                            trigger:
                                certificationSection,
                            start: 'top 92%',
                            toggleActions:
                                'play none none reverse',
                            invalidateOnRefresh: true,
                        },
                    })

                certificateTimeline
                    .fromTo(
                        heading,
                        {
                            y: 70,
                        },
                        {
                            y: 0,
                            duration: 0.6,
                            ease: 'power4.out',
                        }
                    )
                    .fromTo(
                        certificates,
                        {
                            y: 60,
                            scale: 0.94,
                            rotate: -2,
                        },
                        {
                            y: 0,
                            scale: 1,
                            rotate: 0,
                            duration: 0.6,
                            stagger: 0.08,
                            ease: 'power4.out',
                        },
                        '-=0.15'
                    )
                    .fromTo(
                        seals,
                        {
                            scale: 0,
                            rotation: -60,
                        },
                        {
                            scale: 1,
                            rotation: 0,
                            duration: 0.5,
                            stagger: 0.06,
                            ease: 'back.out(1.7)',
                        },
                        '-=0.35'
                    )
            }

            /* ========================================================
               FINAL CTA
            ======================================================== */

            const ctaSection =
                root.querySelector('.solar-cta')

            if (ctaSection && !reducedMotion) {
                const top =
                    ctaSection.querySelector('.cta-top')

                const heading =
                    ctaSection.querySelector(
                        '.cta-heading'
                    )

                const words =
                    ctaSection.querySelectorAll(
                        '.cta-word'
                    )

                const bottom =
                    ctaSection.querySelector(
                        '.cta-bottom'
                    )

                /*
                   Reduced from 55px.

                   The words now start closer to their
                   final position, so the animation does
                   not visually push the heading toward
                   the consultation area.
                */
                gsap.set(words, {
                    y: 35,
                    rotate: 2,
                    opacity: 1,
                })

                gsap.set(top, {
                    opacity: 1,
                })

                gsap.set(bottom, {
                    opacity: 1,
                })

                const ctaTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: ctaSection,
                        start: 'top 88%',
                        toggleActions:
                            'play none none reverse',
                        invalidateOnRefresh: true,
                    },
                })

                ctaTimeline
                    .fromTo(
                        top,
                        {
                            y: 16,
                        },
                        {
                            y: 0,
                            duration: 0.4,
                            ease: 'power3.out',
                        }
                    )
                    .fromTo(
                        heading,
                        {
                            y: 12,
                        },
                        {
                            y: 0,
                            duration: 0.5,
                            ease: 'power4.out',
                        },
                        '-=.2'
                    )
                    .to(
                        words,
                        {
                            y: 0,
                            rotate: 0,
                            duration: 0.65,
                            stagger: 0.07,
                            ease: 'power4.out',
                        },
                        '-=.3'
                    )
                    .fromTo(
                        bottom,
                        {
                            y: 14,
                        },
                        {
                            y: 0,
                            duration: 0.5,
                            ease: 'power3.out',
                        },
                        '-=.25'
                    )
            }

            /* ========================================================
               REFRESH AFTER IMAGES / LAYOUT
            ======================================================== */

            const refresh = () => {
                requestAnimationFrame(() => {
                    ScrollTrigger.refresh()
                    ScrollTrigger.update()
                })
            }

            requestAnimationFrame(refresh)

            const refreshTimer = window.setTimeout(
                refresh,
                700
            )

            window.addEventListener(
                'load',
                refresh
            )

            return () => {
                window.clearTimeout(refreshTimer)

                window.removeEventListener(
                    'load',
                    refresh
                )
            }
        },
        {
            scope: pageRef,
        }
    )

    return (
        <main
            ref={pageRef}
            className="solar-page overflow-x-clip bg-[#f3f2ed] text-black"
        >
            <style>{`

/* ============================================================
   GLOBAL
============================================================ */

.solar-page {
    --blue: #7dd3fc;
    --dark: #080909;
    --cream: #f3f2ed;

    width: 100%;
    overflow-x: clip;
}

.solar-page *,
.solar-page *::before,
.solar-page *::after {
    box-sizing: border-box;
}

.solar-page img {
    display: block;
    max-width: 100%;
}

.solar-page h1,
.solar-page h2,
.solar-page h3,
.solar-page p {
    margin-block-start: 0;
}


/* ============================================================
   HERO
============================================================ */

.solar-hero {
    position: relative;
    min-height: 100svh;
    overflow: hidden;
    background: #080909;
    color: white;
}

.hero-main-image {
    position: absolute;
    inset: -5%;

    width: 110%;
    height: 110%;

    object-fit: cover;

    opacity: .66;

    will-change: transform;
}

.hero-overlay {
    position: absolute;
    inset: 0;

    background:
        radial-gradient(
            circle at 70% 35%,
            rgba(125,211,252,.18),
            transparent 30%
        ),
        linear-gradient(
            180deg,
            rgba(0,0,0,.08),
            rgba(0,0,0,.82)
        );
}

.hero-curtains {
    position: absolute;
    inset: 0;

    z-index: 20;

    display: flex;

    pointer-events: none;
}

.hero-curtain {
    width: 20%;
    height: 100%;

    background: #080909;

    transform-origin: bottom;

    transform: scaleY(0);
}

.hero-content {
    position: relative;

    z-index: 30;

    min-height: 100svh;

    padding:
        24px
        5vw
        30px;

    display: flex;

    flex-direction: column;

    justify-content: space-between;
}

.hero-topline {
    width: 100%;

    display: flex;

    justify-content: flex-end;

    font-size: 10px;

    text-transform: uppercase;

    letter-spacing: .25em;
}

.hero-title {
    width: min(100%, 1000px);

    margin:
        auto
        0
        auto
        clamp(35px, 7vw, 110px);

    font-family: font2, sans-serif;

    font-size:
        clamp(
            58px,
            7.2vw,
            120px
        );

    line-height: .76;

    letter-spacing: -.055em;

    text-transform: uppercase;

    overflow: visible;
}

.hero-title-word {
    display: block;

    width: max-content;

    max-width: 100%;

    overflow: hidden;

    will-change: transform;
}

.hero-information {
    flex-shrink: 0;
}


/* ============================================================
   MARQUEE
============================================================ */

.solar-marquee {
    width: 100%;

    overflow: hidden;

    background: var(--blue);

    border-top:
        1px solid
        rgba(0,0,0,.15);

    border-bottom:
        1px solid
        rgba(0,0,0,.15);
}

.solar-marquee-track {
    width: max-content;

    display: flex;

    align-items: center;

    gap: 30px;

    padding: 18px 0;

    white-space: nowrap;

    animation:
        solarMove
        18s
        linear
        infinite;

    will-change: transform;
}

.solar-marquee-track span {
    font-family: font2, sans-serif;

    font-size:
        clamp(
            38px,
            5vw,
            78px
        );

    line-height: .8;

    text-transform: uppercase;
}

.solar-marquee-track i {
    font-style: normal;

    font-size: 22px;
}

.solar-marquee-reverse .solar-marquee-track {
    animation-direction: reverse;
}

@keyframes solarMove {
    from {
        transform:
            translate3d(0,0,0);
    }

    to {
        transform:
            translate3d(-50%,0,0);
    }
}


/* ============================================================
   INTRO
============================================================ */

.solar-intro {
    position: relative;
}

.intro-title {
    margin: 0 !important;
    padding: 0;

    font-family: font2, sans-serif;

    font-size:
        clamp(
            58px,
            7.2vw,
            120px
        ) !important;

    line-height: .78 !important;

    letter-spacing: -.06em;

    text-transform: uppercase;
}

.intro-line {
    display: block;

    height: 1em;

    overflow: hidden;

    line-height: .78;
}

.intro-word {
    display: inline-block;

    position: relative;

    opacity: 1;

    transform:
        translate3d(0,0,0);

    transform-origin:
        bottom left;

    will-change: transform;
}

.intro-description {
    max-width: 620px;
}


/* ============================================================
   REVIEWS
============================================================ */

.review-item {
    position: relative;

    min-height: 88svh;

    padding:
        90px
        5vw;

    display: grid;

    grid-template-columns:
        minmax(0,1.05fr)
        minmax(300px,.95fr);

    align-items: center;

    gap: 5vw;

    overflow: hidden;

    background: #111415;

    color: white;
}

.review-photo-wrap {
    height:
        min(
            62vh,
            680px
        );

    min-height: 390px;

    overflow: hidden;

    will-change:
        transform,
        clip-path;
}

.review-photo {
    width: 100%;
    height: 100%;

    object-fit: cover;

    will-change: transform;
}

.review-quote {
    max-width: 760px;

    font-family: font2, sans-serif;

    font-size:
        clamp(
            40px,
            4.5vw,
            70px
        );

    line-height: .86;

    letter-spacing: -.035em;

    text-transform: uppercase;
}

.review-meta {
    margin-top: 38px;

    display: flex;

    justify-content: space-between;

    gap: 15px;

    border-top:
        1px solid
        rgba(255,255,255,.2);

    padding-top: 16px;

    font-size: 10px;

    letter-spacing: .18em;

    text-transform: uppercase;
}


/* ============================================================
   CORE
============================================================ */

.core-section {
    position: relative;

    min-height: 100svh;

    overflow: hidden;

    background: #deddd6;

    padding:
        100px
        5vw;

    perspective: 1200px;
}

.core-grid {
    min-height:
        calc(
            100svh - 200px
        );

    display: grid;

    grid-template-columns:
        minmax(280px,.72fr)
        minmax(0,1.28fr);

    gap: 4vw;

    align-items: center;
}

.core-main-title {
    margin: 0;

    font-family: font2, sans-serif;

    font-size:
        clamp(
            62px,
            7.2vw,
            120px
        );

    line-height: .72;

    letter-spacing: -.055em;

    text-transform: uppercase;
}

.core-description {
    max-width: 360px;

    margin-top: 35px;

    font-size: 11px;

    line-height: 1.7;

    text-transform: uppercase;

    letter-spacing: .12em;

    color: rgba(0,0,0,.5);
}

.core-system {
    position: relative;

    width:
        min(
            42vw,
            610px
        );

    aspect-ratio: 1;

    margin: auto;

    transform-style: preserve-3d;

    opacity: 1;

    will-change: transform;
}

.core-ring {
    position: absolute;

    inset: 8%;

    border:
        1px solid
        rgba(0,0,0,.18);

    border-radius: 50%;

    transform-style: preserve-3d;

    will-change: transform;
}

.core-ring:nth-child(2) {
    inset: 17%;

    transform:
        rotateX(65deg)
        rotateY(20deg);
}

.core-ring:nth-child(3) {
    inset: 28%;

    transform:
        rotateY(65deg)
        rotateX(20deg);
}

.core-ring:nth-child(4) {
    inset: 38%;

    border-style: dashed;
}

.core-sun {
    position: absolute;

    left: 50%;
    top: 50%;

    width: 25%;

    aspect-ratio: 1;

    transform:
        translate(-50%,-50%);

    border-radius: 50%;

    background:
        radial-gradient(
            circle at 35% 30%,
            white,
            var(--blue) 35%,
            #38bdf8 70%,
            #0284c7
        );

    box-shadow:
        0 0 60px
        rgba(125,211,252,.3);

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    z-index: 5;
}

.core-sun span {
    font-family: font2, sans-serif;

    font-size:
        clamp(
            22px,
            2.7vw,
            42px
        );

    line-height: .75;

    text-transform: uppercase;

    color: #000;
}


/* ============================================================
   CORE BRANDS
============================================================ */

.core-brand-slot {
    position: absolute;

    width:
        clamp(
            125px,
            13vw,
            180px
        );

    z-index: 20;
}

.core-brand {
    position: relative;

    width: 100%;

    padding: 14px;

    background:
        rgba(255,255,255,.68);

    border:
        1px solid
        rgba(0,0,0,.15);

    backdrop-filter: blur(12px);

    transform-style: preserve-3d;

    cursor: pointer;

    opacity: 1;

    will-change: transform;

    transition:
        background .3s ease;
}

.core-brand:hover {
    background: white;
}

.core-brand-slot-1 {
    top: 1%;
    left: 50%;

    transform:
        translateX(-50%);
}

.core-brand-slot-2 {
    top: 19%;
    right: 0;
}

.core-brand-slot-3 {
    bottom: 11%;
    right: 3%;
}

.core-brand-slot-4 {
    bottom: 0;
    left: 50%;

    transform:
        translateX(-50%);
}

.core-brand-slot-5 {
    bottom: 11%;
    left: 3%;
}

.core-brand-slot-6 {
    top: 19%;
    left: 0;
}

.core-brand-number {
    display: block;

    font-size: 9px;

    color: rgba(0,0,0,.4);
}

.core-brand-name {
    display: block;

    margin-top: 15px;

    font-family: font2, sans-serif;

    font-size:
        clamp(
            16px,
            1.8vw,
            27px
        );

    line-height: .8;

    text-transform: uppercase;
}

.core-brand-status {
    display: block;

    margin-top: 17px;

    font-size: 7px;

    letter-spacing: .2em;

    color: rgba(0,0,0,.4);
}


/* ============================================================
   PANELS
============================================================ */

.panels-section {
    background: #101213;

    color: white;

    padding:
        110px
        3vw
        120px;
}

.panels-heading {
    font-family: font2, sans-serif;

    font-size:
        clamp(
            62px,
            7.5vw,
            120px
        ) !important;

    line-height: .75 !important;

    letter-spacing: -.055em;
}

.panel-scene {
    position: relative;

    min-height: 76svh;

    margin: 20px;

    overflow: hidden;

    border-radius: 24px;

    background: #111;

    color: white;
}

.panel-scene-image {
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;

    will-change: transform;
}

.panel-scene-overlay {
    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            180deg,
            transparent 35%,
            rgba(0,0,0,.82)
        );
}

.panel-scene-text {
    position: absolute;

    left: 5%;
    right: 5%;
    bottom: 7%;

    z-index: 5;
}

.panel-scene-title {
    max-width: 100%;

    margin: 0;

    font-family: font2, sans-serif;

    font-size:
        clamp(
            60px,
            7.5vw,
            120px
        );

    line-height: .7;

    letter-spacing: -.04em;

    text-transform: uppercase;
}


/* ============================================================
   PROJECTS
============================================================ */

.projects-section {
    background: #f3f2ed;

    padding:
        110px
        3vw
        130px;
}

.projects-heading {
    font-family: font2, sans-serif;

    font-size:
        clamp(
            62px,
            7.5vw,
            120px
        ) !important;

    line-height: .75 !important;

    letter-spacing: -.055em;
}

.projects-wrapper {
    perspective: 1000px;
}

.project-card {
    position: relative;

    min-height: 72svh;

    margin-bottom: 20px;

    overflow: hidden;

    border-radius: 20px;

    background: #111;

    color: white;

    transform-style: preserve-3d;

    will-change: transform;
}

.project-card-image {
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;

    will-change: transform;
}

.project-card-overlay {
    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            180deg,
            rgba(0,0,0,.04),
            rgba(0,0,0,.82)
        );
}

.project-number {
    position: absolute;

    top: 24px;
    left: 30px;

    z-index: 3;

    font-family: font2, sans-serif;

    font-size:
        clamp(
            80px,
            10vw,
            165px
        );

    line-height: .7;

    color:
        rgba(255,255,255,.2);
}

.project-info {
    position: absolute;

    left: 30px;
    right: 30px;
    bottom: 32px;

    z-index: 5;
}

.project-title {
    margin: 0;

    font-family: font2, sans-serif;

    font-size:
        clamp(
            58px,
            7vw,
            115px
        ) !important;

    line-height: .72 !important;

    letter-spacing: -.045em;

    text-transform: uppercase;
}


/* ============================================================
   BRANCHES
============================================================ */

.branches-section {
    position: relative;
}

.branches-heading {
    font-family: font2, sans-serif;

    font-size:
        clamp(
            60px,
            7vw,
            115px
        ) !important;

    line-height: .75 !important;

    letter-spacing: -.055em;
}

.branch-row {
    position: relative;

    padding: 32px 0;

    border-top:
        1px solid
        rgba(0,0,0,.18);

    overflow: hidden;
}

.branch-line {
    display: block;

    width: 100%;

    height: 1px;

    margin: 18px 0;

    background:
        rgba(0,0,0,.2);

    transform-origin: left;
}

.branch-marker {
    flex-shrink: 0;

    width: 9px;
    height: 9px;

    margin-bottom: 7px;

    border-radius: 50%;

    background: var(--blue);

    box-shadow:
        0 0 0 5px
        rgba(125,211,252,.2);
}

.branch-city {
    margin: 0;

    font-family: font2, sans-serif;

    font-size:
        clamp(
            58px,
            7vw,
            115px
        );

    line-height: .7;

    text-transform: uppercase;

    letter-spacing: -.045em;
}


/* ============================================================
   OFFERS
============================================================ */

.offers-section {
    position: relative;

    min-height: 100svh;

    overflow: hidden;

    background: var(--blue);

    padding:
        100px
        5vw
        90px;
}

.offer-circle {
    position: absolute;

    right: -14%;
    top: -18%;

    width: 58vw;

    max-width: 780px;

    aspect-ratio: 1;

    border:
        1px solid
        rgba(0,0,0,.22);

    border-radius: 50%;

    pointer-events: none;

    will-change: transform;
}

.offer-circle::before,
.offer-circle::after {
    content: '';

    position: absolute;

    inset: 15%;

    border:
        1px dashed
        rgba(0,0,0,.18);

    border-radius: 50%;
}

.offer-circle::after {
    inset: 32%;
}

.offers-heading {
    font-family: font2, sans-serif;

    font-size:
        clamp(
            62px,
            8vw,
            130px
        ) !important;

    line-height: .75 !important;

    letter-spacing: -.06em;
}

.offer-word {
    display: inline-block;

    font-family: font2, sans-serif;

    font-size:
        clamp(
            64px,
            8.2vw,
            130px
        );

    line-height: .68;

    letter-spacing: -.055em;

    text-transform: uppercase;

    opacity: 1;

    will-change: transform;
}

.offer-card {
    min-height: 125px;

    opacity: 1;

    will-change: transform;
}


/* ============================================================
   CERTIFICATIONS
============================================================ */

.certification-section {
    position: relative;

    overflow: hidden;

    background: #101213;

    color: white;

    padding:
        105px
        5vw
        120px;
}

.certification-heading h2 {
    margin: 0;

    font-family: font2, sans-serif;

    font-size:
        clamp(
            58px,
            7.2vw,
            115px
        ) !important;

    line-height: .75 !important;

    letter-spacing: -.055em;
}

.certificate {
    min-height: 370px;

    padding: 28px;

    background: #f4f3ed;

    color: #000;

    border-radius: 20px;

    border:
        1px solid
        rgba(0,0,0,.15);

    opacity: 1;

    will-change: transform;
}

.certificate-seal {
    width: 105px;
    height: 105px;

    border:
        1px solid
        rgba(0,0,0,.35);

    border-radius: 50%;

    display: flex;

    align-items: center;
    justify-content: center;

    text-align: center;

    font-size: 8px;

    line-height: 1.5;

    letter-spacing: .18em;

    transform: rotate(-8deg);

    opacity: 1;

    will-change: transform;
}

.certificate-title {
    margin: 0;

    font-family: font2, sans-serif;

    font-size:
        clamp(
            44px,
            5vw,
            78px
        );

    line-height: .72;

    letter-spacing: -.035em;

    text-transform: uppercase;
}


/* ============================================================
   CTA
============================================================ */

.solar-cta {
    position: relative;

    min-height: 100svh;
    height: 100svh;

    padding:
        35px
        5vw;

    display: grid;

    grid-template-rows:
        auto
        minmax(0, 1fr)
        auto;

    overflow: hidden;

    background: #080909;

    color: white;
}


/* ============================================================
   CTA TOP
============================================================ */

.cta-top {
    position: relative;

    z-index: 10;

    width: 100%;

    min-height: 20px;
}


/* ============================================================
   CTA HEADING AREA
============================================================ */

.cta-heading-wrap {
    position: relative;

    z-index: 10;

    width: 100%;

    min-height: 0;

    display: flex;

    align-items: center;

    justify-content: flex-start;

    /*
       More controlled vertical space.

       The heading is deliberately moved upward
       so it has a clear visual gap from the
       consultation content.
    */
    padding:
        clamp(18px, 4vh, 55px)
        0;

    overflow: visible;

    transform:
        translateY(-3vh);
}

.cta-heading {
    display: flex;

    flex-direction: column;

    align-items: flex-start;

    gap: 0;

    width: 100%;

    margin: 0;

    padding: 0;

    font-family: font2, sans-serif;

    font-size:
        clamp(
            58px,
            8vw,
            130px
        ) !important;

    line-height: .78 !important;

    letter-spacing: -.06em;

    text-transform: uppercase;

    white-space: normal;

    overflow: visible;

    /*
       Small additional lift.
    */
    transform:
        translateY(-1vh);
}

.cta-word {
    display: block;

    width: max-content;

    max-width: 100%;

    margin: 0;

    padding: 0;

    opacity: 1;

    transform-origin:
        left bottom;

    will-change:
        transform;

    white-space: nowrap;
}


/* ============================================================
   CTA BOTTOM
============================================================ */

.cta-bottom {
    position: relative;

    z-index: 10;

    width: 100%;

    display: flex;

    justify-content: space-between;

    align-items: flex-end;

    gap: 40px;

    flex-shrink: 0;

    /*
       Horizontal line removed.
    */

    padding-top: 28px;

    padding-bottom: 2px;
}

.cta-bottom > div:first-child {
    min-width: 0;
}

.cta-bottom p:last-child {
    margin-bottom: 0;
}


/* ============================================================
   CTA BUTTON
============================================================ */

.cta-button {
    display: inline-flex;

    align-items: center;

    justify-content: space-between;

    gap: 25px;

    flex-shrink: 0;

    border:
        1px solid
        rgba(255,255,255,.35);

    padding:
        15px
        22px;

    background: transparent;

    color: white;

    font-size: 10px;

    text-transform: uppercase;

    letter-spacing: .18em;

    cursor: pointer;

    transition:
        background .3s ease,
        color .3s ease,
        transform .3s ease;
}

.cta-button:hover {
    background: white;

    color: black;

    transform:
        translateX(7px);
}

.cta-button span:last-child {
    font-size: 20px;
}


/* ============================================================
   TABLET
============================================================ */

@media (min-width: 768px) and (max-width: 1100px) {

    .hero-title {
        margin-left: 5vw;

        font-size: 9vw;
    }

    .core-grid {
        grid-template-columns:
            .75fr
            1.25fr;
    }

    .core-system {
        width: 48vw;
    }

    .core-brand-slot {
        width: 120px;
    }

    .project-title {
        font-size: 9vw !important;
    }

    .offer-word {
        font-size: 10vw;
    }

    .cta-heading {
        font-size: 10vw !important;

        transform:
            translateY(-1vh);
    }

    .cta-heading-wrap {
        padding:
            3vh
            0;

        transform:
            translateY(-2vh);
    }

    .cta-bottom {
        padding-top: 22px;
    }
}


/* ============================================================
   MOBILE
============================================================ */

@media (max-width: 767px) {

    .hero-content {
        padding:
            18px
            18px
            24px;
    }

    .hero-topline {
        font-size: 8px;
    }

    .hero-title {
        margin:
            auto
            0;

        width: 100%;

        font-size: 18vw;

        line-height: .74;
    }

    .hero-title-word {
        width: 100%;
    }


    /* INTRO */

    .solar-intro {
        padding-top: 85px;
        padding-bottom: 95px;
    }

    .intro-title {
        font-size: 16vw !important;

        line-height: .8 !important;
    }

    .intro-line {
        height: 1em;

        line-height: .8;
    }


    /* REVIEWS */

    .review-item {
        min-height: auto;

        padding:
            80px
            18px
            65px;

        display: flex;

        flex-direction: column-reverse;

        gap: 40px;
    }

    .review-photo-wrap {
        width: 100%;

        height: 43svh;

        min-height: 270px;
    }

    .review-quote {
        font-size: 11.5vw;

        line-height: .82;
    }

    .review-meta {
        flex-wrap: wrap;

        margin-top: 28px;
    }


    /* CORE */

    .core-section {
        min-height: auto;

        padding:
            85px
            18px
            100px;
    }

    .core-grid {
        min-height: auto;

        display: block;
    }

    .core-main-title {
        font-size: 19vw;
    }

    .core-system {
        width: 100%;

        margin-top: 80px;
    }

    .core-brand-slot {
        width: 100px;
    }

    .core-brand {
        padding: 9px;
    }

    .core-brand-name {
        font-size: 14px;

        margin-top: 10px;
    }

    .core-brand-status {
        margin-top: 9px;

        font-size: 5px;
    }

    .core-brand-slot-1 {
        top: 0;
    }

    .core-brand-slot-2 {
        top: 20%;

        right: -2%;
    }

    .core-brand-slot-3 {
        bottom: 12%;

        right: 0;
    }

    .core-brand-slot-4 {
        bottom: 0;
    }

    .core-brand-slot-5 {
        bottom: 12%;

        left: 0;
    }

    .core-brand-slot-6 {
        top: 20%;

        left: -2%;
    }


    /* PANELS */

    .panels-section {
        padding:
            85px
            12px
            90px;
    }

    .panels-heading {
        font-size: 18vw !important;
    }

    .panel-scene {
        min-height: 62svh;

        margin: 10px;

        border-radius: 17px;
    }

    .panel-scene-title {
        font-size: 17vw;
    }


    /* PROJECTS */

    .projects-section {
        padding:
            85px
            12px
            95px;
    }

    .projects-heading {
        font-size: 18vw !important;
    }

    .project-card {
        min-height: 62svh;

        margin-bottom: 12px;

        border-radius: 15px;
    }

    .project-number {
        left: 18px;

        top: 20px;

        font-size: 24vw;
    }

    .project-info {
        left: 18px;

        right: 18px;

        bottom: 22px;
    }

    .project-title {
        font-size: 18vw !important;
    }


    /* BRANCHES */

    .branches-section {
        padding:
            85px
            18px
            95px;
    }

    .branches-heading {
        font-size: 19vw !important;
    }

    .branch-row {
        padding: 27px 0;
    }

    .branch-city {
        font-size: 18vw;
    }

    .branch-marker {
        width: 7px;
        height: 7px;
    }


    /* OFFERS */

    .offers-section {
        min-height: auto;

        padding:
            85px
            18px
            75px;
    }

    .offer-circle {
        width: 100vw;

        right: -48%;

        top: -5%;
    }

    .offers-heading {
        font-size: 18vw !important;
    }

    .offer-word {
        font-size: 18vw;
    }

    .offer-card {
        min-height: 110px;
    }


    /* CERTIFICATIONS */

    .certification-section {
        padding:
            85px
            18px
            90px;
    }

    .certification-heading h2 {
        font-size: 18vw !important;
    }

    .certificate {
        min-height: 325px;

        padding: 22px;
    }

    .certificate-seal {
        width: 90px;
        height: 90px;
    }

    .certificate-title {
        font-size: 13vw;
    }


    /* ========================================================
       CTA MOBILE
    ======================================================== */

    .solar-cta {
        min-height: 100svh;

        height: 100svh;

        padding:
            25px
            18px;

        grid-template-rows:
            auto
            minmax(0, 1fr)
            auto;
    }

    .cta-top {
        font-size: 8px;
    }

    .cta-heading-wrap {
        padding:
            18px
            0
            30px;

        align-items: center;

        /*
           More upward movement on mobile
           because the consultation block
           has less available vertical space.
        */
        transform:
            translateY(-4vh);
    }

    .cta-heading {
        width: 100%;

        font-size: 18vw !important;

        line-height: .78 !important;

        gap: 0;

        transform:
            translateY(-1vh);
    }

    .cta-word {
        width: max-content;

        max-width: 100%;

        white-space: nowrap;
    }

    .cta-bottom {
        flex-direction: column;

        align-items: flex-start;

        gap: 20px;

        padding-top: 16px;
    }

    .cta-bottom p:last-child {
        font-size: 17px;
        line-height: 1.15;
    }

    .cta-button {
        width: 100%;

        justify-content: space-between;

        padding:
            14px
            18px;
    }
}


/* ============================================================
   SMALL MOBILE
============================================================ */

@media (max-width: 380px) {

    .hero-title {
        font-size: 18vw;
    }

    .intro-title {
        font-size: 16vw !important;
    }

    .core-brand-slot {
        width: 90px;
    }

    .core-brand-name {
        font-size: 12px;
    }

    .core-brand-status {
        display: none;
    }

    .certificate {
        min-height: 300px;
    }

    .cta-heading {
        font-size: 17vw !important;
    }

    .cta-heading-wrap {
        padding:
            15px
            0
            25px;

        transform:
            translateY(-4.5vh);
    }

    .cta-bottom {
        gap: 18px;
    }
}


/* ============================================================
   REDUCED MOTION
============================================================ */

@media (prefers-reduced-motion: reduce) {

    .solar-marquee-track {
        animation: none;
    }

    .hero-curtain {
        transform: scaleY(0);
    }

    .intro-word,
    .core-system,
    .core-brand,
    .offer-word,
    .offer-card,
    .certificate,
    .certificate-seal,
    .cta-word {
        transform: none !important;
    }

}

            `}</style>


            {/* ====================================================
                HERO
            ==================================================== */}

            <section className="solar-hero">

                <img
                    className="hero-main-image"
                    src={solarImages[0]}
                    alt="Solar installation"
                    loading="eager"
                />

                <div className="hero-overlay" />

                <div className="hero-curtains">

                    <div className="hero-curtain" />
                    <div className="hero-curtain" />
                    <div className="hero-curtain" />
                    <div className="hero-curtain" />
                    <div className="hero-curtain" />

                </div>

                <div className="hero-content">

                    <div className="hero-topline">

                        <span>
                            SOLAR / ENERGY
                        </span>

                    </div>

                    <h1 className="hero-title">

                        <span className="hero-title-word">
                            Solar
                        </span>

                        <span className="hero-title-word text-sky-300">
                            Beyond
                        </span>

                        <span className="hero-title-word">
                            Today
                        </span>

                    </h1>

                    <div className="hero-information flex justify-between gap-8 text-xs uppercase tracking-[.18em]">

                        <p className="max-w-md leading-5 text-white/60">
                            Solar solutions for
                            homes, businesses and
                            industries.
                        </p>

                        <span className="hidden md:block">
                            SCROLL ↓
                        </span>

                    </div>

                </div>

            </section>


            {/* ====================================================
                MARQUEE
            ==================================================== */}

            <SolarMarquee />


            {/* ====================================================
                INTRO
            ==================================================== */}

            <section className="solar-intro px-[5vw] py-32 md:py-40">

                <div className="grid gap-16 md:grid-cols-[.5fr_2fr]">

                    <p className="text-[10px] uppercase tracking-[.3em] text-black/40">
                        01 / WHY SOLAR
                    </p>

                    <div>

                        <h2 className="intro-title">

                            <span className="intro-line">

                                <span className="intro-word">
                                    Energy
                                </span>

                            </span>

                            <span className="intro-line text-sky-400">

                                <span className="intro-word">
                                    Reimagined.
                                </span>

                            </span>

                        </h2>

                        <p className="intro-description mt-10 text-sm leading-6 text-black/50 md:text-base">
                            From rooftop systems to
                            large industrial
                            installations, we engineer
                            solar systems around
                            performance, reliability and
                            long-term value.
                        </p>

                    </div>

                </div>

            </section>


            {/* ====================================================
                REVIEWS
            ==================================================== */}

            <section className="reviews-section bg-[#111415]">

                <div className="px-[5vw] py-20 text-white">

                    <p className="text-[10px] uppercase tracking-[.3em] text-sky-300">
                        02 / CUSTOMER VOICE
                    </p>

                </div>

                {reviews.map(
                    (review, index) => (
                        <article
                            key={review.name}
                            className="review-item"
                        >

                            <div>

                                <p className="mb-5 text-[10px] uppercase tracking-[.25em] text-sky-300">
                                    REVIEW / 0
                                    {index + 1}
                                </p>

                                <h3 className="review-quote">
                                    “{review.text}”
                                </h3>

                                <div className="review-meta">

                                    <span>
                                        {review.name}
                                    </span>

                                    <span>
                                        {review.city}
                                    </span>

                                    <span>
                                        {review.capacity}
                                    </span>

                                </div>

                            </div>

                            <div className="review-photo-wrap">

                                <img
                                    className="review-photo"
                                    src={review.image}
                                    alt={review.name}
                                    loading="lazy"
                                />

                            </div>

                        </article>
                    )
                )}

            </section>


            {/* ====================================================
                CORE
            ==================================================== */}

            <section className="core-section">

                <div className="core-grid">

                    <div>

                        <p className="mb-6 text-[10px] uppercase tracking-[.3em] text-black/40">
                            03 / TECHNOLOGY
                        </p>

                        <h2 className="core-main-title">

                            Energy

                            <br />

                            <span className="text-sky-400">
                                Core.
                            </span>

                        </h2>

                        <p className="core-description">
                            The heart of every solar
                            system. We select inverter
                            technology according to
                            capacity, efficiency,
                            reliability and project
                            requirements.
                        </p>

                    </div>

                    <div className="core-system">

                        <div className="core-ring" />
                        <div className="core-ring" />
                        <div className="core-ring" />
                        <div className="core-ring" />

                        <div className="core-sun">

                            <span>
                                Solar
                                <br />
                                Core
                            </span>

                        </div>

                        {inverterBrands.map(
                            (brand, index) => (
                                <CoreBrand
                                    key={brand}
                                    brand={brand}
                                    index={index}
                                />
                            )
                        )}

                    </div>

                </div>

            </section>


            {/* ====================================================
                PANELS
            ==================================================== */}

            <section className="panels-section">

                <div className="px-[2vw] pb-16">

                    <p className="mb-6 text-[10px] uppercase tracking-[.3em] text-sky-300">
                        04 / PANELS
                    </p>

                    <h2 className="panels-heading">

                        Catch

                        <br />

                        <span className="text-sky-300">
                            Light.
                        </span>

                    </h2>

                </div>

                <div className="space-y-5">

                    {panelBrands
                        .slice(0, 3)
                        .map(
                            (
                                brand,
                                index
                            ) => (
                                <article
                                    key={brand}
                                    className="panel-scene"
                                >

                                    <img
                                        className="panel-scene-image"
                                        src={
                                            solarImages[
                                                index
                                            ]
                                        }
                                        alt={brand}
                                        loading="lazy"
                                    />

                                    <div className="panel-scene-overlay" />

                                    <div className="panel-scene-text">

                                        <p className="mb-5 text-[10px] uppercase tracking-[.25em] text-sky-300">
                                            PANEL / 0
                                            {index + 1}
                                        </p>

                                        <h3 className="panel-scene-title">
                                            {brand}
                                        </h3>

                                        <p className="mt-6 max-w-sm text-xs uppercase tracking-[.15em] text-white/60">
                                            HIGH
                                            EFFICIENCY
                                            / LONG
                                            TERM
                                            PERFORMANCE
                                            / ENGINEERED
                                            SOLAR
                                        </p>

                                    </div>

                                </article>
                            )
                        )}

                </div>

            </section>


            <SolarMarquee reverse />


            {/* ====================================================
                PROJECTS
            ==================================================== */}

            <section className="projects-section">

                <div className="projects-heading-wrap mb-20 px-[2vw]">

                    <p className="mb-6 text-[10px] uppercase tracking-[.3em] text-black/40">
                        05 / PROJECTS
                    </p>

                    <h2 className="projects-heading">

                        Real

                        <br />

                        <span className="text-sky-400">
                            Work.
                        </span>

                    </h2>

                </div>

                <div className="projects-wrapper">

                    {projects.map(
                        (project) => (
                            <article
                                key={project.number}
                                className="project-card"
                            >

                                <img
                                    className="project-card-image"
                                    src={
                                        project.image
                                    }
                                    alt={
                                        project.title
                                    }
                                    loading="lazy"
                                />

                                <div className="project-card-overlay" />

                                <span className="project-number">
                                    {
                                        project.number
                                    }
                                </span>

                                <div className="project-info">

                                    <p className="mb-5 text-[10px] uppercase tracking-[.25em] text-sky-300">
                                        {
                                            project.location
                                        }
                                    </p>

                                    <h3 className="project-title">
                                        {
                                            project.title
                                        }
                                    </h3>

                                    <div className="mt-7 flex justify-between border-t border-white/20 pt-4 text-[10px] uppercase tracking-[.2em]">

                                        <span>
                                            Solar
                                            Project
                                        </span>

                                        <span>
                                            {
                                                project.capacity
                                            }
                                        </span>

                                    </div>

                                </div>

                            </article>
                        )
                    )}

                </div>

            </section>


            {/* ====================================================
                BRANCHES
            ==================================================== */}

            <section className="branches-section bg-white px-[5vw] py-32 md:py-36">

                <div className="grid gap-16 md:grid-cols-[.55fr_1.8fr]">

                    <div>

                        <p className="text-[10px] uppercase tracking-[.3em] text-black/40">
                            06 / BRANCHES
                        </p>

                        <h2 className="branches-heading mt-10">

                            Find

                            <br />

                            <span className="text-sky-400">
                                Us.
                            </span>

                        </h2>

                    </div>

                    <div>

                        {branches.map(
                            (branch) => (
                                <article
                                    key={
                                        branch.city
                                    }
                                    className="branch-row"
                                >

                                    <div className="flex justify-between text-[10px] uppercase tracking-[.2em] text-black/40">

                                        <span>
                                            {
                                                branch.number
                                            }
                                        </span>

                                        <span>
                                            {
                                                branch.type
                                            }
                                        </span>

                                    </div>

                                    <div className="branch-line" />

                                    <div className="flex items-end justify-between gap-5">

                                        <div className="flex min-w-0 items-end gap-4">

                                            <span className="branch-marker" />

                                            <h3 className="branch-city">
                                                {
                                                    branch.city
                                                }
                                            </h3>

                                        </div>

                                        <span className="shrink-0 pb-2 text-right text-[10px] uppercase tracking-[.2em] text-black/40">

                                            {
                                                branch.state
                                            }

                                            <br />

                                            Solar /
                                            Service

                                        </span>

                                    </div>

                                </article>
                            )
                        )}

                    </div>

                </div>

            </section>


            {/* ====================================================
                OFFERS
            ==================================================== */}

            <section className="offers-section">

                <div className="offer-circle" />

                <p className="offers-label relative z-10 mb-16 text-[10px] uppercase tracking-[.3em]">
                    07 / OFFERS
                </p>

                <h2 className="offers-heading relative z-10 max-w-5xl">

                    <span className="offer-word">
                        GO
                    </span>

                    <br />

                    <span className="offer-word">
                        SOLAR.
                    </span>

                    <br />

                    <span className="offer-word">
                        SAVE.
                    </span>

                </h2>

                <div className="relative z-10 mt-20 grid gap-5 md:grid-cols-3">

                    {[
                        'FREE SITE SURVEY',
                        'SYSTEM CONSULTATION',
                        'FINANCING ASSISTANCE',
                    ].map(
                        (offer, index) => (
                            <div
                                key={offer}
                                className="offer-card border-t border-black/30 pt-5"
                            >

                                <span className="font-[font2] text-4xl md:text-5xl">
                                    0
                                    {index + 1}
                                </span>

                                <p className="mt-7 text-xs uppercase tracking-[.2em]">
                                    {offer}
                                </p>

                            </div>
                        )
                    )}

                </div>

            </section>


            {/* ====================================================
                CERTIFICATIONS
            ==================================================== */}

            <section className="certification-section">

                <div className="certification-heading mb-20">

                    <p className="mb-6 text-[10px] uppercase tracking-[.3em] text-sky-300">
                        08 / CERTIFICATION
                    </p>

                    <h2>

                        Trusted.

                        <br />

                        <span className="text-sky-300">
                            Verified.
                        </span>

                    </h2>

                </div>

                <div className="grid gap-5 md:grid-cols-2">

                    {certifications.map(
                        (certificate) => (
                            <article
                                key={
                                    certificate.number
                                }
                                className="certificate"
                            >

                                <div className="flex justify-between">

                                    <span className="text-[10px] uppercase tracking-[.2em] text-black/40">
                                        DOCUMENT
                                    </span>

                                    <span className="text-[10px] text-black/40">
                                        {
                                            certificate.number
                                        }
                                    </span>

                                </div>

                                <div className="mt-10">

                                    <div className="certificate-seal">

                                        VERIFIED
                                        <br />
                                        DOCUMENT

                                    </div>

                                </div>

                                <div className="mt-12">

                                    <h3 className="certificate-title">
                                        {
                                            certificate.title
                                        }
                                    </h3>

                                    <p className="mt-2 text-xl uppercase">
                                        {
                                            certificate.subtitle
                                        }
                                    </p>

                                </div>

                            </article>
                        )
                    )}

                </div>

            </section>


            {/* ====================================================
                FINAL CTA
            ==================================================== */}

            <section className="solar-cta">

                <div className="cta-top flex justify-between gap-5 text-[10px] uppercase tracking-[.25em] text-white/40">

                    <span>
                        09 / START YOUR PROJECT
                    </span>

                    <span>
                        INNOVEX AUTOMATION
                    </span>

                </div>


                <div className="cta-heading-wrap">

                    <h2 className="cta-heading">

                        <span className="cta-word">
                            Make
                        </span>

                        <span className="cta-word">
                            Your
                        </span>

                        <span className="cta-word text-sky-300">
                            Roof
                        </span>

                        <span className="cta-word">
                            Work.
                        </span>

                    </h2>

                </div>


                <div className="cta-bottom">

                    <div>

                        <p className="text-[10px] uppercase tracking-[.2em] text-white/40">
                            Solar consultation
                        </p>

                        <p className="mt-3 text-lg md:text-2xl">
                            Let's build your energy system.
                        </p>

                    </div>


                    <button
                        type="button"
                        className="cta-button"
                        onClick={() =>
                            navigate('/contact')
                        }
                    >

                        <span>
                            Start a Project
                        </span>

                        <span>
                            →
                        </span>

                    </button>

                </div>

            </section>

        </main>
    )
}

export default Solar