import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { VideoResume } from './sections/VideoResume'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Certifications } from './sections/Certifications'
import { Footer } from './sections/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-page text-[var(--text-primary)]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <VideoResume />
          <Experience />
          <Education />
          <Certifications />
          <Footer />
        </main>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
