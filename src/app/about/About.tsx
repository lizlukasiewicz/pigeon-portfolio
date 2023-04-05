'use client'
import * as React from "react";
import {
    Stack,
    Box,
    Text
} from "@chakra-ui/react"
import { SkillTable } from "../lib/Icons"
import { fadeDown, fadeRight} from '../lib/helpers/animation'
//import {  PageProps } from '../lib/Loading';
type PageProps = {
    pageRefs?: React.MutableRefObject<{}>;
    visRef?: any;
    visible?: boolean | React.Dispatch<any> | React.MutableRefObject<any>;
};

export default function About({ pageRefs, visRef, visible }: PageProps) {
    const [loaded, setLoaded] = React.useState<boolean>(false);
    React.useEffect(() => {
        visible && setLoaded(true)
    }, [visible]);
    const [name, setName] = React.useState<boolean>(false);
    const fadeDownText: string = `${fadeDown} 200ms 180ms forwards`;
    const fadeRightFirst: string = `${fadeRight} 800ms 800ms forwards`;
    const fadeRightSecond: string = `${fadeRight} 800ms 1200ms forwards`;
    return(
        <Box
        display={"flex"}
        flexDir={'column'}
        // 💥 REMOVE WHEN DONE FORMATTING
        border={"1px solid rgb(243,186,64)"} //YELLOW
        minHeight={"30vh"}>

            <Box
                    // marginBottom={{ base: "-25%", lg: 0 }}
                    // marginTop={{base: "50px", lg:"100px"}}
                    // mx={{base: "70px", lg:"200px"}}
                    display={"flex"}
                    // 💥 REMOVE WHEN DONE FORMATTING
                    border={"1px solid rgb(98,202,243)"} //BLUE
                    flexDir={"row"}
                    justifyContent={"space-around"}
                    // minHeight={"70vh"}
                    ref={visRef}
                    >
            <Stack
                // 💥 REMOVE WHEN DONE FORMATTING
                border={"1px solid rgb(172,35,244)"} // PURPLE  
                color={"rgb(0,0,0,0.65)"}
                fontFamily={"var(--chakra-fonts-mono)"}
                // fontSize={{ base: "sm", lg: "md" }}
                textAlign={"justify"}>
                <Text animation={fadeDownText} border={"1px solid rgb(0,226,203)"} align={'left'} fontSize={{ base: "sm", lg: "lg" }} color='#B3DDC1' onMouseOver={ () => setName(!name)}>
                    Hey there! My name is {name? <Text as='b' fontSize={{ base: "sm", lg: "lg" }} color='#59BC7D'>Elizabeth,</Text>:<Text as='b' fontSize={{ base: "sm", lg: "lg" }} color='#59BC7D' >E,</Text>}
                </Text>

                <Text animation={fadeDownText} align={'center'} fontSize={{ base: "sm", lg: "lg" }} color='#B3DDC1'>
                And I like to build things-
                </Text>

                <Text animation={fadeDownText} align={'left'} marginY={2} fontSize={{ base: "2xl", lg: "4xl" }} color='#B3DDC1'>
                Because <Text animation={fadeRightFirst} as='b' color='#59BC7D'>I can.</Text>
                </Text>

                <Text animation={fadeDownText} align={'right'} marginY={2} fontSize={{ base: "2xl", lg: "4xl" }} noOfLines={1} color='#B3DDC1'>
                Because <Text animation={fadeRightSecond} as='b' color='#59BC7D'>I feel like it.</Text> 
                </Text>
            </Stack>
            </Box>

                <Box>
                    <Text fontFamily={"var(--chakra-fonts-mono)"} animation={fadeDownText} align={'center'} fontSize={{ base: "md", lg: "lg" }} color='#B3DDC1'>
                    In the meantime, here are just a few skills in my toolbox:
                    </Text>
                    <SkillTable />
                </Box>
        </Box>

    )
}