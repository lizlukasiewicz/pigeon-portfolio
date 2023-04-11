import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { growRight, growRightLittle } from '../lib/helpers/animation';

export const TempContainer=({
  children,
  label,
  loaded,
  pageRefs,
  refNum
}:{
  children: JSX.Element | JSX.Element[],
  label?: string,
  loaded?: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
  pageRefs?: React.MutableRefObject<{}>,
  refNum?: number,
})=> {
//   const findScroll = (el: HTMLDivElement, refNum: number): {} => {
//     let testVar: {} = {};
//     switch (refNum) {
//         case 0:
//             testVar = { ...pageRefs.current, home: el };
//             break;
//         case 1:
//             testVar = { ...pageRefs.current, about: el };
//             break;
//         case 2:
//             testVar = { ...pageRefs.current, experience: el };
//             break;
//         case 3:
//             testVar = { ...pageRefs.current, projects: el };
//             break;
//         case 4:
//             testVar = { ...pageRefs.current, contact: el };
//             break;
//         default:
//             console.log("Nav");
//     };
//     return testVar
// };
  return (
    <Container
            maxW={{ base: "95%", sm: "85%", lg: "85%", xl: "70%" }}
            opacity={loaded ? 1 : 0}
            //ref={el => pageRefs.current = findScroll(el, refNum)}
            transition={"500ms ease-out"}>
            <Stack
                align={'center'}
                direction={{ base: 'column', md: 'row' }}
                paddingY={18}
                paddingTop={"7.5%"}
                spacing={{ base: 8, md: 10 }}>
                <Stack flex={2} spacing={{ base: 5, md: 10 }} position={"relative"}>
                    <Stack position={"relative"} spacing={3}>
                        <HStack>





                          
                        </HStack>
                    </Stack>
                </Stack>
            </Stack>
    </Container>

  )}