import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="animate-fade-down min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <div className="">
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
    </div>
  );
}
