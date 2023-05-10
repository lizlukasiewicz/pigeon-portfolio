'use client';

import * as React from 'react';
import { fadeDown } from '../lib/helpers/animation';
export const FaTerminal = require('react-icons/fa').FaTerminal
export const FaBloggerB = require('react-icons/fa').FaBloggerB
export const FaTools = require('react-icons/fa').FaTools
export const FaMailBulk = require('react-icons/fa').FaMailBulk
export const FaHome = require('react-icons/fa').FaHome


import { FaReadme } from "react-icons/fa"
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  VStack,
  Button,
  Icon, 
  Text, 
  useMediaQuery
} from '@chakra-ui/react'
import { IconType } from "react-icons";

interface NavMenuIconProps {
  pageRefs: React.MutableRefObject<{}>,
  menuOpen: boolean,
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
};

export default function Sidebar({ pageRefs, menuOpen, setMenuOpen}: NavMenuIconProps) {
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
      <Button 
        onClick={() => setMenuOpen(!menuOpen)} 
        zIndex={4}>
        <HamburgerIcon  w={45} h={45} color='#00C484' //rgba(0, 196, 132, 1)
        /> 
      </Button>
      
       
        <VStack 
          backgroundColor={"rgba(2, 4, 5, 0.9)"} //colorMode()
          opacity={1}
          paddingTop={90}
          boxShadow={"dark-lg"}
          fontSize={16}
          height={500}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          position={"fixed"}
          right={menuOpen ? 0 : "-50%"}
          top={0}
          spacing={35}
          pl={'3%'}
          transition={"300ms ease-in-out"}
          width={"45%"}
          zIndex={3}>
          
          
          <NavBarRoutes scrollIntoView={scrollIntoView} />
          
        </VStack>
    </React.Fragment>
  )
}


interface BarButtonProps {
  delay: string,
  label: string,
  icon: React.ComponentType<IconType>,
  scroll: (arg0: string) => void,
};
const BarButton = ({ label, delay, icon, scroll}: BarButtonProps ) => {
  const fadeDownAnim: string =`${fadeDown} 250ms ${delay} forwards`;
  const text = `.  ${label}`
  return (
    <Box
        as='button' 
        animation={fadeDownAnim}
        cursor={"pointer"}
        onClick={() => scroll(label)}
        fontFamily={"var(--chakra-fonts-mono)"}
        position={"relative"}
        transition={"100ms ease-out"}
        _before={{
            borderRadius: "2px",
            height: "2px",
            position: "absolute",
            transition: "100ms ease-out",
        }}>
            <Text
                animation={fadeDownAnim}
                cursor={"pointer"}
                as='b'
                fontFamily={"var(--chakra-fonts-mono)"}
                fontSize='1.1rem'
                color='#00C484'
                _hover={{color:"#FFFFFF"}}>
              
                      <Icon
                          as={icon}
                          borderRadius={5}
                          //color={"#00C484"}
                          boxSize={6}
                          transition={"100ms ease-in-out"}/>
                  

                {text}
            </Text>
    </Box>
  );
};

interface NavButtonsProps {
  isLargeScreen?: boolean,
  scrollIntoView: (arg0: string) => void,
};

export const NavBarRoutes= ({ scrollIntoView }: NavButtonsProps) => (
  <React.Fragment>
    <BarButton label="home" delay={"0ms"} scroll={scrollIntoView} icon={FaHome} />
    <BarButton label="about" delay={"60ms"} scroll={scrollIntoView} icon={FaTerminal} />
    <BarButton label="experience" delay={"120ms"} scroll={scrollIntoView} icon={FaBloggerB} />
    <BarButton label="projects" delay={"180ms"} scroll={scrollIntoView} icon={FaTools} />
    <BarButton label="contact" delay={"240ms"} scroll={scrollIntoView} icon={FaMailBulk} />
    <ResumeButton />
  </React.Fragment>
)
const ResumeButton = ()=> {
  const fadeDownAnim: string =`${fadeDown} 200ms 300ms forwards`
  return (
    <Button
            animation={fadeDownAnim}
            as={"a"}
            color={'#00C484'}
            cursor={"pointer"}
            href={"https://u1a45ww-yt0y3c8.s3.amazonaws.com/Elizabeth_Lukasiewicz_resume_.pdf"}
            target={"_blank"}
            position={"relative"}
            transition={"100ms ease-out"}
            _before={{
                borderRadius: "2px",
                height: "2px",
                position: "absolute",
                transition: "100ms ease-out"
            }}>
              <Text
                  as='b'
                  _hover={{color:"#FFFFFF"}}
                  fontFamily={"var(--chakra-fonts-mono)"}
                  fontSize='1.1rem'>
              <Icon as={FaReadme} w={10} />
                      Resume
              </Text>

            
          </Button>
  )
}