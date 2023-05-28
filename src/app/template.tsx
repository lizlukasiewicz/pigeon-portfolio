'use client';
import Navbar from './components/Navbar';
import Social from './components/Social';
import { HomeContainer } from './ui/HomeContainer';
import {useRef } from "react";
import { useOnScreen } from './lib/helpers/Loading';
import { useNavigation } from './lib/helpers/useNav';


export default function Template({ children }: { children: React.ReactNode }) {
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