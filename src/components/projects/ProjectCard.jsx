
import { useState } from 'react'
import { ImageOff, LoaderCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProjectImage = ({ project }) => {
  const [status, setStatus] = useState('loading')

  return (
    <div className='absolute inset-0 bg-[#111315]'>
      {status === 'loading' && (
        <span
          className='absolute inset-0 z-10 flex items-center justify-center text-white/70'
          role='status'
          aria-label={`Loading ${project.title}`}
        >
          <LoaderCircle size={24} className='animate-spin' aria-hidden='true' />
        </span>
      )}
      {status === 'error' ? (
        <span className='absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/70' role='img' aria-label={`${project.title} image unavailable`}>
          <ImageOff size={24} aria-hidden='true' />
          <span className='text-xs uppercase tracking-[0.12em]'>Image unavailable</span>
        </span>
      ) : (
        <img
          className='h-full w-full object-cover'
          src={project.image}
          alt={project.title}
          loading='lazy'
          decoding='async'
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
    </div>
  )
}

const ProjectCard = ({ projects, onProjectHover }) => {
  return (
    <div className="project-visual flex h-full w-full md:flex-row flex-col md:gap-4 gap-2">
      {projects.map((project) => (
        (() => {
          const isInternal = project.href.startsWith('/')
          const CardLink = isInternal ? Link : 'a'

          return (
            <CardLink
              key={`${project.title}-${project.type}`}
              {...(isInternal
                ? { to: project.href }
                : { href: project.href, target: '_blank', rel: 'noreferrer' })}
              className='group relative block h-1/2 w-full overflow-hidden transition-transform duration-300 hover:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#00aeea] md:h-full md:w-1/2'
              aria-label={`View ${project.title} sample: ${project.type}`}
              onMouseEnter={() => onProjectHover(project)}
              onMouseLeave={() => onProjectHover(null)}
              onFocus={() => onProjectHover(project)}
              onBlur={() => onProjectHover(null)}
            >
              <ProjectImage project={project} />

              <span className='absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/35 group-focus-visible:bg-black/35'>
                <span className='font-[font1] text-2xl uppercase text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:text-4xl'>
                  {project.title}
                </span>
              </span>

              <span className='absolute bottom-4 left-4 flex items-center gap-2 bg-black/70 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-white backdrop-blur-sm'>
                <span>{project.type}</span>
                <span className='text-[#00aeea]'>/</span>
                <span>{project.year}</span>
              </span>
            </CardLink>
          )
        })()
      ))}
    </div>
  )
}

export default ProjectCard
