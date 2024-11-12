import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Technology = () => {
  return (
    <div className="border-b border-neutral-50 pb-12">
      <h2 className="my-20 text-center text-4xl font-semibold">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-100 p-4">
          <FaHtml5 className="text-7xl text-red-500 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-100 p-4">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-100 p-4">
          <FaSquareJs className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-100 p-4">
          <FaReact className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-100 p-4">
          <RiTailwindCssFill className="text-7xl text-sky-500" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
