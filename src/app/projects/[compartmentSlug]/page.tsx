import { fetchCompartmentBySlug, type PageProps } from "@/app/lib/routes";
import { fetchProjectBySlug } from "@/app/lib/Icons";
// import * as React from 'react';


export default async function Page({ params }: PageProps) {
    const project = await fetchCompartmentBySlug(params.compartmentSlug)
    // const [slug, setSlug] = React.useState<string>()
    if (!project) return null;
    // setSlug(project.slug)
    // const picons = await fetchProjectBySlug(slug)
    console.log(`🌺 compartmentSlug: ${params.compartmentSlug} project: ${project.name} `)
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