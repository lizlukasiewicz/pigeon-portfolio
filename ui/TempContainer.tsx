'use client'
import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue as uCMV
} from '@chakra-ui/react';
import { growRight, growRightLittle, dissolve } from '../lib/helpers/animation';

export const TempContainer=({
  children,
  label,
  title,
  loaded,
}:{
  children?: React.ReactNode;
  label: string,
  title?: string,
  loaded?: boolean,
})=> {
  const erase: string =`5s 100ms forwards ${dissolve}`
  const growRightAnim: string = `${growRight} 1s 250ms forwards`;
  const growRightLittleAnim: string = `${growRightLittle} 1s 250ms forwards`;
  return (
            <Stack
                align={'center'} // items-center
                direction={{ base: 'column', md: 'row' }} // flex-col laptop:flex-row
                paddingY={18}
                paddingTop={"7%"}
                spacing={{ base: 8, md: 10 }}>
                <Stack flex={2} spacing={{ base: 4, md: 10 }} position={"relative"}>
                    <Stack position={"relative"} spacing={3}>

                          <HStack>
                            <Box 
                              animation={loaded ? growRightAnim : erase } 
                              backgroundColor={uCMV("#3D1C4A", "#008582")}
                              height={1}
                              borderRadius={10}
                              opacity={0}
                              position={"relative"}
                              top={"3%"}
                              width={0}
                              _after={{
                                  borderRight: "4px solid #008582",
                                  borderTop: uCMV("4px solid #3D1C4A", "4px solid #008582"),
                                  content: `""`,
                                  position: "absolute",
                                  right: -1,
                                  width: 0 }} />
                            <Box 
                              animation={loaded ? growRightLittleAnim: erase}
                              backgroundColor={uCMV("rgb(130,35,32)", "rgb(100,156,166)")} //{"rgb(100,156,166)"} ////darker red nonlist  ||  topPal MUTED BLUE
                              height={1}
                              opacity={0}
                              position={"relative"}
                              top={"2%"}
                              width={0}
                              _before={{
                                  borderLeft: "4px solid transparent",
                                  borderBottom: uCMV("4px solid rgb(130,35,32)", "4px solid rgb(100,156,166)"),//darker red nonlist  ||  topPal MUTED BLUE//"4px solid rgb(100,156,166)",//
                                  content: `""`,
                                  position: "absolute",
                                  left: -1,
                                  width: 0 }}
                              _after={{
                                  borderRight: "4px solid transparent",
                                  borderTop: uCMV("4px solid rgb(130,35,32)", "4px solid rgb(100,156,166)"),//darker red nonlist  ||  topPal MUTED BLUE//"4px solid rgb(100,156,166)",//
                                  content: `""`,
                                  position: "absolute",
                                  right: -1,
                                  width: 0 }} />
                          </HStack>
                                {/* )} */}
                        <Heading
                            fontFamily={"var(--chakra-fonts-mono)"}
                            fontSize={{ base: 'lg', sm: 'xl', md: "2xl" }}
                            fontWeight={"bold"}
                            color={uCMV("#46373E", "#00C484")}
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
                        width={'100%'}>
                        {children}
                    </Flex>
                </Stack>
            </Stack>

  )}