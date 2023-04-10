import type { Item } from './ExpGroup'
import * as React from 'react';
import {VStack, Box, Text } from '@chakra-ui/react'
import { fetchExpByCompany } from '../lib/experience'

//idx, setIdx  idx: number; setIdx:React.Dispatch<React.SetStateAction<number>>;
export const Exp = ({ item}:{ item:Item}) => {
  console.log(` item:${item}`)
  // const [data, setData] = React.useState();
  //   React.useEffect(() => {
  //       const project = async () => {
  //           const response = await fetchExpByCompany(item.company)
  //           setData(response);
  //         }; 
  //         project();
  //       }, []);
  return(
    // <React.Fragment>
      <VStack
        alignItems={"flex-start"}
        display={"flex"}
        //height={"100%"}
        paddingX={[0, 5]}
        paddingY={{ base: 10, sm: 0, lg: 5 }}
        width={{ base: "100%", lg: "80%" }}>
          <Box>
            <Text
              fontWeight={"bold"}
              fontFamily={"var(--chakra-fonts-mono)"} 
              marginBottom={2}>
                Exp Component
                {/* {item.title}

            </Text>
            <Text
                                        as={"a"}
                                        href={item.companyLink}
                                        opacity={0.6}
                                        position={"relative"}
                                        target={"_blank"}
                                        transitionDuration={"0.2s"}
                                        _before={{
                                            backgroundColor: "white",
                                            borderRadius: "2px",
                                            bottom: -1,
                                            content: `""`,
                                            height: "2px",
                                            position: "absolute",
                                            transition: "100ms ease-out",
                                            width: 0 }}
                                        _hover={{
                                            opacity: 1,
                                            _before: { width: "100%" } }}>
                                        {item.companyFull} */}
                                    </Text>

          </Box>
      </VStack>    
    
    // </React.Fragment>
  )
}