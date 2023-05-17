import { fadeDown } from '../lib/helpers/animation';
import { Text, Box, useColorModeValue as uCMV, Container } from '@chakra-ui/react'
import * as React from 'react';
import { TempContainer } from '../ui/TempContainer';

type PageProps = {
  pageRefs: React.MutableRefObject<{}>;
  visRef: any;
  visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>;
};


export default function Splash({ pageRefs, visRef, visible }: PageProps) {
    const [name, setName] = React.useState<boolean>(false);
    const fadeDownAnim: string = `${fadeDown} 1000ms`;
    const [loaded, setLoaded] = React.useState<boolean>(false);
    React.useEffect(() => {
        visible && setLoaded(true)
    }, [visible]);

    return(
      // <TempContainer
      //   pageRefs={pageRefs}
      //   refNum={0}
      //   title={' '}
      <Box
        w={'100%'} 
        h={'800px'}
        ref={el => pageRefs.current = { ...pageRefs.current, home: el }}
        paddingY={"20vh"}
        >
          <Container
            top={1}
            zIndex={2}
            position={"absolute"}
            ref={visRef}
            height={"2px"}
            width={"2px"}
            backgroundColor={"#FFFF81"}></Container>
          <Box w={'100%'} 
              //minHeight={'90vh'}
              h={'650px'}
              //opacity={visible ? 1 : 0.5} 
              transition={"500ms ease-out"}
              bgGradient={uCMV("radial(circle 375px at center, #FFFFF1 46%, rgba(255,255,129, 0.52) 60%, #FFFF81 61.4%, rgba(243,186,64, 0.8) 62%, rgba(7, 18, 43, 0))", 
                                "radial(circle 375px at center, #112941 46%, rgba(93, 185, 188, 0.52) 60%, #00E2CB 61.4%, rgba(51, 72, 80, 0.8) 62%, rgba(7, 18, 43, 0.5) 82%,rgba(7, 18, 43, 0) 92%)")}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                pos={"relative"}
                minH={"400px"}
                marginBottom={"10%"}>

              <Box
                  m={"0.5rem"}
                  padding={7}
                  pos={"absolute"}
                  top={"260"}
                  zIndex={1}
                  onMouseOver={() => setName(!name)}
                
                  _hover={{
                    cursor: "pointer"
                  }}
                  animation={fadeDownAnim}
                  //transition={"500ms ease-out"} 
                >
                <Text as={'b'}fontWeight={600}fontFamily={"var(--chakra-fonts-mono)"}fontSize={'3xl'} color={uCMV("#2B2B2B", "#E1E1E1")}>
                  <Text as={'span'} opacity={name? 0 : 1} transition={"500ms ease-in-out"}>w</Text><Text as={'span'} transition={"500ms ease-in-out"}>{name? 'L' : 'u'}</Text><Text as={'span'} transition={"500ms ease-in-out"}>{name?'u':'.'}</Text>ka<Text as={'span'} transition={"500ms ease-in-out"}>{name?'s':"'"}</Text><Text as={'span'} transition={"500ms ease-in-out"}>{name?'i':'ɕ'}</Text><Text as={'span'} transition={"500ms ease-in-out"}>{name?'e':'ɛ'}</Text><Text as={'span'} transition={"500ms ease-in-out"}>{name?'w':'.'}</Text><Text as={'span'} transition={"500ms ease-in-out"}>{name?'i':'v'}</Text><Text as={'span'} transition={"500ms ease-in-out"}>{name?'c':'i'}</Text><Text as={'span'} transition={"300ms ease-in-out"}>{name?'z':'t͡'}</Text><Text as={'span'} opacity={name? 0 : 1} transition={"300ms ease-in-out"}>ʂ</Text>
                </Text> 
              </Box>
                  

          </Box>
      {/* </TempContainer> */}
      </Box>
    )
}
