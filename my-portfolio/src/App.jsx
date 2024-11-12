import React from "react";
import "./style/index.css";
// import "../src/Components/navbar";
import Navbar from "./Components/navbar";
import Hero from "./Components/hero";
import Aboutme from "./Components/aboutme";

export default function App() {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <Aboutme />
    </div>
  );
}
