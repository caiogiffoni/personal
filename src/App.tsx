import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBanner from "./components/StatsBanner";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Recommendations from "./components/Recommendations";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Box>
      <Navbar />
      <Box as="main">
        <Hero />
        <StatsBanner />
        <About />
        <Timeline />
        {/* <Projects /> */}
        <Skills />
        <Recommendations />
        <Contact />
      </Box>
      <Footer />
      <ScrollToTop />
    </Box>
  );
}

export default App;
