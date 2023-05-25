'use client'
import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue as uCMV
} from '@chakra-ui/react';
import { growRight, growRightLittle } from '../lib/helpers/animation';

// TODO  DAYMODE COLORS
export const TempContainer=({
  children,
  label,
  title,
  loaded,
  pageRefs,
  refNum
}:{
  children: React.ReactNode;
  label?: string,
  title?: string,
  loaded?: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
  pageRefs: React.MutableRefObject<{}>,
  refNum: number,
})=> {

  const growRightAnim: string = `${growRight} 1s 250ms forwards`;
  const growRightLittleAnim: string = `${growRightLittle} 1s 250ms forwards`;
  const findScroll = (el: HTMLDivElement, refNum: number) => {
    let testVar: {} = {};
    switch (refNum) {
        case 0:
            testVar = { ...pageRefs.current, home: el };
            console.log(`navigating HOME 🍍`)
            break;
        case 1:
            testVar = { ...pageRefs.current, about: el };
            break;
        case 2:
            testVar = { ...pageRefs.current, experience: el };
            break;
        case 3:
            testVar = { ...pageRefs.current, projects: el };
            break;
        case 4:
            testVar = { ...pageRefs.current, contact: el };
            break;
        default:
            console.log("🪷 Nav");
    };
    return testVar
};
  return (
    <Container
            maxW={{ base: "95%", sm: "85%", lg: "85%", xl: "70%" }}
            //opacity={1}//loaded ? 1 : 0.5
            ref={el => el && (pageRefs.current = findScroll(el, refNum))}
            transition={"500ms ease-out"}>
            <Stack
                align={'center'}
                direction={{ base: 'column', md: 'row' }}
                paddingY={18}
                paddingTop={"7.5%"}
                spacing={{ base: 8, md: 10 }}
                >
                <Stack flex={2} spacing={{ base: 5, md: 10 }} position={"relative"}>
                    <Stack position={"relative"} spacing={3}>
                        <HStack>
                          <Box 
                            animation={growRightAnim}//&& loaded
                            backgroundColor={"#008582"}//{uCMV("#E29CB0", "#008582")}// DARK PINK || NOT LISTED MUTED BLUE
                            height={1}
                            opacity={0}
                            position={"relative"}
                            top={"2%"}
                            width={0}
                            _after={{
                                borderRight: "4px solid transparent",
                                borderTop: "4px solid #008582",//uCMV("4px solid #E29CB0", "4px solid #008582")// DARK PINK || NOT LISTED MUTED BLUE
                                content: `""`,
                                position: "absolute",
                                right: -1,
                                width: 0 }} />
                          <Box 
                            animation={growRightLittleAnim}//&&loaded
                            backgroundColor={uCMV("rgb(222,198,223)", "rgb(100,156,166)")} //{"rgb(100,156,166)"} ////nonlist Pink  ||  topPal MUTED BLUE
                            height={1}
                            opacity={0}
                            position={"relative"}
                            top={"2%"}
                            width={0}
                            _before={{
                                borderLeft: "4px solid transparent",
                                borderBottom: "4px solid rgb(100,156,166)",//uCMV("4px solid rgb(222,198,223)", "4px solid rgb(100,156,166)")//nonlist Pink  ||  topPal MUTED BLUE
                                content: `""`,
                                position: "absolute",
                                left: -1,
                                width: 0 }}
                            _after={{
                                borderRight: "4px solid transparent",
                                borderTop: "4px solid rgb(100,156,166)",//uCMV("4px solid rgb(222,198,223)", "4px solid rgb(100,156,166)")//nonlist Pink  ||  topPal MUTED BLUE
                                content: `""`,
                                position: "absolute",
                                right: -1,
                                width: 0 }} />
                        </HStack>
                        <Heading
                            fontFamily={"var(--chakra-fonts-mono)"}
                            fontSize={{ base: 'lg', sm: 'xl', md: "2xl" }}
                            fontWeight={"bold"}
                            color={uCMV("#121D36", "#00C484")}//2ndPAL DARK NAVY  ||  NEON GREEN              {"#00C484"}// //color={"#B3DDC1"}> <<MUTED GREEN
                            >
                            {title}
                        </Heading>
                    </Stack>
                    <Flex
                        align={'center'}
                        bottom={3}
                        flex={1}
                        justify={'center'}
                        position={'relative'}
                        width={'full'}>
                        {children}
                    </Flex>
                </Stack>
            </Stack>
    </Container>

  )}