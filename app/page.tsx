import dynamic from 'next/dynamic'

import Splash from "./home/home"
// import About from "./about/about"
//import Experience from "./@experience/page"
//import Contact from "./contact/contact"

const About=dynamic(() => import('./about/about'), { ssr: false })
const Experience=dynamic(() => import('./@experience/page'))
const Project=dynamic(() => import('./@projects/page'))
const Contact = dynamic(() => import('./contact/contact'), { ssr: false })

export default function Home() { 
  return(
    <div>
      <Splash />
      <About />
      <Experience />
      <Project />
      <Contact />
        <p>footer</p>
    </div>
  )
}