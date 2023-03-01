'use client';

import * as React from 'react';
import { Link } from '@chakra-ui/next-js'
import styles from './side.module.css'
import { Icon } from '@chakra-ui/react'
import { GrHomeRounded } from "react-icons/gr"
import { FaTerminal, FaBloggerB, FaTools, FaMailBulk, FaReadme} from "react-icons/fa"
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  VStack,
  Button,
  keyframes,
  useMediaQuery
} from '@chakra-ui/react'

export const fadeDown: string = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  } to {
    transform: translateY(0px);
    opacity: 1;
  }
`;




export default function Sidebar() {
  const fadeDownAnim: string = `${fadeDown} 500ms`;
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
      
       
      {/* pos="absolute" spacing={3} zIndex={2} */}
        <VStack 
          backgroundColor={"rgba(2, 4, 5, 0.7)"}
          opacity={1}
          boxShadow={"dark-lg"}
          fontSize={16}
          height={600}
          justifyContent={"center"}
          position={"fixed"}
          right={menuOpen ? 0 : "-50%"}
          top={menuOpen? 100: 0}
          spacing={25}
          transition={"300ms ease-in-out"}
          width={"30%"}
          zIndex={2}>
          
          <Box
            as='button' 
            animation={fadeDownAnim}
            cursor={"pointer"}
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
              className={styles.option} > 

                <Icon as={GrHomeRounded} w={30} h={30} color='#00C484'/>
            </Link>
          </Box>

            
          <Box
            as='button' 
            animation={fadeDownAnim}
            cursor={"pointer"}
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
              className={styles.option}>
              <Icon as={FaTerminal} w={30} h={30} color='#00C484'/>
                  <h2>
                    About Me
                  </h2>
            </Link>
          </Box>


          <Box
            as='button' 
            animation={fadeDownAnim}
            cursor={"pointer"}
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
              className={styles.option}>
              <Icon as={FaBloggerB} w={30} h={30} color='#00C484'/>
                <h2>
                  Blog
                </h2>
            </Link>
          </Box>


          <Box
            as='button' 
            animation={fadeDownAnim}
            cursor={"pointer"}
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
              className={styles.option}>
                <Icon as={FaTools} w={30} h={30} color='#00C484'/>
                <h2>
                  Projects
                </h2>
            </Link>
          </Box>


          <Box
            as='button' 
            animation={fadeDownAnim}
            cursor={"pointer"}
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
              className={styles.option}>
                <Icon as={FaMailBulk} w={30} h={30} color='#00C484'/>
                <h2>
                  Contact
                </h2>
            </Link>
          </Box>

          <Box
            as='button' 
            animation={fadeDownAnim}
            cursor={"pointer"}
            fontFamily={"var(--chakra-fonts-mono)"}
            opacity={0}
            padding={0}
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
              className={styles.option}>
                <Icon as={FaReadme} w={30} h={30} color='#00C484'/>
                <h2>
                  Resume
                </h2>
            </Link>
          </Box>
          
        </VStack>


    
    </>
  )
}
