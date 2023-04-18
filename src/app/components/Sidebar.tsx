'use client';

import * as React from 'react';
import { Link } from '@chakra-ui/next-js'
import { fadeDown } from '../lib/helpers/animation';
import { Icon, Text } from '@chakra-ui/react'
import { FaTerminal, FaBloggerB, FaTools, FaMailBulk, FaReadme, FaHome} from "react-icons/fa"
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  VStack,
  Button,
  useMediaQuery
} from '@chakra-ui/react'

export default function Sidebar() {
  const fadeDownAnim: string = `${fadeDown} 250ms 20ms forwards`;
  const [isLargeScreen]: boolean[] = useMediaQuery("(min-width: 1050px)");
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  React.useEffect((): void => {
    isLargeScreen && setMenuOpen(false)
  }, [isLargeScreen]);

  return(
    <>
      <Button 
        onClick={() => setMenuOpen(!menuOpen)} 
        zIndex={4}
        >
        <HamburgerIcon  w={45} h={45} color='#00C484'/>
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
            <Link 
              href="/"
              >
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
            <Link 
              href="/about" 
              >
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
            </Link>
          </Box>
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
            <Link 
              href="/experience" 
              >
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
            </Link>
          </Box>

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
            <Link 
              href="/blog" 
              >
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
            </Link>
          </Box> */}


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
            <Link 
              href="/projects" 
              >
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
            </Link>
          </Box>


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
            <Link 
              href="/contact" 
              >
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
            </Link>
          </Box>
          <Button
            animation={fadeDownAnim}
            as={"a"}
            color={'#00C484'}
            cursor={"pointer"}
            href={"https://u1a45ww-yt0y3c8.s3.amazonaws.com/Elizabeth_Lukasiewicz_resume_.pdf"}
            target={"_blank"}
            onClick={() => setMenuOpen(!menuOpen)}
            fontFamily={"var(--chakra-fonts-mono)"}
            position={"relative"}
            transition={"100ms ease-out"}
            _before={{
                borderRadius: "2px",
                height: "2px",
                position: "absolute",
                transition: "100ms ease-out"
            }}>
              <Icon as={FaReadme} w={20} h={20} mr={20}/>
              Resume
            
          </Button>

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
            <Link 
              href="/resume" 
              >
                <Text
                  as='b'
                  cursor={"pointer"}
                  fontFamily={"var(--chakra-fonts-mono)"}
                  fontSize='1.1rem'
                  color='#00C484'
                  _hover={{color:"#FFFFFF"}}>
                  <Icon as={FaReadme} w={20} h={20} mr={20}/>
                  Resume
                </Text>
            </Link>
          </Box> */}
          
        </VStack>


    
    </>
  )
}
