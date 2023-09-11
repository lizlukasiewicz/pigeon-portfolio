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
    <VStack // flex flex-col w-full space-x-5 bg-[--background-gradient] bg-zoom animate-breathe//bg-[linear(135deg,_#131D30,_#020405)] // bg-gradient-to-br from-[#131D30] to-[#020405] to-90% 
      width={"100%"}//w-full
      spacing={5} // space-x-5
      bgGradient={uCMV("linear(135deg, #FFFDF1, #FFEED5, #ECD9EA)", "linear(135deg, #131D30, #020405)")}// bg-[--background-gradient]
      bgSize={"200% 200%"} //400% 400% bg-zoom
      bgPosition={"50% 0%"}// bgPosition={"51% 10%"}bg-start
      //animate-breathe //animate-[gradient_6s_ease_infinite]
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