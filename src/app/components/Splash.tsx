'use client';

import styles from '../page.module.css'
import { Text, Box, keyframes } from '@chakra-ui/react'
import * as React from 'react';

export const fadeDown: string = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  } to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
// TODO: FIX TRANSITION ANIMATION 
export default function Splash() {
    const [name, setName] = React.useState<boolean>(false);
    const fadeDownAnim: string = `${fadeDown} 1000ms`;//500ms 20ms forwards`;

    return(
        <Box w='100%' h='900px' bgGradient='radial(circle 375px at center, #112941 46%, 
          rgba(93, 185, 188, 0.52) 60%, 
          #00E2CB 61.4%, 
          rgba(51, 72, 80, 0.8) 62%, 
          rgba(7, 18, 43, 0.5) 82%,
          rgba(7, 18, 43, 0) 92%)'>
            <Box
                mb="0.5rem"
                pos="absolute"
                top="180"
                zIndex={2}
                onMouseOver={ () => setName(!name)}
                onMouseOut = { () => setName(!name)}
                animation={fadeDownAnim}
                transition={"300ms ease-out"}
            >
                {name ?
                    <Text
                    //   animation={fadeDownAnim}
                      transition={"100ms ease-in-out"}
                      fontWeight={600}
                      fontFamily={"var(--chakra-fonts-mono)"}
                      fontSize='2xl'
                    //   _before={{
                    //     transition: "100ms ease-out"
                    //   }}
                    > 
                        /. Lukasiewicz ./ 
                    </Text> 
                :
                    <Text
                    //   animation={fadeDownAnim}
                      transition={"100ms ease-in-out"}
                      fontWeight={600}
                      fontFamily={"var(--chakra-fonts-mono)"}
                      fontSize='2xl'
                    //   _before={{
                    //     transition: "100ms ease-out"
                    //   }}
                    >
                        / wu.kaˈɕɛ.vit͡ʂ /
                    </Text>
                }
                 

                    
            </Box>
                

        </Box>
    )
}
