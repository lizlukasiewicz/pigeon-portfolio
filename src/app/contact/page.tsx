"use client";
import { ColorToggle, Toggle, ColorToggleDay } from "../components/ColorToggle";

import { 
        Button,
        Center,
        useColorMode,  
        useColorModeValue as uCMV,
        Box,
        Text
      } from "@chakra-ui/react"

// const SwitchIcon = uCMV(ColorToggle, ColorToggleDay);//might have to export icons in <Icon as={tag}/> from Icons page

export default function Contact() {
  const { colorMode, toggleColorMode } = useColorMode();
  
    return(
        <Box
          width={"100%"}
          marginTop={{base: "50px", lg:"100px"}}
          backgroundColor={uCMV("#B3DDC1", "#121D36")}>
            <Text
              color={uCMV("#1C2445", "#00E2CB")}>Contact me</Text>
            {/* <Center 
              color={"transparent"}
              width={43}
              minWidth={35}
              onClick={toggleColorMode}
              _groupHover={{ transform: "translateX(-35px)" }}
              _hover={{ cursor: "pointer" }}
              > */}
                <Button
                 
                  width={38}
                  onClick={toggleColorMode}>

                  {/* <Toggle 
                    onClick={toggleColorMode}
                    _hover={{ cursor: "pointer" }}/>
                    /> */}
                  {colorMode == 'light' ? <ColorToggleDay /> : <Toggle />}
                </Button>
            {/* </Center> */}
        </Box>
    )
}