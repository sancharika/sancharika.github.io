
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Publication from "../components/sections/Publication";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Hero />
      <main role="main">
        <About />
        {/* Rest of the components called here */}
        <Skills />
        <Experience />
        <Projects />
        <Publication />
      </main>
      <Contact />
    </>
  );
}
