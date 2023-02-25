'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './nav.module.css'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import Sidebar from './Sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {

  return(
    <div className={styles.navigation}>
      <Link 
        as={NextLink}
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
            as={NextLink}
            href="/about">
            <h2>About</h2>
            </Link>
            
            <Link 
            as={NextLink}
            href="/projects">
            <h2>Projects</h2>
            </Link>
            
            <Link 
            as={NextLink}
            href="/blog">
            <h2>Blog</h2>
            </Link>
            
            <Link 
            as={NextLink}
            href="/contact">
            <h2>Contact</h2>
            </Link>

            <Link 
            as={NextLink}
            href="/resume">
            <h2>Resume</h2>
            </Link>
      </div>

      <div className={styles.sidebar}>
      <Sidebar />
      </div>
        
        
    </div>
  )
}
