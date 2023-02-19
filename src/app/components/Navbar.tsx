'use client';

import Image from 'next/image'
import { demos, type Item } from '../lib/routes';
import { Inter } from '@next/font/google'
import styles from './nav.module.css'
import Link from 'next/link'
import { useState } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';

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
        {/* <div
          // overflow-y-auto lg:static lg:block
          className={clsx('pages', {
          // fixed inset-x-0 bottom-0 top-14 mt-px bg-black
          'dropdown': isOpen,
          hidden: !isOpen,
          })}
          >
            {demos.map((section) => { 
              return(
                // className={styles.pages}
                <div key={section.name} >
                {section.items.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                    
                ))}
                </div>
              )
            
            })}

        </div> */}
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
          
        )}
          {/* <div className={styles.pages}>
            <h2>About</h2>
            
            <Link href="/projects">
            <h2>Projects</h2>
            </Link>
            
            <Link href="/blog">
            <h2>Blog</h2>
            </Link>
            
            <h2>Contact</h2>
            
            <h2>Resume</h2>
          </div> */}

    </div>
  )
}
// function GlobalNavItem({
//   item,
//   close,
//   }: {
//   item: Item;
//   close: () => false | void;
//   }) {
//   const segment = useSelectedLayoutSegment();
//   const isActive = item.slug === segment;
  
//   return (
//     <Link
//     onClick={close}
//     href={`/${item.slug}`}
//     className={clsx(
//       // block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300
//       'globalNav1',
//       {
//       // text-gray-400 hover:bg-gray-800
//       'globalNav2': !isActive,
//       // text-white
//       'globalNav3': isActive,
//       },
//     )}
//     >
//     <h2>
//      {item.name}
//     </h2>
//     </Link>
//   );
//   }