import Hero from './components/Hero'
import About from '../../components/About'
import Experience from '../../components/Experience'
import Skills from '../../components/Skills'
import Education from '../../components/Education'
import Contact from '../../components/Contact'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}

export default Home