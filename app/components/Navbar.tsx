import React  from "react";
import ScrollLink from "lib/helpers/useNav";
export const FaTerminal = require('react-icons/fa').FaTerminal
export const FaBloggerB = require('react-icons/fa').FaBloggerB
export const FaTools = require('react-icons/fa').FaTools
export const FaMailBulk = require('react-icons/fa').FaMailBulk
export const FaHome = require('react-icons/fa').FaHome
import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { Toggle,  ColorToggleDay } from './ColorToggle';
import {
  Button,
  Text,
  Icon,
  Box,
  Heading,
  useMediaQuery,
  HStack,
  VStack,
  useColorMode,
  useColorModeValue as uCMV,
  Center,
} from '@chakra-ui/react'
import { fadeDown } from 'lib/helpers/animation';
import Image from 'next/image'
import styles from './nav.module.css'
import { IconType } from "react-icons";


interface PageProps {
  scrollDir: string | number,
  y: string | number,
}

export default function Navbar({scrollDir, y }: PageProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const fadeDownAnim: string = `${fadeDown} 250ms 20ms forwards`;
  const [isLargeScreen]: boolean[] = useMediaQuery("(min-width: 1050px)");
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  React.useEffect((): void => {
    isLargeScreen && setMenuOpen(false)
  }, [isLargeScreen]);


  return(
    <React.Fragment>
      <HStack
        align={"center"}
        backdropFilter='auto' 
        backdropBlur='24px'
        height={y !== 0 && scrollDir === "up" ? 65 //[mobile, desktop]
                                              : 75}
        justify={"center"}
        position={"fixed"}
        top={y > 80 && scrollDir === "down" ? -3
                                            : 0}
        transition={"200ms ease-out"}
        width={"100%"}
        zIndex={2}>

          <HStack
            animation={fadeDownAnim}
            left={isLargeScreen ? 6 : 1}
            paddingX={"1rem"}
            position={"absolute"}
            transition={"200ms ease-out"}>
                {colorMode == 'light' ? 
                    <Image
                      src="/light_pigeon.png"
                      alt="Pigeon Logo"
                      className={styles.logo}
                      width={60}
                      height={60}
                      priority />
                      
                      :
                      <Image
                      src="/Frame_14.png"
                      alt="Pigeon Logo"
                      className={styles.logo}
                      width={60}
                      height={60}
                      priority />
                    }
              <Center
                onClick={toggleColorMode}>
                  
              {colorMode == 'light' ? <ColorToggleDay /> : <Toggle />}
              </Center>
              
          </HStack>
          {/* Navigation items */}
          <HStack
            align={"center"}
            justify={"center"}
            paddingX={"1rem"}
            position={"absolute"}
            right={isLargeScreen ? 4 : 1}
            spacing={'1.2rem'}
            transition={"200ms ease-out"}>
                        
            {isLargeScreen ? 
              <NavBarRoutes isLargeScreen={isLargeScreen}/>
              :
              <React.Fragment>
                  <Box
                    as={"button"}
                    borderRadius={10}
                    onClick={() => setMenuOpen(!menuOpen)} 
                    height="60px"
                    width="50px"
                    zIndex={4}>
                        {menuOpen ? 
                          <SmallCloseIcon w={6} h={6} color={uCMV("#822320", "#00C484")}/>
                        :
                          <HamburgerIcon  w={50} h={50} color={uCMV("#822320", "#00C484")}/> 
                        }
                  </Box>
                  <VStack 
                    backgroundColor={uCMV("rgba(255,244,225,0.9)", "rgba(2, 4, 5, 0.9)")}
                    opacity={1}
                    paddingTop={65}
                    borderRadius={30}
                    boxShadow={uCMV("lg", "dark-lg")}
                    fontSize={16}
                    height={500}
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                    position={"fixed"}
                    right={menuOpen ? 0 : "-56%"}
                    onClick={() => setMenuOpen(!menuOpen)}
                    top={0}
                    spacing={15}
                    pl={'3%'}
                    transition={"300ms ease-in-out"}
                    width={["55%", "45%"]}
                    zIndex={3}>
                      <NavBarRoutes isLargeScreen={isLargeScreen}/>
                  </VStack>
              </React.Fragment>
            }
          </HStack>   
      </HStack>
    </React.Fragment>
  )
}

interface NavButtonProps {
  delay: string,
  label: string,
  isLargeScreen: boolean,
  icon: React.ComponentType<IconType>,
};

const NavButton = ({ label, delay, icon, isLargeScreen}: NavButtonProps) => {
  const fadeDownAnim: string =`${fadeDown} 250ms ${delay} forwards`;
  const text = `_ ${label}`
  const href = `#${label}`

  return (
      <ScrollLink href={href} >
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
                {isLargeScreen ? <></>:
                                  <Icon
                                    as={icon}
                                    borderRadius={6}
                                    boxSize={5}
                                    transition={"100ms ease-in-out"}/>}
                {text}

          </Heading>
        </ScrollLink>

  );
};

interface NavButtonsProps {
  isLargeScreen: boolean,
}

const NavBarRoutes= ({isLargeScreen}: NavButtonsProps) => {
  return (
  <React.Fragment>
    <NavButton label="home" delay={"0ms"}  isLargeScreen={isLargeScreen} icon={FaHome}/>
    <NavButton label="about" delay={"60ms"}  isLargeScreen={isLargeScreen} icon={FaTerminal} />
    <NavButton label="experience" delay={"120ms"}  isLargeScreen={isLargeScreen} icon={FaBloggerB} />
    <NavButton label="projects" delay={"160ms"}  isLargeScreen={isLargeScreen} icon={FaTools} />
    <NavButton label="contact" delay={"180ms"}  isLargeScreen={isLargeScreen} icon={FaMailBulk} />
    <ResumeButton />
  </React.Fragment>
);}


export const ResumeButton = () => {
  const fadeDownAnim: string = `${fadeDown} 200ms 300ms forwards`;

  return (
    <Button
      animation={fadeDownAnim}
      as={"a"}
      color={uCMV("#020405", "#00C484")}
      cursor={"pointer"}
      href={"https://s3.amazonaws.com/nyc-pigeon.com/e_lukasiewicz_resume.pdf"}
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
