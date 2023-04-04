'use client'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { demos } from './lib/routes'
import { Link } from '@chakra-ui/next-js'
import { VStack, Container } from "@chakra-ui/react";
import Splash from './components/Splash'
import GitCalendar from "./components/GitCalendar"
import About from './about/About'
import * as React from "react";

import { useOnScreen } from './lib/Loading';

const inter = Inter({ subsets: ['latin'] })


export default function Home() { 
  const pageRefs: React.MutableRefObject<{}> = React.useRef({});
  const [visRef, visible] = useOnScreen();
  const [visRef2, visible2] = useOnScreen();
  const [visRef3, visible3] = useOnScreen();

  return (
    <VStack spacing={0}
    // 💥 REMOVE WHEN DONE FORMATTING
    border={"1px solid rgb(243,186,64)"} //YELLOW
    >
      
      <Splash pageRefs={pageRefs}
        visible={visible2}
        visRef={visRef2}/>
      
      <About pageRefs={pageRefs}
        visible={visible3}
        visRef={visRef3}/>
        <GitCalendar 
        pageRefs={pageRefs}
        visible={visible}
        visRef={visRef}
        />
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
                            {/* <p>{item.bullet2}</p> */}
                          </div>
                          );
                      })): null}
                </div>
            </div>
          )
        })}
      </div>
      
    </VStack>
  )
}
