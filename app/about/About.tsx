'use client'
import * as React from "react";
import {
    Container,
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

export default function About({ pageRefs, visRef, visible }: PageProps) {
    const [loaded, setLoaded] = React.useState<boolean>(false);
    React.useEffect(() => {
        visible && setLoaded(true)
    }, [visible]);
    const [name, setName] = React.useState<boolean>(false);
    const fadeDownText: string = `5s 100ms forwards ${fadeDown}`;
    const fadeRightFirst: string = `1000ms 800ms forwards ${growRight}`;
    const fadeRightSecond: string = `1000ms 1200ms forwards ${growRight}`;
    
    return(
      <Container
        id="about"
        maxW={{ base: "95%", sm: "85%", lg: "85%", xl: "70%" }}
        //opacity={loaded ? 1 : 0}
        ref={el => pageRefs.current = { ...pageRefs.current, about: el }}
        transition={"500ms ease-out"}>
          <TempContainer 
            label={'about'}  
            title={'About me'} 
            loaded={loaded}>
              <Stack
                ref={visRef}
                width={{ base: "80vw", lg: "60vw" }}
                direction={"column"}
                opacity={visible ? 1 : 0.1}
                //minHeight={"70vh"}
                justify={"space-around"}
                spacing={20}>

                  <Box
                    display={"flex"}
                    flexDir={"row"}
                    justifyContent={"space-around"}>
                      <Stack
                        color={"rgb(0,0,0,0.65)"}
                        fontFamily={"var(--chakra-fonts-mono)"}
                        textAlign={"justify"}>

                          <Text 
                            align={'left'} 
                            fontSize={{ base: "md", lg: "lg" }} 
                            color={uCMV("#020405", '#B3DDC1')} 
                            cursor={"pointer"}
                            onMouseOver={ () => setName(!name)}>
                              
                              Hey there! My name is <Text as={'span'} fontSize={{ base: "md", lg: "lg" }} color={uCMV("#D54440", '#59BC7D')}> E<Text as={'span'} opacity={name? 1 : 0} transition={"300ms ease-in-out"}>lizabeth,</Text></Text>

                                                            
                          </Text>

                          <Text
                            align={'center'} fontSize={{ base: "sm", lg: "lg" }} color={uCMV("#020405", '#B3DDC1')}>
                            And I like to build things- 
                          </Text>
                          

                          <Text  
                            align={'left'} marginY={2} fontSize={{ base: "2xl", lg: "4xl" }} color={uCMV("#020405", '#B3DDC1')}>
                            Because<Text as={'span'} color={uCMV("#D54440", '#59BC7D')}> I can.</Text></Text>{/* animation={fadeRightFirst} opacity={0} */}
                          <Text  
                            align={'right'} marginY={2} fontSize={{  base: "2xl", lg: "4xl" }}  color={uCMV("#020405", '#B3DDC1')}>
                            Because<Text as={'span'} color={uCMV("#D54440", '#59BC7D')}> I feel like it.</Text> </Text>{/* animation={fadeRightSecond} opacity={0}  */}
                      </Stack>
                  </Box>

                  <Box>
                      <Text 
                        fontFamily={"var(--chakra-fonts-mono)"} 
                        animation={fadeDownText} 
                        align={'center'} 
                        fontSize={["xl", "lg"]} //{ base: "md", lg: "lg" }
                        color={uCMV("#020405", '#B3DDC1')}>
                          In the meantime, here are just a few skills in my toolbox:
                      </Text>
                      <SkillTable />
                  </Box>
                  <GitCalendar />
              </Stack>
          </TempContainer>
        </Container>
    )
}