import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavbarContext } from '../../context/navbarContext'
import heroImage from '../../assets/hero.png'
import marqueeImageOne from '../../assets/optimized/image1.jpg'
import marqueeImageTwo from '../../assets/optimized/image2.jpg'
import marqueeImageThree from '../../assets/optimized/image4.jpg'
import marqueeImageFour from '../../assets/optimized/image7.jpg'


// =============================================================
// MARQUEE GROUP
// =============================================================

const MarqueeGroup = ({ images }) => {
    return (
        <div
            className="flex h-full shrink-0 items-center"
            style={{
                flexShrink: 0,
                height: '100%',
                width: 'max-content',
            }}
        >

            {images.map((image) => (
                <div
                    key={image}
                    className="flex shrink-0 items-center"
                >
                    <h2
                        className="whitespace-nowrap font-[font2] uppercase m-0 p-0"
                        style={{
                            fontSize: 'clamp(24px, 3.6vw, 56px)',
                            lineHeight: '0.8',
                            flexShrink: 0,
                        }}
                    >
                        Innovex Automation
                    </h2>

                    <img
                        src={image}
                        alt=""
                        draggable="false"
                        loading="lazy"
                        decoding="async"
                        aria-hidden="true"
                        style={{
                            width: 'clamp(120px, 18vw, 260px)',
                            height: 'clamp(48px, 6vw, 88px)',
                            minWidth: '120px',
                            minHeight: '48px',
                            maxWidth: '260px',
                            maxHeight: '88px',
                            marginLeft: '20px',
                            marginRight: '20px',
                            borderRadius: '9999px',
                            objectFit: 'cover',
                            display: 'block',
                            flexShrink: 0,
                        }}
                    />
                </div>
            ))}

        </div>
    )
}


// =============================================================
// HOVER MARQUEE
// =============================================================

