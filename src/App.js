import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import Hero from "./Components/Hero/hero";
import Navbar from "./Components/Navbar/navbar";
import Projects from "./Components/Projects/projects";
import Services from "./Components/Services/services";
import Skills from "./Components/Skills/skills";


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
