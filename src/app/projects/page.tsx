'use client';

import styles from './tab.module.css'
import { Inter } from '@next/font/google'
import { projects } from '../lib/Icons' 
import { Link } from '@chakra-ui/next-js'
import { Icon, Button, List, ListItem, ListIcon, Tooltip, Heading, HStack } from '@chakra-ui/react'
import { FaExternalLinkAlt } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { VscDebugStart } from "react-icons/vsc"

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
    
    return(
        <div className={styles.projectsContainer}>
            <div className={styles.title}>
            <h2>Built by a Machine ::</h2>
            <p>Things I've Built</p>
            </div>
            <div className={styles.projectsList}>
                {projects.map((project) => {
                    return(
                        <div className={styles.listItem}> 
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
                        </div>
                )})}
            </div>

            
        </div>
    )
}