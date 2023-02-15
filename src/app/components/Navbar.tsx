import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './nav.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
    return(
        <div className={styles.navigation}>
            <Link href="/">
                <Image
                src="/Frame_14.png"
                alt="Pigeon Logo"
                className={styles.logo}
                width={60}
                height={60}
                priority
                />
            </Link>


            

            <h2 className={inter.className}>
                <span>About</span>
                
                <Link href="/projects">
                <span>Projects</span>
                </Link>
                
                <Link href="/blog">
                <span>Blog</span>
                </Link>
                
                <span>Contact</span>
                
                <span>Resume</span>
            </h2>



        </div>
    )
}