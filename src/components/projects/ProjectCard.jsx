
const ProjectCard = ({ projects, onProjectHover }) => {
  return (
    <div className="project-visual flex h-full w-full md:flex-row flex-col md:gap-4 gap-2">
      {projects.map((project) => (
        <a
          key={project.href}
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="md:w-1/2 w-full group transition-all duration-500 relative rounded-none hover:rounded-[70px] overflow-hidden h-1/2 md:h-full block"
          aria-label={`Voir le projet ${project.title}`}
          onMouseEnter={() => onProjectHover(project)}
          onMouseLeave={() => onProjectHover(null)}
          onFocus={() => onProjectHover(project)}
          onBlur={() => onProjectHover(null)}
        >

          {/* Project Image */}
          <img
            className="h-full w-full object-cover"
            src={project.image}
            alt={project.title}
          />

          {/* Hover Overlay */}
          <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 absolute inset-0 flex items-center justify-center bg-black/15">

            {/* Individual Project Name */}
            <span className="uppercase text-3xl md:text-6xl font-[font1] border-4 py-3 px-6 md:pt-4 md:px-8 text-white border-white rounded-full text-center">
              {project.title}
            </span>

          </span>

        </a>
      ))}
    </div>
  )
}

export default ProjectCard
