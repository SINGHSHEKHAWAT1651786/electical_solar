import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef, useState } from 'react'
import { NavbarContext } from '../../context/NavContext'
import heroImage from '../../assets/hero.png'


// =============================================================
// MARQUEE GROUP
// =============================================================

const MarqueeGroup = () => {
    return (
        <div
            className="moveX flex h-full shrink-0 items-center"
            style={{
                flexShrink: 0,
                height: '100%',
                width: 'max-content',
            }}
        >

            {/* TEXT */}

            <h2
                className="
                    whitespace-nowrap
                    font-[font2]
                    uppercase
                    m-0
                    p-0
                "
                style={{
                    fontSize: 'clamp(42px, 8vw, 120px)',
                    lineHeight: '0.8',
                    flexShrink: 0,
                }}
            >
                Pour Tout voir
            </h2>


            {/* IMAGE */}

            <img
                src={heroImage}
                alt="Innovex Automation"
                draggable="false"
                style={{
                    width: 'clamp(140px, 25vw, 384px)',
                    height: 'clamp(56px, 9vw, 140px)',

                    minWidth: '140px',
                    minHeight: '56px',

                    maxWidth: '384px',
                    maxHeight: '140px',

                    marginLeft: '20px',
                    marginRight: '20px',

                    borderRadius: '9999px',

                    objectFit: 'cover',

                    display: 'block',

                    flexShrink: 0,
                }}
            />


            {/* TEXT */}

            <h2
                className="
                    whitespace-nowrap
                    font-[font2]
                    uppercase
                    m-0
                    p-0
                "
                style={{
                    fontSize: 'clamp(42px, 8vw, 120px)',
                    lineHeight: '0.8',
                    flexShrink: 0,
                }}
            >
                Pour Tout voir
            </h2>


            {/* IMAGE */}

            <img
                src={heroImage}
                alt="Innovex Automation"
                draggable="false"
                style={{
                    width: 'clamp(140px, 25vw, 384px)',
                    height: 'clamp(56px, 9vw, 140px)',

                    minWidth: '140px',
                    minHeight: '56px',

                    maxWidth: '384px',
                    maxHeight: '140px',

                    marginLeft: '20px',
                    marginRight: '20px',

                    borderRadius: '9999px',

                    objectFit: 'cover',

                    display: 'block',

                    flexShrink: 0,
                }}
            />

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
                bg-[#D3FD50]
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

                <MarqueeGroup />

                <MarqueeGroup />

            </div>

        </div>
    )
}


// =============================================================
// MENU ROW
// =============================================================

const MenuRow = ({
    title,
    border = 'border-t',
}) => {

    const [hovered, setHovered] = useState(false)

    return (
        <div
            className={`
                link
                origin-top
                relative
                w-full
                overflow-hidden
                ${border}
                border-white
            `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                height: 'clamp(82px, 10vw, 150px)',
                minHeight: '82px',
                maxHeight: '150px',
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
                        fontSize: 'clamp(42px, 8vw, 120px)',
                        lineHeight: '0.8',
                    }}
                >
                    {title}
                </h1>

            </div>


            {/* =====================================================
                HOVER GREEN PANEL
            ===================================================== */}

            <div
                className="
                    absolute
                    inset-0
                    overflow-hidden
                    bg-[#D3FD50]
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

        </div>
    )
}


// =============================================================
// FULL SCREEN NAV
// =============================================================

const FullScreenNav = () => {

    const fullNavLinksRef = useRef(null)

    const fullScreenRef = useRef(null)

    const stairsRef = useRef([])

    const [navOpen, setNavOpen] =
        useContext(NavbarContext)


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

        const tl = gsap.timeline()


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

            delay: 0.1,

            height: '100%',

            duration: 0.7,

            stagger: {
                amount: -0.3,
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

                duration: 0.55,

                stagger: {
                    amount: 0.3,
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

                duration: 0.4,

                ease: 'power3.out',

            },
            '-=0.25'
        )

    }


    // =========================================================
    // GSAP CLOSE
    // =========================================================

    function gsapAnimationReverse() {

        const tl = gsap.timeline()


        // =====================================================
        // EVERYTHING CLOSES TOGETHER
        // =====================================================

        tl.to(
            '.navlink',
            {
                opacity: 0,

                duration: 0.55,

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
                    amount: 0.1,
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

                duration: 0.55,

                stagger: {
                    amount: 0.15,

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

                        <div>

                            <div
                                className="
                                    w-24
                                    lg:w-36
                                "
                            >

                                <img
                                    src={heroImage}
                                    alt="Innovex Automation"
                                    className="
                                        h-auto
                                        w-full
                                        object-contain
                                    "
                                />

                            </div>

                        </div>


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
                                h-20
                                w-20
                                cursor-pointer
                                border-0
                                bg-transparent
                                p-0
                                lg:h-32
                                lg:w-32
                            "
                        >

                            {/* X LINE 1 */}

                            <span
                                className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    h-20
                                    w-0.5
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    rotate-45
                                    bg-[#D3FD50]
                                    lg:h-32
                                    lg:w-1
                                "
                            />


                            {/* X LINE 2 */}

                            <span
                                className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    h-20
                                    w-0.5
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    -rotate-45
                                    bg-[#D3FD50]
                                    lg:h-32
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
                            title="Projets"
                        />


                        {/* ABOUT */}

                        <MenuRow
                            title="About"
                        />


                        {/* CONTACT */}

                        <MenuRow
                            title="Contact"
                        />


                        {/* BLOGS */}

                        <MenuRow
                            title="Blogs"
                            border="border-y"
                        />

                    </div>

                </div>

            </div>
        </>
    )
}

export default FullScreenNav