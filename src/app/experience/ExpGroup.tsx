'use client';
import React from "react";
import { Stack, VStack, Heading, StackDivider, Container } from '@chakra-ui/react'
import { IconType } from "react-icons";


export type Item = {
  // title: string,
  // details: string[],
  // dates: string,
  // skills: {
  //     color?: string,
  //     delay?: string,
  //     icon?: React.ComponentType<IconType>,
  //     label?: string,
  // }[],
  company: string,
  // companyFull: string,
  // companyLink: string,
  // color: string
}
export const ExpGroup = ({items}:{items: Item[]}) => {
  
  return (
    <Container
      maxW={{ base: "85%", xl: "70%" }}>

      <Stack
        direction={'row'}
        spacing={5}
        minHeight={{ base: "80vh", lg: "60vh" }}
        align={'center'}>

        <VStack
          divider={<StackDivider borderColor='#649CA6' />}
          spacing={4}>
          {items.map((item) => (
            <Container>

            <Heading
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={'xl'}
            fontWeight={"bold"}
            color='#00C484'
            _hover={{
              color: "#F3BA40"
            }}>
                {item.company}
            </Heading>
            {/* <Exp
              // idx={idx} 
              // setIdx={setIdx} 
              item={item}
              
              /> */}
              </Container>
          ))}
        </VStack>
              
      </Stack>
    </Container>
  )
}