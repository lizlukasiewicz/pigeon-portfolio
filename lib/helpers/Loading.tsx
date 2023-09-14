'use client'
import { useEffect, useRef, useState } from "react";
 
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
