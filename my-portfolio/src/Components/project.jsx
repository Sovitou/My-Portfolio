import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <div className="border-b border-neutral-50 pb-12">
      <h2 className="my-20 text-center text-4xl font-semibold">Project</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                className="rounded-2xl border-4 border-neutral-100 "
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
              />
            </div>
            <div className=" w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-medium">{project.title}</h6>
              <p className=" mb-2 text-neutral-500">{project.description}</p>
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 mt-8 rounded bg-slate-400 px-2 py-1 text-sm font-medium text-neutral-50"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
