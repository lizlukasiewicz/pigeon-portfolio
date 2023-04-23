"use client";
import { ColorToggle } from "../components/ColorToggle";

import { 
        Button,
        Center,
        useColorMode,  
      } from "@chakra-ui/react"

// const SwitchIcon = uCMV(ColorToggle, ColorToggleDay);//might have to export icons in <Icon as={tag}/> from Icons page

export default function Contact() {
  const { colorMode, toggleColorMode } = useColorMode();
    return(
        <div>
            <h2>Contact me</h2>
            {/* <Center 
              color={"transparent"}
              width={43}
              minWidth={35}
              onClick={toggleColorMode}
              _groupHover={{ transform: "translateX(-35px)" }}
              _hover={{ cursor: "pointer" }}
              > */}
                <Button
                  color={"goldenrod"}
                  width={38}
                  onClick={toggleColorMode}>

                  <ColorToggle />
                  {/* Toggle{colorMode == 'light' ? ' Light ' : ' Dark '} */}
                </Button>
            {/* </Center> */}
        </div>
    )
}