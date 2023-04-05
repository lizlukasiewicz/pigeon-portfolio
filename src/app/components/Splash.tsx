import { fadeDown } from '../lib/helpers/animation';
import { Text, Box, keyframes} from '@chakra-ui/react'
import * as React from 'react';

type PageProps = {
  pageRefs?: React.MutableRefObject<{}>;
  visRef?: any;
  visible?: boolean | React.Dispatch<any> | React.MutableRefObject<any>;
};

// TODO: FIX TRANSITION ANIMATION 
export default function Splash({ pageRefs, visRef, visible }: PageProps) {
    const [name, setName] = React.useState<boolean>(false);
    const [loaded, setLoaded] = React.useState<boolean>(false);
    
    React.useEffect(() => {
        visible && setLoaded(true)
    }, [visible]);
    const fadeDownAnim: string = `${fadeDown} 1000ms`;//1000ms`;//

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
                m="0.5rem"
                padding={7}
                pos="absolute"
                top="260"
                zIndex={2}
                onMouseOver={() => setName(!name)}
               
                _hover={{
                  cursor: "pointer"
                }}
                //animation={fadeDownAnim}
                //transition={"500ms ease-out"}
              >
                {name ?

                    <Text
                     as='b'
                     fontWeight={600}
                     fontFamily={"var(--chakra-fonts-mono)"}
                     fontSize='3xl'> 
                          /. Lukasiewicz ./ 
                    </Text> 


                :

                     <Text
                      as='b'
                      fontWeight={600}
                      fontFamily={"var(--chakra-fonts-mono)"}
                      fontSize='3xl'>
                        / wu.kaˈɕɛ.vit͡ʂ /
                     </Text>

                 }
                 

                    
            </Box>
                

        </Box>
    )
}
