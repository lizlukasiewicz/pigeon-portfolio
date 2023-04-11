'use client'
import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { growRight, growRightLittle } from '../lib/helpers/animation';

export const TempContainer=({
  children,
  label,
  loaded,
  pageRefs,
  refNum
}:{
  children: React.ReactNode;//JSX.Element | JSX.Element[],
  label: string,
  loaded?: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
  pageRefs?: React.MutableRefObject<{}>,
  refNum?: number,
})=> {
  const title: string = label
  const growRightAnim: string = `${growRight} 1s 250ms forwards`;
  const growRightLittleAnim: string = `${growRightLittle} 1s 250ms forwards`;
//   const findScroll = (el: HTMLDivElement, refNum: number): {} => {
//     let testVar: {} = {};
//     switch (refNum) {
//         case 0:
//             testVar = { ...pageRefs.current, home: el };
//             break;
//         case 1:
//             testVar = { ...pageRefs.current, about: el };
//             break;
//         case 2:
//             testVar = { ...pageRefs.current, experience: el };
//             break;
//         case 3:
//             testVar = { ...pageRefs.current, projects: el };
//             break;
//         case 4:
//             testVar = { ...pageRefs.current, contact: el };
//             break;
//         default:
//             console.log("Nav");
//     };
//     return testVar
// };
  return (
    <Container
            maxW={{ base: "95%", sm: "85%", lg: "85%", xl: "70%" }}
            opacity={1}//loaded ? 1 : 0.4
            //ref={el => pageRefs.current = findScroll(el, refNum)}
            transition={"500ms ease-out"}>
            <Stack
                align={'center'}
                direction={{ base: 'column', md: 'row' }}
                paddingY={18}
                paddingTop={"7.5%"}
                spacing={{ base: 8, md: 10 }}>
                <Stack flex={2} spacing={{ base: 5, md: 10 }} position={"relative"}>
                    <Stack position={"relative"} spacing={3}>
                        <HStack>
                          <Box 
                            animation={growRightAnim}//&& loaded
                            backgroundColor={"#AC23F4"}//pinkish/purple
                            height={1}
                            opacity={0}
                            position={"relative"}
                            top={"2%"}
                            width={0}
                            _after={{
                                borderRight: "4px solid transparent",
                                borderTop: "4px solid #AC23F4",//pinkish/purple
                                content: `""`,
                                position: "absolute",
                                right: -1,
                                width: 0 }} />
                          <Box 
                            animation={growRightLittleAnim}//&&loaded
                            backgroundColor={"rgb(0,226,203)"}//bright teal
                            height={1}
                            opacity={0}
                            position={"relative"}
                            top={"2%"}
                            width={0}
                            _before={{
                                borderLeft: "4px solid transparent",
                                borderBottom: "4px solid rgb(0,226,203)",//bright teal
                                content: `""`,
                                position: "absolute",
                                left: -1,
                                width: 0 }}
                            _after={{
                                borderRight: "4px solid transparent",
                                borderTop: "4px solid rgb(0,226,203)",//bright teal
                                content: `""`,
                                position: "absolute",
                                right: -1,
                                width: 0 }} />
                        </HStack>
                        <Heading
                            fontFamily={"var(--chakra-fonts-mono)"}
                            fontSize={{ base: 'lg', sm: 'xl', md: "2xl" }}
                            fontWeight={"bold"}
                            color={"#B3DDC1"}>
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