import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-50 pb-12">
      <h2 className="my-20 text-center text-4xl font-semibold">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center
          "
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-700">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role}-{" "}
                <span className="font-semibold text-blue-600">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-500">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-slate-400 px-2 py-1 text-sm font-medium text-neutral-50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
