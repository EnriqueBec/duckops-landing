import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Proyects from "./components/Proyects/Proyects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";
import Carousel from "./components/Carousel/Carousel";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App(){

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
  });

  window.addEventListener("scroll", AOS.refresh);
}, []);

  return(
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Proyects />
      <Carousel />
      <Contact />
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;