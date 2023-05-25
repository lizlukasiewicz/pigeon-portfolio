'use client'

import { VStack, useColorModeValue as uCMV } from "@chakra-ui/react";
import Navbar from './components/Navbar';
import Splash from './home/Splash';
import Social from "./components/Social";
import About from './about/About';
import ExperienceLayout from './experience/ExperienceLayout';
import ProjectLayout from './projects/ProjectLayout';
import Contact from './contact/Contact'
import { gradient } from "./lib/helpers/animation";

import {useRef, MutableRefObject} from "react";

import { useOnScreen } from './lib/helpers/Loading';
import { useNavigation } from './lib/helpers/useNav'


export default function Home() { 
  const pageRefs: MutableRefObject<{}> = useRef({});
  const [visRef1, visible1] = useOnScreen();
  const [visRef2, visible2] = useOnScreen();
  const [visRef3, visible3] = useOnScreen();
  const [visRef4, visible4] = useOnScreen();
  const [visRef5, visible5] = useOnScreen();

  const [y, scrollDir]: [number, string] = useNavigation();

  const breatheAnim: string = `${gradient} 6s ease infinite`

  return (
    <VStack 
      spacing={1}
      bgGradient={uCMV("linear(135deg, #FFFDF1, #FFEED5, #ECD9EA)", "linear(135deg, #131D30, #020405)")} //#FFF4E1, #FFEED5, #FFFAF1,   ##FFF4E1,
      bgSize={"400% 400%"}
      bgPosition={"51% 0%"}
      animation={breatheAnim}
      > 
        <Navbar 
          pageRefs={pageRefs}
          scrollDir={scrollDir}
          y={y}/>
        <Social 
          scrollDir={scrollDir}
          y={y}/>
        
        <Splash
          pageRefs={pageRefs}
          visible={visible1}
          visRef={visRef1} />
        
        <About 
          pageRefs={pageRefs}
          visible={visible2}
          visRef={visRef2}/>
        
        <ExperienceLayout 
          pageRefs={pageRefs}
          visRef={visRef3}
          visible={visible3}/>

        
        <ProjectLayout
          pageRefs={pageRefs}
          visRef={visRef4}
          visible={visible4}/>
        
        <Contact
          pageRefs={pageRefs}
          visRef={visRef5}
          visible={visible5}/>
    </VStack>
  )
}
