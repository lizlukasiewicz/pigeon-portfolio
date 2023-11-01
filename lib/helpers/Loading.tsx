'use client'
import React from "react";
 
export const useOnScreen = () => { 
  const visRef = React.useRef();
  const [visible, setVisible] = React.useState<boolean>(false);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
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


//  Context variables for useOnScreen to update when visible on screen 
const HomeContext = React.createContext<
  [any, boolean | React.Dispatch<any> | React.MutableRefObject<any>] | undefined 
>(undefined);

const AboutContext = React.createContext<
  [any, boolean | React.Dispatch<any> | React.MutableRefObject<any>] | undefined 
>(undefined);

const ExperienceContext = React.createContext<
  [any, boolean | React.Dispatch<any> | React.MutableRefObject<any>] | undefined 
>(undefined);

const ProjectContext = React.createContext<
  [any, boolean | React.Dispatch<any> | React.MutableRefObject<any>] | undefined 
>(undefined);

const ContactContext = React.createContext<
  [any, boolean | React.Dispatch<any> | React.MutableRefObject<any>] | undefined 
>(undefined);


// passing values within provider since props requires use client
export function HomeProvider({children}: {children: React.ReactNode}){
  const [visRef, visible] = useOnScreen();
  return (
    <HomeContext.Provider value={[visRef, visible]}>
      {children}
    </HomeContext.Provider>
  )
}
export function AboutProvider({children}: {children: React.ReactNode}){
  const [visRef, visible] = useOnScreen();
  return (
    <AboutContext.Provider value={[visRef, visible]}>
      {children}
    </AboutContext.Provider>
  )
}
export function ExperienceProvider({children}: {children: React.ReactNode}){
  const [visRef, visible] = useOnScreen();
  return (
    <ExperienceContext.Provider value={[visRef, visible]}>
      {children}
    </ExperienceContext.Provider>
  )
}
export function ProjectProvider({children}: {children: React.ReactNode}){
  const [visRef, visible] = useOnScreen();
  return (
    <ProjectContext.Provider value={[visRef, visible]}>
      {children}
    </ProjectContext.Provider>
  )
}
export function ContactProvider({children}: {children: React.ReactNode}){
  const [visRef, visible] = useOnScreen();
  return (
    <ContactContext.Provider value={[visRef, visible]}>
      {children}
    </ContactContext.Provider>
  )
}


// function within component to catch when on screen
export function homeVisible() {
  const visibleRef = React.useContext(HomeContext);

  if (visibleRef === undefined ){
    throw new Error('useVisible must be used within visibleRefProvider');
  }
  return visibleRef;
}

export function aboutVisible() {
  const visibleRef = React.useContext(AboutContext);

  if (visibleRef === undefined ){
    throw new Error('useVisible must be used within visibleRefProvider');
  }
  return visibleRef;
}

export function experienceVisible() {
  const visibleRef = React.useContext(ExperienceContext);

  if (visibleRef === undefined ){
    throw new Error('useVisible must be used within visibleRefProvider');
  }
  return visibleRef;
}

export function projectVisible() {
  const visibleRef = React.useContext(ProjectContext);

  if (visibleRef === undefined ){
    throw new Error('useVisible must be used within visibleRefProvider');
  }
  return visibleRef;
}

export function contactVisible() {
  const visibleRef = React.useContext(ContactContext);

  if (visibleRef === undefined ){
    throw new Error('useVisible must be used within visibleRefProvider');
  }
  return visibleRef;
}