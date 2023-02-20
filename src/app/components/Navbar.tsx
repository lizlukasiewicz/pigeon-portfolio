'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './nav.module.css'
import Link from 'next/link'
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
        width={60}
        height={60}
        priority
        />
      </Link>

      <div className={styles.sidebar}>
      <Sidebar />
      </div>
      <div className={styles.pages}>
            <h2>About</h2>
            
            <Link href="/projects">
            <h2>Projects</h2>
            </Link>
            
            <Link href="/blog">
            <h2>Blog</h2>
            </Link>
            
            <h2>Contact</h2>
            
            <h2>Resume</h2>
      </div>

        
        
    </div>
  )
}
