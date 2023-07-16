'use client'
import { VStack, useColorModeValue as uCMV } from "@chakra-ui/react";
import { gradient } from "../lib/helpers/animation";
import Navbar from "app/components/Navbar";
import Social from "app/components/Social";
import { useOnScreen } from 'lib/helpers/Loading';
import { useNavigation } from 'lib/helpers/useNav';
import Splash from "app/home/Splash";
import About from "app/about/About";
import ExperienceLayout from "app/experience/ExperienceLayout";
import ProjectLayout from "app/projects/ProjectLayout";
import Contact from "app/contact/Contact";


export default function Home() { 
  const [homeRef, homeVisible] = useOnScreen();
  const [aboutRef, aboutVisible] = useOnScreen();
  const [contactRef, contactVisible] = useOnScreen();
  const [expRef, expVisible] = useOnScreen();
  const [projectRef, projectVisible] = useOnScreen();
  const [y, scrollDir]: [number, string] = useNavigation();
  const breatheAnim: string = `${gradient} 6s ease infinite`
  return(
    <VStack 
      width={"100%"}
      spacing={5}
      // paddingX={"5vw"}
      bgGradient={uCMV("linear(135deg, #FFFDF1, #FFEED5, #ECD9EA)", "linear(135deg, #131D30, #020405)")}
      bgSize={"400% 400%"}
      bgPosition={"51% 10%"}
      animation={breatheAnim}> 
        <Navbar 
          scrollDir={scrollDir}
          y={y}/>
        <Social 
          scrollDir={scrollDir}
          y={y}/>
        
        <Splash
            visRef={homeRef}
            visible={homeVisible} />
        
        <About 
          visRef={aboutRef}
          visible={aboutVisible}/>

        <ExperienceLayout 
            visRef={expRef}
            visible={expVisible}/>

        
        <ProjectLayout
          visRef={projectRef}
          visible={projectVisible}/>

        <Contact
          visRef={contactRef}
          visible={contactVisible}/>
      </VStack>
  )
}