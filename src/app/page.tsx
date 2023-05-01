'use client'
import { Link } from '@chakra-ui/next-js'
import { VStack, Container } from "@chakra-ui/react";
import Navbar from './components/Navbar';
import Splash from './components/Splash'
import GitCalendar from "./components/GitCalendar"
import Social from "./components/Social"
import About from './about/About'
import ExperienceLayout from './experience/ExperienceLayout'

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
          visible={visible1}
          visRef={visRef1}/>
        
        <ExperienceLayout 
          pageRefs={pageRefs}
          visRef={visRef2}
          visible={visible2}/>

        <GitCalendar 
          pageRefs={pageRefs}
          visible={visible}
          visRef={visRef}/>

{/* 
        <div className={styles.grid}>
          
          {demos.map((section) => {
            return(
              <div className={styles.card} key={section.name}>
                <Link
                  
                  href={section.slug}
                  key={section.name}
                  >
                    <h2 className={inter.className}>{section.name}</h2></Link>
                    <br></br>
                    <p>{section.description}</p>
                    <div className={styles.subcards}>
                        {section.items ? ( section.items.map((item) => {
                          return (
                            <div className={styles.subcard} key={item.name}>
                              <Link
                                
                                href={`${section.slug}/${item.slug}`}
                                key={item.name}
                                className={styles.thirteen}
                              >
                                <h2 className={inter.className}>
                                  {item.name}
                                </h2>
                              
                              </Link>
                              <p>{item.bullet1}</p>
                              <p>{item.bullet2}</p>
                            </div>
                            );
                        })): null}
                  </div>
              </div>
            )
          })}
        </div>
       */}
    </VStack>
  )
}
