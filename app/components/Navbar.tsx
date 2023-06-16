import * as React from "react";
import { Toggle,  ColorToggleDay } from './ColorToggle';
import {
  Button,
  Text,
  Heading,
  Box,
  useMediaQuery,
  HStack,
  useColorMode,
  useColorModeValue as uCMV,
  Center,
} from '@chakra-ui/react'
import { fadeDown } from 'lib/helpers/animation';
import Image from 'next/image'
import Link from 'next/link';
import Sidebar from './Sidebar';
import styles from './nav.module.css'

type PageRefsType = { [key: string]: HTMLElement };

interface PageProps {
  pageRefs: React.MutableRefObject<PageRefsType>,
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

  const scrollToElement = (label: any): void => {
    pageRefs.current[label].scrollIntoView({ behavior: 'smooth', });
    menuOpen && setMenuOpen(!menuOpen);
  };

  return(
    <React.Fragment>
      <HStack
        align={"center"}
        backdropFilter='auto' 
        backdropBlur='24px'
        height={y !== 0 && scrollDir === "up" ? 
                  85//65 //
                  : 
                  100}
        justify={"center"}
        position={"fixed"}
        top={y > 80 && scrollDir === "down" ? 
              -10//-110 //
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
              <Link href="/">
                {colorMode == 'light' ? 
                    <Image
                      src="/light_pigeon.png"
                      alt="Pigeon Logo"
                      className={styles.logo}
                      width={70}
                      height={70}
                      priority />
                      
                      :
                      <Image
                      src="/Frame_14.png"
                      alt="Pigeon Logo"
                      className={styles.logo}
                      width={70}
                      height={70}
                      priority />
                    }
              </Link>
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
              <NavBarRoutes scrollToElement={scrollToElement} />
              :
              <Sidebar 
              pageRefs={pageRefs}
              isMenuOpen={menuOpen}
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
  scroll: (arg0: string) => void,
};

export const NavButton = ({ label, delay, scroll}: NavButtonProps ) => {
  const fadeDownAnim: string =`${fadeDown} 250ms ${delay} forwards`;
  const text = `_ ${label}`
  return (
      <Box
        as='button' 
        cursor={"pointer"}
        onClick={() => scroll(label)}
        position={"relative"}
        _before={{
            borderRadius: "2px",
            height: "2px",
            position: "absolute",
            transition: "100ms ease-out",
        }}>
        
          <Heading
            fontWeight={"bold"}
            animation={fadeDownAnim}
            cursor={"pointer"}
            fontSize={'1.1rem'}
            fontFamily={"var(--chakra-fonts-mono)"}
            color={uCMV("#020405", "#00C484")}
            opacity={0}
            px={"0.5rem"}
            py={"1rem"}
            transition={"100ms ease-out"}
            _before={{
              backgroundColor: uCMV("#F3BA40", "#008582"),
              borderRadius: "2px",
              bottom: -1,
              content: `""`,
              height: "1px",
              position: "absolute",
              transition: "100ms ease-out",
              width: 0 
            }}
            _hover={{
              color:uCMV("#822320", "#E1E1E1"),
              _before: { width: "105%" } }}>

                {text}

          </Heading>

      </Box>

  );
};

interface NavButtonsProps {
  scrollToElement: (arg0: string) => void,
};

export const NavBarRoutes= ({ scrollToElement }: NavButtonsProps) => (
  <React.Fragment>
    <HomeButton />
    <NavButton label="about" delay={"60ms"} scroll={scrollToElement} />
    <NavButton label="experience" delay={"120ms"} scroll={scrollToElement} />
    <NavButton label="projects" delay={"160ms"} scroll={scrollToElement} />
    <NavButton label="contact" delay={"180ms"} scroll={scrollToElement} />
    <ResumeButton />
  </React.Fragment>

);


// TODO: use <Box as={"button"} for color options
export const ResumeButton = () => {
  const fadeDownAnim: string = `${fadeDown} 200ms 300ms forwards`;

  return (
    <Button
      animation={fadeDownAnim}
      as={"a"}
      color={uCMV("#020405", "#00C484")}
      cursor={"pointer"}
      href={"https://u1a45ww-yt0y3c8.s3.amazonaws.com/Elizabeth_Lukasiewicz_resume_.pdf"}
      target={"_blank"}           
      fontFamily={"var(--chakra-fonts-mono)"}
      fontSize={'1.1rem'}
      position={"relative"}
      _hover={{color:uCMV("#D54440", "#FFFFFF")}}>

                <Text
                  as='b'>
                    Resume
                </Text>
              
    </Button>
  )
}

export const HomeButton = () => {
  const text = "_ home"
  return(
    <Link href={"/"} scroll={false}>
      <Heading
        fontWeight={"bold"}
        cursor={"pointer"}
        fontSize={'1.1rem'}
        fontFamily={"var(--chakra-fonts-mono)"}
        color={uCMV("#020405", "#00C484")}
        px={"0.5rem"}
        py={"1rem"}
        transition={"100ms ease-out"}
        _before={{
          backgroundColor: uCMV("#F3BA40", "#008582"),
          borderRadius: "2px",
          bottom: -1,
          content: `""`,
          height: "1px",
          position: "absolute",
          transition: "100ms ease-out",
          width: 0 
        }}
        _hover={{
          color:uCMV("#822320", "#E1E1E1"),
          _before: { width: "10%" }
          }}>
            {text}
      </Heading>
    </Link>
  )
}