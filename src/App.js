import "./App.css";
import React, { useEffect } from "react";
import { Github } from "./Components/About/Github";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Contact } from "./Components/Contact/Contact";
import { Projects } from "./Components/Projects/Projects";
import { About } from "./Components/About/About";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import { useThemes } from "./Context/Theme";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
  const { themeName } = useThemes();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div id="top" className={`${themeName} app`}>
      <section id="#home">
        <Header />
      </section>
      <main>
        <About />
        <Github />
        <section id="#projects">{/* <Projects /> coming soon! */}</section>
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
