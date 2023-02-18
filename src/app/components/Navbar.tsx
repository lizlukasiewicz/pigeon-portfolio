'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './nav.module.css'
import Link from 'next/link'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);

    return(
        <div className={styles.navigation}>
            <Link 
                href="/"
                onClick={close}
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


            <div className={styles.pages}>
                <button 
                    type='button' 
                    className={inter.className}
                    onClick={() => setIsOpen(!isOpen)}
                    >
                    
                    {/* <Image src='/sidebar.svg' alt='menu-icon' width={50} height={50} /> */}
                    {isOpen ? (
                        <p>X</p>
                    ) : (
                        <p>MenuIcon</p>
                    )}
                </button>
                {isOpen ? (
                    // TODO: FORMAT THIS TO DROP DOWN BELOW NAVBAR
                    // TODO: ADD ROUTING LINKS
                    <div className={styles.dropdown}>
                        <h2>About</h2>
                        <Link
                            onClick={close}
                            href="/projects"
                            >
                                <h2>Projects</h2>

                        </Link>
                        <Link
                            onClick={close}
                            href="/blog"
                            >
                                <h2>Blog</h2>

                        </Link>
                        <h2>Contact</h2>
                    
                        <h2>Resume</h2>
                    </div>
                ) : (
                    <p>MenuIcon</p>
                    
                )}
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
