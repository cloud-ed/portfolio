import { projects } from "../data";
import CodeIcon from "@mui/icons-material/Code";

export default function Projects() {
  return (
    <section id="projects" className="px-4 md:px-8 lg:px-12 py-16 text-black">
      <div className="px-4 md:px-8 lg:px-12 max-w-custom mx-auto text-center">
        <div className="flex flex-col w-full mb-12">
          <CodeIcon className="mx-auto mb-4 text-green-600" fontSize="large" />
          <h1 className="sm:text-4xl text-3xl font-semibold mb-4">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            A collection of the projects I've worked on during my free time.
            Unfortunately, my recent injury had slowed this down, but I am
            returning to a functioning pace of work.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-200">
                <img
                  src={project.image}
                  alt="project thumbnail"
                  className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
                  <h2 className="text-sm font-medium text-green-600 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h1>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
