import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {

    const currentPath = useLocation().pathname

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(function () {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(stairParentRef.current, { display: 'none' })
            gsap.set(pageRef.current, { clearProps: 'all' })
            return
        }

        const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })
        tl.set(stairParentRef.current, {
            display: 'block',
        })
        tl.from('.stair', {
            height: 0,
            duration: 0.22,
            stagger: {
                amount: 0.07,
            },
        })
        tl.to('.stair', {
            y: '100%',
            duration: 0.24,
            stagger: {
                amount: 0.07,
                from: 'end',
            },
        })
        tl.set(stairParentRef.current, {
            display: 'none',
        })
        tl.set('.stair', {
            y: '0%',
        })

        gsap.fromTo(pageRef.current, {
            opacity: 0,
            y: 4,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.25,
            delay: 0.2,
            ease: 'power1.out',
            clearProps: 'transform,opacity',
        })
    }, [currentPath])
    

    return (
        <div>
            <div ref={stairParentRef} className='pointer-events-none h-screen w-full fixed z-20 top-0'>
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs