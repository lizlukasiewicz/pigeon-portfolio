import * as React from "react";

// type OptionsType = IntersectionObserverInit;

// const useElementOnScreen = (options: OptionsType): [React.RefObject<HTMLDivElement>, boolean] => {
//   const visRef = React.useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = React.useState(false);

//   const callbackFunction: IntersectionObserverCallback = (entries) => {
//     const [entry] = entries;
//     setVisible(entry.isIntersecting);
//   };

//   React.useEffect(() => {
//     const observer = new IntersectionObserver(callbackFunction, options);

//     if (visRef.current) {
//       observer.observe(visRef.current);
//     }

//     return () => {
//       if (visRef.current) {
//         observer.unobserve(visRef.current);
//       }
//     };
//   }, [visRef, options]);

//   return [visRef, visible];
// };

export const useOnScreen = (): [React.RefObject<Element>, boolean] => {
    const visRef = React.useRef<Element>(null);
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
  


//   import {
//     About,
//     Contact,
//     Experience,
//     Footer,
//     Home,
//     Nav,
//     Projects,
//     Social
// } from "./components";
// import useOnScreen from "./useOnScreen";
// import { MutableRefObject, useRef } from "react";

// export const App = () => {
//     const pageRefs: MutableRefObject<{}> = useRef({});
//     const sectionData: [React.MutableRefObject<undefined>, boolean][] = [
//         useOnScreen(),
//         useOnScreen(),
//         useOnScreen(),
//         useOnScreen(),
//         useOnScreen()
//     ];
//     const [y, scrollDir]: [number, string] = useNavigation();

//     return (
//         <VStack spacing={0}>
//             <Nav
//                 pageRefs={pageRefs}
//                 scrollDir={scrollDir}
//                 y={y} />
//             <Social
//                 scrollDir={scrollDir}
//                 y={y} />
//             {[
//                 <Home pageRefs={pageRefs} />,
//                 <About pageRefs={pageRefs} />,
//                 <Experience pageRefs={pageRefs} />,
//                 <Projects pageRefs={pageRefs} />,
//                 <Contact pageRefs={pageRefs} />
//             ].map((section, index) => {
//                 const [visRef, visible] = sectionData[index];
//                 return React.cloneElement(section, { visRef, visible, key: index });
//             })}
//             <Footer />
//         </VStack>
//     );
// };
