'use client'
import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  VStack,
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
  const growRightFirst: string = `${growRightLong} 1s 250ms forwards`;
  const growRightSecond: string = `${growRight} 1s 700ms forwards`;//250ms
  return (
      <VStack 
        width={"100%"} 
        paddingY={"8px"}>
          <HStack width={'100%'} >
            {/* CIRCUIT START */}
              <Box 
                  backgroundColor={uCMV("rgba(255,244,225,1)", "rgba(19,29,48,1)")} 
                  height={5}
                  width={5}
                  border={uCMV("1.5px solid #822320","1.5px solid #00E2CB")}
                  borderRadius={'9999px'}
                  position={"relative"}
                  top={"-10px"}
                  left={"-17px"}/>

                <Box 
                  animation={loaded ? growRightFirst : erase } 
                  borderTop={uCMV("1px solid #822320", "1px solid #00E2CB")}
                  borderRight={uCMV("1px solid #822320", "1px solid #00E2CB")}
                  borderRadius={"0px 50px 0px"}
                  height={"6px"}
                  opacity={0}
                  position={"relative"}
                  top={"-8px"}
                  left={"-26px"}
                  width={0}
                  _after={{
                      borderRadius: "0px 5px 0px",
                      padding:"4px",
                      borderLeft: uCMV("1px solid #822320", "1px solid #00E2CB"),
                      borderBottom: uCMV("1px solid #822320", "1px solid #00E2CB"),
                      content: `""`,
                      position: "absolute",
                      right: "-9px",
                      bottom: "-9px",
                      width: 1}} />
                <Box 
                  animation={loaded ? growRightSecond: erase}
                  borderBottom={uCMV("1px solid rgb(130,35,32)", "1px solid rgb(0,226,203)")}
                  borderRight={uCMV("1px solid rgb(130,35,32)", "1px solid rgb(0,226,203)")}
                  height={"1px"}
                  opacity={0}
                  position={"relative"}
                  bottom={"-3.5px"}
                  left={"-19px"}
                  width={0}
                  _before={{
                      borderTop: uCMV("1px solid rgb(130,35,32)", "1px solid rgb(0,226,203)"),
                      content: `""`,
                      position: "absolute",
                      left: -2,
                      bottom: "-1px",
                      width: 2 }}
                  _after={{
                      borderTop: uCMV("1px solid rgb(130,35,32)", "1px solid rgb(0,226,203)"),
                      borderRadius: "0px 5px 0px",
                      content: `""`,
                      position: "absolute",
                      right: -9,
                      bottom:"-1px",
                      width: 9 }} />
          </HStack>
          <Stack
            align={'center'} 
            direction={'column'}
            paddingY={"8%"}>
                  
                <Stack 
                  paddingBottom={2}>
                    <Stack 
                    >
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
                        justify={'center'}>
                        {children}
                    </Flex>
                    
                </Stack>
          </Stack>
    </VStack>
  )}