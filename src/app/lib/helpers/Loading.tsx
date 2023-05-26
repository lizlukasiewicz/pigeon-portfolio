import { useEffect, useRef, useState, MutableRefObject, RefObject, ReactNode } from "react";

export type PageProps = {
    pageRefs?: MutableRefObject<{}>,
    visible?: boolean,
    visRef?: RefObject<HTMLDivElement>,
    params?: any;
    children?: ReactNode;
  };
  
// 
export const useOnScreen = () => { //: [MutableRefObject<{}>, boolean]//[MutableRefObject<undefined>, boolean]
    const visRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState<boolean>(false);
  
    const callbackFunction = (entries: IntersectionObserverEntry[]) => {//: IntersectionObserverCallback
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
  