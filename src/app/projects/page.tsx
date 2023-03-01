'use client';

import styles from './tab.module.css'
import { projects } from '../lib/routes' 
import { Link } from '@chakra-ui/next-js'



export default function Projects() {
    
    return(
        <div className={styles.projectsContainer}>
            <div className={styles.title}>
            <h2>Built by a Machine</h2>
            </div>
            <div className={styles.projectsList}>
                {projects.map((project) => {
                    return(
                        <div> 
                            <Link
                                href={`projects/${project.slug}`}
                                >
                                <h2>{project.name}</h2> 
                            </Link>
                                <p>{project.description}</p>
                        </div>
                )})}
            </div>

            
        </div>
    )
}