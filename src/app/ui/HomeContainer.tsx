'use client'
import { VStack, useColorModeValue as uCMV } from "@chakra-ui/react";
import { gradient } from "../lib/helpers/animation";
// import { useNavigation } from '../lib/helpers/useNav'

// import {useRef, MutableRefObject} from "react";

// import { useOnScreen } from '../lib/helpers/Loading';
export const pageRefs = require('react').useRef({});
// export const [y, scrollDir]: [number, string] = require('../lib/helpers/useNav').useNavigation();
// export const [visRef, visible] = require('../lib/helpers/Loading').useOnScreen();



export const HomeContainer = ({children}: {children: React.ReactNode;}) => {
  // const pageRefs: MutableRefObject<{}> = useRef({});
  // const [visRef1, visible1] = useOnScreen();
  // const [y, scrollDir]: [number, string] = useNavigation();
  // const [visRef, visible] = useOnScreen();
  const breatheAnim: string = `${gradient} 6s ease infinite`
  return(
    <VStack 
      spacing={1}
      bgGradient={uCMV("linear(135deg, #FFFDF1, #FFEED5, #ECD9EA)", "linear(135deg, #131D30, #020405)")} //#FFF4E1, #FFEED5, #FFFAF1,   ##FFF4E1,
      bgSize={"400% 400%"}
      bgPosition={"51% 0%"}
      animation={breatheAnim}
      > 

      {children}
      </VStack>
  )

}