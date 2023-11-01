import { HomeProvider, AboutProvider, ExperienceProvider, ProjectProvider, ContactProvider } from 'lib/helpers/Loading'
import Splash from "./home/home"
import About from './about/about'
import Experience from './@experience/Experience'
import Projects from './@projects/Projects'
import Contact from './contact/contact'

export default function Home() { 
  return(
    <div className='min-w-full'>
        <HomeProvider>
          <Splash />
        </HomeProvider>
        
        <AboutProvider>
          <About />
        </AboutProvider>

        <ExperienceProvider>
          <Experience />
        </ExperienceProvider>

        <ProjectProvider>
          <Projects />
        </ProjectProvider>
        
        <ContactProvider>
          <Contact />
        </ContactProvider>
        
    </div>
  )
}