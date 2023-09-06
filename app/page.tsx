'use client'
import { useOnScreen } from 'lib/helpers/Loading'
import Splash from "./home/home"
import About from './about/about'
import Experience from './@experience/Experience'
import Projects from './@projects/Projects'
import Contact from './contact/contact'

export default function Home() { 
  const [homeRef, homeVisible] = useOnScreen();
  const [aboutRef, aboutVisible] = useOnScreen();
  const [expRef, expVisible] = useOnScreen();
  const [projectRef, projectVisible] = useOnScreen();
  const [contactRef, contactVisible] = useOnScreen();

  return(
    <div className='min-w-full'>
      <Splash visRef={homeRef} visible={homeVisible}/>
      <About visRef={aboutRef} visible={aboutVisible}/>
      <Experience visRef={expRef} visible={expVisible}/>
      <Projects visRef={projectRef} visible={projectVisible}/>
      <Contact visRef={contactRef} visible={contactVisible}/>
    </div>
  )
}