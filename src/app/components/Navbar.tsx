'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './nav.module.css'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
export type Item = {
    name: string;
    slug: string;
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);

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


            <div className={styles.pages}>
                <table className={inter.className}>
                    MenuIcon
                    {/* <Image src='/sidebar.svg' alt='menu-icon' width={50} height={50} /> */}
                
                </table>
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
function GlobalNavItem({
    item,
    close,
  }: {
    item: Item;
    close: () => false | void;
  }) {
    const segment = useSelectedLayoutSegment();
    const isActive = item.slug === segment;
  
    return (
      <Link
        onClick={close}
        href={`/${item.slug}`}
        className={clsx(styles.linkitem,
        //   'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
          {
            'color: rgba(0, 196, 132, 1);': !isActive,
            'color: rgba(225, 225, 225, 0.9);': isActive,
          },
        )}
      >
        {item.name}
      </Link>
    );
  }