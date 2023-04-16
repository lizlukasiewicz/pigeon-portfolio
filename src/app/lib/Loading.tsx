import * as React from "react";

export type PageProps = {
    pageRefs?: React.MutableRefObject<{}>,
    visible?: boolean,
    visRef?: React.RefObject<Element>,
    params?: any;
    children?: React.ReactNode;
  };
  
// 
export const useOnScreen = (): [React.MutableRefObject<undefined>, boolean] => {
    const visRef = React.useRef();
    const [visible, setVisible] = React.useState(false);
  
    const callbackFunction: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setVisible(entry.isIntersecting);
    };
  
    React.useEffect(() => {
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
  