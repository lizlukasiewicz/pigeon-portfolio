'use client';

import styles from './side.module.css'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'

const navItems = {
  '/': {
    name: 'home',
    x: 0,
    y: 0,
    w: '64px',
  },
  '/about': {
    name: 'about',
    x: 64,
    y: 35,
    w: '65px',
  },
  '/blog': {
    name: 'blog',
    x: 127,
    y: 69,
    w: '56px',
  }

};

function Logo() {
  return (
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
  );
}

export default function Sidebar() {
  let pathname = usePathname();
  

  return (
    <aside >
      <div >
        <div >
          <Logo />
        </div>

        <nav id="nav">
          <div >

                {/* Desktop version, hidden on mobile, animates y axis */}

                {/* Mobile version, hidden on desktop, animates x axis */}
                

            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;

              return (
                <Link
                  key={path}
                  href={path}
                  className={styles.side}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
