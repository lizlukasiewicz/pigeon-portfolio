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
import { growRight, growRightLittle } from '../lib/helpers/animation';

// TODO  DAYMODE COLORS
export const TempContainer=({
  children,
  label,
  title,
  loaded,
  pageRefs,
}:{
  children?: React.ReactNode;
  label?: string,
  title?: string,
  loaded?: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
  pageRefs?: React.MutableRefObject<{}>,
})=> {

  const growRightAnim: string = `${growRight} 1s 250ms forwards`;
  const growRightLittleAnim: string = `${growRightLittle} 1s 250ms forwards`;
  return (
            <Stack
                align={'center'}
                direction={{ base: 'column', md: 'row' }}
                paddingY={18}
                paddingTop={"7.5%"}
                spacing={{ base: 8, md: 10 }}
                >
                <Stack flex={2} spacing={{ base: 5, md: 10 }} position={"relative"}>
                    <Stack position={"relative"} spacing={3}>
                        <HStack opacity={loaded ? 1 : 0.5}>
                          <Box 
                            animation={growRightAnim}//&& loaded
                            backgroundColor={uCMV("#3D1C4A", "#008582")}// DARK RED || NOT LISTED MUTED BLUE   //{"#008582"}//
                            height={1}
                            opacity={0}
                            position={"relative"}
                            top={"2%"}
                            width={0}
                            _after={{
                                borderRight: "4px solid transparent",
                                borderTop: uCMV("4px solid #3D1C4A", "4px solid #008582"),// DARK RED || NOT LISTED MUTED BLUE // "4px solid #008582",//
                                content: `""`,
                                position: "absolute",
                                right: -1,
                                width: 0 }} />
                          <Box 
                            animation={growRightLittleAnim}//&&loaded
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
                        <Heading
                            fontFamily={"var(--chakra-fonts-mono)"}
                            fontSize={{ base: 'lg', sm: 'xl', md: "2xl" }}
                            fontWeight={"bold"}
                            color={uCMV("#46373E", "#00C484")}//Darker nonlist brown  ||  NEON GREEN              {"#00C484"}// //color={"#B3DDC1"}> <<MUTED GREEN
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

  )}