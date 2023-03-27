'use client'
import * as React from "react";
import {
    Stack,
    Box,
    Text
} from "@chakra-ui/react"
import { SkillTable, fadeDown, fadeRight } from "../lib/Icons"
// import { useOnScreen, PageProps } from '../lib/Loading';

export default function About() {
    const [loaded, setLoaded] = React.useState<boolean>(false);
    const fadeDownText: string = `${fadeDown} 200ms 180ms forwards`;
    const fadeRightFirst: string = `${fadeRight} 800ms 800ms forwards`;
    const fadeRightSecond: string = `${fadeRight} 800ms 1200ms forwards`;
    return(
        <Box
                marginBottom={{ base: "-25%", lg: 0 }}
                marginTop={{base: "50px", lg:"100px"}}
                mx={{base: "70px", lg:"200px"}}
                display={"flex"}
                flexDir={"row"}
                justifyContent={"space-around"}
                minHeight={"70vh"}
                //ref={visRef}
                >
            <Stack
                color={"rgb(0,0,0,0.65)"}
                fontFamily={"var(--chakra-fonts-mono)"}
                // fontSize={{ base: "sm", lg: "md" }}
                textAlign={"justify"}>
                <Text animation={fadeDownText} align={'center'} fontSize={{ base: "sm", lg: "md" }} color='#00C484'>
                    Hey there! My name is Elizabeth
                </Text>

                <Text animation={fadeDownText} align={'center'} fontSize={{ base: "sm", lg: "md" }} color='#00C484'>
                I like to build things,
                </Text>

                <Text animation={fadeRightFirst} align={'left'} marginY={2} fontSize={{ base: "2xl", lg: "4xl" }} color='#00C484'>
                Because <Text as='b'>I can.</Text>
                </Text>

                <Text animation={fadeRightSecond} align={'right'} marginY={2} fontSize={{ base: "2xl", lg: "4xl" }} noOfLines={1} color='#00C484'>
                Because <Text as='b'>I feel like it.</Text> 
                </Text>

                <SkillTable />
            </Stack>
        </Box>

    )
}