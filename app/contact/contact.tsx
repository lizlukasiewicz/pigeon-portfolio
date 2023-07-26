"use client";
// import React from "react";
import { TempContainer } from "ui/TempContainer";
import { 
        Container,
        useColorModeValue as uCMV,
        Box,
        Text,
        Flex
      } from "@chakra-ui/react"
import { fadeOut, shake, slideUp, openLetter } from "lib/helpers/animation";
// type PageProps = {
//   visRef: any;
//   visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>;
// };//{ visRef, visible }: PageProps


export default function Contact() {
  // const [loaded, setLoaded] = React.useState<boolean>(false);
  //   React.useEffect(() => {
  //       visible && setLoaded(true)
  //   }, [visible]);
  
    const fadeOutAnim: string = `${fadeOut} 750ms ease-in-out forwards`;
    const openLetterAnim: string = `${openLetter} 500ms ease-in-out forwards`;
    const shakeAnim: string = `${shake} 200ms ease-in-out`;
    const slideUpAnim: string = `${slideUp} 500ms 500ms ease-in-out forwards`;
    const bgColor1: string = uCMV("#020405", "#B3DDC1")
    const bgColor2: string = uCMV("#FFF4E1", "#1C2445")
    return(
      <Container
        id="contact"
        maxW={{ base: "95%", sm: "85%", lg: "85%", xl: "70%" }}
        //opacity={loaded ? 1 : 0.5}
        transition={"500ms ease-out"}>
          <TempContainer
            //loaded={loaded}
            label={"contact"}
            title={"Drop a line"}>
              <Flex
                alignItems={"center"}
                flexDirection={"column"}
                height={{ base: "85vw", sm: "65vw", lg: "45vw" }}
                justifyContent={"center"}
                //ref={visRef}
                width={{ base: "80vw", lg: "60vw" }}>
                  <Box
                    alignItems={"center"}
                    animation={shakeAnim}//loaded ? shakeAnim : fadeOutAnim
                    border={"1px solid"}
                    borderRadius={5}
                    boxShadow={"0 15px 10px -10px rgba(0,0,0,0.5)"}
                    display={"flex"}
                    height={"50%"}
                    justifyContent={"center"}
                    position={"relative"}
                    top={"10%"}
                    width={"100%"}
                    _before={{
                        backgroundColor: bgColor1,
                        clipPath: "polygon(0% 0%, 50% 50%, 100% 0%, 100% 100%, 0% 100%)",
                        content: `""`,
                        inset: 0,
                        position: "absolute",
                        zIndex: 1 }}
                    _after={{
                        backgroundColor: bgColor2,
                        clipPath: "polygon(0% 1%, 50% 51%, 100% 1%, 100% 100%, 0% 100%)",
                        content: `""`,
                        inset: 0,
                        position: "absolute",
                        zIndex: 1 }}>

                          {/* {loaded && (
                            <React.Fragment> */}
                              <Box
                                    animation={openLetterAnim}
                                    backgroundColor={bgColor1}
                                    border={'1px solid'}
                                    clipPath={"polygon(0% 0%, 50% 50%, 100% 0%)"}
                                    height={"100%"}
                                    position={"absolute"}
                                    width={"100.5%"}
                                    zIndex={1}
                                    _before={{
                                        backgroundColor: bgColor2,
                                        clipPath: "polygon(0% -1%, 50% 49%, 100% -1%)",
                                        content: `""`,
                                        inset: 0,
                                        position: "absolute" }} />
                                <Box
                                    animation={slideUpAnim}
                                    backgroundColor={bgColor2}
                                    border={".5px solid"}
                                    borderRadius={5}
                                    fontFamily={"var(--chakra-fonts-mono)"}
                                    fontSize={{ base: "10px", sm: "xs", lg: "md"}}
                                    height={"90%"}
                                    padding={"5%"}
                                    position={"absolute"}
                                    width={"90%"}>
                                      <Flex flexDirection={"column"} width={"90%"} opacity={.8}>
                                        <Text fontWeight={"bold"}>Dear Viewer,</Text>
                                        <Text 
                                          color={uCMV("#3D1C4A", "#00E2CB")}
                                          as={"a"}
                                          href={"mailto:e.lukasiewicz.n@gmail.com"}>
                                            Contact me
                                        </Text>
                                        <Text marginY={"5%"} textAlign={"left"}>
                                            {`Let's get in touch! You can email me `}
                                            <Text
                                                as={"a"}
                                                color={uCMV("#D54440", "goldenrod")}
                                                href={"mailto:e.lukasiewicz.n@gmail.com"}
                                                position={"relative"}
                                                _before={{
                                                    backgroundColor: uCMV("rgb(190,147,45)", "goldenrod"),
                                                    borderRadius: "5px",
                                                    bottom: -1,
                                                    content: `""`,
                                                    height: "2px",
                                                    position: "absolute",
                                                    transition: "100ms ease-out",
                                                    width: 0 }}
                                                _hover={{
                                                    color: uCMV("rgb(190,147,45)", "goldenrod"),
                                                    _before: { width: "105%" } }}>
                                                here
                                            </Text>
                                            .
                                        </Text>
                                        </Flex>

                                </Box>

                            {/* </React.Fragment>
                          )} */}
                  </Box>
              </Flex>
          </TempContainer>
      </Container>
    )
}