const HoverMarquee = () => {

    return (
        <div
            className="
                moveLink
                absolute
                left-0
                top-0
                w-full
                overflow-hidden
                bg-[#00aeea]
                text-black
            "
            style={{
                height: '100%',
                zIndex: 5,
            }}
        >

            <div
                className="marquee-track flex h-full w-max items-center"
            >

                <MarqueeGroup
                    images={[
                        marqueeImageOne,
                        marqueeImageTwo,
                        marqueeImageThree,
                        marqueeImageFour,
                    ]}
                />

                <MarqueeGroup
                    images={[
                        marqueeImageOne,
                        marqueeImageTwo,
                        marqueeImageThree,
                        marqueeImageFour,
                    ]}
                />

            </div>

        </div>
    )
}


// =============================================================
// MENU ROW
// =============================================================

const MenuRow = ({
    title,
    to,
    border = 'border-t',
}) => {

    const [hovered, setHovered] = useState(false)
    const [, setNavOpen] = useContext(NavbarContext)

    return (
        <Link
            to={to}
            onClick={() => setNavOpen(false)}
            className={`link block origin-top relative w-full overflow-hidden no-underline ${border} border-white`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                height: 'clamp(62px, 6.5vw, 100px)',
                minHeight: '62px',
                maxHeight: '100px',
                transformOrigin: 'top',
            }}
        >

            {/* =====================================================
                NORMAL TITLE
            ===================================================== */}

            <div
                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                "
                style={{
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            >

                <h1
                    className="
                        font-[font2]
                        uppercase
                        whitespace-nowrap
                        m-0
                        p-0
                    "
                    style={{
                        fontSize: 'clamp(28px, 4vw, 56px)',
                        lineHeight: '0.8',
                    }}
                >
                    {title}
                </h1>

            </div>


            {/* =====================================================
                HOVER Blue PANEL
            ===================================================== */}

            <div
                className="
                    absolute
                    inset-0
                    overflow-hidden
                    bg-[#00aeea]
                "
                style={{
                    zIndex: 5,

                    transform: hovered
                        ? 'translateY(0)'
                        : 'translateY(100%)',

                    transition:
                        'transform 450ms cubic-bezier(0.77, 0, 0.175, 1)',

                    pointerEvents: 'none',
                }}
            >

                <HoverMarquee />

            </div>

        </Link>
    )
}


// =============================================================
// FULL SCREEN NAV
// =============================================================

const FullScreenNav = () => {

    const fullNavLinksRef = useRef(null)

    const fullScreenRef = useRef(null)

    const stairsRef = useRef([])
    const navTimelineRef = useRef(null)

    const [navOpen, setNavOpen] =
        useContext(NavbarContext)

    useEffect(() => {
        if (!navOpen) return undefined

        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setNavOpen(false)
        }

        document.addEventListener('keydown', closeOnEscape)
        return () => document.removeEventListener('keydown', closeOnEscape)
    }, [navOpen, setNavOpen])


    // =========================================================
    // STAIR REF
    // =========================================================

    const addStairRef = (el) => {

        if (
            el &&
            !stairsRef.current.includes(el)
        ) {
            stairsRef.current.push(el)
        }

    }


    // =========================================================
    // GSAP OPEN
    // =========================================================

    function gsapAnimation() {

        navTimelineRef.current?.kill()
        const tl = gsap.timeline()
        navTimelineRef.current = tl


        // =====================================================
        // SHOW NAV
        // =====================================================

        tl.set(fullScreenRef.current, {
            display: 'block',
        })


        // =====================================================
        // RESET STARS
        // =====================================================

        tl.set(stairsRef.current, {
            height: '0%',
        })


        // =====================================================
        // RESET MENU
        // =====================================================

        tl.set('.link', {
            opacity: 0,
            rotateX: 90,
            transformOrigin: 'top',
        })


        // =====================================================
        // RESET HEADER
        // =====================================================

        tl.set('.navlink', {
            opacity: 0,
        })


        // =====================================================
        // STAIRS OPEN
        // =====================================================

        tl.to(stairsRef.current, {

            delay: 0.05,

            height: '100%',

            duration: 0.35,

            stagger: {
                amount: -0.12,
            },

            ease: 'power3.inOut',

        })


        // =====================================================
        // MENU OPEN
        // =====================================================

        tl.to(
            '.link',
            {

                opacity: 1,

                rotateX: 0,

                duration: 0.34,

                stagger: {
                    amount: 0.16,
                },

                ease: 'power3.out',

            },
            '-=0.25'
        )


        // =====================================================
        // HEADER OPEN
        // =====================================================

        tl.to(
            '.navlink',
            {

                opacity: 1,

                duration: 0.25,

                ease: 'power3.out',

            },
            '-=0.25'
        )

    }


    // =========================================================
    // GSAP CLOSE
    // =========================================================

    function gsapAnimationReverse() {

        navTimelineRef.current?.kill()
        const tl = gsap.timeline()
        navTimelineRef.current = tl


        // =====================================================
        // EVERYTHING CLOSES TOGETHER
        // =====================================================

        tl.to(
            '.navlink',
            {
                opacity: 0,

                duration: 0.3,

                ease: 'power3.inOut',
            },
            0
        )


        tl.to(
            '.link',
            {
                opacity: 0,

                rotateX: 90,

                duration: 0.55,

                stagger: {
                    amount: 0.08,
                },

                ease: 'power3.inOut',
            },
            0
        )


        // =====================================================
        // STAIRS CLOSE AT SAME TIME
        // =====================================================

        tl.to(
            stairsRef.current,
            {
                height: '0%',

                duration: 0.3,

                stagger: {
                    amount: 0.1,

                    from: 'end',
                },

                ease: 'power3.inOut',
            },
            0
        )


        // =====================================================
        // HIDE AFTER ANIMATION
        // =====================================================

        tl.set(fullScreenRef.current, {
            display: 'none',
        })

    }


    // =========================================================
    // GSAP CONTROLLER
    // =========================================================

    useGSAP(
        () => {

            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                gsap.set(fullScreenRef.current, {
                    display: navOpen ? 'block' : 'none',
                })
                gsap.set(stairsRef.current, { clearProps: 'all' })
                gsap.set('.link', { clearProps: 'all', opacity: 1, rotateX: 0 })
                gsap.set('.navlink', { clearProps: 'all', opacity: 1 })
                return
            }

            if (navOpen) {

                gsapAnimation()

            } else {

                gsapAnimationReverse()

            }

        },
        {
            dependencies: [navOpen],

            scope: fullScreenRef,
        }
    )


    // =========================================================
    // JSX
    // =========================================================

    return (

        <>
            {/* =====================================================
                MARQUEE + SCROLL CSS
            ===================================================== */}

            <style>
                {`

                    /* =========================================
                       HORIZONTAL MARQUEE
                    ========================================= */

                    .marquee-track {
                        animation:
                            fullScreenMarquee
                            8s
                            linear
                            infinite;

                        will-change: transform;
                    }


                    @keyframes fullScreenMarquee {

                        0% {
                            transform:
                                translate3d(0, 0, 0);
                        }

                        100% {
                            transform:
                                translate3d(-50%, 0, 0);
                        }

                    }


                    /* =========================================
                       HIDE SCROLLBAR
                       BUT KEEP SCROLLING
                    ========================================= */

                    .fullscreen-scroll {
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }


                    .fullscreen-scroll::-webkit-scrollbar {
                        display: none;
                        width: 0;
                        height: 0;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .marquee-track {
                            animation: none;
                        }
                    }

                `}
            </style>


            {/* =====================================================
                FULL SCREEN NAV
            ===================================================== */}

            <div
                ref={fullScreenRef}
                id="fullscreennav"
                className="
                    fullscreennav
                    hidden
                    absolute
                    left-0
                    top-0
                    z-50
                    h-screen
                    w-full
                    overflow-hidden
                    text-white
                "
            >

                {/* =================================================
                    STAIRS
                ================================================= */}

                <div
                    className="
                        pointer-events-none
                        fixed
                        inset-0
                        z-0
                        h-screen
                        w-full
                    "
                >

                    <div
                        className="
                            flex
                            h-full
                            w-full
                        "
                    >

                        <div
                            ref={addStairRef}
                            className="
                                stairing
                                h-0
                                w-1/5
                                bg-black
                            "
                        />

                        <div
                            ref={addStairRef}
                            className="
                                stairing
                                h-0
                                w-1/5
                                bg-black
                            "
                        />

                        <div
                            ref={addStairRef}
                            className="
                                stairing
                                h-0
                                w-1/5
                                bg-black
                            "
                        />

                        <div
                            ref={addStairRef}
                            className="
                                stairing
                                h-0
                                w-1/5
                                bg-black
                            "
                        />

                        <div
                            ref={addStairRef}
                            className="
                                stairing
                                h-0
                                w-1/5
                                bg-black
                            "
                        />

                    </div>

                </div>


                {/* =================================================
                    SCROLLABLE CONTENT
                ================================================= */}

                <div
                    className="
                        fullscreen-scroll
                        relative
                        z-10
                        h-screen
                        w-full
                        overflow-x-hidden
                        overflow-y-auto
                    "
                    onClick={(event) => {
                        if (!event.target.closest('a, button')) {
                            setNavOpen(false)
                        }
                    }}
                >

                    {/* =================================================
                        TOP BAR
                    ================================================= */}

                    <div
                        ref={fullNavLinksRef}
                        className="
                            navlink
                            flex
                            min-h-[180px]
                            w-full
                            items-start
                            justify-between
                            p-2
                            lg:min-h-[200px]
                            lg:p-5
                        "
                    >

                        {/* =================================================
                            LOGO
                        ================================================= */}

                        <Link to="/" aria-label="Innovex home" className="block">

                            <div className="h-16 w-16">

                                <img
                                    src={heroImage}
                                    alt="Innovex Automation"
                                    className="
                                        h-full
                                        w-full
                                        object-contain
                                    "
                                />

                            </div>

                        </Link>


                        {/* =================================================
                            CLOSE BUTTON
                        ================================================= */}

                        <button
                            type="button"
                            onClick={() =>
                                setNavOpen(false)
                            }
                            aria-label="Close menu"
                            className="
                                relative
                                h-14
                                w-14
                                cursor-pointer
                                border-0
                                bg-transparent
                                p-0
                                lg:h-16
                                lg:w-16
                            "
                        >

                            {/* X LINE 1 */}

                            <span
                                className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    h-10
                                    w-0.5
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    rotate-45
                                    bg-[#00aeea]
                                    lg:h-12
                                    lg:w-1
                                "
                            />


                            {/* X LINE 2 */}

                            <span
                                className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    h-10
                                    w-0.5
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    -rotate-45
                                    bg-[#00aeea]
                                    lg:h-12
                                    lg:w-1
                                "
                            />

                        </button>

                    </div>


                    {/* =================================================
                        MENU
                    ================================================= */}

                    <div
                        className="
                            w-full
                            pb-16
                            lg:pb-20
                        "
                    >

                        {/* PROJECTS */}

                        <MenuRow
                            title="Electrical"
                            to="/electrical"
                        />

                        <MenuRow
                            title="Projects"
                            to="/projects"
                        />


                        {/* ABOUT */}

                        <MenuRow
                            title="About"
                            to="/about"
                        />


                        {/* CONTACT */}

                        <MenuRow
                            title="Contact"
                            to="/contact"
                        />


                        {/* SOLAR */}

                        <MenuRow
                            title="Solar"
                            to="/solar"
                            border="border-y"
                        />

                    </div>

                </div>

            </div>
        </>
    )
}

export default FullScreenNav