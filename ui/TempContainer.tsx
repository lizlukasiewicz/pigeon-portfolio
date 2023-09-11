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
import { growRight, growRightLong, dissolve } from '../lib/helpers/animation';

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
  const growRightAnim: string = `${growRightLong} 1s 250ms forwards`;
  const growRightLittleAnim: string = `${growRight} 1s 250ms forwards`;
  return (
            <Stack
                align={'center'} 
                direction={{ base: 'column', md: 'row' }} 
                paddingY={10}
                paddingTop={"7%"}
                spacing={{ base: 8, md: 10 }}>
                <Stack spacing={{ base: 4, md: 10 }} position={"relative"} paddingBottom={2} paddingRight={2} >
                    <Stack position={"relative"} >

                          <HStack>
                          <Box 
                              backgroundColor={uCMV("rgba(255,244,225,0.9)", "rgba(19,29,48,0.8)")} 
                              height={4}
                              width={4}
                              border={uCMV("1.5px solid #822320","1.5px solid #00E2CB")}
                              borderRadius={'9999px'}
                              //opacity={loaded ? 1 : 0}
                              position={"relative"}
                              top={"-10px"}
                              left={"-15px"}
                                  />
                            <Box 
                              animation={loaded ? growRightAnim : erase } 
                              borderTop={uCMV("1px solid #822320", "1px solid #00E2CB")}
                              borderRight={uCMV("1px solid #822320", "1px solid #00E2CB")}
                              borderRadius={"0px 50px 0px"}
                              height={"6px"}
                              opacity={0}
                              position={"relative"}
                              top={"-8px"}
                              left={"-23px"}
                              width={0}
                              _after={{
                                  borderRadius: "0px 5px 0px",
                                  padding:"4px",
                                  borderLeft: uCMV("0.9px solid #822320", "0.9px solid #00E2CB"),
                                  borderBottom: uCMV("1px solid #822320", "1px solid #00E2CB"),
                                  content: `""`,
                                  position: "absolute",
                                  right: "-9px",
                                  bottom: "-9px",
                                  width: 1}} />
                            <Box 
                              animation={loaded ? growRightLittleAnim: erase}
                              borderBottom={uCMV("1px solid rgb(130,35,32)", "1px solid rgb(0,226,203)")} //{"rgb(0,226,203)"} ////darker red nonlist  ||  topPal MUTED BLUE
                              borderRight={uCMV("1px solid rgb(130,35,32)", "1px solid rgb(0,226,203)")} //{"rgb(0,226,203)"} ////darker red nonlist  ||  topPal MUTED BLUE
                              height={"1px"}
                              opacity={0}
                              position={"relative"}
                              bottom={"-3.5px"}
                              left={"-20px"}
                              width={0}
                              _before={{
                                  borderTop: uCMV("0.9px solid rgb(130,35,32)", "0.9px solid rgb(0,226,203)"),//darker red nonlist  ||  topPal MUTED BLUE//"1px solid rgb(0,226,203)",//
                                  content: `""`,
                                  position: "absolute",
                                  left: -1,
                                  width: 1 }}
                              _after={{
                                  borderTop: uCMV("0.9px solid rgb(130,35,32)", "0.9px solid rgb(0,226,203)"),//darker red nonlist  ||  topPal MUTED BLUE//"4px solid rgb(100,156,166)",//
                                  borderRadius: "0px 5px 0px",
                                  content: `""`,
                                  position: "absolute",
                                  right: -1,
                                  width: 1 }} />
                          </HStack>
                                
                        <Heading
                            fontFamily={"var(--chakra-fonts-mono)"}
                            fontSize={{base:"2xl", sm: "xl", md: "2xl"}}
                            fontWeight={"bold"}
                            color={uCMV("#46373E", "#00C484")}>
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