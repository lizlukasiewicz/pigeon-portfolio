// 'use client';

import * as React from 'react';
import { fadeDown } from 'lib/helpers/animation';
export const FaTerminal = require('react-icons/fa').FaTerminal
export const FaBloggerB = require('react-icons/fa').FaBloggerB
export const FaTools = require('react-icons/fa').FaTools
export const FaMailBulk = require('react-icons/fa').FaMailBulk
export const FaHome = require('react-icons/fa').FaHome
import Link from 'next/link';

import { FaReadme } from "react-icons/fa"
import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons'
import {
  Box,
  VStack,
  Button,
  Icon,
  Heading, 
  Center,
  Text, 
  useMediaQuery,
  useColorModeValue as uCMV
} from '@chakra-ui/react'
import { IconType } from "react-icons";

type PageRefsType = { [key: string]: HTMLElement };

interface NavMenuIconProps {
  pageRefs: React.MutableRefObject<PageRefsType>,
  isMenuOpen: boolean,
};

export default function Sidebar({ pageRefs, isMenuOpen }: NavMenuIconProps) {
  const [isLargeScreen]: boolean[] = useMediaQuery("(min-width: 1050px)");
  const [menuOpen, setMenuOpen] = React.useState<boolean>(isMenuOpen);

  React.useEffect((): void => {
    isLargeScreen && setMenuOpen(false)
  }, [isLargeScreen]);

  const scrollIntoView = (label: any): void => {
    pageRefs.current[label].scrollIntoView({ behavior: 'smooth' });
    menuOpen && setMenuOpen(!menuOpen);
  };

  return(
    <React.Fragment>
      <Box
        as={"button"}
        borderRadius={10}
        onClick={() => setMenuOpen(!menuOpen)} 
        //_hover={{ border: "1px solid #00E2CB"}}
        height="60px"
        width="80px"
        zIndex={4}>
          {menuOpen ? 
            <SmallCloseIcon w={5} h={5} color={uCMV("#822320", "#00C484")}/>
          :
            <HamburgerIcon  w={50} h={50} color={uCMV("#822320", "#00C484")}/> 
          }

      </Box>
       
      <VStack 
        backgroundColor={uCMV("rgba(255,244,225,0.9)", "rgba(2, 4, 5, 0.9)")}
        opacity={1}
        paddingTop={90}
        borderRadius={30}
        boxShadow={uCMV("lg", "dark-lg")}
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
        
        <SideBarRoutes scrollIntoView={scrollIntoView} />
        
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
      position={"relative"}
      transition={"100ms ease-out"}
      _before={{
          borderRadius: "2px",
          height: "2px",
          position: "absolute",
          transition: "100ms ease-out",}}>
            <Text
              animation={fadeDownAnim}
              cursor={"pointer"}
              as='b'
              fontFamily={"var(--chakra-fonts-mono)"}
              fontSize='1.1rem'
              color={uCMV("#2B2B2B", "#00C484")}
              _hover={{color:uCMV("#D54440", "#FFFFFF")}}>
              
                <Icon
                  as={icon}
                  borderRadius={5}
                  boxSize={6}
                  transition={"100ms ease-in-out"}/>

                {text}
            </Text>
    </Box>
  );
};

interface NavButtonsProps {
  scrollIntoView: (arg0: string) => void,
};

export const SideBarRoutes= ({ scrollIntoView }: NavButtonsProps) => (
  <React.Fragment>
    <HomeButton />
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
    <Button // TODO: use <Box as={"button"} for color options
      animation={fadeDownAnim}
      as={"a"}
      color={uCMV("#111837", "#00C484")}
      cursor={"pointer"}
      href={"https://u1a45ww-yt0y3c8.s3.amazonaws.com/Elizabeth_Lukasiewicz_resume_.pdf"}
      target={"_blank"}
      position={"relative"}
      transition={"100ms ease-out"}
      _before={{
          borderRadius: "2px",
          height: "2px",
          position: "absolute",
          transition: "100ms ease-out"}}>

          <Text
            as='b'
            _hover={{color:uCMV("#D54440","#FFFFFF")}}
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize='1.1rem'>
              <Icon as={FaReadme} w={10} />
                      Resume
          </Text>
    </Button>
  )
}

export const HomeButton = () => {
  const fadeDownAnim: string =`${fadeDown} 200ms 0ms forwards`
  const text = ". home"
  return(
    <Box
      as='button' 
      animation={fadeDownAnim}
      cursor={"pointer"}
      position={"relative"}
      transition={"100ms ease-out"}
      _before={{
          borderRadius: "2px",
          height: "2px",
          position: "absolute",
          transition: "100ms ease-out",}}>
            <Link href={"/"} scroll={false}>
                <Heading
                  animation={fadeDownAnim}
                  cursor={"pointer"}
                  as='b'
                  fontFamily={"var(--chakra-fonts-mono)"}
                  fontSize='1.1rem'
                  color={uCMV("#2B2B2B", "#00C484")}
                  _hover={{color:uCMV("#D54440", "#FFFFFF")}}>
                    <Icon
                          as={FaHome}
                          borderRadius={5}
                          boxSize={6}
                          transition={"100ms ease-in-out"}/>
                    {text}
                </Heading>
            </Link>
    </Box>
  )
}