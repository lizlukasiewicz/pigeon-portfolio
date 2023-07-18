'use client'
import { VStack, useColorModeValue as uCMV } from "@chakra-ui/react";
import { gradient } from "lib/helpers/animation";
import { useNavigation } from "lib/helpers/useNav";
import Navbar from "app/components/Navbar";
import Social from "app/components/Social";

export default function BackgroundContain({children,}:{children: React.ReactNode}) {
  const [y, scrollDir]: [number, string] = useNavigation();
  const breatheAnim: string = `${gradient} 6s ease infinite`
  return(
    <VStack 
      width={"100%"}
      spacing={5}
      bgGradient={uCMV("linear(135deg, #FFFDF1, #FFEED5, #ECD9EA)", "linear(135deg, #131D30, #020405)")}
      bgSize={"400% 400%"}
      bgPosition={"51% 10%"}
      animation={breatheAnim}> 
        <Navbar 
          scrollDir={scrollDir}
          y={y}/>
        <Social 
          scrollDir={scrollDir}
          y={y}/>
        {children}
    </VStack>
  )
}