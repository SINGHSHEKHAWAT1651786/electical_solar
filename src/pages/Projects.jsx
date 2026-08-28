import React from 'react'

const Projects = () => {
  return (
    <div className='p-4'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] text-[9.5vw] uppercase'>Projects</h2>
      </div>
      <div className='-mt-20'>
        <div className='w-full h-[700px] mb-4 flex gap-4'>
          <div className='w-1/2 transition-all rounded-none hover:rounded-[50px] overflow-hidden h-full'>
            <img className='w-full h-full object-cover' src="" alt="" />
            <div className='absolute top-0 left-0 h-full w-full bg-black'></div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
