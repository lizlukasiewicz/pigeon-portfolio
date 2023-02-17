'use client';

import clsx from 'clsx';
import React from 'react';
import styles from './side.module.css'

const MobileNavContext = React.createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export function MobileNavContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <MobileNavContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </MobileNavContext.Provider>
  );
}

export function useMobileNavToggle() {
  const context = React.useContext(MobileNavContext);
  if (context === undefined) {
    throw new Error(
      'useMobileNavToggle must be used within a MobileNavContextProvider',
    );
  }
  return context;
}

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useMobileNavToggle();

  return(
    <>
    <button
      type='button'
      onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <p>X</p>
        ) : (
          <p>MenuIcon</p>
        )}

    </button>
    <div
        className={clsx(styles.first, {
          'fixed': isOpen,
          hidden: !isOpen,
        })}
        >
          {children}
        </div>

    </>
  )
}