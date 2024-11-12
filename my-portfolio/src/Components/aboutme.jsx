import Aboutmepic from "../Asset/About me.jpg";
import { ABOUT_TEXT } from "../constants";

const Aboutme = () => {
  return (
    <div className="border border-neutral-50 pb-12">
      <h2 className="my-20 text-center text-4xl font-semibold">About Me</h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              src={Aboutmepic}
              alt="about me"
              className="w-64 h-128 shadow hover:shadow-lg rounded-2xl "
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
