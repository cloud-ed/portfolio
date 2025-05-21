import MemoryIcon from "@mui/icons-material/Memory";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { skills } from "../data";

export default function Skills() {
  return (
    <div id="skills" className="bg-white">
      <div className="container px-5 py-10 mx-auto px-4 md:px-8 lg:px-12 max-w-custom">
        <div className="text-center mb-20">
          <MemoryIcon className="w-10 inline-block mb-4" fontSize="large" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            These skills were learnt through my Bachelor's of Information
            Technology at QUT or self-taught and were further refined through
            personal study and projects.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <CheckCircleIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
