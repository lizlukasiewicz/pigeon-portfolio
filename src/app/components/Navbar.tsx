'use client';

import { ColorToggle } from './ColorToggle';
import {
  Button,
  Text,
  Heading,
  useMediaQuery,
  HStack,
} from '@chakra-ui/react'
import * as React from "react";
import { fadeDown } from '../lib/helpers/animation';
import Image from 'next/image'
import { Link } from '@chakra-ui/next-js'
import Sidebar from './Sidebar';

import styles from './nav.module.css'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

interface PageProps {
  pageRefs: React.MutableRefObject<{}>,
  scrollDir: string | number,
  y: string | number,
}

export default function Navbar({ pageRefs, scrollDir, y }: PageProps) {
  const fadeDownAnim: string = `${fadeDown} 250ms 20ms forwards`;
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [isLargeScreen]: boolean[] = useMediaQuery("(min-width: 1050px)");

  React.useEffect((): void => {
    isLargeScreen && setMenuOpen(false)
  }, [isLargeScreen]);

  return(
    <React.Fragment>
      <HStack
        align={"center"}
        backdropFilter='auto' 
        backdropBlur='24px'
        boxShadow={
          menuOpen
              ? "none"
              : y !== 0 && scrollDir === "up" 
                  ? "dark-lg" 
                  : "none" }
        height={y !== 0 && scrollDir === "up" ? 65 : 100}
                justify={"center"}
                position={"fixed"}
                top={y > 80 && scrollDir === "down" ? -110 : 0}
                transition={"200ms ease-out"}
                width={"100%"}
                zIndex={3}>

      


    {/* {styles.navigation}> */}
    <HStack
      animation={fadeDownAnim}
      left={isLargeScreen ? 10 : 5}
      position={"absolute"}
      transition={"200ms ease-out"}>
          <Link 
            href="/">

            <Image
                src="/Frame_14.png"
                alt="Pigeon Logo"
                className={styles.logo}
                width={70}
                height={70}
                priority />

          </Link>
          {/* <ColorToggle /> */}
      </HStack>
      
      <HStack
        align={"center"}
        fontSize={13}
        justify={"center"}
        paddingX={5}
        position={"absolute"}
        right={isLargeScreen ? 5 : 0}
        spacing={7}
        transition={"200ms ease-out"}>
                    
        {isLargeScreen ? 
          <NavBarRoutes />
          :
          <Sidebar 
          menuOpen={menuOpen} //  {styles.sidebar}>
          setMenuOpen={setMenuOpen}/>
        }
        </HStack>
        {/* NAVIGATION  BAR */}
      {/* <div className={styles.pages}>
      
      </div> */}

        
    </HStack>
    {/* </div> */}
    </React.Fragment>
  )
}
export const NavButton = ({ label, delay, href}: {label: string; delay: string; href: string;} ) => {
  const fadeDownAnim: string =`${fadeDown} 250ms ${delay} forwards`;
  return (
    <Link
    href={href}>
      <Heading
          fontWeight={"bold"}
          animation={fadeDownAnim}
          cursor={"pointer"}
          fontSize={{ base: 'lg', sm: 'xl', md: "2xl" }}
          fontFamily={"var(--chakra-fonts-mono)"}
          color={"#00C484"}
          opacity={0}
          px={"0.5rem"}
          py={"1rem"}
          // position={"relative"}
          transition={"100ms ease-out"}
          _before={{
            backgroundColor: "#008582",
            borderRadius: "2px",
            bottom: -1,
            content: `""`,
            height: "2px",
            position: "absolute",
            transition: "100ms ease-out",
            width: 0 
          }}
          _hover={{
            color: "#E1E1E1",
            _before: { width: "105%" } }}
            >
          {label}
      </Heading>
    </Link>
  );
};

export const NavBarRoutes= () => (
  <React.Fragment>
    <NavButton label="About" delay={"0ms"} href={"/about"} />
    <NavButton label="Projects" delay={"60ms"} href={"/projects"} />
    <NavButton label="Experience" delay={"120ms"} href={"/experience"} />
    <NavButton label="Contact" delay={"180ms"} href={"/contact"} />
    <ResumeButton />
  </React.Fragment>

);

export const ResumeButton = () => {
  const fadeDownAnim: string = `${fadeDown} 200ms 300ms forwards`;

  return (
    <Button
              animation={fadeDownAnim}
              as={"a"}
              color={'#00C484'}
              cursor={"pointer"}
              href={"https://u1a45ww-yt0y3c8.s3.amazonaws.com/Elizabeth_Lukasiewicz_resume_.pdf"}
              target={"_blank"}           
              fontFamily={"var(--chakra-fonts-mono)"}
              fontSize={'1.1rem'}
              position={"relative"}
    
              _hover={{color:"#FFFFFF"}}>

                <Text
                  as='b'>
                    Resume
                </Text>
              
            </Button>
  )
}