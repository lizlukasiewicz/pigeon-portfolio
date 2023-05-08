'use client'
import { Link } from '@chakra-ui/next-js'
import { VStack, Container } from "@chakra-ui/react";
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
  const [visRef, visible] = useOnScreen();
  const [visRef1, visible1] = useOnScreen();
  const [visRef2, visible2] = useOnScreen();
  const [visRef3, visible3] = useOnScreen();

  const [y, scrollDir]: [number, string] = useNavigation();
  return (
    <VStack 
      spacing={1}
      // 💥 REMOVE WHEN DONE FORMATTING //YELLOW
      //border={"1px solid rgb(243,186,64)"}
      > 
        <Navbar 
          pageRefs={pageRefs}
          scrollDir={scrollDir}
          y={y}/>
        <Social 
          scrollDir={scrollDir}
          y={y}/>
        
        <Splash 
        />
        
        <About 
          pageRefs={pageRefs}
          visible={visible}
          visRef={visRef}/>
        
        <ExperienceLayout 
          pageRefs={pageRefs}
          visRef={visRef1}
          visible={visible1}/>

        <GitCalendar 
          pageRefs={pageRefs}
          visible={visible2}
          visRef={visRef2}/>
        
        <ProjectLayout
          pageRefs={pageRefs}
          visRef={visRef3}
          visible={visible3}/>

    </VStack>
  )
}
