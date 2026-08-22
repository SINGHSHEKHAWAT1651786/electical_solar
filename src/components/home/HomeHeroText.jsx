import React from 'react'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] mt-72 lg:mt-0 pt-30 text-center'>

            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                Energy
            </div>

            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>

                Auto

                {/* Video between Auto and Mation */}
                <div className='h-[7vw] w-[16vw] rounded-full mt-1 overflow-hidden'>
                    <video
                        src="/video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                    />
                </div>

                Mation

            </div>

            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                Solar
            </div>

        </div>
    )
}

export default HomeHeroText