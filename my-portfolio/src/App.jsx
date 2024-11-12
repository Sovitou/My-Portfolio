import "./style/index.css";
// import "../src/Components/navbar";
import Navbar from "./Components/navbar";
import Hero from "./Components/hero";
import Aboutme from "./Components/aboutme";
import Technology from "./Components/technology";
import Experience from "./Components/experience";
import Project from "./Components/project";
import Contact from "./Components/contact";

export default function App() {
  return (
    <div>
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
