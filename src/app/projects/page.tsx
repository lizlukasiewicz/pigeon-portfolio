'use client';

import { projects } from '../lib/Icons' 
import { Link } from '@chakra-ui/next-js'
import { Icon, Button, List, ListItem, Tooltip, Heading, HStack, VStack, Container } from '@chakra-ui/react'
import { FaExternalLinkAlt } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { VscDebugStart } from "react-icons/vsc"


export default function Projects() {
    
    return(
        <VStack spacing={4}>
            <Container
             marginTop={8}>
              <Heading
                fontFamily={"var(--chakra-fonts-mono)"}
                fontWeight={"bold"}
                fontSize={"4xl"}
                color='#00C484'>
                   Built by a Machine
              </Heading>
              <Heading
                fontFamily={"var(--chakra-fonts-mono)"}
                fontWeight={"bold"}
                fontSize={"3xl"}
                color='#00C484'>
                  The things I've Built
              </Heading>
            </Container>
            <VStack spacing={10}>
                {projects.map((project) => {
                    return(
                        <Container> 
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
                                >
                                    <Tooltip hasArrow label={"Github Repo"} aria-label={"Github Repo Link"}>
                                        <Icon as={FiGithub} w={7} h={7} color='#00C484' />
                                    </Tooltip>

                                </Button>
                                <Button
                                    as={"a"}
                                    target={"_blank"}
                                    href={`${project.active}`}
                                    backgroundColor={"transparent"}
                                >
                                <Tooltip hasArrow label={"Link to Project"} aria-label={"Link to Project"}>

                                    <Icon as={FaExternalLinkAlt} w={7} h={7} color='#00C484' />
                                </Tooltip>
                                </Button>
                            </HStack>
                        </HStack>
                            <List>
                                <ListItem>
                                   <Icon as={VscDebugStart} w={3} color='#00C484' marginRight={3}/> 
                                   {project.bullet1}
                                </ListItem>
                                <ListItem>
                                    <Icon as={VscDebugStart} w={3} color='#00C484' marginRight={3}/>
                                    {project.bullet2}
                                </ListItem>
                            </List>
                                <HStack spacing={3}>
                                {project.details.map((icons, i) => {
                                    return(
                                        <Tooltip hasArrow label={icons.name} key={i} aria-label={icons.alt} >
                                        < icons.IconComponent as={icons.icon} />
                                        </Tooltip>
                                        )
                                    })}
                                </HStack>
                        </Container>
                )})}
            </VStack>

            
        </VStack>
    )
}