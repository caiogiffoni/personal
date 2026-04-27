import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBanner from './components/StatsBanner'
import About from './components/About'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Box>
      <Navbar />
      <Box as="main">
        <Hero />
        <StatsBanner />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </Box>
      <Footer />
    </Box>
  )
}

export default App
