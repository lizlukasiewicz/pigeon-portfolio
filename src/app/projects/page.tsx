'use client';

// import createSvgIcon from '@mui/material'
import styles from './tab.module.css'
import { NextIcon } from '../lib/projects'



export default function Projects() {
    
    return(
        <div className={styles.projectsContainer}>
            <div className={styles.title}>
            <h2>Built by a Machine</h2>
            </div>
            {/* <NextIcon color="secondary"/> */}

            
        </div>
    )
}