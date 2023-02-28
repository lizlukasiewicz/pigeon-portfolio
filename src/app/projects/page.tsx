'use client';

import styles from './tab.module.css'
import { projects } from '../lib/routes' 
import Link from 'next/link';



export default function Projects() {
    
    return(
        <div className={styles.projectsContainer}>
            <div className={styles.title}>
            <h2>Built by a Machine</h2>
            </div>
            {/* <div className={styles.projectsList}>
                {projects.map((project) => {
                 <div> 
                    <Link
                        href={project.slug}
                        >
                           <h2>{project.name}</h2> 
                           <p>{project.description}</p>
                    </Link>
                 </div>
                })}
            </div> */}

            
        </div>
    )
}