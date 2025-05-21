import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gray-50">
      <main className="text-black body-font mx-auto">
        <Navbar />
        <About />
        <hr className="border-gray-200" />
        <Projects />
        <hr className="border-gray-200" />
        <Skills />
        <hr className="border-gray-200" />
        <Contact />
      </main>
    </div>
  );
}
