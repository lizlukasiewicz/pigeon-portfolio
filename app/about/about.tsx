
import {useState, useEffect} from "react";
import {
    Container,
    Stack,
    Box,
    Text,
    useColorModeValue as uCMV
} from "@chakra-ui/react"
import { SkillTable } from "lib/experience"
import { fadeDown, growRight, dissolve } from 'lib/helpers/animation'
import { TempContainer } from 'ui/TempContainer';
import GitCalendar from "../components/GitCalendar";
import { PageProps } from 'lib/helpers/interfaces';

export default function About({ visRef, visible }: PageProps) {
    const [loaded, setLoaded] = useState<boolean>(false);
    useEffect(() => {
        visible && setLoaded(true)
    }, [visible]);
    const [name, setName] = useState<boolean>(false);
    const erase: string =`5s 100ms forwards ${dissolve}`
    const fadeDownText: string = `5s 2000ms forwards ${fadeDown}`;
    const fadeRightFirst: string = `1000ms 800ms forwards ${growRight}`;
    const fadeRightSecond: string = `1000ms 1500ms forwards ${growRight}`;
    
    return(
      <Container
        id="about"
        ref={visRef}
        maxW={{ base: "100%", sm: "85%", lg: "85%", xl: "70%" }}
        transition={"500ms ease-out"}>
          <TempContainer 
            label={'about'}  
            title={'About me'}
            loaded={loaded}>
              <Stack
                width={{ base: "80vw", lg: "60vw" }}
                direction={"column"}
                opacity={loaded ? 1 : 0.1}
                //minHeight={"70vh"}
                justify={"space-around"}
                spacing={{base: 14, md:20}}>

                  <Box
                    display={"flex"}
                    flexDir={"row"}
                    justifyContent={"space-around"}>
                      <Stack
                        color={"rgb(0,0,0,0.65)"}
                        fontFamily={"var(--chakra-fonts-mono)"}
                        textAlign={"justify"}
                        spacing={5}>

                          <Text 
                            align={'left'} 
                            fontSize={{ base: "lg", lg: "md" }} 
                            color={uCMV("#020405", '#B3DDC1')} 
                            cursor={"pointer"}
                            onMouseOver={ () => setName(!name)}>
                              
                              Hey there! My name is <Text as={'span'} fontSize={{ base: "lg", lg: "md" }} color={uCMV("#D54440", '#59BC7D')}> E<Text as={'span'} opacity={name? 1 : 0} transition={"300ms ease-in-out"}>lizabeth,</Text></Text>

                                                            
                          </Text>

                          <Text
                            align={'center'}fontSize={{ base: "md", lg: "lg" }} color={uCMV("#020405", '#B3DDC1')}>
                            And I like to build things- 
                          </Text>
                          

                          <Text  
                            align={'left'} marginY={2} fontSize={{ base: "2xl", lg: "4xl" }} color={uCMV("#020405", '#B3DDC1')}>
                            Because<Text as={'span'} color={uCMV("#D54440", '#59BC7D')} animation={visible ? fadeRightFirst : erase} opacity={0}> I can.</Text></Text>
                          <Text  
                            align={'right'} marginY={2} fontSize={{  base: "2xl", lg: "4xl" }}  color={uCMV("#020405", '#B3DDC1')}>
                            Because<Text as={'span'} color={uCMV("#D54440", '#59BC7D')} animation={visible ? fadeRightSecond : erase} opacity={0}> I feel like it.</Text></Text>
                      </Stack>
                  </Box>

                  <Box>
                      <Text 
                        fontFamily={"var(--chakra-fonts-mono)"} 
                        animation={visible? fadeDownText : erase} 
                        align={'center'} 
                        opacity={0}
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