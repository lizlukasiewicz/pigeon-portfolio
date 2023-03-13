'use client';
import { fetchCompartmentBySlug, type PageProps } from "@/app/lib/routes";
// import { Icon, Button } from '@chakra-ui/react'
// import { FaExternalLinkAlt } from "react-icons/fa"
// import { FiGithub } from "react-icons/fi"

export default async function Page({ params }: PageProps) {
    const project = await fetchCompartmentBySlug(params.compartmentSlug)
    if (!project) return null;
    console.log(`🌺 compartmentSlug: ${params.compartmentSlug} project: ${project.name}`)
    return(
        <div>
            <h2>
                {project.name}
            </h2>
            <p>{project.active}</p>
            <p>{project.git}</p>
            
                <div className={project.slug}>
                    <p>{project.description}</p>
                </div>

        </div>
    )
}
{/* <Button
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
            </Button> */}