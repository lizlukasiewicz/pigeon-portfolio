// import Image from 'next/image'
'use client'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { demos } from './lib/routes'
import { Link } from '@chakra-ui/next-js'
import Splash from './Splash'
import GitCalendar from "./components/GitCalendar"
import * as React from "react";

import { useOnScreen } from './lib/Loading';

const inter = Inter({ subsets: ['latin'] })


export default function Home() { 
  const pageRefs: React.MutableRefObject<{}> = React.useRef({});
  const [visRef, visible] = useOnScreen();

  return (
    <div>
      
      <Splash />
      
      
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
      <GitCalendar 
        pageRefs={pageRefs}
        visible={visible}
        visRef={visRef}
        />
    </div>
  )
}
