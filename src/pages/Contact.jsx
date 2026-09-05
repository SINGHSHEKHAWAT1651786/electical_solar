import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const container = useRef(null)

    // =========================================================
    // ALWAYS START CONTACT PAGE FROM TOP
    // =========================================================

    useEffect(() => {
        window.history.scrollRestoration = 'manual'

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })

        const timer = setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            })
        }, 50)

        return () => {
            clearTimeout(timer)
            window.history.scrollRestoration = 'auto'
        }
    }, [])


    // =========================================================
    // GSAP
    // =========================================================

    useGSAP(() => {

        // Make absolutely sure GSAP starts from the top
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })

        const mm = gsap.matchMedia()


        // =====================================================
        // DESKTOP
        // =====================================================

        mm.add('(min-width: 769px)', () => {

            // -------------------------------------------------
            // HERO INTRO
            // -------------------------------------------------

            const intro = gsap.timeline({
                defaults: {
                    ease: 'power4.out'
                }
            })

            intro
                .from('.contact-top-line', {
                    scaleX: 0,
                    transformOrigin: 'left center',
                    duration: 1
                })

                .from('.contact-small-title', {
                    y: 30,
                    opacity: 0,
                    duration: 0.7
                }, '-=0.5')

                .from('.contact-title-line', {
                    yPercent: 110,
                    duration: 1.1,
                    stagger: 0.12
                }, '-=0.3')

                .from('.contact-description', {
                    y: 40,
                    opacity: 0,
                    duration: 0.8
                }, '-=0.6')

                .from('.contact-scroll-indicator', {
                    y: 20,
                    opacity: 0,
                    duration: 0.6
                }, '-=0.4')


            // -------------------------------------------------
            // GIANT CONTACT PARALLAX
            // -------------------------------------------------

            gsap.to('.contact-background-text', {
                yPercent: -25,
                scale: 1.08,
                ease: 'none',

                scrollTrigger: {
                    trigger: '.contact-hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            })


            // -------------------------------------------------
            // CONTACT INFORMATION
            // -------------------------------------------------

            gsap.from('.contact-info-item', {
                y: 80,
                opacity: 0,
                stagger: 0.12,
                duration: 1,
                ease: 'power4.out',

                scrollTrigger: {
                    trigger: '.contact-info-section',
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                }
            })


            // -------------------------------------------------
            // INFORMATION LINE
            // -------------------------------------------------

            gsap.from('.contact-info-line', {
                scaleX: 0,
                transformOrigin: 'left center',
                duration: 1.2,
                ease: 'power4.inOut',

                scrollTrigger: {
                    trigger: '.contact-info-section',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            })


            // -------------------------------------------------
            // FORM HEADINGS
            // -------------------------------------------------

            gsap.from('.form-heading-line', {
                yPercent: 100,
                opacity: 0,
                stagger: 0.12,
                duration: 0.9,
                ease: 'power4.out',

                scrollTrigger: {
                    trigger: '.contact-form-section',
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                }
            })


            // -------------------------------------------------
            // FORM FIELDS
            // -------------------------------------------------

            gsap.from('.contact-field', {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out',

                scrollTrigger: {
                    trigger: '.contact-form',
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                }
            })


            // -------------------------------------------------
            // SUBMIT BUTTON
            // -------------------------------------------------

            gsap.from('.contact-submit', {
                scale: 0.8,
                opacity: 0,
                duration: 0.8,
                ease: 'back.out(1.7)',

                scrollTrigger: {
                    trigger: '.contact-submit',
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                }
            })


            // -------------------------------------------------
            // BOTTOM CTA
            // -------------------------------------------------

            gsap.from('.contact-bottom-title', {
                yPercent: 100,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out',

                scrollTrigger: {
                    trigger: '.contact-bottom-section',
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                }
            })


            // -------------------------------------------------
            // ROTATING CIRCLES
            // -------------------------------------------------

            gsap.to('.contact-circle-1', {
                rotation: 360,
                duration: 18,
                repeat: -1,
                ease: 'none'
            })

            gsap.to('.contact-circle-2', {
                rotation: -360,
                duration: 25,
                repeat: -1,
                ease: 'none'
            })


            // -------------------------------------------------
            // MOUSE ORB
            // -------------------------------------------------

            const hero = container.current?.querySelector('.contact-hero')

            if (hero) {

                const orb = hero.querySelector('.contact-orb')

                if (orb) {

                    const moveX = gsap.quickTo(orb, 'x', {
                        duration: 0.8,
                        ease: 'power3'
                    })

                    const moveY = gsap.quickTo(orb, 'y', {
                        duration: 0.8,
                        ease: 'power3'
                    })

                    const handleMouseMove = (event) => {

                        const rect = hero.getBoundingClientRect()

                        const x =
                            (event.clientX -
                                rect.left -
                                rect.width / 2) * 0.08

                        const y =
                            (event.clientY -
                                rect.top -
                                rect.height / 2) * 0.08

                        moveX(x)
                        moveY(y)
                    }

                    hero.addEventListener(
                        'mousemove',
                        handleMouseMove
                    )

                    return () => {
                        hero.removeEventListener(
                            'mousemove',
                            handleMouseMove
                        )
                    }
                }
            }
        })


        // =====================================================
        // MOBILE
        // =====================================================

        mm.add('(max-width: 768px)', () => {

            // -------------------------------------------------
            // MOBILE HERO
            // -------------------------------------------------

            const mobileIntro = gsap.timeline({
                defaults: {
                    ease: 'power3.out'
                }
            })

            mobileIntro
                .from('.contact-top-line', {
                    scaleX: 0,
                    transformOrigin: 'left center',
                    duration: 0.8
                })

                .from('.contact-small-title', {
                    y: 20,
                    opacity: 0,
                    duration: 0.5
                }, '-=0.3')

                .from('.contact-title-line', {
                    yPercent: 100,
                    duration: 0.8,
                    stagger: 0.1
                }, '-=0.2')

                .from('.contact-description', {
                    y: 25,
                    opacity: 0,
                    duration: 0.6
                }, '-=0.3')


            // -------------------------------------------------
            // MOBILE BACKGROUND TEXT
            // -------------------------------------------------

            gsap.to('.contact-background-text', {
                yPercent: -12,
                scale: 1.03,
                ease: 'none',

                scrollTrigger: {
                    trigger: '.contact-hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.6
                }
            })


            // -------------------------------------------------
            // MOBILE CONTACT INFO
            // -------------------------------------------------

            gsap.from('.contact-info-item', {
                y: 40,
                opacity: 0,
                stagger: 0.08,
                duration: 0.7,
                ease: 'power3.out',

                scrollTrigger: {
                    trigger: '.contact-info-section',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            })


            // -------------------------------------------------
            // MOBILE FORM
            // -------------------------------------------------

            gsap.from('.contact-field', {
                y: 30,
                opacity: 0,
                stagger: 0.08,
                duration: 0.6,
                ease: 'power3.out',

                scrollTrigger: {
                    trigger: '.contact-form',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            })


            // -------------------------------------------------
            // MOBILE SUBMIT
            // -------------------------------------------------

            gsap.from('.contact-submit', {
                y: 30,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out',

                scrollTrigger: {
                    trigger: '.contact-submit',
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                }
            })


            // -------------------------------------------------
            // MOBILE CIRCLES
            // -------------------------------------------------

            gsap.to('.contact-circle-1', {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: 'none'
            })

            gsap.to('.contact-circle-2', {
                rotation: -360,
                duration: 28,
                repeat: -1,
                ease: 'none'
            })
        })


        // =====================================================
        // FINAL SCROLL RESET + REFRESH
        // =====================================================

        requestAnimationFrame(() => {

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            })

            ScrollTrigger.refresh()
        })


        return () => {
            mm.revert()
        }

    }, {
        scope: container
    })


    // =========================================================
    // FORM SUBMIT
    // =========================================================

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log('Contact form submitted')
    }


    return (
        <main
            ref={container}
            className="
                w-full
                overflow-hidden
                bg-[#f1f1f1]
                text-[#111]
            "
        >

            {/* =================================================
                HERO
            ================================================= */}

            <section
                className="
                    contact-hero
                    relative
                    min-h-screen
                    w-full
                    overflow-hidden
                    px-5
                    pt-46
                    pb-16
                    lg:px-20
                    lg:pt-46
                "
            >

                {/* Giant Background Text */}

                <div
                    className="
                        contact-background-text
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        z-0
                        w-[140%]
                        -translate-x-1/2
                        -translate-y-1/2
                        select-none
                        text-center
                        text-[28vw]
                        font-[font2]
                        uppercase
                        leading-none
                        tracking-[-0.07em]
                        text-[#e5e5e5]
                        lg:w-[120%]
                        lg:text-[23vw]
                    "
                >
                    CONTACT
                </div>


                {/* Orb */}

                <div
                    className="
                        contact-orb
                        pointer-events-none
                        absolute
                        right-[5%]
                        top-[20%]
                        z-[1]
                        h-20
                        w-20
                        rounded-full
                        bg-[#8fd3ff]
                        opacity-70
                        blur-[1px]
                        lg:h-32
                        lg:w-32
                    "
                />


                {/* Hero Content */}

                <div
                    className="
                        relative
                        z-10
                        flex
                        min-h-[75vh]
                        flex-col
                        justify-between
                    "
                >

                    {/* Top */}

                    <div>

                        <div
                            className="
                                contact-top-line
                                mb-8
                                h-[1px]
                                w-full
                                bg-[#111]
                            "
                        />


                        <div
                            className="
                                contact-small-title
                                mb-8
                                flex
                                items-center
                                justify-between
                            "
                        >

                            <span
                                className="
                                    text-xs
                                    font-medium
                                    uppercase
                                    tracking-[0.18em]
                                "
                            >
                                Innovex Automation
                            </span>


                            <span
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.18em]
                                "
                            >
                                Contact
                            </span>

                        </div>


                        {/* LET'S */}

                        <div className="overflow-hidden">

                            <div
                                className="
                                    contact-title-line
                                    font-[font2]
                                    text-[18vw]
                                    uppercase
                                    leading-[0.8]
                                    tracking-[-0.06em]
                                    sm:text-[15vw]
                                    lg:text-[12vw]
                                "
                            >
                                LET'S
                            </div>

                        </div>


                        {/* TALK */}

                        <div className="overflow-hidden">

                            <div
                                className="
                                    contact-title-line
                                    font-[font2]
                                    text-[18vw]
                                    uppercase
                                    leading-[0.8]
                                    tracking-[-0.06em]
                                    sm:text-[15vw]
                                    lg:text-[12vw]
                                "
                            >
                                TALK.
                            </div>

                        </div>

                    </div>


                    {/* Bottom */}

                    <div
                        className="
                            mt-20
                            flex
                            flex-col
                            justify-between
                            gap-10
                            lg:flex-row
                            lg:items-end
                        "
                    >

                        <div className="contact-description max-w-xl">

                            <p
                                className="
                                    text-lg
                                    leading-[1.2]
                                    sm:text-xl
                                    lg:text-2xl
                                "
                            >
                                Have a project in mind?
                                Let's discuss how we can build
                                smarter, more efficient solutions
                                together.
                            </p>

                        </div>


                        <div
                            className="
                                contact-scroll-indicator
                                flex
                                items-center
                                gap-4
                            "
                        >

                            <div
                                className="
                                    h-10
                                    w-[1px]
                                    bg-[#111]
                                "
                            />

                            <span
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.18em]
                                "
                            >
                                Scroll to explore
                            </span>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

            <section
                className="
                    contact-info-section
                    relative
                    w-full
                    bg-[#111]
                    px-5
                    py-24
                    text-white
                    lg:px-10
                    lg:py-32
                "
            >

                <div className="mx-auto max-w-[1600px]">

                    <div
                        className="
                            mb-16
                            flex
                            flex-col
                            justify-between
                            gap-8
                            lg:flex-row
                            lg:items-end
                        "
                    >

                        <div className="overflow-hidden">

                            <h2
                                className="
                                    form-heading-line
                                    font-[font2]
                                    text-5xl
                                    uppercase
                                    leading-none
                                    tracking-[-0.04em]
                                    sm:text-7xl
                                    lg:text-[8vw]
                                "
                            >
                                FIND US
                            </h2>

                        </div>


                        <p
                            className="
                                max-w-md
                                text-sm
                                leading-relaxed
                                text-white/60
                                lg:text-base
                            "
                        >
                            Whether you need industrial automation,
                            electrical solutions, or solar energy
                            systems, our team is ready to help.
                        </p>

                    </div>


                    <div
                        className="
                            contact-info-line
                            h-[1px]
                            w-full
                            bg-white/30
                        "
                    />


                    <div
                        className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            lg:grid-cols-4
                        "
                    >

                        {/* EMAIL */}

                        <a
                            href="mailto:info@innovexautomation.com"
                            className="
                                contact-info-item
                                group
                                border-b
                                border-white/20
                                py-10
                                lg:border-b-0
                                lg:border-r
                                lg:px-8
                                lg:first:pl-0
                            "
                        >

                            <span
                                className="
                                    mb-8
                                    block
                                    text-xs
                                    uppercase
                                    tracking-[0.15em]
                                    text-white/40
                                "
                            >
                                Email
                            </span>


                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    gap-4
                                "
                            >

                                <span
                                    className="
                                        text-lg
                                        transition-transform
                                        duration-500
                                        group-hover:translate-x-2
                                        lg:text-xl
                                    "
                                >
                                    info@innovexautomation.com
                                </span>


                                <span
                                    className="
                                        text-xl
                                        transition-transform
                                        duration-500
                                        group-hover:translate-x-2
                                        group-hover:-translate-y-2
                                    "
                                >
                                    ↗
                                </span>

                            </div>

                        </a>


                        {/* PHONE */}

                        <a
                            href="tel:+919999999999"
                            className="
                                contact-info-item
                                group
                                border-b
                                border-white/20
                                py-10
                                lg:border-b-0
                                lg:border-r
                                lg:px-8
                            "
                        >

                            <span
                                className="
                                    mb-8
                                    block
                                    text-xs
                                    uppercase
                                    tracking-[0.15em]
                                    text-white/40
                                "
                            >
                                Phone
                            </span>


                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <span className="text-lg lg:text-xl">
                                    +91 99999 99999
                                </span>


                                <span
                                    className="
                                        text-xl
                                        transition-transform
                                        duration-500
                                        group-hover:translate-x-2
                                        group-hover:-translate-y-2
                                    "
                                >
                                    ↗
                                </span>

                            </div>

                        </a>


                        {/* LOCATION */}

                        <div
                            className="
                                contact-info-item
                                border-b
                                border-white/20
                                py-10
                                lg:border-b-0
                                lg:border-r
                                lg:px-8
                            "
                        >

                            <span
                                className="
                                    mb-8
                                    block
                                    text-xs
                                    uppercase
                                    tracking-[0.15em]
                                    text-white/40
                                "
                            >
                                Location
                            </span>


                            <span className="text-lg lg:text-xl">
                                Sikar, Rajasthan
                            </span>

                        </div>


                        {/* SOCIAL */}

                        <div
                            className="
                                contact-info-item
                                py-10
                                lg:px-8
                                lg:pr-0
                            "
                        >

                            <span
                                className="
                                    mb-8
                                    block
                                    text-xs
                                    uppercase
                                    tracking-[0.15em]
                                    text-white/40
                                "
                            >
                                Social
                            </span>


                            <div className="flex flex-wrap gap-x-6 gap-y-3">

                                <a
                                    href="#"
                                    className="group text-lg"
                                >
                                    Instagram

                                    <span
                                        className="
                                            ml-1
                                            inline-block
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                            group-hover:-translate-y-1
                                        "
                                    >
                                        ↗
                                    </span>
                                </a>


                                <a
                                    href="#"
                                    className="group text-lg"
                                >
                                    LinkedIn

                                    <span
                                        className="
                                            ml-1
                                            inline-block
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                            group-hover:-translate-y-1
                                        "
                                    >
                                        ↗
                                    </span>
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <section
                className="
                    contact-form-section
                    relative
                    w-full
                    bg-[#f1f1f1]
                    px-5
                    py-24
                    lg:px-10
                    lg:py-40
                "
            >

                <div className="mx-auto max-w-[1500px]">

                    {/* FORM HEADING */}

                    <div className="mb-20">

                        <div className="mb-5 overflow-hidden">

                            <div
                                className="
                                    form-heading-line
                                    text-xs
                                    uppercase
                                    tracking-[0.2em]
                                "
                            >
                                Start a conversation
                            </div>

                        </div>


                        <div className="overflow-hidden">

                            <h2
                                className="
                                    form-heading-line
                                    font-[font2]
                                    text-[15vw]
                                    uppercase
                                    leading-[0.8]
                                    tracking-[-0.06em]
                                    lg:text-[10vw]
                                "
                            >
                                TELL US
                            </h2>

                        </div>


                        <div className="overflow-hidden">

                            <h2
                                className="
                                    form-heading-line
                                    font-[font2]
                                    text-[15vw]
                                    uppercase
                                    leading-[0.8]
                                    tracking-[-0.06em]
                                    lg:text-[10vw]
                                "
                            >
                                ABOUT IT.
                            </h2>

                        </div>

                    </div>


                    {/* FORM */}

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        {/* NAME */}

                        <div
                            className="
                                contact-field
                                border-t
                                border-[#111]/30
                            "
                        >

                            <label
                                htmlFor="name"
                                className="
                                    block
                                    py-5
                                    text-xs
                                    uppercase
                                    tracking-[0.15em]
                                    text-[#111]/50
                                "
                            >
                                01 / Your name
                            </label>


                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Enter your name"
                                className="
                                    w-full
                                    border-none
                                    bg-transparent
                                    pb-8
                                    text-2xl
                                    outline-none
                                    placeholder:text-[#111]/20
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            />

                        </div>


                        {/* EMAIL */}

                        <div
                            className="
                                contact-field
                                border-t
                                border-[#111]/30
                            "
                        >

                            <label
                                htmlFor="email"
                                className="
                                    block
                                    py-5
                                    text-xs
                                    uppercase
                                    tracking-[0.15em]
                                    text-[#111]/50
                                "
                            >
                                02 / Your email
                            </label>


                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="
                                    w-full
                                    border-none
                                    bg-transparent
                                    pb-8
                                    text-2xl
                                    outline-none
                                    placeholder:text-[#111]/20
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            />

                        </div>


                        {/* COMPANY */}

                        <div
                            className="
                                contact-field
                                border-t
                                border-[#111]/30
                            "
                        >

                            <label
                                htmlFor="company"
                                className="
                                    block
                                    py-5
                                    text-xs
                                    uppercase
                                    tracking-[0.15em]
                                    text-[#111]/50
                                "
                            >
                                03 / Company
                            </label>


                            <input
                                id="company"
                                name="company"
                                type="text"
                                placeholder="Your company"
                                className="
                                    w-full
                                    border-none
                                    bg-transparent
                                    pb-8
                                    text-2xl
                                    outline-none
                                    placeholder:text-[#111]/20
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            />

                        </div>


                        {/* MESSAGE */}

                        <div
                            className="
                                contact-field
                                border-y
                                border-[#111]/30
                            "
                        >

                            <label
                                htmlFor="message"
                                className="
                                    block
                                    py-5
                                    text-xs
                                    uppercase
                                    tracking-[0.15em]
                                    text-[#111]/50
                                "
                            >
                                04 / Tell us about your project
                            </label>


                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                placeholder="How can we help?"
                                className="
                                    w-full
                                    resize-none
                                    border-none
                                    bg-transparent
                                    pb-8
                                    text-2xl
                                    outline-none
                                    placeholder:text-[#111]/20
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            />

                        </div>


                        {/* =================================================
                            SEND BUTTON
                        ================================================= */}

                        <div
                            className="
                                mt-12
                                flex
                                justify-start
                                lg:justify-end
                            "
                        >

                            <button
                                type="submit"
                                className="
                                    contact-submit
                                    group
                                    relative
                                    flex
                                    h-40
                                    w-40
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    rounded-full
                                    bg-[#8fd3ff]
                                    text-sm
                                    uppercase
                                    tracking-[0.12em]
                                    transition-transform
                                    duration-500
                                    hover:scale-105
                                    lg:h-52
                                    lg:w-52
                                "
                            >

                                {/* BLACK HOVER BACKGROUND */}

                                <span
                                    className="
                                        absolute
                                        inset-0
                                        z-0
                                        translate-y-full
                                        rounded-full
                                        bg-[#111]
                                        transition-transform
                                        duration-500
                                        ease-[cubic-bezier(0.76,0,0.24,1)]
                                        group-hover:translate-y-0
                                    "
                                />


                                {/* NORMAL TEXT */}

                                <span
                                    className="
                                        relative
                                        z-10
                                        flex
                                        flex-col
                                        items-center
                                        text-[#111]
                                        transition-all
                                        duration-300
                                        group-hover:opacity-0
                                    "
                                >
                                    <span>Send</span>
                                    <span>Message</span>
                                </span>


                                {/* HOVER TEXT */}

                                <span
                                    className="
                                        absolute
                                        z-20
                                        flex
                                        items-center
                                        gap-2
                                        text-white
                                        opacity-0
                                        transition-all
                                        duration-300
                                        group-hover:opacity-100
                                    "
                                >
                                    <span>Send</span>

                                    <span>
                                        →
                                    </span>
                                </span>

                            </button>

                        </div>

                    </form>

                </div>

            </section>


            {/* =================================================
                BOTTOM CTA
            ================================================= */}

            <section
                className="
                    contact-bottom-section
                    relative
                    flex
                    min-h-[70vh]
                    w-full
                    items-center
                    justify-center
                    overflow-hidden
                    bg-[#8fd3ff]
                    px-5
                    py-24
                    text-center
                    lg:min-h-screen
                "
            >

                {/* CIRCLE 1 */}

                <div
                    className="
                        contact-circle-1
                        pointer-events-none
                        absolute
                        -left-20
                        -top-20
                        h-60
                        w-60
                        rounded-full
                        border
                        border-[#111]/20
                        lg:h-96
                        lg:w-96
                    "
                />


                {/* CIRCLE 2 */}

                <div
                    className="
                        contact-circle-2
                        pointer-events-none
                        absolute
                        -bottom-20
                        -right-20
                        h-72
                        w-72
                        rounded-full
                        border
                        border-[#111]/20
                        lg:h-[30rem]
                        lg:w-[30rem]
                    "
                />


                {/* CTA */}

                <div className="relative z-10">

                    <p
                        className="
                            mb-8
                            text-xs
                            uppercase
                            tracking-[0.2em]
                        "
                    >
                        Innovex Automation
                    </p>


                    <div className="overflow-hidden">

                        <h2
                            className="
                                contact-bottom-title
                                font-[font2]
                                text-[16vw]
                                uppercase
                                leading-[0.8]
                                tracking-[-0.07em]
                                lg:text-[11vw]
                            "
                        >
                            LET'S
                        </h2>

                    </div>


                    <div className="overflow-hidden">

                        <h2
                            className="
                                contact-bottom-title
                                font-[font2]
                                text-[16vw]
                                uppercase
                                leading-[0.8]
                                tracking-[-0.07em]
                                lg:text-[11vw]
                            "
                        >
                            BUILD.
                        </h2>

                    </div>


                    <p
                        className="
                            mx-auto
                            mt-10
                            max-w-md
                            text-sm
                            leading-relaxed
                        "
                    >
                        Industrial Automation · Electrical Solutions ·
                        Solar Energy
                    </p>

                </div>

            </section>

        </main>
    )
}

export default Contact