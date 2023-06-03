'use client'
import * as React from "react";
import {
    Stack,
    Box,
    Text,
    useColorModeValue as uCMV
} from "@chakra-ui/react"
import { SkillTable } from "lib/Icons"
import { fadeDown, growRight } from 'lib/helpers/animation'
import { TempContainer } from 'ui/TempContainer';
import GitCalendar from "../components/GitCalendar";

type PageProps = {
    pageRefs: React.MutableRefObject<{}>;
    visRef: any;
    visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>;
};

export default function About({ pageRefs, visRef, visible }: PageProps) {//
    const [loaded, setLoaded] = React.useState<boolean>(false);
    React.useEffect(() => {
        visible && setLoaded(true)
    }, [visible]);
    const [name, setName] = React.useState<boolean>(false);
    const fadeDownText: string = `5s 100ms forwards ${fadeDown}`;
    const fadeRightFirst: string = `800ms 800ms forwards ${growRight}`;
    const fadeRightSecond: string = `800ms 1200ms forwards ${growRight}`;
    
    return(
      <TempContainer 
        label={'about'}  
        title={'About me'} 
        pageRefs={pageRefs}
        //loaded={loaded}
        refNum={1}>
          <Box
            ref={visRef}
            display={"flex"}
            flexDir={'column'}
            minHeight={"60vh"}
            justifyContent={'space-evenly'}>

              <Box
                // marginBottom={{ base: "-25%", lg: 0 }}
                // marginTop={{base: "50px", lg:"100px"}}
                // mx={{base: "70px", lg:"200px"}}
                display={"flex"}
                //opacity={visible ? 1 : 0.75}
                flexDir={"row"}
                justifyContent={"space-around"}
                //minHeight={"30vh"}
                ref={el => pageRefs.current = { ...pageRefs.current, home: el }}>
                  <Stack
                    ref={visRef}
                    color={"rgb(0,0,0,0.65)"}
                    fontFamily={"var(--chakra-fonts-mono)"}
                    // fontSize={{ base: "sm", lg: "md" }}
                    textAlign={"justify"}>

                      <Text 
                        align={'left'} 
                        fontSize={{ base: "sm", lg: "lg" }} 
                        color={uCMV("#2B2B2B", '#B3DDC1')} 
                        cursor={"pointer"}
                        onMouseOver={ () => setName(!name)}>
                          
                          Hey there! My name is <Text as={'span'} fontSize={{ base: "md", lg: "lg" }} color={uCMV("#D54440", '#59BC7D')}> E<Text as={'span'} opacity={name? 1 : 0} transition={"300ms ease-in-out"}>lizabeth,</Text></Text>

                                                        
                      </Text>

                      <Text
                        align={'center'} fontSize={{ base: "sm", lg: "lg" }} color={uCMV("#2B2B2B", '#B3DDC1')}>
                        And I like to build things- 
                      </Text>
                      

                      <Text  
                        align={'left'} marginY={2} fontSize={{ base: "2xl", lg: "4xl" }} color={uCMV("#2B2B2B", '#B3DDC1')}>
                        Because<Text animation={fadeRightFirst} as={'span'} color={uCMV("#D54440", '#59BC7D')} opacity={0} > I can.</Text></Text>

                      <Text  
                        align={'right'} marginY={2} fontSize={{ base: "2xl", lg: "4xl" }} noOfLines={1} color={uCMV("#2B2B2B", '#B3DDC1')}>
                        Because<Text animation={fadeRightSecond} as={'span'} color={uCMV("#D54440", '#59BC7D')} opacity={0} > I feel like it.</Text> </Text>
                  </Stack>
              </Box>

              <Box>
                  <Text 
                    fontFamily={"var(--chakra-fonts-mono)"} 
                    animation={fadeDownText} 
                    align={'center'} 
                    fontSize={{ base: "md", lg: "lg" }} 
                    color={uCMV("#2B2B2B", '#B3DDC1')}>
                      In the meantime, here are just a few skills in my toolbox:
                  </Text>
                  <SkillTable />
              </Box>
              <GitCalendar />
          </Box>
        </TempContainer>
    )
}