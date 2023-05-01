'use client';

import * as React from 'react';
import { Link } from '@chakra-ui/next-js'
import { fadeDown } from '../lib/helpers/animation';
export const FaTerminal = require('react-icons/fa').FaTerminal
export const FaBloggerB = require('react-icons/fa').FaBloggerB
export const FaTools = require('react-icons/fa').FaTools
export const FaMailBulk = require('react-icons/fa').FaMailBulk



import { FaReadme, FaHome} from "react-icons/fa"
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  VStack,
  Button,
  Icon, 
  Text, 
  Center,
  useMediaQuery
} from '@chakra-ui/react'
import { IconType } from "react-icons";

interface NavMenuIconProps {
  pageRefs: React.MutableRefObject<{}>,
  menuOpen: boolean,
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
  // NavBarRoutes: React.FC,
};

export default function Sidebar({ pageRefs, menuOpen, setMenuOpen}: NavMenuIconProps) {
  const fadeDownAnim: string = `${fadeDown} 250ms 20ms forwards`;
  const [isLargeScreen]: boolean[] = useMediaQuery("(min-width: 1050px)");
  //const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

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
          backgroundColor={"rgba(2, 4, 5, 0.7)"}
          opacity={1}
          paddingTop={90}
          boxShadow={"dark-lg"}
          fontSize={16}
          height={500}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          position={"fixed"}
          right={menuOpen ? 0 : "-50%"}
          top={menuOpen? 0: 0}
          spacing={35}
          pl={'3%'}
          transition={"300ms ease-in-out"}
          width={"30%"}
          zIndex={2}>
          
          <Box
            as='button' 
            animation={fadeDownAnim}
            cursor={"pointer"}
            onClick={() => setMenuOpen(!menuOpen)}
            fontFamily={"var(--chakra-fonts-mono)"}
            position={"relative"}
            transition={"100ms ease-out"}
            _before={{
                borderRadius: "2px",
                height: "2px",
                position: "absolute",
                transition: "100ms ease-out",
            }}>
            <Link href="/">
                <Text
                    as='b'
                    cursor={"pointer"}
                    fontFamily={"var(--chakra-fonts-mono)"}
                    fontSize='1.4rem'
                    color='#00C484'
                    _hover={{color:"#FFFFFF"}}>

                  <Icon as={FaHome} w={35} h={35} />
                </Text>
            </Link>
          </Box>
          
          <NavBarRoutes scrollIntoView={scrollIntoView} />
          {/* ********************** START NAVBARROUTES *************************** */}
          {/* <Box
            as='button' 
            animation={fadeDownAnim}
            cursor={"pointer"}
            onClick={() => setMenuOpen(!menuOpen)}
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
                    as='b'
                    cursor={"pointer"}
                    fontFamily={"var(--chakra-fonts-mono)"}
                    fontSize='1.1rem'
                    color='#00C484'
                    _hover={{color:"#FFFFFF"}}>

                    <Icon as={FaTerminal} w={20} h={20} mr={20}/>

                    About Me
                  </Text>
          </Box> */}


          {/* <Box
            as='button' 
            animation={fadeDownAnim}
            cursor={"pointer"}
            onClick={() => setMenuOpen(!menuOpen)}
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
                    as='b'
                    cursor={"pointer"}
                    fontFamily={"var(--chakra-fonts-mono)"}
                    fontSize='1.1rem'
                    color='#00C484'
                    _hover={{color:"#FFFFFF"}}>

                    <Icon as={FaBloggerB} w={20} h={20} mr={20}/>
                    Experience
                </Text>
          </Box> */}


          {/* <Box
            as='button' 
            animation={fadeDownAnim}
            cursor={"pointer"}
            onClick={() => setMenuOpen(!menuOpen)}
            fontFamily={"var(--chakra-fonts-mono)"}
            position={"relative"}
            transition={"100ms ease-out"}
            _before={{
                borderRadius: "2px",
                height: "2px",
                position: "absolute",
                transition: "100ms ease-out",
            }}>
            // <Link href="/blog"   >
                <Text
                    as='b'
                    cursor={"pointer"}
                    fontFamily={"var(--chakra-fonts-mono)"}
                    fontSize='1.1rem'
                    color='#00C484'
                    _hover={{color:"#FFFFFF"}}>

                    <Icon as={FaBloggerB} w={20} h={20} mr={20}/>
                    Blog
                </Text>
            // </Link>
          </Box> */}


          {/* <Box
            as='button' 
            animation={fadeDownAnim}
            cursor={"pointer"}
            onClick={() => setMenuOpen(!menuOpen)}
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
                  as='b'
                  cursor={"pointer"}
                  fontFamily={"var(--chakra-fonts-mono)"}
                  fontSize='1.1rem'
                  color='#00C484'
                  _hover={{color:"#FFFFFF"}}>
                  <Icon as={FaTools} w={20} h={20} mr={20}/>
                  Projects
                </Text>
          </Box> */}


          {/* <Box
            as='button' 
            animation={fadeDownAnim}
            cursor={"pointer"}
            onClick={() => setMenuOpen(!menuOpen)}
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
                  as='b'
                  cursor={"pointer"}
                  fontFamily={"var(--chakra-fonts-mono)"}
                  fontSize='1.1rem'
                  color='#00C484'
                  _hover={{color:"#FFFFFF"}}>
                  <Icon as={FaMailBulk} w={20} h={20} mr={20}/>
                  Contact
                </Text>
          </Box> */}
          {/* ********************** END NAVBARROUTES **********************  */}

          {/* <Button
            animation={fadeDownAnim}
            as={"a"}
            color={'#00C484'}
            cursor={"pointer"}
            href={"https://u1a45ww-yt0y3c8.s3.amazonaws.com/Elizabeth_Lukasiewicz_resume_.pdf"}
            target={"_blank"}
            onClick={() => setMenuOpen(!menuOpen)}
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
              <Icon as={FaReadme} w={20} h={20} mr={20}/>
                      Resume
              </Text>

            
          </Button> */}
          
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
                  <Center animation={fadeDownAnim} opacity={0}>
                      <Icon
                          as={icon}
                          borderRadius={5}
                          color={"#00C484"}
                          boxSize={8}
                          transition={"100ms ease-in-out"}/>
                  </Center>

                {label}
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
    <BarButton label="about" delay={"0ms"} scroll={scrollIntoView} icon={FaTerminal} />
    <BarButton label="experience" delay={"120ms"} scroll={scrollIntoView} icon={FaBloggerB} />
    <BarButton label="projects" delay={"60ms"} scroll={scrollIntoView} icon={FaTools} />
    <BarButton label="contact" delay={"180ms"} scroll={scrollIntoView} icon={FaMailBulk} />
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