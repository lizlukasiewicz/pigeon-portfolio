
'use client';

import { demos, type Item } from '../lib/routes';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './side.module.css'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    return(
        <div className={styles.stack}>
            {/* <Link href="/">
                <Image
                src="/Frame_14.png"
                alt="Pigeon Logo"
                className={styles.logo}
                width={60}
                height={60}
                priority
                />
            </Link> */}
              {/* <button
                  type="button"
                  className={styles.button}
                  onClick={() => setIsOpen(!isOpen)}
              >

                  {isOpen ? (
                      <p>X</p>
                  ) : ( */}
              <Image src='/sidebar.svg' alt='menu-icon'  />
                  {/* )} */}
              {/* </button>
              <nav className={inter.className}>
                  {demos.map((section) => {
                  return (
                  <div key={section.name}>
                      <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                      <div>{section.name}</div>
                      </div>

                      <div className="space-y-1">
                      {section.items.map((item) => (
                          <GlobalNavItem key={item.slug} item={item} close={close} />
                      ))}
                      </div>
                  </div>
                  );
              })}
              </nav> */}
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
        className={styles.stack}
      >
        {item.name}
      </Link>
    );
  }
