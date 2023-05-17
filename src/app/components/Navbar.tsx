'use client';

import { Toggle,  ColorToggleDay } from './ColorToggle';
import {
  Button,
  Text,
  Heading,
  useMediaQuery,
  HStack,
  useColorMode,  
  Center,
} from '@chakra-ui/react'
import * as React from "react";
import { fadeDown } from '../lib/helpers/animation';
import Image from 'next/image'
import { Link } from '@chakra-ui/next-js'
import Sidebar from './Sidebar';
import styles from './nav.module.css'

interface PageProps {
  pageRefs: React.MutableRefObject<{}>,
  scrollDir: string | number,
  y: string | number,
}

export default function Navbar({ pageRefs, scrollDir, y }: PageProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const fadeDownAnim: string = `${fadeDown} 250ms 20ms forwards`;
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [isLargeScreen]: boolean[] = useMediaQuery("(min-width: 1050px)");

  React.useEffect((): void => {
    isLargeScreen && setMenuOpen(false)
  }, [isLargeScreen]);

  const scrollIntoView = (type: string): void => {
    const pageRef = pageRefs.current[type];
    pageRef.scrollIntoView({ behavior: 'smooth' });
    menuOpen && setMenuOpen(!menuOpen);
  };

  return(
    <React.Fragment>
      <HStack
        align={"center"}
        backdropFilter='auto' 
        backdropBlur='24px'
        height={y !== 0 && scrollDir === "up" ? 
                  85//65 
                  : 
                  100}
        justify={"center"}
        position={"fixed"}
        top={y > 80 && scrollDir === "down" ? 
              -10//-110 
              : 
              0}
        transition={"200ms ease-out"}
        width={"100%"}
        zIndex={2}>

          <HStack
            animation={fadeDownAnim}
            left={isLargeScreen ? 10 : 10}
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
              {/* {animation, cursor, onClick, _hover} */}
              <Center
                onClick={toggleColorMode}>
              {colorMode == 'light' ? <ColorToggleDay /> : <Toggle />}
              </Center>
              
          </HStack>
      
          <HStack
            align={"center"}
            justify={"center"}
            paddingX={"2rem"}
            position={"absolute"}
            right={isLargeScreen ? 5 : 0}
            spacing={'1.5rem'}
            transition={"200ms ease-out"}>
                        
            {isLargeScreen ? 
              <NavBarRoutes scrollIntoView={scrollIntoView} />
              :
              <Sidebar 
              pageRefs={pageRefs}
              menuOpen={menuOpen} 
              setMenuOpen={setMenuOpen}
              />
            }
          </HStack>   
      </HStack>
    </React.Fragment>
  )
}

interface NavButtonProps {
  delay: string,
  label: string,
  title: string,
  scroll: (arg0: string) => void,
};

export const NavButton = ({ label, delay, title, scroll}: NavButtonProps ) => {
  const fadeDownAnim: string =`${fadeDown} 250ms ${delay} forwards`;
  return (
      <Heading
          fontWeight={"bold"}
          animation={fadeDownAnim}
          cursor={"pointer"}
          onClick={() => scroll(label)}
          fontSize={'1.1rem'}//{{ base: '1.1rem', sm: '1rem', md: '1.1rem' }}
          fontFamily={"var(--chakra-fonts-mono)"}
          color={"#00C484"}
          opacity={0}
          px={"0.5rem"}
          py={"1rem"}
          transition={"100ms ease-out"}
          _before={{
            backgroundColor: "#008582",
            borderRadius: "2px",
            bottom: -1,
            content: `""`,
            height: "1px",
            position: "absolute",
            transition: "100ms ease-out",
            width: 0 
          }}
          _hover={{
            color: "#E1E1E1",
            _before: { width: "105%" } }}
            >
          {title}
      </Heading>

  );
};

interface NavButtonsProps {
  isLargeScreen?: boolean,
  scrollIntoView: (arg0: string) => void,
};

export const NavBarRoutes= ({ scrollIntoView }: NavButtonsProps) => (
  <React.Fragment>
    <NavButton label="home" title="Home" delay={"0ms"} scroll={scrollIntoView} />
    <NavButton label="about" title="About" delay={"60ms"} scroll={scrollIntoView} />
    <NavButton label="projects" title="Projects" delay={"120ms"} scroll={scrollIntoView} />
    <NavButton label="experience" title="Experience" delay={"160ms"} scroll={scrollIntoView} />
    <NavButton label="contact" title="Contact" delay={"180ms"} scroll={scrollIntoView} />
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