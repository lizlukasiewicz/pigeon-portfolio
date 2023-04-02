
import { Text, Box, keyframes } from '@chakra-ui/react'
import * as React from 'react';

type PageProps = {
  pageRefs?: React.MutableRefObject<{}>;
  visRef?: any;
  visible?: boolean | React.Dispatch<any> | React.MutableRefObject<any>;
};

export const fadeDown: string = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  } to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
// TODO: FIX TRANSITION ANIMATION 
export default function Splash({ pageRefs, visRef, visible }: PageProps) {
    const [name, setName] = React.useState<boolean>(false);
    const [loaded, setLoaded] = React.useState<boolean>(false);
    
    React.useEffect(() => {
        visible && setLoaded(true)
    }, [visible]);
    const fadeDownAnim: string = `${fadeDown} 500ms 20ms forwards`;//1000ms`;//

    return(
        <Box w='100%' 
             h='650px'
             //opacity={visible ? 1 : 0.25} 
             //transition={"500ms ease-out"}
             bgGradient='radial(circle 375px at center, 
                                            #112941 46%, 
                                            rgba(93, 185, 188, 0.52) 60%, 
                                            #00E2CB 61.4%, 
                                            rgba(51, 72, 80, 0.8) 62%, 
                                            rgba(7, 18, 43, 0.5) 82%,
                                            rgba(7, 18, 43, 0) 92%)'
               display={"flex"}
               justifyContent="center"
               alignItems={"center"}
               pos="relative"
               minH={"400px"}
               >
            <Box
                mb="0.5rem"
                pos="absolute"
                top="300"
                zIndex={2}
                onMouseOver={ () => setName(!name)}
                //onMouseOut = { () => setName(!name)}
                animation={fadeDownAnim}
                transition={"500ms ease-in-out"}
            >
                {name ?
                    <Text
                      // animation={fadeDownAnim}
                      // transition={"100ms ease-in-out"}
                      fontWeight={600}
                      fontFamily={"var(--chakra-fonts-mono)"}
                      fontSize='2xl'
                      // _before={{
                      //   transition: "100ms ease-out"
                      // }}
                    > 
                        /. Lukasiewicz ./ 
                    </Text> 
                :
                    <Text
                      // animation={fadeDownAnim}
                      // transition={"100ms ease-in-out"}
                      fontWeight={600}
                      fontFamily={"var(--chakra-fonts-mono)"}
                      fontSize='2xl'
                      // _before={{
                      //   transition: "100ms ease-out"
                      // }}
                    >
                        / wu.kaˈɕɛ.vit͡ʂ /
                    </Text>
                }
                 

                    
            </Box>
                

        </Box>
    )
}
