import * as React from "react";

export type PageProps = {
    pageRefs?: React.MutableRefObject<{}>,//React.RefObject<HTMLDivElement>,//React.MutableRefObject<Record<string, Element>>,
    visible?: boolean,
    visRef?: React.RefObject<Element>,
    params?: any;
    children?: React.ReactNode;
  };
  
// 
export const useOnScreen = (): [React.MutableRefObject<undefined>, boolean] => {//[React.RefObject<Element>, boolean] => {
    const visRef = React.useRef();//<HTMLDivElement>(null);
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
  

  export const useNavigation = (): [number, string] => {
    const [y, setY] = React.useState<number>(window.scrollY);
    const [scrollDir, setScrollDir] = React.useState<string>("");
  
    const handleNavigation = React.useCallback(
      e => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
          setScrollDir("up");
        } else if (y < window.scrollY) {
          setScrollDir("down");
        };
        setY(window.scrollY);
      }, [y]
    );
    
    React.useEffect(() => {
      setY(window.scrollY);
      window.addEventListener("scroll", handleNavigation);
      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }, [handleNavigation]);
  
    return [y, scrollDir];
}