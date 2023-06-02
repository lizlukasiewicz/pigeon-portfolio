'use client';
import Navbar from './components/Navbar';
import Social from './components/Social';
import { HomeContainer } from './ui/HomeContainer';
import { useRef } from "react";
import { useOnScreen } from './lib/helpers/Loading';
import { useNavigation } from './lib/helpers/useNav';

// The resource http://localhost:3000/_next/static/css/app/template.css?v=1685747208488 
// was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.

export default function Template({ children }: { children: React.ReactNode }) {
  // TODO: EXPORT INITIATION OF PAGEREFS HERE TO CHILDREN COMPONENTS FOR TEMPCONTAINER
  const pageRefs = useRef({})
  const [visRef, visible] = useOnScreen();
  const [y, scrollDir]: [number, string] = useNavigation();

  return (
    <HomeContainer>
        <Navbar 
          pageRefs={pageRefs}
          scrollDir={scrollDir}
          y={y}/>
        <Social 
          scrollDir={scrollDir}
          y={y}/>
       {children}
    </HomeContainer>
)}