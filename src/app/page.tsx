import Section from './section/Section'
import Aboutme from './pages/about'
import Skills from './pages/skills'
import Project from './pages/project'
import Contact from './pages/conact'
export default function Home() {
  return (
      <main>
        <Section/>
        <Aboutme/>
        <Project/>
        <Skills/>
        <Contact/>
      </main>
     );
}
