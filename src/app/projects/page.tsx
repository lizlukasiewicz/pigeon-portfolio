'use client';
import * as React from 'react';
import { projects, SkillIcon, fadeDown } from '../lib/Icons' 
import { Link } from '@chakra-ui/next-js'
import { Icon, Button, List, ListItem, Tooltip, Heading, HStack, VStack, Container, Center, Box, Flex } from '@chakra-ui/react'
import { FaExternalLinkAlt } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { VscDebugStart } from "react-icons/vsc"
import {ImCogs} from "react-icons/im"


export default function Projects() {
    const fadeDownAnim: string = `${fadeDown} 500ms 80ms forwards`;
    return(
        <Flex
          flexDir={"column"}
        //   marginY={"5%"}
        //   marginX={8}
        //🔥 REMOVE WHEN DONE FORMATTING
          border={"1px solid rgb(98,202,243)"}>
            <Box
            //🔥 REMOVE WHEN DONE FORMATTING
            border={"1px solid rgb(0,226,203)"}
            //  padding={8}
             minWidth={"lg"}>
              <Heading
                fontFamily={"var(--chakra-fonts-mono)"}
                fontWeight={"bold"}
                fontSize={"4xl"}
                color='#00C484'>
                    <Icon as={ImCogs} w={10} color='#00C484' />
                   Built by a Machine
              </Heading>
              <Heading
                // fontFamily={"var(--chakra-fonts-mono)"}
                fontSize={"xl"}
                color='#00C484'>
                  The things I've Built
              </Heading>
            </Box>
            <VStack
              spacing={0} 
              //🔥 REMOVE WHEN DONE FORMATTING
              border={"1px solid rgb(172,35,244)"}             
              >
                {projects.map((project, j) => {
                    return(
                        <Container padding={5} key={j} maxW='4xl' border={"1px solid rgb(243,186,64)"} centerContent> 
                                                        {/*🔥  REMOVE WHEN DONE FORMATTING */}
                            <Box padding={4} maxW='3xl' border={"1px solid rgb(0,226,203)"}> 
                                <HStack
                                    justifyContent={"space-between"}>

                                    <Link
                                        href={`projects/${project.slug}`}
                                        >
                                        <Heading
                                            fontFamily={"var(--chakra-fonts-mono)"}
                                            fontWeight={"bold"}
                                            fontSize={"3xl"}
                                            color='#00C484'
                                            _hover={{color:"#FFFFFF"}}>{project.name}</Heading> 
                                    </Link>
                                    <HStack spacing={2}>
                                        <Button
                                            as={"a"}
                                            target={"_blank"}
                                            href={`${project.git}`}
                                            backgroundColor={"transparent"}
                                            _hover={{backgroundColor:"#112941"}}
                                        >
                                            {/* <Tooltip hasArrow label={"Github Repo"} aria-label={"Github Repo Link"}> */}
                                                <Icon as={FiGithub} w={7} h={7} color='#B3DDC1' />
                                            {/* </Tooltip> */}

                                        </Button>
                                        <Button
                                            as={"a"}
                                            target={"_blank"}
                                            href={`${project.active}`}
                                            backgroundColor={"transparent"}
                                            _hover={{backgroundColor:"#112941"}}
                                        >
                                        {/* <Tooltip hasArrow label={"Link to Project"} aria-label={"Link to Project"}> */}

                                            <Icon as={FaExternalLinkAlt} w={7} h={7} color='#B3DDC1' />
                                        {/* </Tooltip> */}
                                        </Button>
                                    </HStack>
                                </HStack>
                                <List>
                                    {project.bullets.map((bullet, x) => (
                                        <ListItem key={x} color='#B3DDC1'>
                                            <Icon as={VscDebugStart} w={3} marginRight={3}/> 
                                            {bullet}
                                        </ListItem>
                                    ))}
                                </List>
                                <HStack spacing={3} marginTop={3}>
                                    {/* TODO: EDIT THIS FOR NEW ICONS FORMAT */}
                                    {project.details.map((icons, i) => {
                                        
                                        return(
                                            <Tooltip hasArrow label={icons.label} key={i} aria-label={icons.label} >
                                                <Center animation={fadeDownAnim} opacity={0}>

                                                    <Icon as={icons.icon}
                                                        borderRadius={5}
                                                        color={"#00E2CB"}
                                                        boxSize={8}
                                                        transition={"100ms ease-in-out"}
                                                        _hover={{
                                                            transform: "scale(1.1)",
                                                            color: `${icons.hoverColor}`,
                                                            // filter: colorMode(
                                                            //     "brightness(1.1)" ,
                                                            //     `brightness(1.2) drop-shadow(0 0 5px ${color})`) 
                                                        }}  />
                                                </Center>
                                            </Tooltip>
                                            )
                                        })}
                                </HStack>
                            </Box>
                        </Container>
                )})}
            </VStack>

            
        </Flex>
    )
}