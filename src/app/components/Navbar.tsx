'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './nav.module.css'
import { Link } from '@chakra-ui/next-js'
import Sidebar from './Sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {

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
            href="/blog">
            <h2 className={inter.className}>
              Blog
            </h2>
            </Link>
            
            <Link 
            className={styles.links}
            href="/contact">
            <h2 className={inter.className}>
              Contact
            </h2>
            </Link>

            <Link 
            className={styles.links}
            href="/resume">
            <h2 className={inter.className}>
              Resume
            </h2>
            </Link>
      </div>

      <div className={styles.sidebar}>
      <Sidebar />
      </div>
        
        
    </div>
  )
}
