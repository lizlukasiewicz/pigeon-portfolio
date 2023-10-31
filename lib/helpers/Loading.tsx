'use client'
import { useEffect, useRef, useState } from "react";
import React from "react";
 
export const useOnScreen = () => { 
  const visRef = useRef();
  const [visible, setVisible] = useState<boolean>(false);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    });
    const vis = visRef.current;
    if (vis) observer.observe(vis);
    return () => {
      if (vis) observer.unobserve(vis);
    };
  }, [visRef]);

  return [visRef, visible];
};

// TODO: bug- createContext for every component (🥲)
// const ScreenContext = React.createContext < [val, React.Dispatch <React.SetStateAction<val>>] | undefined > (undefined)
const OnScreenContext = React.createContext<
  [any, boolean | React.Dispatch<any> | React.MutableRefObject<any>] | undefined //boolean, React.Dispatch<React.SetStateAction<boolean>>, object, React.Dispatch<React.SetStateAction<object>>
>(undefined);


export function VisRefProvider({children}: {children: React.ReactNode}){
  const [visRef, visible] = useOnScreen();
  return (
    <OnScreenContext.Provider value={[visRef, visible]}>
      {children}
    </OnScreenContext.Provider>
  )
}


export function useVisible() {
  const visibleRef = React.useContext(OnScreenContext);

  if (visibleRef === undefined ){
    throw new Error('useVisible must be used within visibleRefProvider');
  }
  return visibleRef;
}

