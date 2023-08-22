import dynamic from 'next/dynamic'

import Splash from "./home/home"

const About=dynamic(() => import('./about/about'))
const Experience=dynamic(() => import('./@experience/page'))
const Project=dynamic(() => import('./@projects/page'))
const Contact = dynamic(() => import('./contact/contact'))//, { ssr: false }

export default function Home() { 
  return(
    <div 
    //className="flex flex-col w-full items-center space-x-5 bg-blend-gradient bg-zoom animate-[gradient_6s_ease_infinite]"
    >
      <Splash />
      <About />
      <Experience />
      <Project />
      <Contact />
        {/* <p>footer</p> */}
    </div>
  )
}