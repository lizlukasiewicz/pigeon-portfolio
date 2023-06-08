import { fadeDown } from 'lib/helpers/animation';
import { Text, Box, useColorModeValue as uCMV, Flex} from '@chakra-ui/react'
import { useState, useEffect } from 'react';

type PageProps = {
  pageRefs: React.MutableRefObject<{}>;
  visRef:  any;
  visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>;
};


export default function Splash({ pageRefs, visRef, visible }: PageProps) {
    const [name, setName] = useState<boolean>(false);
    const fadeDownAnim: string = `${fadeDown} 1000ms`;
    const [loaded, setLoaded] = useState<boolean>(false);
    useEffect(() => {
        visible && setLoaded(true)
    }, [visible]);

    return(
          <Flex
            id="#home"
            w={'100%'} 
            alignItems={"center"}
            position={"relative"}
            height={"90vh"}>
              

                  <Box w={'100%'} 
                      ref={visRef}
                      minHeight={'800px'}
                      //opacity={loaded ? 1 : 0.3}
                      bgGradient={uCMV("radial(circle 375px at center, #FFFFF1 46%, rgba(255,255,129, 0.52) 60%, #FFFF81 61.4%, rgba(255,211,21, 0.8) 63%, rgba(255,244,225,0.5) 83%, rgba(255,238,213, 0) 92%)", 
                                        "radial(circle 375px at center, #112941 46%, rgba(93, 185, 188, 0.52) 60%, #00E2CB 61.4%, rgba(51, 72, 80, 0.8) 62%, rgba(7, 18, 43, 0.5) 82%,rgba(7, 18, 43, 0) 92%)")}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      pos={"relative"}>

                      <Box
                          m={"0.5rem"}
                          padding={7}
                          pos={"absolute"}
                          zIndex={1}
                          onMouseOver={() => setName(!name)}
                          _hover={{
                            cursor: "pointer"
                          }}
                          animation={fadeDownAnim}>
                        <Text as={'b'}fontWeight={600}fontFamily={"var(--chakra-fonts-mono)"}fontSize={'3xl'} color={uCMV("#3D1C4A", "#E1E1E1")}>
                          <Text as={'span'} opacity={name? 0 : 1} transition={"500ms ease-in-out"}>w</Text><Text as={'span'} transition={"500ms ease-in-out"}>{name? 'L' : 'u'}</Text><Text as={'span'} transition={"500ms ease-in-out"}>{name?'u':'.'}</Text>ka<Text as={'span'} transition={"500ms ease-in-out"}>{name?'s':"'"}</Text><Text as={'span'} transition={"500ms ease-in-out"}>{name?'i':'ɕ'}</Text><Text as={'span'} transition={"500ms ease-in-out"}>{name?'e':'ɛ'}</Text><Text as={'span'} transition={"500ms ease-in-out"}>{name?'w':'.'}</Text><Text as={'span'} transition={"500ms ease-in-out"}>{name?'i':'v'}</Text><Text as={'span'} transition={"500ms ease-in-out"}>{name?'c':'i'}</Text><Text as={'span'} transition={"500ms ease-in-out"}>{name?'z':'t͡'}</Text><Text as={'span'} opacity={name? 0 : 1} transition={"500ms ease-in-out"}>ʂ</Text>
                        </Text> 
                      </Box>
                          

                  </Box>
              
          </Flex>
    )
}
