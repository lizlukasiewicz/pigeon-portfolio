'use client';

import styles from './tab.module.css'
import { Inter } from '@next/font/google'
import { projects } from '../lib/Icons' 
import { Link } from '@chakra-ui/next-js'
import { Icon, Button, List, ListItem, ListIcon, Tooltip } from '@chakra-ui/react'
import { FaExternalLinkAlt } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"

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
                            <Link
                                href={`projects/${project.slug}`}
                                >
                                <h2 className={inter.className}>{project.name}</h2> 
                            </Link>
                            <Button
                                as={"a"}
                                target={"_blank"}
                                href={`${project.git}`}
                                backgroundColor={"transparent"}
                            >
                                <Icon as={FiGithub} w={7} h={7} color='#00C484' />

                            </Button>
                            <Button
                                as={"a"}
                                target={"_blank"}
                                href={`${project.active}`}
                                backgroundColor={"transparent"}
                            >
                                <Icon as={FaExternalLinkAlt} w={7} h={7} color='#00C484' />

                            </Button>
                                <p>{project.bullet1}</p>
                                <p>{project.bullet2}</p>
                                <div>
                                {project.details.map((icons, i) => {
                                    return(
                                        <Tooltip hasArrow label={icons.name} key={i} aria-label={icons.alt} >
                                        < icons.IconComponent as={icons.icon} />
                                        </Tooltip>
                                        )
                                    })}
                                </div>
                        </div>
                )})}
            </div>

            
        </div>
    )
}