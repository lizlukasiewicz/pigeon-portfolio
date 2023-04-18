'use client';

import { ColorToggle } from './ColorToggle';
import {
  Button,
  Text
} from '@chakra-ui/react'
import { fadeDown } from '../lib/helpers/animation';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './nav.module.css'
import { Link } from '@chakra-ui/next-js'
import Sidebar from './Sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  const fadeDownAnim: string = `${fadeDown} 250ms 20ms forwards`;
  return(
    <div className={styles.navigation}>
      <Link 
        href="/"
      >
        <Image
        src="/Frame_14.png"
        alt="Pigeon Logo"
        className={styles.logo}
        width={70}
        height={70}
        priority
        />
      </Link>
      {/* <ColorToggle /> */}
      <div className={styles.pages}>
      
            <Link 
            className={styles.links}
            href="/about">
            <h2 className={inter.className}>
              About
            </h2>
            </Link>
            
            <Link 
            className={styles.links}
            href="/projects">
            <h2 className={inter.className}>
              Projects
            </h2>
            </Link>
            <Link 
            className={styles.links}
            href="/experience">
            <h2 className={inter.className}>
              Experience
            </h2>
            </Link>
            {/* <Link 
            className={styles.links}
            href="/blog">
            <h2 className={inter.className}>
              Blog
            </h2>
            </Link> */}
            
            <Link 
            className={styles.links}
            href="/contact">
            <h2 className={inter.className}>
              Contact
            </h2>
            </Link>
            <Button
              //animation={fadeDownAnim}
              as={"a"}
              color={'#00C484'}
              cursor={"pointer"}
              href={"https://u1a45ww-yt0y3c8.s3.amazonaws.com/Elizabeth_Lukasiewicz_resume_.pdf"}
              target={"_blank"}           
              fontFamily={"var(--chakra-fonts-mono)"}
              fontSize={'1.1rem'}
              position={"relative"}
              //transition={"100ms ease-out"}
              _hover={{color:"#FFFFFF"}}>
                <Text
                  as='b'>

                  Resume
                </Text>
              
            </Button>

            {/* <ColorToggle /> */}
          
      </div>

      <div className={styles.sidebar}>
      <Sidebar />
      </div>
        
        
    </div>
  )
}
