// 'use client';
import { ProjectLayout } from './ProjectLayout'
import { Icon, Button } from '@chakra-ui/react'
import { FaExternalLinkAlt } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"

export type Project = {
    name: string;
    slug: string;
    active:string; 
    git:string;
    icons: Omit<I, 'icons'>[];
  };
export type I = {
    name: string;
    alt: string;
    icon: React.ComponentType<{ size?: string; }>;
    IconComponent: React.ElementType;
  };

export const ProjectPage = ({project}: {project: Project;}) => {
    console.log(`🪷 ProjectPage: ${project.slug}`)
    return(
        <div>
            <h2>{project.name}</h2>
            <Button
                as={"a"}
                target={"_blank"}
                href={`${project.git}`}
                backgroundColor={"transparent"}
            >
                GitHub Link
                {/* <Icon as={FiGithub} w={7} h={7} color='#00C484' /> */}

            </Button>
            <Button
                as={"a"}
                target={"_blank"}
                href={`${project.active}`}
                backgroundColor={"transparent"}
            >
                Active Link
                {/* <Icon as={FaExternalLinkAlt} w={7} h={7} color='#00C484' /> */}

            </Button>
            {project.icons.map((icon) => {
                return(
                    <ProjectLayout 
                    icon={icon}/>
                )
            })}

        </div>

    )
}