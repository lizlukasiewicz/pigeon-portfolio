'use client'
import * as React from "react";
import {
    Stack,
    Box,
    Text,
    Icon
} from "@chakra-ui/react"
import { SkillTable, NightIcon, NightIcon2 } from "../lib/Icons"
//<Icon as={NightIcon} w={35} h={35}/> //smaller:: <Icon as={NightIcon2} w={45} />
import { fadeDown, fadeRight, growRight } from '../lib/helpers/animation'
import { TempContainer } from '../ui/TempContainer';
//import {  PageProps } from '../lib/Loading';
type PageProps = {
    pageRefs: React.MutableRefObject<{}>;
    visRef: any;
    visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>;
};

export default function About({ pageRefs, visRef, visible }: PageProps) {
    const [loaded, setLoaded] = React.useState<boolean>(false);
    React.useEffect(() => {
        visible && setLoaded(true)
    }, [visible]);
    const [name, setName] = React.useState<boolean>(false);
    const fadeDownText: string = `5s 100ms forwards ${fadeDown}`;
    const fadeRightFirst: string = `6s 3s forwards ${growRight}`;//800ms 800ms
    const fadeRightSecond: string = `6s 4s forwards ${growRight}`;//800ms 1200ms
    
    return(
      <TempContainer label={'About me'}>
        <Box
          display={"flex"}
          flexDir={'column'}
          // 💥 REMOVE WHEN DONE FORMATTING
          //border={"1px solid rgb(243,186,64)"} //YELLOW
          minHeight={"30vh"}>

            <Box
              // marginBottom={{ base: "-25%", lg: 0 }}
              // marginTop={{base: "50px", lg:"100px"}}
              // mx={{base: "70px", lg:"200px"}}
              display={"flex"}
              opacity={visible ? 1 : 0.75}
              // 💥 REMOVE WHEN DONE FORMATTING
              //border={"1px solid rgb(98,202,243)"} //BLUE
              flexDir={"row"}
              justifyContent={"space-around"}
              // minHeight={"70vh"}
              ref={el => pageRefs.current = { ...pageRefs.current, home: el }}>
                <Stack
                  // 💥 REMOVE WHEN DONE FORMATTING
                  // border={"1px solid rgb(172,35,244)"} // PURPLE  
                  ref={visRef}
                  color={"rgb(0,0,0,0.65)"}
                  fontFamily={"var(--chakra-fonts-mono)"}
                  // fontSize={{ base: "sm", lg: "md" }}
                  textAlign={"justify"}>

                    <Text 
                      //animation={fadeDownText} 
                      // 💥 REMOVE WHEN DONE FORMATTING
                      //border={"1px solid rgb(0,226,203)"} 
                      align={'left'} 
                      fontSize={{ base: "sm", lg: "lg" }} 
                      color='#B3DDC1' 
                      cursor={"pointer"}
                      onMouseOver={ () => setName(!name)}>
                        
                        Hey there! My name is <Text as={'span'} fontSize={{ base: "md", lg: "lg" }} color='#59BC7D'> E<Text as={'span'} opacity={name? 1 : 0} transition={"300ms ease-in-out"}>lizabeth,</Text></Text>

                                                      
                    </Text>

                    <Text //animation={fadeDownText}
                      align={'center'} fontSize={{ base: "sm", lg: "lg" }} color='#B3DDC1'>
                      And I like to build things- 
                    </Text>

                    <Text //animation={fadeDownText}  
                      align={'left'} marginY={2} fontSize={{ base: "2xl", lg: "4xl" }} color='#B3DDC1'>
                      Because<Text animation={fadeRightFirst} as={'span'} color='#59BC7D' opacity={0} > I can.</Text></Text>

                    <Text //animation={fadeDownText}  
                      align={'right'} marginY={2} fontSize={{ base: "2xl", lg: "4xl" }} noOfLines={1} color='#B3DDC1'>
                      Because<Text animation={fadeRightSecond} as={'span'} color='#59BC7D' opacity={0} > I feel like it.</Text> </Text>
                </Stack>
            </Box>

            <Box>
                <Text 
                  fontFamily={"var(--chakra-fonts-mono)"} 
                  animation={fadeDownText} 
                  align={'center'} 
                  fontSize={{ base: "md", lg: "lg" }} 
                  color='#B3DDC1'>
                    In the meantime, here are just a few skills in my toolbox:
                </Text>
                <SkillTable />
            </Box>
            
        </Box>
        </TempContainer>
    )
}