'use client'
import { VStack, useColorModeValue as uCMV } from "@chakra-ui/react";
import { gradient } from "../lib/helpers/animation";
import Navbar from "app/components/Navbar";
import Social from "app/components/Social";
import { useRef } from "react";
import { useOnScreen } from 'lib/helpers/Loading';
import { useNavigation } from 'lib/helpers/useNav';
import Splash from "app/home/Splash";
import About from "app/about/About";
import ExperienceLayout from "app/experience/ExperienceLayout";
import ProjectLayout from "app/projects/ProjectLayout";
import Contact from "app/contact/Contact";


export default function Home() { 
  // TODO: EXPORT INITIATION OF PAGEREFS HERE TO CHILDREN COMPONENTS FOR TEMPCONTAINER
  const pageRefs: React.MutableRefObject<{}> = useRef({});
  const [homeRef, homeVisible] = useOnScreen();
  const [aboutRef, aboutVisible] = useOnScreen();
  const [contactRef, contactVisible] = useOnScreen();
  const [expRef, expVisible] = useOnScreen();
  const [projectRef, projectVisible] = useOnScreen();
  const [y, scrollDir]: [number, string] = useNavigation();
  const breatheAnim: string = `${gradient} 6s ease infinite`
  return(
    <VStack 
      spacing={1}
      bgGradient={uCMV("linear(135deg, #FFFDF1, #FFEED5, #ECD9EA)", "linear(135deg, #131D30, #020405)")} //#FFF4E1, #FFEED5, #FFFAF1,   ##FFF4E1,
      bgSize={"400% 400%"}
      bgPosition={"51% 0%"}
      animation={breatheAnim}> 
        <Navbar 
          pageRefs={pageRefs}
          scrollDir={scrollDir}
          y={y}/>
        <Social 
          scrollDir={scrollDir}
          y={y}/>
        
        <Splash
            pageRefs={pageRefs}
            visRef={homeRef}
            visible={homeVisible} />
        
        <About 
          pageRefs={pageRefs}
          visRef={aboutRef}
          visible={aboutVisible}/>

        <ExperienceLayout 
            pageRefs={pageRefs}
            visRef={expRef}
            visible={expVisible}/>

        
        <ProjectLayout
          pageRefs={pageRefs}
          visRef={projectRef}
          visible={projectVisible}/>

        <Contact
          pageRefs={pageRefs}
          visRef={contactRef}
          visible={contactVisible}/>
      </VStack>
  )
}