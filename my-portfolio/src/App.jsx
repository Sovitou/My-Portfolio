import "./style/index.css";
import Navbar from "./Components/navbar";
import Hero from "./Components/hero";
import Aboutme from "./Components/aboutme";
import Technology from "./Components/technology";
import Experience from "./Components/experience";
import Project from "./Components/project";
import Contact from "./Components/contact";

export default function App() {
  return (
    <div className="relative min-h-full">
      {/* Background */}
      <div className="absolute inset-0 -z-10 min-w-full min-h-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute inset-x-0 top-0 -z-10 m-auto size-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
      </div>
      
      {/* Components */}
      <Navbar />
      <Hero />
      <Aboutme />
      <Technology />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}
