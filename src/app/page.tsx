import Section from './section/Section'
import Aboutme from './pages/about'
import Skills from './pages/skills'
import Contact from './pages/conact'
export default function Home() {
  return (
      <main>
        <Section/>
        <Aboutme/>
        <Skills/>
        <Contact/>
      </main>
     );
}
