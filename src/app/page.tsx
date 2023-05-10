'use client'

import { VStack } from "@chakra-ui/react";
import Navbar from './components/Navbar';
import Splash from './components/Splash'
import GitCalendar from "./components/GitCalendar"
import Social from "./components/Social"
import About from './about/About'
import ExperienceLayout from './experience/ExperienceLayout'
import ProjectLayout from './projects/ProjectLayout';

import * as React from "react";

import { useOnScreen } from './lib/helpers/Loading';
import { useNavigation } from './lib/helpers/useNav'


export default function Home() { 
  const pageRefs: React.MutableRefObject<{}> = React.useRef({});
  const [visRef1, visible1] = useOnScreen();
  const [visRef2, visible2] = useOnScreen();
  const [visRef3, visible3] = useOnScreen();
  const [visRef4, visible4] = useOnScreen();

  const [y, scrollDir]: [number, string] = useNavigation();
  return (
    <VStack 
      spacing={1}> 
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
        <GitCalendar />

    </VStack>
  )
}
