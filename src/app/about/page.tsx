'use client'
import * as React from "react";
import {
    Stack,
    Box,
    Text
} from "@chakra-ui/react"
import { SkillTable, fadeDown, fadeRight } from "../lib/Icons"
//import {  PageProps } from '../lib/Loading';
// type PageProps = {
//     pageRefs?: React.MutableRefObject<{}>;
//     visRef?: any;
//     visible?: boolean | React.Dispatch<any> | React.MutableRefObject<any>;
// };

export default function About() {
    // const [loaded, setLoaded] = React.useState<boolean>(false);
    // React.useEffect(() => {
    //     visible && setLoaded(true)
    // }, [visible]);
    const [name, setName] = React.useState<boolean>(false);
    const fadeDownText: string = `${fadeDown} 200ms 180ms forwards`;
    const fadeRightFirst: string = `${fadeRight} 800ms 800ms forwards`;
    const fadeRightSecond: string = `${fadeRight} 800ms 1200ms forwards`;
    const fadeRightThird: string = `${fadeRight} 800ms 1600ms forwards`
    return(
        <Box
        display={"flex"}
        flexDir={'column'}
        justifyContent={'space-evenly'}
        minHeight={"90vh"}>

            <Box
                    marginBottom={{ base: "-25%", lg: 0 }}
                    // marginTop={{base: "50px", lg:"100px"}}
                    mx={{base: "50px", lg:"100px"}}
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
                    <Text animation={fadeDownText} align={'center'} fontSize={{ base: "md", lg: "lg" }} color='#00C484' onMouseOver={ () => setName(!name)}>
                        Hey there! My name is {name? <Text as='b' fontSize={{ base: "md", lg: "lg" }} color='#00C484'>Elizabeth,</Text>:<Text as='b' fontSize={{ base: "md", lg: "lg" }} color='#00C484' >E,</Text>}
                    </Text>
                    <Text animation={fadeDownText} align={'center'} fontSize={{ base: "md", lg: "lg" }} color='#00C484'>
                    And I like to build things-
                    </Text>

                    <Text animation={fadeRightFirst} align={'left'} marginY={2} fontSize={{ base: "2xl", lg: "4xl" }} noOfLines={1} color='#00C484'>
                    Because 
                    <Text animation={fadeRightSecond} as='b'> I can.</Text>
                    </Text>
                    <Text animation={fadeRightSecond} align={'right'} marginY={2} fontSize={{ base: "2xl", lg: "4xl" }} noOfLines={1} color='#00C484'>
                    Because 
                    <Text  animation={fadeRightThird} as='b'> I feel like it.</Text> 
                    </Text>

                </Stack>
                
            </Box>
            <Box>
                <Text fontFamily={"var(--chakra-fonts-mono)"} animation={fadeDownText} align={'center'} fontSize={{ base: "md", lg: "lg" }} color='#00C484'>
                In the meantime, here are just a few skills in my toolbox:
                </Text>
                <SkillTable />
            </Box>

            
        </Box>

    )
}